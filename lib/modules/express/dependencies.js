'use strict';

/**
 * Load function to set an array of dependencies for express framework
 * @param app
 * @param dependencies
 * @returns expressApp
 */
exports.load = (app, dependencies = []) => {
    dependencies.forEach((dependency) => {
        app.use(dependency.instance);
    });
    return app;
};