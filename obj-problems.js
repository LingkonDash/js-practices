//Date: 30/02/2026
/****************************Object_Problem_Solving*******************************/
//LEVEL_ONE.
//---------------------------------Problem_one----------------------------------\\
/*
Problem 1: Deep Value Counter
You’re given an object that may contain nested objects.

Task:
Count how many values are of type number (any depth).

Concepts to use:
* 'for...in'
* 'typeof'
* recursion OR manual stack
* object traversal logic
*/
const data = {
  a: 10,
  b: {
    c: 20,
    d: {
      e: "hello",
      f: 30
    }
  },
  g: true
}
let counter = 0
function loop(para) {
  for(let key in para) {
    if ( typeof para[key] === 'number' ) {
      counter++
    } else if (typeof para[key] === 'object') {
      loop(para[key])
    }
  }
}
loop(data)
// console.log(counter);


//---------------------------------Problem_two----------------------------------\\
/*
Problem 2: User Score Analyzer.
You’re given an object where keys are usernames and values are arrays of scores.

Task:
Create a new object that stores:

* totalScore
* averageScore
* highestScore

Input:
const users = {
  alex: [10, 20, 30],
  bob: [5, 15],
  sara: [100, 50, 25]
  }
  
  Expected shape:
  {
    alex: { totalScore: 60, averageScore: 20, highestScore: 30 },
    bob:  { totalScore: 20, averageScore: 10, highestScore: 15 },
    sara: { totalScore: 175, averageScore: 58.33, highestScore: 100 }
    }
    
    Concepts:
    * nested loops
    * object creation
    * math logic
    * precision handling
    */
   const users = {
     alex: [10, 20, 30],
     bob: [5, 15],
     sara: [100, 50, 25],
     Lingkon: [100, 98, 99]
    };
    
    function scoreBoard(obj) {
      let userScore = {}
  for(let key in obj) {
    let sum = 0; 
    let max = 0;
    for(let i = 0; i < obj[key].length; i++) {
      sum += obj[key][i]
      
      if(max < obj[key][i]) {
        max = obj[key][i];
      }
    }
    let avg = sum / obj[key].length;
    
    if(!Number.isInteger(avg)) {
      avg = Number(avg.toFixed(2))
    }
    userScore[key] = {totalScore: sum, averageScore: avg, highestScore: max}
  }
  return userScore;
}
// console.log(scoreBoard(users));

//---------------------------------Problem_three----------------------------------\\
/*
Problem 3: Duplicate Value Detector.
You’re given an object with mixed values.

Task:
Return an array of values that appear more than once.

Input:
const obj = {
  a: "apple",
  b: "banana",
  c: "apple",
  d: "orange",
  e: "banana"
  }
  
  Output:
  ["apple", "banana"]
  */
 const obj = {
   a: "apple",
   b: "banana",
   c: "apple",
   d: "orange",
   e: "banana",
   f: 'lingkon',
   g: 'waterMelon',
  h: 'lingkon',
}
function problemThree(obj) {
  let arr = [];
  for(let key in obj) {
    let counter = 0;
    for(let key2 in obj) {
      if(obj[key] === obj[key2]) {
        counter++
      }
    }
    if (counter > 1 && !arr.includes(obj[key])) {
      arr.push(obj[key])
    }
  }
  return arr;
}
// console.log(problemThree(obj));

//---------------------------------Problem_four----------------------------------\\
/*
Problem 4: Key Path Finder (Hard)
You’re given a deeply nested object and a target value.

Task:
Return the path to that value as a string.

Input:
  const obj2 = {
    a: {
      b: {
        c: 'hello',
      },
      d: {
        e: 23,
        f: 432,
        g: {
          h: 42
        }
      }
    }
  }

Target:
  42

Output:
"a.d.g.h"
*/
const obj2 = {
  a: {
    b: {
      c: 'hello',
    },
    d: {
      e: 23,
      f: 432,
      g: {
        h: 42
      }
    }
  }
}

function problemFour(obj, target, path = []) {
  for(let key in obj) {
    if(obj[key] === target) {
      path.push(key);
      return path;
    } else if (typeof obj[key] === 'object') {
      path.push(key);
      const result = problemFour(obj[key], target, path);
      if (result) {
        return result;
      }
      path.pop();
    } 
  }
}
console.log(problemFour(obj2, 42).join('.'));
