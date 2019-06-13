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
  describe(' positive ', function() {
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
  describe(' negative ', function() {
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
      await util.generate('jsonld/valid.jsonld', generatorOptions);
    });
    it(testTitles.mustBeDID, async function() {
      await util.generate('jsonld/valid.jsonld', generatorOptions);
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

  describe('optional ', function() {
    describe(' A DID Document MAY include an authentication property ', function() {
      it('The value of the authentication property should be an array of verification methods', async function() {
        await util.generate('jsonld/authentication.jsonld', generatorOptions);
      });
      it('Each verification method MAY be embedded or referenced', async function() {
        await util.generate('jsonld/authentication.jsonld', generatorOptions);
      });
    });
    describe(' A DID Document MAY include a service property ', function() {
      it('The value of the service property should be an array of service endpoint', async function() {
        await util.generate('jsonld/service.jsonld', generatorOptions);
      });
      it('Each service endpoint must include id, type, and serviceEndpoint properties, and MAY include additional properties', async function() {
        await util.generate('jsonld/service.jsonld', generatorOptions);
      });
      it('The value of the serviceEndpoint property MUST be a JSON-LD object or a valid URI', async function() {
        await util.generate('jsonld/service.jsonld', generatorOptions);
      });
    });
    describe(' A DID Document MAY include a publicKey property ', function() {
      describe(' positive ', function() {
        it(' If a public key does not exist in the DID Document, it MUST be assumed the key has been revoked or is invalid.', async function() {
          await util.generate('jsonld/valid.jsonld', generatorOptions);
        });
        it(' A DID Document that contains a revoked key MUST also contain or refer to the revocation information for the key (e.g., a revocation list).', async function() {
          await util.generate('jsonld/publicKeys-revoked.jsonld', generatorOptions);
        });
        it(' The value of the publicKey property MUST be an array of public keys.', async function() {
          await util.generate('jsonld/publicKey.jsonld', generatorOptions);
        });
        it(' Each public key MUST include id and type properties, and exactly one value property. The array of public keys MUST NOT contain duplicate entries with the same id.', async function() {
          await util.generate('jsonld/publicKey.jsonld', generatorOptions);
        });
        it(' Each public key MUST include a controller property, which identifies the controller of the corresponding private key.', async function() {
          await util.generate('jsonld/publicKey.jsonld', generatorOptions);
        });
        it(' The value property of a public key MUST be exactly one of publicKeyPem, publicKeyJwk, publicKeyHex, publicKeyBase64, publicKeyBase58, publicKeyMultibase, depending on the format and encoding of the public key.', async function() {
          await util.generate('jsonld/publicKey.jsonld', generatorOptions);
        });
      });
      describe(' negative ', function() {
        it(' If a public key does not exist in the DID Document, it MUST be assumed the key has been revoked or is invalid.', async function() {
          throw new Error('Not Implemented');
        });
        it(' The value of the publicKey property MUST be an array of public keys.', async function() {
          let error = null;
          try {
            await util.generate('jsonld/publicKey-string.jsonld', generatorOptions);
          } catch(e) {
            error = e;
          }
          expect(error, 'Expected an Error to be Thrown').to.not.be.null;
        });
        it(' Each public key MUST include id and type properties, and exactly one value property. The array of public keys MUST NOT contain duplicate entries with the same id.', async function() {
          let error = null;
          try {
            await util.generate('jsonld/duplicate-public-key-ids.jsonld', generatorOptions);
          } catch(e) {
            error = e;
          }
          expect(error, 'Expected an Error to be Thrown').to.not.be.null;
        });
        it(' Each public key MUST include a controller property, which identifies the controller of the corresponding private key.', async function() {
          let error = null;
          try {
            await util.generate('jsonld/publicKeys-no-controller.jsonld', generatorOptions);
          } catch(e) {
            error = e;
          }
          expect(error, 'Expected an Error to be Thrown').to.not.be.null;
        });
        it(' The value property of a public key MUST be exactly one of publicKeyPem, publicKeyJwk, publicKeyHex, publicKeyBase64, publicKeyBase58, publicKeyMultibase, depending on the format and encoding of the public key.', async function() {
          await util.generate('jsonld/publicKey.jsonld', generatorOptions);
        });
      });
    });
  });

});
