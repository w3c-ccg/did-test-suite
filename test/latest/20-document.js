/* eslint-disable max-len */
const {expect} = require('chai');
const config = require('../../config.json');
const util = require('./util');

describe('Document', function() {
  let generatorOptions = null;
  beforeEach(function() {
    generatorOptions = {
      generator: config.generator,
      command: 'validate',
      args: {
        document: true,
        contexts: '../../../did-test-suite/test/contexts/base.json'
      },
    };
  });

  it('The value of the @context property MUST be one or more URIs, where the value of the first URI is https://www.w3.org/2019/did/v1.', async function() {
    await util.generate('valid.jsonld', generatorOptions);
  });

  it('If more than one URI is provided, the URIs MUST be interpreted as an ordered set.', async function() {
    await util.generate('multiple-contexts.jsonld', generatorOptions);
  });

  it('DID Documents MUST include the @context property.', async function() {
    await util.generate('valid.jsonld', generatorOptions);
  });

  it('A DID Document MUST have exactly one top-level context statement.', async function() {
    let error = null;
    try {
      await util.generate('top-level-only.jsonld', generatorOptions);
    } catch(e) {
      console.error(e);
      error = e;
    }
    expect(error, 'Expected an Error to be Thrown').to.not.be.null;
  });
  it('The key for this property (context) MUST be @context.', async function() {
    await util.generate('valid.jsonld', generatorOptions);
  });
  it('The value of this key MUST be at least the URL for the generic DID context: https://www.w3.org/2019/did/v1.', async function() {
    await util.generate('valid.jsonld', generatorOptions);
  });
  it('Method-specific contexts MUST NOT override the terms defined in the generic DID context.', async function() {
    generatorOptions.args.contexts = '"../../../did-test-suite/test/contexts/base.json ' +
      '../../../did-test-suite/test/contexts/overwrite.json"';
    let error = null;
    try {
      await util.generate('overwrite-parent-context.jsonld', generatorOptions);
    } catch(e) {
      error = e;
    }
    expect(error, 'Expected an Error to be Thrown').to.not.be.null;
  });
  it('A DID Document MUST have exactly one DID subject.', async function() {
    let error = null;
    try {
      await util.generate('multiple-dids.jsonld', generatorOptions);
    } catch(e) {
      error = e;
    }
    expect(error, 'Expected an Error to be Thrown').to.not.be.null;
  });
  it('The key for this property MUST be id.', async function() {
    await util.generate('valid.jsonld', generatorOptions);
  });
  it('The value of this key MUST be a valid DID.', async function() {
    await util.generate('valid.jsonld', generatorOptions);
  });
  it('However, the fully resolved DID Document MUST contain a valid id property.', async function() {
    throw new Error('Not Implemented');

  });
  it('A DID Document MUST be a single JSON object conforming to [RFC8259].', async function() {
    await util.generate('valid.jsonld', generatorOptions);
  });

  describe('optional ', function() {
    describe(' A DID Document MAY include an authentication property ', function() {
      it('The value of the authentication property should be an array of verification methods', async function() {
        await util.generate('authentication.jsonld', generatorOptions);
      });
      it('Each verification method MAY be embedded or referenced', async function() {
        await util.generate('authentication.jsonld', generatorOptions);
      });
    });
    describe(' A DID Document MAY include a service property ', function() {
      it('The value of the service property should be an array of service endpoint', async function() {
        await util.generate('service.jsonld', generatorOptions);
      });
      it('Each service endpoint must include id, type, and serviceEndpoint properties, and MAY include additional properties', async function() {
        await util.generate('service.jsonld', generatorOptions);
      });
      it('The value of the serviceEndpoint property MUST be a JSON-LD object or a valid URI', async function() {
        await util.generate('service.jsonld', generatorOptions);
      });
    });
    describe(' A DID Document MAY include a publicKey property ', function() {
      it(' If a public key does not exist in the DID Document, it MUST be assumed the key has been revoked or is invalid.', async function() {
        await util.generate('valid.jsonld', generatorOptions);
      });
      it(' A DID Document that contains a revoked key MUST also contain or refer to the revocation information for the key (e.g., a revocation list).', async function() {
        throw new Error('Not Implemented');
      });
      it(' The value of the publicKey property MUST be an array of public keys.', async function() {
        await util.generate('publicKey.jsonld', generatorOptions);
      });
      it(' Each public key MUST include id and type properties, and exactly one value property. The array of public keys MUST NOT contain duplicate entries with the same id.', async function() {
        await util.generate('publicKey.jsonld', generatorOptions);
      });
      it(' Each public key MUST include a controller property, which identifies the controller of the corresponding private key.', async function() {
        await util.generate('publicKey.jsonld', generatorOptions);
      });
      it(' The value property of a public key MUST be exactly one of publicKeyPem, publicKeyJwk, publicKeyHex, publicKeyBase64, publicKeyBase58, publicKeyMultibase, depending on the format and encoding of the public key.', async function() {
        await util.generate('publicKey.jsonld', generatorOptions);
      });
    });
  });

});
