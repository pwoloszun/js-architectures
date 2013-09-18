function PlayersListGlue(useCase, gui, storage) {

  aop.before(useCase, "start", function() {
    useCase.setInitialPlayers(storage.findAllPlayers());
  });

  aop.after(useCase, "start", function() {
    gui.showPlayers(useCase.getAllPlayers());
  });

  aop.after(gui, "removePlayerClicked", function() {
    useCase.removePlayer(gui.selectedPlayerId());
  });

  aop.after(useCase, "removePlayer", function() {
    storage.setPlayers(useCase.getAllPlayers());
    gui.showPlayers(useCase.getAllPlayers());
    pusher.notify("player:removed", useCase.getAllPlayers());
  });

}
