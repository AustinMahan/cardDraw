// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'myApp.config',
      'myApp.components.main',
      'myApp.components.hand',
      'myApp.components.deck'
    ]);

})();
