(function() {
  'use strict';

  angular
    .module('angularapp')
    .config(config);

  config.$inject = ['$translateProvider'];

  function config($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'translations/',
      suffix: '.json',
    });
    $translateProvider.preferredLanguage('fr');
  }
})();
