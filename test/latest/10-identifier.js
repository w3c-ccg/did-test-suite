/* eslint-disable max-len */
const {expect} = require('chai');
const config = require('../../config.json');
const util = require('./util');

describe('Identifier', function() {
  let generatorOptions = null;
  beforeEach(function() {
    generatorOptions = {
      generator: config.generator,
      command: 'c14n',
      args: {},
      date: new Date().toGMTString(),
    };
  });

  it('A DID method specification MUST further restrict the generic DID syntax by defining its own method-name and its own method-specific-id syntax.', function() {
    expect('did:uuid:0d2bae3e-4915-489c-bfa1-1ba14e8b43cd').to.be.a.DID;
  });
  it('A method-specific parameter name MUST be prefixed by the method name as defined by the method-name rule.', function() {
    throw new Error('Not Implemented');

  });
  it('A generic DID path is identical to a URI path and MUST conform to the the path-abempty ABNF rule in [RFC3986].', function() {
    throw new Error('Not Implemented');

  });
  it('A generic DID query is identical to a URI query and MUST conform to the the query ABNF rule in [RFC3986].', function() {
    throw new Error('Not Implemented');

  });
  it('A generic DID fragment is identical to a URI fragment and MUST conform to the the fragment ABNF rule in [RFC3986]', function() {
    throw new Error('Not Implemented');

  });
  it('The did: scheme name MUST be lowercase.', function() {
    throw new Error('Not Implemented');

  });
  it('(did) The method name MUST be lowercase.', function() {
    throw new Error('Not Implemented');

  });
});
