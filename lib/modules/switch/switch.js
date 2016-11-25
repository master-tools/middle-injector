'use strict';

let expressModule = require('modules/express/express');
let restifyModule = require('modules/restify/restify');

exports.switch = (framework) => {
    switch(framework) {
        case 'express':
            return expressModule;
        case 'restify':
            return restifyModule;
        default:
            return expressModule;
    }
};
