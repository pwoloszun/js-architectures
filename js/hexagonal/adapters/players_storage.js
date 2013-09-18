var DB = {
  Players: [
    {id: 1, name: "Michael Jordan", pts: 30.1, reb: 5.3, ast: 4.1},
    {id: 2, name: "LeBron James", pts: 26.3, reb: 7.3, ast: 7.1},
    {id: 3, name: "Kobe Bryant", pts: 27.1, reb: 4.3, ast: 5.8},
    {id: 4, name: "Shaq O'Neil", pts: 23.1, reb: 10.2, ast: 2.8}
  ]
};

function PlayersStorage() {
  this.allPlayersData = DB.Players;
}

PlayersStorage.prototype.findAllPlayers = function() {
  return this.allPlayersData;
};

PlayersStorage.prototype.setPlayers = function(players) {
  this.allPlayersData = _(players).map(function(player) {
    return player.toJSON();
  });
};
