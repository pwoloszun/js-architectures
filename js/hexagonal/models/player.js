function Player(attrs) {
  this.attrs = attrs;
}

Player.prototype.toJSON = function() {
  return this.attrs;
};
