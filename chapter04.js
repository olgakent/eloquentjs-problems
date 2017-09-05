/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  // Your code here
  var arr = [];

  if(typeof step === 'undefined') {
    step = 1;
  }

  // 1 case: counting down
  // 2 case: counting up
  if (step < 0) {
      for (var i = start; i >= end; i += step) {
        arr.push(i);
      }
  } else {
      for (var i = start; i <= end; i += step) {
        arr.push(i);
      }
  }

  return arr;
}

function sum(array) {
  // Your code here
  var total = 0;

  // loop through array and add current element to total sum
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  // create new array to hold elements in reverse order
  var arrayReversed = [];
  var endOfArray = array.length-1;

  for (var i = endOfArray; i >= 0; i--) {
    arrayReversed.push(array[i]);
  }

  return arrayReversed;
}

function reverseArrayInPlace(array) {
  // Your code here
  // loop over half the length and swap first and last element
  for (var i = 0; i < Math.floor(array.length / 2); i++) {

    var temp = array[i];
    array[i] = array[array.length-1-i];
    array[array.length -1-i] = temp;
  }

}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  // create a new list
  var list = null;

  // loop backwards and add current element to the list
  for (var i = array.length-1; i >=0; i--) {
    list = {value: array[i], rest: list};
  }

  return list;
}

function listToArray(list) {
  // Your code here
  // create a new array
  var array = [];

  // loop through the list and add current element to the array
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }

  return array;
}

function nth(list, position) {
  // Your code here
  if(!list) {
    return undefined;
  }
  if (position === 0) {
    return list.value;
  }
  else {
    // recursively go through the list and position
    return nth(list.rest, position-1);
  }
}

function prepend(element, list) {
  // Your code here
  // return new value followd by the remaining list
  return {value: element, rest: list};
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if(obj1 === obj2) {
    return true;
  }

  // test whether function parameters are real objects
  if( typeof obj1 !== "object" || obj1 === null ||
      typeof obj2 !== "object" || obj2 === null )  {
        return false;
  }

  var obj1properties = 0;
  var obj2properties = 0;

  // count the number of properties in first object
  for (var property in obj1) {
    obj1properties++;
  }

  // count the number of properties in second object
  for (var property in obj2) {
    obj2properties++;

    if (!(property in obj1) ||
      // compare the values of properties with recursive call
        !deepEqual(obj1[property], obj2[property])) {
      return false;
    }
  }

  // return the result whether the number of properties
  // in each object is the same
  return  obj1properties === obj2properties;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
