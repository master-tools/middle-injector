'use strict';

const assert = require('assert');
const expect = require('chai').expect;
const assertChai = require('chai').assert;
const mocksDependencies = require('../mocks/express/dependencies');
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

    it('Should return an app Object when load function is called', (done) => {
        let appObject = dependenciesModule.load(require('express'), []);
        expect(appObject).to.be.a('function');
        done();
    });

    it('Should set dependency "body-parser jsonParser" to express app', (done) => {
        let app = dependenciesModule.load(require('express')(), mocksDependencies.bodyParserCase);
        let listOfMiddlewares = require('express-list-middleware')(app);

        listOfMiddlewares.forEach((middleware) => {
            if(middleware.includes('jsonParser')) {
                done();
            }
        });
    });

    it('Should set dependency "body-parser" and "cors" to express app', (done) => {
        let app = dependenciesModule.load(require('express')(), mocksDependencies.twoDependencies);
        let listOfMiddlewares = require('express-list-middleware')(app);
        let middlewaresArray = [];

        listOfMiddlewares.forEach((middleware) => {
            if(middleware.includes('jsonParser') || middleware.includes('cors')) {
                middlewaresArray.push(middleware)
            }
        });

        assertChai.lengthOf(middlewaresArray, 2);
        done();
    });
});