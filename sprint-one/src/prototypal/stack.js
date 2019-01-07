var Stack = function() {
  //create instance obj to operate on and delegate to prototype --> stackMethods
  var someInstance = Object.create(stackMethods);
  //set a storage prop that is an empty obj
  someInstance.storage = {};
  //set size prop that starts at 0
  someInstance.stackSize = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  //set the val of size key in storage obj to input val
  this.storage[this.stackSize] = value;
  //increment stackSize when invoked
  this.stackSize ++;
};

stackMethods.pop = function(value) {
  //check that stack is not empty & can be popped without error
  if (this.stackSize > 0) {
    //decrement stacksize  when invoked
    this.stackSize --;
    //set temp var to hold val at size key in storage
    var output = this.storage[this.stackSize];
    //delete val
    delete this.storage[this.stackSize];
    //return val that was just popped via temp variable
    return output;
  }
};

stackMethods.size = function() {
  return this.stackSize;
};



