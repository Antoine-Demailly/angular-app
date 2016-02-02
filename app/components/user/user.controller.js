(function() {
  'use strict';

  angular
    .module('angularapp')
    .controller('UserController', UserController);

  UserController.$inject = ['$scope', '$routeParams'];

  /* @ngInject */
  function UserController($scope, $routeParams) {
    var vm = this;

    vm.example = example;
    vm.params = $routeParams;

    ///////// Public

    function example() {

    }
  }
})();
