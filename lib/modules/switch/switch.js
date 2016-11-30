'use strict';

let expressModule = require('../express/express');
let restifyModule = require('../restify/restify');

exports.switch = (framework = 'express') => {
    switch(framework) {
        case 'express':
            return expressModule;
        case 'restify':
            return restifyModule;
    }
};
