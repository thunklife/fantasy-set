Fantasy Set
===========

Making ES6 Sets compatible with [Fantasy Lang](https://github.com/fantasyland/fantasy-land')...I hope.

This is really just an expirement because I've always wanted to try to write something compatible with Fantasy Land.

Abandoned
=========
Ok so it turns out that a Set is not a semigroup because combining two sets can result in items from the second being lost as
sets do not allow for repeating values. As such a Set cannot satisfy the associativity law of semigroups. Since it is not a semigroup,
it can't be a monoid.

It also so happens that a Set is not a functor. Again, because it is possible for the size of the resulting Set to be smaller than the original.
Since it is not a functor, it is not an applicative and therefore not a monad.

Boohoo.
