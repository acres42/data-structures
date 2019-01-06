var Stack = function() {
  var someInstance = {};
  // Use an object with numeric ks to store values
  var storage = {};
  // storage.value = arguments[0];
  someInstance.count = Object.keys(storage).length;
  someInstance.storage = storage;

  extend(someInstance, stackMethods);

  return someInstance;
};

var extend = function(obj, methods){
  for(var k in methods){
    obj[k] = methods[k];
  }
};

var stackMethods = {
  pop: function(){
    var popped = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return popped;
  },
  push: function(value){
    this.count++;
    this.storage[this.count] = value;
  },
  size: function(){
    if(this.count < 0){
      return 0;
    }
    return this.count;
  }
};
