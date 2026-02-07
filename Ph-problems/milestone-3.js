/* Assignment - 3 Problems. 
 * Problems docfile :- https://docs.google.com/document/d/1-2-Lhf5La5w4PSMMCF3UW0MULlAQa2AT6HyUTyU4CEc/edit?usp=drive_link 

* Asiignment Submision or checking tool :- https://phi-lab.vercel.app/
*/

//Problem-01: New Price for Eid Sale

function newPrice(currentPrice, discount) {
  
  if(typeof currentPrice !== "number" || typeof discount !== "number" || discount < 0 || discount > 100) { return "Invalid" }
  
  
  return (currentPrice - (currentPrice * discount ) / 100).toFixed(3);
  
}

//Problem-02: OTP Validation for Zapshift

function validOtp(otp) {
  
  if(typeof otp !== "string") { return "Invalid" }
  
if( otp.length === 8 && otp.startsWith("ph-")) {
  
  return true
  
} else { return false}

}

//Problem-03: BCS Final Score Calculator

function finalScore(omr) {

if( omr["right"] + omr["wrong"] + omr["skip"] !== 100) { return "Invalid" }

return Math.round(omr["right"] - (omr["wrong"] * 0.5));

}

//Problem-04: Upcoming Gono Vote

function gonoVote(array) {
  
  let ha = 0;
  
  let na = 0;
  
  if(!Array.isArray(array)) { return "Invalid" }
  
  for(let vote of array) {
    
    if( vote === "ha") { ha++ }
    
    else if(vote === "na") { na++ }
    
  }
  
  if(ha > na) {return true}
  
  else if(ha === na) { return "equal" }
  
  else { return false }
  
}

//Problem-05: Text Analyzer for an AI Company

function analyzeText(str) {
  
  if(typeof str !== 'string' || str.trim() === "" ) { return "Invalid" }
  
  const strArr = str.split(' ')
  
  const finalObj = {}
  
  let longWord = strArr[0];
  
  let wordCounter = 0;
  
  for(let word of strArr) {

    if(word.length > longWord.length) { longWord = word }
    
wordCounter += word.length

}

finalObj.longwords = longWord;

finalObj.token = wordCounter;

return finalObj;

}

//----------------------------------Conceptual Session----------------------------\\
/*
 * Problems docfile :- https://docs.google.com/document/d/1-2-Lhf5La5w4PSMMCF3UW0MULlAQa2AT6HyUTyU4CEc/edit?usp=drive_link
*/