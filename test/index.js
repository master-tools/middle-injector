'use strict';

const assert = require('assert');
const expect = require('chai').expect;
let middleFaker = require('../index');

describe('Middlefaker app: ', () => {
    before((done) => {
        done();
    });

    after((done) => {
        done();
    });

    it('Should return an express object when createFake is called', (done) => {
        let fakeApp = middleFaker();
        expect(fakeApp).to.be.a('object');
        done();
    });

    it('Should return an express object when createFake is called with all parameters', (done) => {
        let fakeApp = middleFaker('express', [], []);
        expect(fakeApp).to.be.a('object');
        done();
    });

    it('Should return an init function on express object when createFake is called', (done) => {
        let fakeApp = middleFaker();
        expect(fakeApp.init).to.be.a('function');
        done();
    });
});