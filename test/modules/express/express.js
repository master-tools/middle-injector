'use strict';

const assert = require('assert');
const expect = require('chai').expect;
let expressModule = require('modules/express/express');

describe('Express module: ', () => {
    before((done) => {
        done();
    });

    after((done) => {
        done();
    });

    it('Should have init function.', (done) => {
        expect(expressModule.init).to.be.a('function');
        done();
    });

    it('Should return an object when init function is called.', (done) => {
        expect(expressModule.init([],[])).to.be.a('object');
        done();
    });

    it('Should call to load dependencies.', (done) => {
        done();
    });

    it('Should call to load variables.', (done) => {
        done();
    });
});