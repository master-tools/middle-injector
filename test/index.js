'use strict';

const expect = require('chai').expect;
let middleInyector = require('../index');

describe('MiddleInyector app: ', () => {
    before((done) => {
        done();
    });

    after((done) => {
        done();
    });

    it('Should return an express app when createApp is called', (done) => {
        let fakeApp = middleInyector();
        expect(fakeApp).to.be.a('function');
        done();
    });

    it('Should return an express app when createApp is called with all parameters', (done) => {
        let fakeApp = middleInyector('express', [], []);
        expect(fakeApp).to.be.a('function');
        done();
    });

    it('Should return an init function on express object when createFake is called', (done) => {
        let fakeApp = middleInyector();
        expect(fakeApp.init).to.be.a('function');
        done();
    });
});