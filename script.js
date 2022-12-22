// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword();

var UCArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var LCArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var NumArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var CharArray = ['^', '$', '#', '@', '!', '%', '&', '*', '(', ')'];

var resArray = [];
var USArray = [];

var numCharacter = prompt ("How many characters do you want between 8 & 128?");
var num = confirm ("Would you like numbers in your password?")
var uppercase = confirm ("Would you like to use uppercase letters in your password?")
var lowercase = confirm ("Would you like to add lowercase letters in your password?")
var characters = confirm ("Would you like to use special characters in your password?")

if (num) {
resArray = resArray.concat(NumArray);  
}

if (uppercase) {
resArray = resArray.concat(UCArray);

}

if (lowercase) {
resArray = resArray.concat(LCArray);  
}
if (characters) {
resArray = resArray.concat(CharArray);  
}

for (var i = 0; i < numCharacter; i++) {
USArray.push (resArray[Math.floor[Math.random() * resArray.length]]);  
}
return USArray.join("")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
