'use strict';

exports.load = (app, dependencies = []) => {
    dependencies.forEach((dependency) => {
        app.use(dependency.name, dependency.instance);
    });
    return app;
};