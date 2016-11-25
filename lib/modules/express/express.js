'use strict';

let dependencies = require('modules/express/dependencies');
let variables = require('modules/express/variables');
let app = require('express');

exports.init = (dependenciesToLoad, variablesToLoad) => {
    dependencies.load(app, dependenciesToLoad);
    variables.load(app, variablesToLoad);
    return app;
};