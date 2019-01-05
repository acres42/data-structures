var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var objKeys = Object.keys(storage);
    var lastCount = objKeys[objKeys.length - 1];
    storage[lastCount + 1] = value;
  };

  someInstance.dequeue = function() {
    var objKeys = Object.keys(storage);
    var countLast = objKeys[0];
    var dequeued = storage[countLast];
    delete storage[countLast];
    return dequeued;
  };

  someInstance.size = function() {
    var count = Object.keys(storage).length;
    if (count < 0) {
      return 0;
    }
    return count;
  };

  return someInstance;
};