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
  describe(' positive ', function() {
    it('The did: scheme name MUST be lowercase.', async function() {
      await util.generate('valid.did', generatorOptions);
    });

    it('(did) The method name MUST be lowercase.', async function() {
      await util.generate('valid.did', generatorOptions);
    });

    it('A DID method specification MUST further restrict the generic DID syntax by defining its own method-name and its own method-specific-id syntax.', async function() {
      await util.generate('valid.did', generatorOptions);
    });

    it('A method-specific parameter name MUST be prefixed by the method name as defined by the method-name rule.', async function() {
      await util.generate('method-specific-param.did', generatorOptions);
    });
    it('A generic DID path is identical to a URI path and MUST conform to the the path-abempty ABNF rule in [RFC3986].', async function() {
      // begins with "/" or is empty
      // basically this test means "/" or " " is a valid path
      await util.generate('path.did', generatorOptions);
    });

    it('A generic DID query is identical to a URI query and MUST conform to the the query ABNF rule in [RFC3986].', async function() {
      // https://nodejs.org/api/querystring.html
      // https://stackoverflow.com/questions/23959352/validate-url-query-string-with-regex
      await util.generate('query.did', generatorOptions);
    });

    it('A generic DID fragment is identical to a URI fragment and MUST conform to the the fragment ABNF rule in [RFC3986]', async function() {
      await util.generate('fragment.did', generatorOptions);
    });
  });
  describe(' negative ', function() {
    it('The did: scheme name MUST be lowercase.', async function() {
      let error = null;
      try {
        await util.generate('uppercase.did', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });

    it('(did) The method name MUST be lowercase.', async function() {
      let error = null;
      try {
        await util.generate('uppercase-method-name.did', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });

    it('A DID method specification MUST further restrict the generic DID syntax by defining its own method-name and its own method-specific-id syntax.', async function() {
      let error = null;
      try {
        await util.generate('no-method-name.did', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });

    it('A method-specific parameter name MUST be prefixed by the method name as defined by the method-name rule.', async function() {
      let error = null;
      try {
        await util.generate('invalid-method-parameter.did', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });
    it('A generic DID path is identical to a URI path and MUST conform to the the path-abempty ABNF rule in [RFC3986].', async function() {
      // begins with "/" or is empty
      // basically this test means "/" or " " is a valid path
      throw new Error('path paramter not being checked.');
      await util.generate('invalid-path.did', generatorOptions);
    });

    it('A generic DID query is identical to a URI query and MUST conform to the the query ABNF rule in [RFC3986].', async function() {
      // https://nodejs.org/api/querystring.html
      // https://stackoverflow.com/questions/23959352/validate-url-query-string-with-regex
      await util.generate('invalid-query.did', generatorOptions);
    });

  });
  describe('optional ', function() {
    it('Method-specific parameter names MAY be combined with generic parameter names in any order.', async function() {
      await util.generate('method-specific-generic-params.did', generatorOptions);
    });
  });

});
