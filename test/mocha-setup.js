const chai = require('chai');
require('./chai-extend');
const mocha = require('mocha');
const ImplementationReporter = require('./ImplementationReporter');
// configure chai
chai.should();

mocha.reporters.ImplementationReporter = ImplementationReporter;
