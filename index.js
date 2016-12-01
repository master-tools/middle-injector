'use strict';

let switchModule = require('./lib/modules/switch/switch');

/**
 * Create app function to select the framework with switch module, inject dependencies and variables on it
 * @param framework
 * @param dependencies
 * @param variables
 */
let createApp = (framework = 'express', dependencies = [], variables  = []) => {
    let selectedFramework = switchModule.switch(framework);
    return selectedFramework.init(dependencies, variables);
};

exports = module.exports = createApp;
