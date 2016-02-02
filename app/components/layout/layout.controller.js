(function() {
  'use strict';

  angular
    .module('angularapp')
    .controller('LayoutController', LayoutController);

  LayoutController.$inject = ['$scope', '$translate'];

  /* @ngInject */
  function LayoutController($scope, $translate) {
    var vm = this;

    vm.init = init;
    vm.pathList = {};
    vm.switchLanguage = switchLanguage;

    ///////// Public
    function init() {
      vm.pathList = serverToClient.pathList;
    }

    function switchLanguage(language) {
      $translate.use(language);
    }
  }
})();
