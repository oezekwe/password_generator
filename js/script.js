// Assignment code here
var chkUpper, chkLower, chkNumeric, chkSpecial;

function generatePassword(){
  let charsLen= prompt("Choose a length that at least 8 but no more than 128 characters");
  chkUpper= confirm("Do you want it uppercase?");
  chkLower= confirm("Do you want it lowercase?");
  chkNumeric= confirm("Do you want it numeric?");
  chkSpecial= confirm("Do you want it special?");

  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
