function Player(attrs) {
  this.attrs = attrs;
}

Player.prototype.toJSON = function() {
  return this.attrs;
};

Player.prototype.get = function(name) {
  return this.attrs[name];
};
