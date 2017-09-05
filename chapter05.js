/*
 * Add your solutions to the chapter 5 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */
const ancestry = require('./ancestry');

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

const byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


// Problem 1: Flattening
function flatten(arrays) {
  // Your code here
  // reduce takes a function with previous and current values
  return(arrays.reduce(function(prev, curr) {
    // return a new array - previous concatenated with current
    return prev.concat(curr);
  }, []));
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  var ageDiffs = [];
  var peopleMap = {};

  ancestry.forEach((person) => {
    peopleMap[person.name] = person;
  });

  ancestry.forEach((child) => {
    var mom = peopleMap[child.mother];
    if(mom) {
      ageDiffs.push(child.born - mom.born);
    }
  });

  return average(ageDiffs);

}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  var century = {};

  // test whether century was already known for each person
  ancestry.forEach((person) => {
    let index = Math.ceil(person.died/100);
    // if not, add an array for it
    if(!(index in century)) {
      century[index] = [];
    }
    // add the persons age to the array for the proper century
    century[index].push(person.died - person.born);
  });

  for (var index in century) {
    century[index] = Number(average(century[index]));
  }

  return century;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

