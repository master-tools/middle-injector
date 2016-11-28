'use strict';

const assert = require('assert');
let expressModule = require('modules/express/express');
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
        let returnedModule = middleInyectorSwitch.switch('express');
        assert.deepEqual(returnedModule, expressModule);
        done();
    });
});