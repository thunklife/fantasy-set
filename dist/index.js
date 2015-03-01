"use strict";

Set.prototype.equals = function (set) {
  if (this.size !== set.size) return false;
  return go(true, this.values(), set.values());

  function go(_x, _x2, _x3) {
    var _again = true;

    _function: while (_again) {
      _again = false;
      var a = _x,
          sA = _x2,
          sB = _x3;
      nA = nB = undefined;

      var nA = sA.next(),
          nB = sB.next();
      if (!a || nA.done) {
        return a;
      }_x = a && nA.value === nB.value;
      _x2 = sA;
      _x3 = sB;
      _again = true;
      continue _function;
    }
  }
};

module.exports = Set;