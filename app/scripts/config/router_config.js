'use strict';

angular.module('routerConfig', [])
.config(function($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise(
      function($injector, $location) {
        var $state = $injector.get('$state');
        $state.go('menu');
      }
    );
  //
  // Now set up the states
  $stateProvider
     $stateProvider
      .state('menu', {
        url: '/menu',
        views: {
          '': {
            templateUrl: 'views/menu.html'
          }
      }
  });
});