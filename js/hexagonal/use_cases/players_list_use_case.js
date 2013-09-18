function PlayersListUseCase() {
  this.players = [];
}

PlayersListUseCase.prototype.start = function() {
};

PlayersListUseCase.prototype.setInitialPlayers = function(playersData) {
  this.players = _(playersData).map(function(data) {
    var player = new Player(data);
    mixin.addRole(player, Valueable);
    return player;
  });
};

PlayersListUseCase.prototype.getAllPlayers = function() {
  return this.players;
};

PlayersListUseCase.prototype.removePlayer = function(id) {
  this.players =_(this.players).filter(function(player){
    return player.get('id') != id;
  });
};

