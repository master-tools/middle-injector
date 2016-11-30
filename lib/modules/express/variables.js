'use strict';

/**
 * Load function to set an array of variables for express framework
 * @param app
 * @param variables
 * @returns expressApp
 */
exports.load = (app, variables = []) => {
    variables.forEach((variable) => {
       app.set(variable.name, variable.object);
    });
    return app;
};