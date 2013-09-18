var aop = (function() {

  function methodReference(object, methodName) {
    var originalFn = object[methodName];
    if (!originalFn || typeof originalFn != "function")
      throw "Undefined method: " + methodName;
    return originalFn;
  }

  function after(object, methodName, adviseFn) {
    var originalFn = methodReference(object, methodName);
    object[methodName] = function() {
      var result = originalFn.apply(this, arguments);
      adviseFn();
      return result;
    };
  }

  function before(object, methodName, adviseFn) {
    var originalFn = methodReference(object, methodName);
    object[methodName] = function() {
      adviseFn();
      return originalFn.apply(this, arguments);
    };
  }

  return {
    after: after,
    before: before
  };
})();
