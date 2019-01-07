var Queue = function() {
  var someInstance = {};
  var storage = {};

  someInstance.storage = storage;

  extend(someInstance, queueMethods);

  return someInstance;
};


var extend = function(obj, methods) {
  for (var k in methods) {
    obj[k] = methods[k];
  }
};

var queueMethods = {
  enqueue: function(value){
    var objKeys = Object.keys(this.storage);
    var lastCount = objKeys[objKeys.length - 1];
    this.storage[lastCount + 1] = value;
  },

  dequeue: function(){
    var objKeys = Object.keys(this.storage);
    var countLast = objKeys[0];
    var dequeued = this.storage[countLast];
    delete this.storage[countLast];
    return dequeued;
  },

  size: function(){
    var count = Object.keys(this.storage).length;
    if (count < 0) {
      return 0;
    }
    return count;
  }
};