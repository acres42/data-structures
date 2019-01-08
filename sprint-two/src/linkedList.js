var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    // list.tail = new
    // console.log(list.tail);
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    //check if a head val exists
    var currentNode = list.head;
    if (list.head !== null) {
      if (list.tail.value === target){
        return true;
      }
    }
    //update current value inside the loop to access currentNode.next until there are no more next
    while (currentNode !== list.tail) { // while current Node not null
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;

    } //end of while loop
    return false;

  }; //EOF contains

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */