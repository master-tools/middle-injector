'use strict';

let expressModule = require('../express/express');
let restifyModule = require('../restify/restify');

/**
 * Switch to select the framework to inject the dependencies
 * @param framework
 * @returns createdAppFramework
 */
exports.switch = (framework = 'express') => {
    switch(framework) {
        case 'express':
            return expressModule;
        case 'restify':
            return restifyModule;
    }
};
