'use strict';

let switchModule = require('modules/switch/switch');

let createFake = (framework = 'express', dependencies = [], variables  = []) => {
    let selectedFramework = switchModule.switch(framework);
    selectedFramework.init(dependencies, variables);
    return selectedFramework;
};

/**
 * Expose `createApplication()`.
 */

exports = module.exports = createFake;
