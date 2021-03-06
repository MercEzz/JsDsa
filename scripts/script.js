// Stacks

// functions: push, pop, peek, length

let letters = []; // this is our stack

let word = "himerzhere";

let rword = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// console.log(letters);

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

// console.log(rword);

if (word === rword) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}

// Creates a stack
let Stack = function () {
  this.count = 0;
  this.storage = {};

  // adds a value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  // returns the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

let myStack = new Stack();

// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// myStack.push("merz");
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());

// Sets

function mySet() {
  // the var collection will hold the set
  var collection = [];
  // this method will check for the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };
  // this method will return all the values in the set
  this.values = function () {
    return collection;
  };
  // this method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  // this method will remove an element from a set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // this method will return the size of the collection
  this.size = function () {
    return collection.length;
  };
  // this method will return the union of two sets
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };
  // this method will return the intersection of two sets as a new set
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // this method will return the difference of two sets as a new set
  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  // this method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}
// var setA = new mySet();
// var setB = new mySet();
// setA.add("a");
// setB.add("b");
// setB.add("c");
// setB.add("a");
// setB.add("d");
// console.log(setA.subset(setB));
// console.log(setA.intersection(setB).values());
// console.log(setB.difference(setA).values());

// var setC = new Set();
// var setD = new Set();
// setC.add("a");
// setD.add("b");
// setD.add("c");
// setD.add("a");
// setD.add("d");
// console.log(setD.values());
// setD.delete("a");
// console.log(setD.has("a"));
// console.log(setD.add("d"));

// Queues

function Queue() {
  collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (e) {
    collection.push(e);
  };
  this.dequeue = function () {
    collection.pop();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

// let q = new Queue();
// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// q.print();
// q.dequeue();
// console.log(q.front());
// q.print();

function PriorityQueue() {
  let collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  this.enqueue = function (e) {
    if (this.isEmpty()) {
      collection.push(e);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        // checking priorites
        if (e[i] < collection[i][1]) {
          collection.splice(i, 0, e);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(e);
      }
    }
  };
  this.dequeue = function () {
    let value = collection.shift();
    return value[0];
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

// var pq = new PriorityQueue();
// pq.enqueue(["Beau Carnes", 2]);
// pq.enqueue(["Quincy Larson", 3]);
// pq.enqueue(["Ewa Mitulska-W??jcik", 1]);
// pq.enqueue(["Briana Swift", 2]);
// pq.printCollection();
// pq.dequeue();
// console.log(pq.front());
// pq.printCollection();
