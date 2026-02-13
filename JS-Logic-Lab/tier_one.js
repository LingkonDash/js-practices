// Task 1:

const evenCheck = x => Number.isInteger(x) ? x % 2 === 0 ? `The number ${x} is even` : `The number ${x} is odd` : `Error: Input must be an integer`;

// console.log(evenCheck(13));

// Task 2:

const vowelCheck = str => { 
  if(typeof str !== 'string' || str.trim().includes(' ')) return "Error: Please provide a single string" ;
  const vowel = 'aeiou'; 
  const x = str.trim().toLowerCase().split('').filter(x => vowel.includes(x)).length;
  return `Here ${x} is the number of vowels found`
}

// console.log(vowelCheck('myNameIsLingkonDash'))

//Task 3:

const duplicateCheck = arr => {
  if(!Array.isArray(arr)) {
    return 'Error: Input must be an Array'
  }
  let newArr = []
  for(const elem of arr) {
    if(newArr.includes(elem)) {
      continue;
    }
    newArr.push(elem)
  }
  return newArr;
}

// console.log(duplicateCheck(["hello", 'hello', 23, 2, true, true, false, null, undefined, undefined, null]))

//Task 4:

const reversedStr = str => typeof str !== 'string' || str.trim().includes(' ') ? "Error: Please provide a single string" : str.split('').reverse().join('');

// console.log(reversedStr("hello"))
