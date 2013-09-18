var mixin = (function() {

  function addRole(object, role) {
    _(object).extend(role);
    if (object._setupRole)
      object._setupRole();
  }

  return {
    addRole: addRole
  };
})();
