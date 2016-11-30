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
    selectedFramework.init(dependencies, variables);
    return selectedFramework;
};

exports = module.exports = createApp;
