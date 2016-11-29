'use strict';

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
        let fakeApp = expressModule.init([], []);
        expect(fakeApp).to.be.an('function');
        done();
    });
});