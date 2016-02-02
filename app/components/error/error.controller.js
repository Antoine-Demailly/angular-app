(function() {
  'use strict';

  angular
    .module('angularapp')
    .controller('ErrorController', ErrorController);

  ErrorController.$inject = ['$scope'];

  /* @ngInject */
  function ErrorController($scope) {
    var vm = this;

    vm.example = example;

    ///////// Public

    function example() {

    }
  }
})();
