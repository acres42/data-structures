class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.queueSize = 0;
  }

  enqueue (value){
    this.storage[this.queueSize] = value;
    this.queueSize++;
  }

  dequeue() {
    if (this.queueSize > 0) {
      //set var for elem that will be temp held & returned after deleted
      var output = this.storage[0];
      //loop through keys in storage
      for (var key in this.storage) {
        //set val of storage key to key + 1, using Number() to convert
        this.storage[key] = this.storage[Number(key) + 1];
      }
      //decrement size
      this.queueSize --;
      //delete value
      delete this.storage[this.queueSize];
      //return temp var that was holding firstIn storage elem
      return output;
    }
  }

  size(){
    return this.queueSize;
  }
}
