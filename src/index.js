Set.prototype.equals = function(set){
  if(this.size !== set.size) return false;
  return go(true, this.values(), set.values());

  function go(a, sA, sB){
    var nA = sA.next(),
      nB = sB.next();
    if(!a || nA.done) return a;
    return go((a && (nA.value === nB.value)), sA, sB);
  }
};

module.exports = Set;
