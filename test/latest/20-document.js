/* eslint-disable max-len */

describe('Document', function() {
  it('The value of the @context property MUST be one or more URIs, where the value of the first URI ishttps://www.w3.org/2019/did/v1.', async function() {
    throw new Error('Not Implemented');

  });
  it('If more than one URI is provided, the URIs MUST be interpreted as an ordered set.', async function() {
    throw new Error('Not Implemented');

  });
  it('DID Documents MUST include the @context property.', async function() {
    throw new Error('Not Implemented');

  });
  it('A DID Document MUST have exactly one top-level context statement.', async function() {
    throw new Error('Not Implemented');

  });
  it('The key for this property (context) MUST be @context.', async function() {
    throw new Error('Not Implemented');

  });
  it('The value of this key MUST be at least the URL for the generic DID context: https://www.w3.org/2019/did/v1.', async function() {
    throw new Error('Not Implemented');

  });
  it('Method-specific contexts MUST NOT override the terms defined in the generic DID context.', async function() {
    throw new Error('Not Implemented');

  });
  it('A DID Document MUST have exactly one DID subject.', async function() {
    throw new Error('Not Implemented');

  });
  it('The key for this property MUST be id.', async function() {
    throw new Error('Not Implemented');

  });
  it('The value of this key MUST be a valid DID.', async function() {
    throw new Error('Not Implemented');

  });
  it('However, the fully resolved DID Document MUST contain a valid id property.', async function() {
    throw new Error('Not Implemented');

  });
  it('A DID Document that contains a revoked key MUST also contain or refer to the revocation information for the key (e.g., a revocation list).', async function() {
    throw new Error('Not Implemented');

  });
  it('The value of the publicKey property MUST be an array of public keys.', async function() {
    throw new Error('Not Implemented');

  });
  it('Each public key MUST include id and type properties, and exactly one value property. The array of public keys MUST NOT contain duplicate entries with the same id.', async function() {
    throw new Error('Not Implemented');

  });
  it('Each public key MUST include a controller property, which identifies the controller of the corresponding private key.', async function() {
    throw new Error('Not Implemented');

  });
  it('The value property of a public key MUST be exactly one of publicKeyPem, publicKeyJwk, publicKeyHex, publicKeyBase64, publicKeyBase58, publicKeyMultibase, depending on the format and encoding of the public key.', async function() {
    throw new Error('Not Implemented');

  });
  it('Each service endpoint MUST include id, type, and serviceEndpoint properties, and MAY include additional properties.', async function() {
    throw new Error('Not Implemented');

  });
  it('The value of the serviceEndpoint property MUST be a JSON-LD object or a valid URI conforming to [RFC3986] and normalized according to the rules in section 6 of [RFC3986] and to any normalization rules in its applicable URI scheme specification.', async function() {
    throw new Error('Not Implemented');

  });
  it('A DID Document MUST be a single JSON object conforming to [RFC8259].', async function() {
    throw new Error('Not Implemented');

  });
});
