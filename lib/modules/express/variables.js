'use strict';

exports.load = (app, variables = []) => {
    variables.forEach((variable) => {
       app.set(variable.name, variable.object);
    });
    return app;
};