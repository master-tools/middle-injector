'use strict';

let expressModule = require('modules/express/express');
let restifyModule = require('modules/restify/restify');

exports.switch = (framework = 'express') => {
    switch(framework) {
        case 'express':
            return expressModule;
        case 'restify':
            return restifyModule;
    }
};
