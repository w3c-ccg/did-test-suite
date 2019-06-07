/**
 * did                = "did:" method-name ":" method-specific-id
 * method-name        = 1*method-char
 * method-char        = %x61-7A / DIGIT
 * method-specific-id = *idchar *( ":" *idchar )
 * idchar             = ALPHA / DIGIT / "." / "-" / "_"
 * did-url            = did *( ";" param ) path-abempty [ "?" query ]
 *                      [ "#" fragment ]
 * param              = param-name [ "=" param-value ]
 * param-name         = 1*param-char
 * param-value        = *param-char
 * param-char         = ALPHA / DIGIT / "." / "-" / "_" / ":" /
 *                                           pct-encoded
*/

// \\w == [A-Za-z0-9]

/* eslint-disable max-len */

const didRegex = new RegExp('^(?<did>did)\:(?<methodName>[a-z0-9]+)\:' +
  '(?<methodSpecificId>[_\\w\\.\\-]*)(?<extra>[;\?#\/]*.*)$');

function parseDID(did) {
  return didRegex.exec(did);
}

function isDiD(did) {
  return didRegex.test(did);
}

function isFragment(extra) {
  return /^#/.test(extra);
}

function hasParameters(extra) {
  return /^;/.test(extra);
}

const paramChar = '[_\\w\\.\\-\:]';
const paramterRegex = new RegExp(`(?<parameterName>${paramChar}+)\=(?<paramterValue>${paramChar}*)`);

function methodSpecificDIDParameter(methodName) {
  return new RegExp(`(?<methodName>${methodName})\:(?<parameterName>${paramChar}+)\=(?<paramterValue>${paramChar}*)`);
}

function getParameter(extra) {
  return paramterRegex.exec(extra);
}

exports.getParameter = getParameter;
exports.methodSepcificDIDParameter = methodSpecificDIDParameter;
exports.isFragment = isFragment;
exports.didRegex = didRegex;
exports.hasParameters = hasParameters;
exports.isDid = isDiD;
exports.parseDID = parseDID;
exports.uuid = 'did:uuid:0d2bae3e-4915-489c-bfa1-1ba14e8b43cd';
exports.methSpec = exports.uuid + ';uuid:extra=true';
