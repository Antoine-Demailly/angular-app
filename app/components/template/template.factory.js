(function() {
  'use strict';

  angular
    .module('angularapp')
    .factory('template', template);

  template.$inject = [];

  /* @ngInject */
  function template() {
    var factory = {
      get: get,
    };

    return factory;

    function get(name, success, error) {
      $http.get('/gettemplate/' + name)
        .then(success, error);
    }
  }
})();
