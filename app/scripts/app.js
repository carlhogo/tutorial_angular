'use strict';

/**
 * @ngdoc overview
 * @name tutorialAngularApp
 * @description
 * # tutorialAngularApp
 *
 * Main module of the application.
 */
angular
  .module('tutorialAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'routerConfig',
    'exampleController',
    'ngSanitize',
    'ngTouch'
  ]);