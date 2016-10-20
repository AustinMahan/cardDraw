(function () {

  angular
    .module('myApp.components.hand')
    .directive('hand', handDir)


  function handDir() {
    controller.$inject = ['$rootScope', 'deck']
    function controller($rootScope, deck) {
      var vm = this
      vm.deck_id = ''

      deck.getDeck()
      .then((data) => {
        vm.deck_id = data.data.deck_id
        deck.draw(data.data.deck_id, 5)
        .then((cards) => {
          vm.cards = cards.data.cards
          $rootScope.$emit('cards', vm.cards)
        })
      })
      vm.draw = function () {
        if (vm.cards.length < 52) {
          deck.draw(vm.deck_id, 1)
          .then((card) => {
            vm.cards.push(card.data.cards[0])
            $rootScope.$emit('cards', vm.cards)
          })
        }
      }
    }


    return {
      controller: controller,
      controllerAs: 'vm',
      bindToController: true,
      scope: {

      },
      templateUrl:'js/components/hand/hand.view.html'
    }
  }

})();
