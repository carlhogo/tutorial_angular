'use strict';

/**
 * @ngdoc function
 * @name tutorialAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tutorialAngularApp
 */

var gem = { name: 'Azurite', price: 2.95 };

 angular.module('exampleController', [])
  .controller('StoreCtrl', function () {
  	this.product = gem;
  });
