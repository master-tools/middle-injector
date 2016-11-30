'use strict';

let dependencies = require('./dependencies');
let variables = require('./variables');
let app = require('express')();

/**
 * Function to set dependencies and variables to express framework.
 * @param dependenciesToLoad
 * @param variablesToLoad
 * @returns expressApp
 */
exports.init = (dependenciesToLoad = [], variablesToLoad = []) => {
    app = dependencies.load(app, dependenciesToLoad);
    return variables.load(app, variablesToLoad);
};