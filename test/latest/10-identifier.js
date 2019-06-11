/* eslint-disable max-len */
const {expect} = require('chai');
const config = require('../../config.json');
const util = require('./util');

describe('Identifier', function() {
  let generatorOptions = null;
  beforeEach(function() {
    generatorOptions = {
      generator: config.generator,
      command: 'validate',
      args: {
        did: true,
      },
    };
  });

  it('The did: scheme name MUST be lowercase.', async function() {
    let error = null;
    try {
      await util.generate('uppercase-did.txt', generatorOptions);
    } catch(e) {
      error = e;
    }
    expect(error, 'Expected an Error to be Thrown').to.not.be.null;
  });
  it('(did) The method name MUST be lowercase.', async function() {
    let error = null;
    try {
      await util.generate('uppercase-method-name.txt', generatorOptions);
    } catch(e) {
      error = e;
    }
    expect(error, 'Expected an Error to be Thrown').to.not.be.null;
  });

  it('A DID method specification MUST further restrict the generic DID syntax by defining its own method-name and its own method-specific-id syntax.', async function() {
    await util.generate('valid-did.txt', generatorOptions);
    expect('did:uuid:0d2bae3e-4915-489c-bfa1-1ba14e8b43cd').to.be.a.DID;
  });
  it('A method-specific parameter name MUST be prefixed by the method name as defined by the method-name rule.', async function() {
    throw new Error('Not Implemented');

  });
  it('A generic DID path is identical to a URI path and MUST conform to the the path-abempty ABNF rule in [RFC3986].', async function() {
    // begins with "/" or is empty
    // basically this test means "/" or " " is a valid path
    throw new Error('Not Implemented');

  });
  it('A generic DID query is identical to a URI query and MUST conform to the the query ABNF rule in [RFC3986].', async function() {
    // https://nodejs.org/api/querystring.html
    // https://stackoverflow.com/questions/23959352/validate-url-query-string-with-regex
    throw new Error('Not Implemented');

  });
  it('A generic DID fragment is identical to a URI fragment and MUST conform to the the fragment ABNF rule in [RFC3986]', async function() {
    throw new Error('Not Implemented');

  });
});
