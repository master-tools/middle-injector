'use strict';

const assert = require('assert');
const expect = require('chai').expect;
let variablesModule = require('modules/express/variables');

describe('Variables express module: ', () => {
    before((done) => {
        done();
    });

    after((done) => {
        done();
    });

    it('Should have load function.', (done) => {
        expect(variablesModule.load).to.be.a('function');
        done();
    });
});