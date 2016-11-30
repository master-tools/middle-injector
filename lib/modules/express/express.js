'use strict';

let dependencies = require('./dependencies');
let variables = require('./variables');
let app = require('express')();

exports.init = (dependenciesToLoad = [], variablesToLoad = []) => {
    app = dependencies.load(app, dependenciesToLoad);
    app = variables.load(app, variablesToLoad);
    return app;
};