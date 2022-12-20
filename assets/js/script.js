// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include alphaLower, alphaUpper, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// start function

function generatePassword () {
  // ask for password length user input
  passwordLength = prompt("How many characters would you like the password to be? Choose between 8 and 128.");
  console.log ("Password length " + passwordLength);

  if (!passwordLength) {
    alert("Must Select Length");
  }
  else if (passwordLength <8 || passwordLength >128) {
    passwordLength = prompt("You must choose a number between 8 and 128");
    console.log ("Password length " + passwordLength);
  }
  // prompting for other characters
  else { 
    confirmLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Will this contain numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + confirmSpecial);
  };
// If, No answer - then
if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
  userChoices = alert("You must choose a criteria");
// 4 true options
} else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = alphaLower.concat(alphaUpper, number, specialChar);
  console.log(userChoices);
}
// 3 true options
else if (confirmLower && confirmUpper && confirmNumber) {
  userChoices = alphaLower.concat(alphaUpper, number);
  console.log(userChoices);
}
else if (confirmLower && confirmUpper && confirmSpecial) {
  userChoices = alphaLower.concat(alphaUpper, specialChar);
  console.log(userChoices);
}
else if (confirmLower && confirmNumber && confirmSpecial) {
  userChoices = alphaLower.concat(number, specialChar);
  console.log(userChoices);
}
else if (confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = alphaUpper.concat(number, specialChar);
  console.log(userChoices);
}
// 2 true options
else if (confirmLower && confirmUpper) {
  userChoices = alphaLower.concat(alphaUpper);
  console.log(userChoices);
}
else if (confirmLower && confirmNumber) {
  userChoices = alphaLower.concat(number);
  console.log(userChoices);
}
else if (confirmLower && confirmSpecial) {
  userChoices = alphaLower.concat(specialChar);
  console.log(userChoices);
}
else if (confirmUpper && confirmNumber) {
  userChoices = alphaUpper.concat(number);
  console.log(userChoices);
}
else if (confirmUpper && confirmSpecial) {
  userChoices = alphaUpper.concat(special);
  console.log(userChoices);
}
else if (confirmNumber && confirmSpecial) {
  userChoices = number.concat(specialChar);
  console.log(userChoices);
}
// 1 true option
else if (confirmLower) {
  userChoices = alphaLower;
  console.log(userChoices);
}
else if (confirmUpper) {
  userChoices = blankUpper.concat(alphaUpper);
  console.log(userChoices);
}
else if (confirmNumber) {
  userChoices = number;
  console.log(userChoices);
}
else if (confirmSpecial) {
  userChoices = specialChar;
  console.log(userChoices);
};

// Empty variable for the password length
var passwordBlank = [];

// Loop for random selection
for (var i = 0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);
}

// Join and return the password 
var password = passwordBlank.join("");
console.log("Your Pasword is: " + password);
return password;


}
