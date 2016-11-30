'use strict';

let switchModule = require('./lib/modules/switch/switch');

let createApp = (framework = 'express', dependencies = [], variables  = []) => {
    let selectedFramework = switchModule.switch(framework);
    selectedFramework.init(dependencies, variables);
    return selectedFramework;
};

/**
 * Expose `createApp()`.
 */

exports = module.exports = createApp;
