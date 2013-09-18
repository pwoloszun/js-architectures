$(function() {
  $(".js-players-app").each(function() {
    new PlayersApp($(this));
  });
});

function PlayersApp($el) {
  var playersListUseCase = new PlayersListUseCase();
  var playersListGui = new PlayersListGui($el);
  var playersStorage = new PlayersStorage();
  var glue = new PlayersListGlue(playersListUseCase, playersListGui, playersStorage);
  playersListUseCase.start();
}
