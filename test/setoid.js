var assert = require('assert');
require('../dist/index.js');

describe('Setoid', function(){
  it('obeys reflexivity', function(){
    var s = new Set([1,2,3]);
    assert.ok(s.equals(s));
  });

  it('obeys symmetry', function(){
    var s = new Set([1,2,3]),
      t = new Set([1,2,3]);
    assert.equal(s.equals(t), t.equals(s));
  });

  it('obeys transitivity', function(){
    var s = new Set([1,2,3]),
      t = new Set([1,2,3]),
      u = new Set([1,2,3]);
    assert.equal(s.equals(t), t.equals(u), u.equals(t));
  });
});
