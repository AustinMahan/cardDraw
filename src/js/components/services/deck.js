(function () {

  angular
    .module('myApp.components.hand')
    .service('deck', deckService)

    deckService.$inject = ['$http']

    function deckService($http) {
      var vm = this
      vm.curDeck = []
      vm.getDeck = function () {
        return $http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      }
      vm.draw = function (deck_id, count) {
        return $http.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${count}`)
      }
    }

})();
