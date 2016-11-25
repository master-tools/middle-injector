'use strict';

const assert = require('assert');
const expect = require('chai').expect;
let dependenciesModule = require('modules/express/dependencies');

describe('Dependencies express module: ', () => {
    before((done) => {
        done();
    });

    after((done) => {
        done();
    });

    it('Should have load function.', (done) => {
        expect(dependenciesModule.load).to.be.a('function');
        done();
    });
});