(function() {
  'use strict';

  angular
    .module('angularapp')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  /* @ngInject */
  function HomeController($scope) {
    var vm = this;

    vm.example = example;
    vm.title = 'Hello World';

    ///////// Public

    function example() {

    }
  }
})();
