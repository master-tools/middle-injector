'use strict';

let dependencies = require('./dependencies');
let variables = require('./variables');
let app;

/**
 * Function to set dependencies and variables to express framework.
 * @param dependenciesToLoad
 * @param variablesToLoad
 * @returns expressApp
 */
exports.init = (dependenciesToLoad = [], variablesToLoad = []) => {
    app = require('express')();
    app = dependencies.load(app, dependenciesToLoad);
    return variables.load(app, variablesToLoad);
};