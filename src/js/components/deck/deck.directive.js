(function () {

  angular
    .module('myApp.components.deck')
    .directive('myDeck', deckDir)


  function deckDir() {
    controller.$inject = ['$rootScope']

    function controller($rootScope) {
      var vm = this

      $rootScope.$on('cards', function (event, cards) {
        vm.cardsStats = {
          SPADES: 0,
          DIAMONDS: 0,
          HEARTS: 0,
          CLUBS: 0
        }
        cards.forEach(function (card) {
          console.log(vm.cardsStats[card.suit]);
          vm.cardsStats[card.suit] += 1
        })
      })
    }

    return {
      controller: controller,
      controllerAs: 'vm',
      bindToController: true,
      scope: {

      },
      templateUrl:'js/components/deck/deck.view.html'
    }
  }

})();
