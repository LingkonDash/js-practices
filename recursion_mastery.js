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