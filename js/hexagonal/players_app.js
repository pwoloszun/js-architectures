$(function() {
  new PlayersApp();
});

function PlayersApp() {
  var playersListUseCase = new PlayersListUseCase();
  var playersListGui = new PlayersListGui();
  var playersStorage = new PlayersStorage();
  var glue = new PlayersListGlue(playersListUseCase, playersListGui, playersStorage);
  playersListUseCase.start();
}
