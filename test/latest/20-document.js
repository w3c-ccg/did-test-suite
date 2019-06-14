/* eslint-disable max-len */
const {expect} = require('chai');
const config = require('../../config.json');
const util = require('./util');
const testTitles = require('./documentTitle.json');

describe('Document', function() {
  let generatorOptions = null;
  beforeEach(function() {
    generatorOptions = {
      generator: config.generator,
      command: 'validate',
      args: {
        document: true,
        contexts: config.baseDIDContext
      }
    };
  });
  describe(testTitles.positive, function() {
    it(testTitles.firstContext, async function() {
      await util.generate('jsonld/valid.jsonld', generatorOptions);
    });
    it(testTitles.multipleURIS, async function() {
      await util.generate('jsonld/multiple-contexts.jsonld', generatorOptions);
    });
    it(testTitles.mustHaveContext, async function() {
      await util.generate('jsonld/valid.jsonld', generatorOptions);
    });
    it(testTitles.oneContext, async function() {
      await util.generate('jsonld/valid.jsonld', generatorOptions);
    });
    it(testTitles.keyContext, async function() {
      await util.generate('jsonld/valid.jsonld', generatorOptions);
    });
    it(testTitles.firstURIMustBe, async function() {
      await util.generate('jsonld/valid.jsonld', generatorOptions);
    });
    it(testTitles.methodContextNoOverride, async function() {
      generatorOptions.args.contexts = '"../../../did-test-suite/test/contexts/base.json ' +
        '../../../did-test-suite/test/contexts/no-overwrite.json"';
      await util.generate('jsonld/overwrite-parent-context.jsonld', generatorOptions);
    });
    it(testTitles.oneSubject, async function() {
      await util.generate('jsonld/valid.jsonld', generatorOptions);
    });
    it(testTitles.mustBeId, async function() {
      await util.generate('jsonld/valid.jsonld', generatorOptions);
    });
    it(testTitles.mustBeDID, async function() {
      await util.generate('jsonld/valid.jsonld', generatorOptions);
    });
    it(testTitles.mustContainId, async function() {
      throw new Error('Not Implemented');
    });
    it(testTitles.mustBeJSON, async function() {
      await util.generate('jsonld/valid.jsonld', generatorOptions);
    });
  });
  describe(testTitles.negative, function() {
    it(testTitles.firstContext, async function() {
      let error = null;
      try {
        await util.generate('jsonld/bad-order.jsonld', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });
    it(testTitles.multipleURIS, async function() {
      let error = null;
      try {
        await util.generate('jsonld/bad-order.jsonld', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });
    it(testTitles.mustHaveContext, async function() {
      let error = null;
      try {
        await util.generate('jsonld/no-context.jsonld', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });
    it(testTitles.oneContext, async function() {
      let error = null;
      try {
        await util.generate('jsonld/top-level-only.jsonld', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });
    it(testTitles.keyContext, async function() {
      let error = null;
      try {
        await util.generate('jsonld/no-context.jsonld', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });
    it(testTitles.firstURIMustBe, async function() {
      let error = null;
      try {
        await util.generate('jsonld/context-not-a-url.jsonld', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });
    it(testTitles.methodContextNoOverride, async function() {
      generatorOptions.args.contexts = '"../../../did-test-suite/test/contexts/base.json ' +
        '../../../did-test-suite/test/contexts/overwrite.json"';
      let error = null;
      try {
        await util.generate('jsonld/overwrite-parent-context.jsonld', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });
    it(testTitles.oneSubject, async function() {
      let error = null;
      try {
        await util.generate('jsonld/multiple-dids.jsonld', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });
    it(testTitles.mustBeId, async function() {
      let error = null;
      try {
        await util.generate('jsonld/no-id.jsonld', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });
    it(testTitles.mustBeDID, async function() {
      let error = null;
      try {
        await util.generate('jsonld/invalid-id.jsonld', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });
    it(testTitles.mustContainId, async function() {
      throw new Error('Not Implemented');
    });
    it(testTitles.mustBeJSON, async function() {
      let error = null;
      try {
        await util.generate('jsonld/invalid.txt', generatorOptions);
      } catch(e) {
        error = e;
      }
      expect(error, 'Expected an Error to be Thrown').to.not.be.null;
    });
  });

  describe(testTitles.optional, function() {
    describe(testTitles.mayHaveAuth, function() {
      it(testTitles.shouldBeAuthMethods, async function() {
        await util.generate('jsonld/authentication.jsonld', generatorOptions);
      });
      it(testTitles.verificationEmbedRef, async function() {
        await util.generate('jsonld/authentication.jsonld', generatorOptions);
      });
    });
    describe(testTitles.mayHaveService, function() {
      it(testTitles.serviceIsArray, async function() {
        await util.generate('jsonld/service.jsonld', generatorOptions);
      });
      it(testTitles.mustHaveIdTypeEndpoint, async function() {
        await util.generate('jsonld/service.jsonld', generatorOptions);
      });
      it(testTitles.serviceMustBeJSON, async function() {
        await util.generate('jsonld/service.jsonld', generatorOptions);
      });
    });
    describe(testTitles.mayHavePublicKey, function() {
      describe(testTitles.positive, function() {
        it(testTitles.noKeyThenAssumeRevoked, async function() {
          await util.generate('jsonld/valid.jsonld', generatorOptions);
        });
        it(testTitles.mustHaveRevokedProp, async function() {
          await util.generate('jsonld/publicKeys-revoked.jsonld', generatorOptions);
        });
        it(testTitles.mustBeArrayOfKeys, async function() {
          await util.generate('jsonld/publicKey.jsonld', generatorOptions);
        });
        it(testTitles.keyMustHaveTypeAndUniqueId, async function() {
          await util.generate('jsonld/publicKey.jsonld', generatorOptions);
        });
        it(testTitles.keyMustHaveController, async function() {
          await util.generate('jsonld/publicKey.jsonld', generatorOptions);
        });
        it(testTitles.keyMustHaveKeyMaterialType, async function() {
          await util.generate('jsonld/publicKey.jsonld', generatorOptions);
        });
      });
      describe(testTitles.negative, function() {
        it(testTitles.noKeyThenAssumeRevoked, async function() {
          throw new Error('Not Implemented');
        });
        it(testTitles.mustBeArrayOfKeys, async function() {
          let error = null;
          try {
            await util.generate('jsonld/publicKey-string.jsonld', generatorOptions);
          } catch(e) {
            error = e;
          }
          expect(error, 'Expected an Error to be Thrown').to.not.be.null;
        });
        it(testTitles.keyMustHaveTypeAndUniqueId, async function() {
          let error = null;
          try {
            await util.generate('jsonld/duplicate-public-key-ids.jsonld', generatorOptions);
          } catch(e) {
            error = e;
          }
          expect(error, 'Expected an Error to be Thrown').to.not.be.null;
        });
        it(testTitles.keyMustHaveController, async function() {
          let error = null;
          try {
            await util.generate('jsonld/publicKeys-no-controller.jsonld', generatorOptions);
          } catch(e) {
            error = e;
          }
          expect(error, 'Expected an Error to be Thrown').to.not.be.null;
        });
        it(testTitles.keyMustHaveKeyMaterialType, async function() {
          await util.generate('jsonld/publicKey.jsonld', generatorOptions);
        });
      });
    });
  });

});
