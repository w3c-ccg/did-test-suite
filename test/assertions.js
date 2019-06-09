/* eslint-disable max-len */

// method-char = %x61-7A / DIGIT
const methodChar = '[a-z09]';

// method-specific-id = *idchar *( ":" *idchar )
// idchar = ALPHA / DIGIT / "." / "-" / "_"
const idChar = '[_\\w\\.\\-:]';

// param-char = ALPHA / DIGIT / "." / "-" / "_" / ":" /
const paramChar = '[_\\w\\.\\-:]';

const DIDRegex = new RegExp(`^(?<did>did):(?<methodName>${methodChar}+):(?<methodSpecificId>${idChar}*)(?<extra>[;\\?#\/]*.*)$`, 'i');

const parameterRegex = new RegExp(`(?<parameterName>${paramChar}+)\=(?<parameterValue>${paramChar}*)`, 'i');

function parseDID(did) {
  return DIDRegex.exec(did);
}

function isFragment(extra) {
  return /^#/.test(extra);
}

function hasParameters(extra) {
  return /^;/.test(extra);
}

function methodSpecificDIDParameter(methodName) {
  return new RegExp(`(?<methodName>${methodName})\:(?<parameterName>${paramChar}+)\=(?<parameterValue>${paramChar}*)`);
}

function parseParameter(extra) {
  return parameterRegex.exec(extra);
}

exports.getParameter = parseParameter;
exports.methodSepcificDIDParameter = methodSpecificDIDParameter;
exports.isFragment = isFragment;
exports.DIDRegex = DIDRegex;
exports.hasParameters = hasParameters;
exports.parseDID = parseDID;
exports.uuid = 'did:uuid:0d2bae3e-4915-489c-bfa1-1ba14e8b43cd';
exports.methSpec = exports.uuid + ';uuid:extra=true';
exports.urn = 'did:urn:example:foo-bar-baz-qux?+CCResolve:cc=uk';
// TODO https://www.chaijs.com/guide/plugins/
// turn into a full on chai plugin
