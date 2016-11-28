'use strict';

const assert = require('assert');
const expect = require('chai').expect;
const mocksVariables = require('../mocks/express/variables');
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

    it('Should return an app Object when load function is called', (done) => {
        let appObject = variablesModule.load(require('express'), []);
        expect(appObject).to.be.a('function');
        done();
    });

    it('Should set variable "someStuff" to an express app', (done) => {
        let app = variablesModule.load(require('express')(), mocksVariables.configuration);
        assert.equal(app.settings.someStuff, mocksVariables.configuration[0].object);
        done();
    });

    it('Should set variables "someStuff" and "someStuffTwo" to express app', (done) => {
        let app = variablesModule.load(require('express')(), mocksVariables.twoVariables);
        assert.equal(app.settings.someStuff, mocksVariables.twoVariables[0].object);
        assert.equal(app.settings.someStuffTwo, mocksVariables.twoVariables[1].object);
        done();
    });
});