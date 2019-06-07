const {expect} = require('chai');


describe.skip('DiD Test Suite', function() {

  it('A DID method specification MUST further restrict the generic DID syntax by defining its own method-name and its own method-specific-id syntax.', function() {

  });
  it('A method-specific parameter name MUST be prefixed by the method name as defined by the method-name rule.', function() {

  });
  it('A generic DID path is identical to a URI path and MUST conform to the the path-abempty ABNF rule in [RFC3986].', function() {

  });
  it('A generic DID query is identical to a URI query and MUST conform to the the query ABNF rule in [RFC3986].', function() {

  });
  it('A generic DID fragment is identical to a URI fragment and MUST conform to the the fragment ABNF rule in [RFC3986]', function() {

  });
  it('The did: scheme name MUST be lowercase.', function() {

  });
  it('(did) The method name MUST be lowercase.', function() {

  });
  it('The value of the @context property MUST be one or more URIs, where the value of the first URI ishttps://www.w3.org/2019/did/v1.', function() {

  });
  it('If more than one URI is provided, the URIs MUST be interpreted as an ordered set.', function() {

  });
  it('DID Documents MUST include the @context property.', function() {

  });
  it('A DID Document MUST have exactly one top-level context statement.', function() {

  });
  it('The key for this property (context) MUST be @context.', function() {

  });
  it('The value of this key MUST be at least the URL for the generic DID context: https://www.w3.org/2019/did/v1.', function() {

  });
  it('Method-specific contexts MUST NOToverride the terms defined in the generic DID context.', function() {

  });
  it('A DID Document MUST have exactly one DID subject.', function() {

  });
  it('The key for this property MUST be id.', function() {

  });
  it('The value of this key MUST be a valid DID.', function() {

  });
  it('However, the fully resolved DID Document MUST contain a valid id property.', function() {

  });
  it('A DID Document that contains a revoked key MUST also contain or refer to the revocation information for the key (e.g., a revocation list).', function() {

  });
  it('The value of the publicKey property MUST be an array of public keys.', function() {

  });
  it('Each public key MUST include id and type properties, and exactly one value property. The array of public keys MUST NOT contain duplicate entries with the same id.', function() {

  });
  it('Each public key MUST include a controller property, which identifies the controller of the corresponding private key.', function() {

  });
  it('The value property of a public key MUST be exactly one of publicKeyPem, publicKeyJwk, publicKeyHex, publicKeyBase64, publicKeyBase58, publicKeyMultibase, depending on the format and encoding of the public key.', function() {

  });
  it('Each service endpoint MUSTmust include id, type, and serviceEndpoint properties, and MAY include additional properties.', function() {

  });
  it('The value of the serviceEndpoint property MUST be a JSON-LD object or a valid URI conforming to [RFC3986] and normalized according to the rules in section 6 of [RFC3986] and to any normalization rules in its applicable URI scheme specification.', function() {

  });
  it('A DID Document MUST be a single JSON object conforming to [RFC8259].', function() {

  });

});
