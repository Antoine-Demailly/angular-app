(function() {
  'use strict';

  angular
    .module('angularapp')
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    angular.forEach(serverToClient.routing.routes, function(route) {
      $routeProvider.when(route.path, {
        templateUrl: route.templateUrl,
        controller: route.controller,
        controllerAs: route.controllerAs,
      });
    });

    $routeProvider.otherwise(serverToClient.routing.otherwise);

    $locationProvider.html5Mode(true);
  }
})();
