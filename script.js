// Assignment Code
var generateBtn = document.querySelector("#generate");

var UCArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
var LCArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var NumArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var CharArray = ['^', '$', '#', '@', '!', '%', '&', '*', '(', ')'];
var resArray = [];
var USArray = "";

function generatePassword() { 
  var charcount = prompt("How many characters long would you like your password to be? \n8-128");
  if (charcount < 8 || charcount > 128) {
    alert("Your password must be between 8 and 128 characters!")
    writePassword()
  }
  else {
    if (confirm("Would you like numbers in your password?")) {
      resArray = resArray.concat(NumArray);
    }

    if (confirm("Would you like uppercase letters in your password?")) {
      resArray = resArray.concat(UCArray);
    }

    if (confirm("Would you like lowercase letters in your password?")) {
      resArray = resArray.concat(LCArray);
    }

    if (confirm("Would you like to add special characters to your password?")) {
      resArray = resArray.concat(CharArray);
    }
    if (resArray.length === 0) {
      alert("You must have at least one character type in your password");
    } else {
      for (var i = 0; i < charcount; i++) {
        var random = [Math.floor(Math.random() * resArray.length)];
        USArray += resArray[random]
      }
    }
    document.getElementById("password").innerHTML = USArray
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

