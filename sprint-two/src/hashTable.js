var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  bucket.forEach(function(x) {
    if (x[0] === k) {
      x[1] === v;
    }
  });

  bucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var found = undefined;

  if (!this._storage.get(index)) {
    return null;
  }

  bucket.forEach(function(x) {
    if (x[0] === k) {
      found = x[1];
    }
  });
  return found;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!this._storage.get(index)) {
    return null;
  }

  bucket.forEach(function(x, index) {
    if (x[0] === k){
      bucket.splice(index, 1);
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */