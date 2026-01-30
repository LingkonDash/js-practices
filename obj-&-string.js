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

//Date: 30/02/2026 basics
/******************************Object_practice*******************************/
//LEVEL_ONE.
//---------------------------------task_one----------------------------------\\
/*
Read from an object.
Create an object called person with:

* name
* age
* city

👉 Print a sentence like:
My name is ___ , I am ___ years old and I live in ___. 
*/

const person = {
  name: 'Lingkon',
  age: 25,
  city: 'Sreemangal'
}
console.log(`My name is ${person.name}, I am ${person.age} years old and I live in ${person.city}.`);

//---------------------------------task_two----------------------------------\\
/*
Add a new property.
You have an object with:

* productName
* price

👉 Add a new property called 'inStock'.
👉 Then print the whole object.

Focus: adding properties dynamically.
*/

const product = {
  productName: 'Laptop',
  price: 50000
}
product.inStock = true;

console.log(product);

//---------------------------------task_three----------------------------------\\
/*
Update a property.
Create an object with:

* username
* isLoggedIn (false)

👉 Change isLoggedIn to true.
👉 Print only that value.

Focus: updating object values.
*/

const user = {
  userName: 'Lingkon',
  isLoggedIn: false
}
user.isLoggedIn = true;
console.log(user.isLoggedIn);

//LEVEL_TWO.
//---------------------------------task_one----------------------------------\\
/*
Check property existence.
Create an object with:

* title
* author

👉 Check if the property pages exists
👉 Print:

"Pages available" or
"Pages not available"

Focus: undefined check.
*/

const book = {
  title: 'War and Peace',
  author: 'Leo Tolstoy',
}
book.pages === undefined ? console.log('Pages not available') : console.log('Pages available');

//---------------------------------task_two----------------------------------\\
/*
Object decision logic
Create a product object with:

* name
* price
* inStock

👉 If the product is in stock and price is greater than 0
→ print "Product can be sold"
Else → "Product cannot be sold"

Focus: logical conditions + object values
*/
const product2 = {
  name: 'Mobile',
  price: 15000,
  inStock: true
}

product2.inStock && product2.price > 0 ? console.log('Product can be sold') : console.log('Product cannot be sold')

//---------------------------------task_three----------------------------------\\
/*
Count object properties.
Create an object with at least 4 properties

👉 Print how many properties the object has
(Not manually counting — use logic)

Focus: object structure awareness.
*/
const obj = {
  property: 1,
  property2: 2,
  property3: 3,
  property4: 4
}
console.log(Object.keys(obj).length);

//LEVEL_THREE 
//---------------------------------task_one----------------------------------\\
/*
Loop through object
Create an object with:

name
age
country

👉 Loop through the object
👉 Print each key and value like:
key : value

Focus: object iteration
*/

const user2 = {
  name: 'Nayan',
  age: 18,
  country: 'Bangladesh'
}
for(let prop in user2) {
  console.log(`${prop} : ${user2[prop]}`);
}

//---------------------------------task_two----------------------------------\\
/*
Find a specific value.
Create an object with multiple properties
One of them should have value "admin"

👉 Loop through the object
👉 If any value is "admin", print "Admin found"

Focus: searching inside objects
*/

const user3 = {
  name: 'Nayan',
  age: 18,
  isStudent: true,
  country: 'Bangladesh',
  roll: 'admin'
}

for(let prop in user3) {
  if(user3[prop] === 'admin') { console.log('Admin found') }
}

//---------------------------------task_two----------------------------------\\
/*
Data validation
Create a user object with:

  * name
  * age (wrong type intentionally)

👉 Check if age is a number
👉 If not, print "Invalid age type"
Focus: type safety thinking.
*/
const user4 = {
  name: 'Lingkon',
  age: "twenty five"
}
if(isNaN(user4.age)){
  console.log('Invalid age type');
}