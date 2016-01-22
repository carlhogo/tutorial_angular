'use strict';

/**
 * @ngdoc function
 * @name tutorialAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tutorialAngularApp
 */
var app = angular.module('tutorialAngularApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
