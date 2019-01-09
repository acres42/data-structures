var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var extend = function(obj, methods) {
  for (var k in methods) {
    obj[k] = methods[k];
  }
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage.push(item);
};

setPrototype.contains = function(item) {
  if (this.storage.includes(item)) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this.storage.includes(item)) {
    var donna = this.storage.indexOf(item);
    this.storage.splice(donna);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */