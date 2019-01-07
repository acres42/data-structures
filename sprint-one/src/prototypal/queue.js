var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.queSize = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  //same as stack push
  this.storage[this.queSize] = value;
  this.queSize++;
};

queueMethods.dequeue = function(value) {
  //check that instance obj is not empty
  if (this.queSize > 0) {
    //set var for elem that will be temp held & returned after deleted
    var output = this.storage[0];
    //loop through keys in storage
    for (var key in this.storage) {
      //set val of storage key to key + 1, using Number() to convert
      this.storage[key] = this.storage[Number(key) + 1];
    }
    //decrement size
    this.queSize --;
    //delete value
    delete this.storage[this.queSize];
    //return temp var that was holding firstIn storage elem
    return output;
  }
};

queueMethods.size = function() {
  return this.queSize;
};


