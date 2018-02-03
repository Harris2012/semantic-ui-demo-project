var app = angular.module('questionnaire', ['ngResource', 'ui.router', 'ui.semantic']);

app.config(route);

app.controller(WelcomeController);

