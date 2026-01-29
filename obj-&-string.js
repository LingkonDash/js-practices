// Date: 28/01/2026
/*_________________Task one_________________*/
/*
const sen = "Count how many times a string has the letter a"


let counter = 0;
for (const ch of sen) {
  if (ch === "a") {
    counter++
    console.log(`a found ${counter}`);
    continue;
  }
  console.log(ch);
  
}
console.log(counter);
*/

/*__________________Task Two_________________*/
/*
const sen = 'Count how many times a string has the letter a or A'

let counter_a = 0;
let counter_A = 0;
let i = 0;
while (i < sen.length) {
  if (sen[i] === "a") {
    i++;
    counter_a++;
    console.log(`a found ${counter_a}`);
    continue;
  } else if(sen[i] === "A") {
    i++;
    counter_A++;
    console.log(`A found ${counter_A}`);
    continue;
  }
  console.log(sen[i]);
  i++;
}
console.log(`Total A && a found: ${counter_A + counter_a}`)
*/

/*_________________Task three_________________*/
/*
const sen = 'Check whether a string contains all the vowels a, e, i, o, u'

if (sen.includes('a') && sen.includes('e') 
&& sen.includes('i') && sen.includes('o') 
&& sen.includes('u')) {
  console.log('This sentence has all the vowles in it');
} else {
  console.log('This sentence missing atleast one vowel');
} 
*/

/*_________________Task four_________________*/
/*
const sen = 'If a given string has either x, replace x by y. if the given string has X, replace it by Y.'
const senArr = sen.split('')

for(let i = 0; i < senArr.length; i++) {
  if(senArr[i] === 'x') {
    senArr[i] = 'y'
  }  else if (senArr[i] === 'X') {
    senArr[i] = 'Y'
  } 
}

const finalSen = senArr.join('');
console.log(finalSen);
*/

/*_________________Task four_________________*/
/*
const sen = 'Capitalize Every first Letter of each word in a String';

const senArr = sen.split(' ');
const finalSen = []

for(let i = 0; i < senArr.length; i++) {
  const senWord = senArr[i].split('');
  senWord[0] = senWord[0].toUpperCase()
  const newWord = senWord.join('')
  finalSen.push(newWord)
}

console.log(finalSen.join(' '));
*/

// Date: 29/01/2026

/*****************Object Tasks***************/
/*_________________Task one_________________*/

//Acces the `golden rod` color value in output.

const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520"
}
// console.log(colors["golden rod"]);

/*_________________Task Two_________________*/

// For this objet below add a property named `passenger capacity` with value 5

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};
car["passenger capacity"] = 5;
// console.log(car);

/*_________________Task Three_________________*/

// Display the physics marks as output.

const student = {
  name: "Hanim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30
  }
}
// console.log(student["physics"]["marks"]);

/*_________________Task four_________________*/

// Count the `number of properties`.

let students = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true
}
// console.log(Object.keys(students).length)

/*_________________Task four_________________*/

// Loop through an object and print the key-vlau pairs with their `types`

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example city",
  isStudent: true
}

for(pro in myObject) {
  console.log(`Key: ${pro} | type: ${typeof myObject[pro]}`);
}