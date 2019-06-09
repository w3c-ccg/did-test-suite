const {Assertion} = require('chai');
const AssertDID = require('./assertions');

Assertion.addProperty('lowercase', function() {
  const obj = this._obj;
  new Assertion(obj).to.be.a('string');
  this.assert(
    obj === obj.toLowerCase(),
    'expected #{this} to be all lowercase',
    'expected #{this} to not be all lowercase',
    obj.toLowerCase(),
    obj,
    true);
});

Assertion.addProperty('DIDFormatted', function() {
  const obj = this._obj;
  new Assertion(obj).to.be.a('string');
  this.assert(
    AssertDID.DIDRegex.test(obj),
    'expected #{this} to match ' + AssertDID.DIDRegex,
    'expected #{this} to not match ' + AssertDID.DIDRegex,
    'did:method-name:method-specific-id',
    obj,
    true);
});

Assertion.addProperty('DID', function() {
  const obj = this._obj;
  new Assertion(obj).to.be.DIDFormatted;
  const {groups} = AssertDID.parseDID(obj);
  new Assertion(groups.did).to.not.be.undefined;
  new Assertion(groups.did).to.not.be.null;
  new Assertion(groups.did).to.be.lowercase;
  new Assertion(groups.methodName).to.not.be.undefined;
  new Assertion(groups.methodName).to.not.be.null;
  new Assertion(groups.methodName).to.be.lowercase;
});
