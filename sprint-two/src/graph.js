//It is an undirected graph. It does not have to be 'connected'.
// Instantiate a new graph
var Graph = function() {

  this.vertex = {};
  this.edges = {};
  // this.children.value =
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertex[node] = 1;
  // console.log(this.vertex[node])
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // method that takes any node and returns a boolean reflecting whether it can be found in the graph
  if (this.vertex[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.vertex[node];
  for (var keys in this.edges) {
    if (keys.includes(node.toString())) {
      delete this.edges[keys];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //method that returns a boolean reflecting whether or not two nodes are connected
  if (this.edges[fromNode.toString() + toNode]) {
    return true;
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode.toString() + toNode] = 1;
  this.edges[toNode.toString() + fromNode] = 1;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //method that removes the connection between two nodes
  delete this.edges[fromNode.toString() + toNode];
  delete this.edges[toNode.toString() + fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //method that traverses through the graph, calling a passed in function once on each node
  for (var keys in this.vertex) {
    cb(keys);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */