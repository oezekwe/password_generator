var chkUpper, chkLower, chkNumeric, chkSpecial, selectCriteria;

/*This function is to make certain that any type of characters
selected would be included in the password.*/
function choosingCriteria(){
  var num;
  var Word= "";
  selectCriteria=0;
  do{
    chkUpper= confirm("Include password with uppercase characters?");
    if(chkUpper){
      selectCriteria++;
      num= Math.floor(Math.random()*26)+65;
      Word= Word.concat(String.fromCharCode(num));
    }
  
    chkLower= confirm("Include password with lowercase characters?");
    if(chkLower){
      selectCriteria++;
      num= Math.floor(Math.random()*26)+97;
      Word= Word.concat(String.fromCharCode(num));
    }
  
    chkNumeric= confirm("Include password with numeric characters?");
    if(chkNumeric){
      selectCriteria++;
      num= Math.floor(Math.random()*10)+48;
      Word= Word.concat(String.fromCharCode(num));
    }
    
    chkSpecial= confirm("Include password with special characters?");
    if(chkSpecial){
      selectCriteria++;
      num= Math.floor(Math.random()*95)+32;
      while((num>=65 && num<=90) || (num>=48 && num<=57) || (num>=97 && num<=122)){
        num= Math.floor(Math.random()*95)+32;
      }
      Word= Word.concat(String.fromCharCode(num));
    }
    else if(!chkSpecial && selectCriteria==0){
      alert("You chose none of the character types. Please select one of them to generate password.")
    }

  } while(selectCriteria==0);

  return Word;
}

function generatePassword(){
  var dec;
  var pWord= "";
  var charsLen= prompt("Choose a length of at least 8 characters but no more than 128.");
  while((charsLen < 8) || (charsLen > 128)){
    if(charsLen < 8){
      alert("Not enough characters. Please try again.");
      charsLen= prompt("Choose a length of at least 8 characters but no more than 128.");
    }
    else{
      alert("Too many characters. Please try again.");
      charsLen= prompt("Choose a length of at least 8 characters but no more than 128.");
    }
  }
  pWord= choosingCriteria();
  
  for(let c=0; c<charsLen-selectCriteria; c++){
    dec= Math.floor(Math.random()*95)+32;
    while(true){
      if(chkUpper && (dec >= 65 && dec <= 90)){
        pWord= pWord.concat(String.fromCharCode(dec));
        break;
      }
      else if(chkLower && (dec >= 97 && dec <= 122)){
        pWord= pWord.concat(String.fromCharCode(dec));
        break;
      }
      else if(chkNumeric && (dec >= 48 && dec <= 57)){
        pWord= pWord.concat(String.fromCharCode(dec));
        break;
      }
      else if(chkSpecial && ((dec >= 32 && dec <= 47) || (dec >= 58 && dec <= 64)
      || (dec >= 91 && dec <= 96) || (dec >= 123 && dec <= 126))){
        pWord= pWord.concat(String.fromCharCode(dec));
        break;
      }
      else{
        dec= Math.floor(Math.random()*95)+32;
      }
    }
  }

//This statement swaps one (or all) of the first-four character's position with the others.
  if(selectCriteria > 1){
    var strArray= pWord.split(""); //Turns this string into an array.
    for(let d=0; d<selectCriteria; d++){
      let holdC= strArray[d];
      let rN= Math.floor(Math.random()*strArray.length);
      strArray[d]= strArray[rN];
      strArray[rN]= holdC;
    }
    pWord= strArray.join(""); //Turns an array into a string.
  }
  console.log(pWord);
  return pWord;
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
