var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};



BinarySearchTree.prototype.insert = function(value) {
  //left
  if(value < this.value){
    if(!this.left){
      this.left = new BinarySearchTree(value);
    } else{
      this.left.insert(value);
    }
    //right
  } else if (value > this.value){
    if(!this.right){
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};
BinarySearchTree.prototype.contains = function(value) {
  if(value === this.value){
    return true;
  }

  if(this.left && value < this.value){
    return this.left.contains(value);
  }

  if(this.right && value > this.value){
    return this.right.contains(value);
  }

  return false;

};
BinarySearchTree.prototype.depthFirstLog = function(callback) {
  //stop case
  callback(this.value);

  if(this.left){
    this.left.depthFirstLog(callback);
  }

  if(this.right){
    this.right.depthFirstLog(callback);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
