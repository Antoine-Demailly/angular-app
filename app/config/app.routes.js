(function() {
  'use strict';

  angular
    .module('angularapp')
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm',
      })
      .when('/chat', {
        templateUrl: 'templates/chat.view.html',
        controller: 'ChatController',
        controllerAs: 'vm',
      })
      .when('/user/:user', {
        templateUrl: 'templates/user.view.html',
        controller: 'UserController',
        controllerAs: 'vm',
      })
      .when('/error/404', {
        templateUrl: 'templates/404.view.html',
        controller: 'ErrorController',
        controllerAs: 'vm',
      });

    $routeProvider.otherwise({
      redirectTo: '/error/404',
    });

    $locationProvider.html5Mode(true);
  }
})();
