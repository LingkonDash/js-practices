// Task 1:

const evenCheck = x => Number.isInteger(x) ? x % 2 === 0 ? `The number ${x} is even` : `The number ${x} is odd` : `Error: Input must be an integer`;

// console.log(evenCheck(13));

// Task 2:

const vowelCheck = str => {
  if (typeof str !== 'string' || str.trim().includes(' ')) return "Error: Please provide a single string";
  const vowel = 'aeiou';
  const x = str.trim().toLowerCase().split('').filter(x => vowel.includes(x)).length;
  return `Here ${x} is the number of vowels found`
}

// console.log(vowelCheck('myNameIsLingkonDash'))

//Task 3:

const duplicateCheck = arr => {
  if (!Array.isArray(arr)) {
    return 'Error: Input must be an Array'
  }
  let newArr = []
  for (const elem of arr) {
    if (newArr.includes(elem)) {
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

//Task 5:
function longestWord(str) {
  if (typeof str !== 'string' || str.trim().split(' ').length === 1) return "Error: Please provide a valid sentence.";

  const arr = str.trim().split(' ');
  let bigWord = arr[0];

  arr.forEach(x => { x.length > bigWord.length ? bigWord = x : '' })

  return bigWord;
}

// console.log(longestWord('A sentence containing two or more words separated by spaces.'));

// Task 6: My code 
function avgCounter(arr) {
  if (!Array.isArray(arr)) return "Error: Please provide a valid array.";

  let sum = 0;
  const newArr = arr.filter(x => {
    if (!Number.isNaN(x) && typeof x === 'number') sum += x;
    return !Number.isNaN(x) && typeof x === 'number';
  });

  if (newArr.length === 0) return "Error: Please provide an array that has atleast one Number.";

  const avg = sum / newArr.length;

  const finalArr = [];
  newArr.forEach(x => !finalArr.includes(x) && x > avg ? finalArr.push(x) : '');

  if (finalArr.length === 0) return "There are no numbers greater than the average.";

  return `The numbers that are greater than the average are: ${finalArr.join(', ')}`
}

// console.log(avgCounter(['hello', null, undefined, NaN, 49, 50, 50, 50, 50]));
// console.log(avgCounter([NaN, null, 60, undefined, 'hello', 50, true, 95, ['hehe','haha'], 45, 55, 'nigga', 85, {you: 'nigga', me: '!nigga'}, 90, 100]));

//Task 7:
const studentMarks = {
  math: 85,
  science: 72,
  english: 90,
  history: 66,
  computer: 95
}

for (const sub in studentMarks) {
  if (studentMarks[sub] >= 0 && studentMarks[sub] < 33) studentMarks[sub] = 'F';

  else if (studentMarks[sub] >= 33 && studentMarks[sub] <= 39) studentMarks[sub] = 'D';

  else if (studentMarks[sub] >= 40 && studentMarks[sub] <= 49) studentMarks[sub] = 'C';

  else if (studentMarks[sub] >= 50 && studentMarks[sub] <= 59) studentMarks[sub] = 'B';

  else if (studentMarks[sub] >= 60 && studentMarks[sub] <= 69) studentMarks[sub] = 'A-';

  else if (studentMarks[sub] >= 70 && studentMarks[sub] <= 79) studentMarks[sub] = 'A';

  else if (studentMarks[sub] >= 80 && studentMarks[sub] <= 100) studentMarks[sub] = 'A+';
}

// console.log(studentMarks);

//Task 8:
const pascleCase = str => {
  if (typeof str !== 'string' || str.trim().split(' ').length === 1) return "Error: Please provide a valid sentence."

  return str.trim().split(' ').filter(x => x).map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
}

// console.log(pascleCase("hi this string is now pascal cased"));

//task: 9
const morseCode = {
  // Letters
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",

  // Numbers
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",

  // Punctuation
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  "_": "..--.-",
  "\"": ".-..-.",
  "$": "...-..-",
  "@": ".--.-.",
  " ": "/"
};

const morseToText = {
  // Letters
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",

  // Numbers
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",

  // Punctuation
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  ".----.": "'",
  "-.-.--": "!",
  "-..-.": "/",
  "-.--.": "(",
  "-.--.-": ")",
  ".-...": "&",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  ".-.-.": "+",
  "-....-": "-",
  "..--.-": "_",
  ".-..-.": "\"",
  "...-..-": "$",
  ".--.-.": "@",
  "/": " "
};

const morseDecode = (str, boolean) => {

  if (typeof str !== 'string') return "Error: Please Provide a string"

  if (boolean) return str.trim().toUpperCase().split('').map(x => x = morseCode[x]).join(" ");

  return str.trim().split(' ').map(x => morseToText[x] ? x = morseToText[x] : '#').join("")
}

// if you want Text to MorseCode pass true as second parameter, or pass nothing
// code to text ⬇
// console.log(morseDecode('.... . .-.. .-.. --- / .-- --- .-. .-.. -..'));

// text to code ⬇
// console.log(morseDecode('Hi my name is lingkon in morse code', true));

//Task 10

const convertions = {

  // ===== From Millimeter (mm) =====\\
  'mm-cm': x => x / 10,
  'mm-m': x => x / 1000,
  'mm-km': x => x / 1000000,
  'mm-in': x => x / 25.4,
  'mm-ft': x => x / 304.8,
  'mm-mile': x => x / 1609344,

  // ===== From Centimeter (cm) =====\\
  'cm-mm': x => x * 10,
  'cm-m': x => x / 100,
  'cm-km': x => x / 100000,
  'cm-in': x => x / 2.54,
  'cm-ft': x => x / 30.48,
  'cm-mile': x => x / 160934.4,

  // ===== From Meter (m) =====\\
  'm-mm': x => x * 1000,
  'm-cm': x => x * 100,
  'm-km': x => x / 1000,
  'm-in': x => x * 39.37007874,
  'm-ft': x => x * 3.280839895,
  'm-mile': x => x / 1609.344,

  // ===== From Kilometer (km) =====\\
  'km-mm': x => x * 1000000,
  'km-cm': x => x * 100000,
  'km-m': x => x * 1000,
  'km-in': x => x * 39370.07874,
  'km-ft': x => x * 3280.839895,
  'km-mile': x => x / 1.609344,

  // ===== From Inch (in) =====\\
  'in-mm': x => x * 25.4,
  'in-cm': x => x * 2.54,
  'in-m': x => x / 39.37007874,
  'in-km': x => x / 39370.07874,
  'in-ft': x => x / 12,
  'in-mile': x => x / 63360,

  // ===== From Foot (ft) =====\\
  'ft-mm': x => x * 304.8,
  'ft-cm': x => x * 30.48,
  'ft-m': x => x / 3.280839895,
  'ft-km': x => x / 3280.839895,
  'ft-in': x => x * 12,
  'ft-mile': x => x / 5280,

  // ===== From Mile (mile) =====\\
  'mile-mm': x => x * 1609344,
  'mile-cm': x => x * 160934.4,
  'mile-m': x => x * 1609.344,
  'mile-km': x => x * 1.609344,
  'mile-in': x => x * 63360,
  'mile-ft': x => x * 5280,
};

function unitConverter(unit, type, targetType) {

  if (!Number.isFinite(unit)) return 'Error: Unit value is invalid.'

  if (!convertions[`${type}-${targetType}`]) return `Conversion type is invalid or not found, please select from these { millimeter (mm), centimeter (cm), meter (m), kilometer (km), mile (mile), foot (ft), inch (in) } `

  return convertions[`${type}-${targetType}`](unit)
}

// console.log(unitConverter(20,'mile','cm'));
