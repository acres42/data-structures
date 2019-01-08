var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = []; // fix me
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(obj, methods) {
  for (var k in methods) {
    obj[k] = methods[k];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //set value as the target of a node
  var node = Tree(value);
  this.children.push(node);
  // .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
};

treeMethods.contains = function(value) {
  //haystack this.children
  //needle target
  // .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
  if (this.value === value) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(value)) {
        return true;
      }
    }
    return false;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */