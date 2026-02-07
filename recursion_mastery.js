//Date: 01/02/2026.
//______________Recursion Problem_______________\\
/*
🍛 Problem: Find ALL paths to a target value.

🎯 Goal: Given a nested object, return all paths (dot-separated) that lead to the target value.

📦 Input object
const data = {
  a: {
    b: {
      x: 42
    },
    c: {
      x: 42,
      d: {
        x: 42
      }
    }
  },
  e: {
    x: 42
  }
};

✅ Expected output
[
  "a.b.x",
  "a.c.x",
  "a.c.d.x",
  "e.x"
]

🧪 Test call
  findAllPaths(data, 42); // should return array of strings

🔥 Rules (important)

  * ❌ No loops like for, while, forEach

  * ✅ Recursion allowed

  * ✅ You MAY pass:
      path (array)
      results (array)

  * ❌ Do NOT console.log inside recursion

  * ❌ Do NOT mutate global variables
*/
// const data = {
//   a: {
//     b: {
//       x: 42
//     },
//     c: {
//       x: 42,
//       d: {
//         x: 42
//       }
//     }
//   },
//   e: {
//     x: 42
//   }
// };

const data2 = {
  a: 42,
  b: { i: 42, j:{ k: 42} },
  c: { x: 42 },
  d: 42
}

function findAllPaths (obj, target, paths = [], pathStr = [], i = 0, object = Object.keys(obj)) {
  let keys = object
  if(obj[keys[i]] === target) {
    i++
    console.log(i);
    console.log('target found');
  } else {
    i++;
  }
  if (obj[keys[i]] === undefined) {
    return "checking done";
  }
  if( obj[keys[i]] === 'object') {
    object = obj[keys[i]]
    const result = findAllPaths(object, target);
    if(result) {
      return result;
    }
  }
}

findAllPaths(data2, 42);
