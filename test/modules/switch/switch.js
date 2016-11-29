'use strict';

const assert = require('assert');
let expressModule = require('modules/express/express');
let restifyModule = require('modules/restify/restify');
let middleInyectorSwitch = require('modules/switch/switch');

describe('Switch module: ', () => {
    before((done) => {
        done();
    });

    after((done) => {
        done();
    });

    it('Should select express when the parameter indicate it.', (done) => {
        let returnedModule = middleInyectorSwitch.switch('express');
        assert.deepEqual(returnedModule, expressModule);
        done();
    });

    it('Should select express by default when the paramenter does not indicate it.', (done) => {
        let returnedModule = middleInyectorSwitch.switch();
        assert.deepEqual(returnedModule, expressModule);
        done();
    });

    it('Should select restify by default when the paramenter indicate it.', (done) => {
        let returnedModule = middleInyectorSwitch.switch('restify');
        assert.deepEqual(returnedModule, restifyModule);
        done();
    });
});