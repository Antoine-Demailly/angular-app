(function() {
  'use strict';

  angular
    .module('angularapp')
    .controller('ChatController', ChatController);

  ChatController.$inject = ['$scope'];

  /* @ngInject */
  function ChatController($scope) {
    var vm = this;

    vm.example = example;

    ///////// Public

    function example() {

    }
  }
})();
