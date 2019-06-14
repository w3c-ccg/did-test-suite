/* eslint-disable max-len */
const {expect} = require('chai');
const config = require('../../config.json');
const util = require('./util');
const testTitles = require('./testTitles.json');

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
  describe(testTitles.positive, function() {
    it(testTitles.schemeMUSTlowercase, async function() {
      await util.generate('did/valid.did', generatorOptions);
    });

    it(testTitles.methodMUSTlowercase, async function() {
      await util.generate('did/valid.did', generatorOptions);
    });

    it(testTitles.mustDefineMethodNameAndId, async function() {
      await util.generate('did/valid.did', generatorOptions);
    });

    it(testTitles.methodSpecificParam, async function() {
      await util.generate('did/method-specific-param.did', generatorOptions);
    });
    it(testTitles.MUSTBeURIPath, async function() {
      // begins with "/" or is empty
      // basically this test means "/" or " " is a valid path
      await util.generate('did/path.did', generatorOptions);
    });

    it(testTitles.MUSTbeURIQuery, async function() {
      // https://nodejs.org/api/querystring.html
      // https://stackoverflow.com/questions/23959352/validate-url-query-string-with-regex
      await util.generate('did/query.did', generatorOptions);
    });

    it(testTitles.MUSTbeURIFragment, async function() {
      await util.generate('did/fragment.did', generatorOptions);
    });
  });
  describe(testTitles.negative, function() {
    it(testTitles.schemeMUSTlowercase, async function() {
      let error = null;
      try {
        await util.generate('did/uppercase.did', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });

    it(testTitles.methodMUSTlowercase, async function() {
      let error = null;
      try {
        await util.generate('did/uppercase-method-name.did', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });

    it(testTitles.mustDefineMethodNameAndId, async function() {
      let error = null;
      try {
        await util.generate('did/no-method-name.did', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });

    it(testTitles.methodSpecificParam, async function() {
      let error = null;
      try {
        await util.generate('did/invalid-method-parameter.did', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });
  });
  describe(testTitles.optional, function() {
    it(testTitles.MAYCombineParams, async function() {
      await util.generate('did/method-specific-generic-params.did', generatorOptions);
    });
  });

});
