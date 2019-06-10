const chai = require('chai');
const didChai = require('./chai-extend');
const mocha = require('mocha');
const ImplementationReporter = require('./ImplementationReporter');
// configure chai
chai.should();
chai.use(didChai);

mocha.reporters.ImplementationReporter = ImplementationReporter;
