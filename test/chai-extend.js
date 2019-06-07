const {Assertion} = require('chai');

Assertion.addProperty('lowercase', function() {
  const obj = this._obj;
  new Assertion(obj).to.be.a('string');
  this.assert(
    obj === obj.toLowerCase(),
    'expected #{this} to be all lowercase',
    'expected #{this} to not be all lowercase',
    obj.toLowerCase(),
    obj,
    true
  );
});
