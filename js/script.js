// Assignment code here
var chkUpper, chkLower, chkNumeric, chkSpecial;
var randNum;

function generatePassword(){
  var dec, flagR;
  var charsLen= prompt("Choose a length that at least 8 but no more than 128 characters");
  chkUpper= confirm("Do you want it uppercase?");
  chkLower= confirm("Do you want it lowercase?");
  chkNumeric= confirm("Do you want it numeric?");
  chkSpecial= confirm("Do you want it special?");

  for(let c=0; c<charsLen; c++){
    flagR= true;
    dec= Math.floor(Math.random()*126)+32;
    while(flagR){
      if(chkUpper && (dec >= 65 && dec <= 90)){
        flagR= false;
      }
      else if(chkLower && (dec >= 97 && dec <= 122)){
        flagR= false;
      }
      else if(chkNumeric && (dec >= 48 && dec <= 57)){
        flagR= false;
      }
      else if(chkSpecial && (dec >= 32 && dec <= 47) || (dec >= 58 && dec <= 64)
      (dec >= 91 && dec <= 96) || (dec >= 123 && dec <= 126)){
        flagR= false;
      }
      else{
        dec= Math.floor(Math.random()*126)+32;
      }
    }
    
  }
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
