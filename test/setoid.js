var should = require('chai').should();
require('../dist/index.js');

describe('Setoid', function(){
  console.log(should);
  it('obeys reflexivity', function(){
    var s = new Set([1,2,3]);
    s.equals(s).should.equal(true);
  });

  it('obeys symmetry', function(){
    var s = new Set([1,2,3]),
      t = new Set([1,2,3]);
    s.equals(t).should.equal(t.equals(s));
  });

  it('obeys transitivity', function(){
    var s = new Set([1,2,3]),
      t = new Set([1,2,3]),
      u = new Set([1,2,3]);
    s.equals(t).should.equal(true);
    t.equals(u).should.equal(true);
    u.equals(t).should.equal(true);
  });

  it('returns false if the lists are of different sizes', function(){
    var s = new Set([1,2,3]),
      t = new Set([1,2]);
    s.equals(t).should.equal(false);
  });

  it('returns false if any values at same indexes differ', function(){
    var s = new Set([1,2,3]),
      t = new Set([5,4,6]);
    s.equals(t).should.equal(false);
  });

  it('returns false if same values are at different indexes', function(){
    var s = new Set([1,2,3]),
      t = new Set([3,1,2]);
    s.equals(t).should.equal(false);
  });
});
