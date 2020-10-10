// Assignment code here
var chkUpper, chkLower, chkNumeric, chkSpecial, selectCriteria;

function choosingCriteria(){
  var num;
  var Word= "";
  selectCriteria=0;
  do{
    chkUpper= confirm("Do you want it uppercase?");
    if(chkUpper){
      selectCriteria++;
      num= Math.floor(Math.random()*26)+65;
      Word= Word+String.fromCharCode(num);
    }
  
    chkLower= confirm("Do you want it lowercase?");
    if(chkLower){
      selectCriteria++;
      num= Math.floor(Math.random()*26)+97;
      Word= Word+String.fromCharCode(num);
    }
  
    chkNumeric= confirm("Do you want it numeric?");
    if(chkNumeric){
      selectCriteria++;
      num= Math.floor(Math.random()*10)+48;
      Word= Word+String.fromCharCode(num);
    }
    
    chkSpecial= confirm("Do you want it special?");
    if(chkSpecial){
      selectCriteria++;
      num= Math.floor(Math.random()*95)+32;
      while((!(num >= 32 && num <= 47)) && (!(num >= 58 && num <= 64)) 
      && (!(num >= 91 && num <= 96)) && (!(num >= 123 && num <= 126))){
        num= Math.floor(Math.random()*95)+32;
      }
      Word= Word+String.fromCharCode(num);
    } 
  } while(selectCriteria==0);

  return Word;
}

function generatePassword(){
  var dec;
  var pWord= "";
  var charsLen= prompt("Choose a length that at least 8 but no more than 128 characters");
  while((charsLen < 8) || (charsLen > 128)){
    if(charsLen < 8){
      alert("Not enough characters. Please try again.");
      charsLen= prompt("Choose a length that at least 8 but no more than 128 characters");
    }
    else{
      alert("Too many characters. Please try again.");
      charsLen= prompt("Choose a length that at least 8 but no more than 128 characters");
    }
  }
  pWord= choosingCriteria();
  charsLen-= selectCriteria;
  
  for(let c=0; c<charsLen; c++){
    dec= Math.floor(Math.random()*95)+32;
    while(true){
      if(chkUpper && (dec >= 65 && dec <= 90)){
        pWord= pWord + String.fromCharCode(dec);
        break;
      }
      else if(chkLower && (dec >= 97 && dec <= 122)){
        pWord= pWord + String.fromCharCode(dec);
        break;
      }
      else if(chkNumeric && (dec >= 48 && dec <= 57)){
        pWord= pWord + String.fromCharCode(dec);
        break;
      }
      else if(chkSpecial && ((dec >= 32 && dec <= 47) || (dec >= 58 && dec <= 64)
      || (dec >= 91 && dec <= 96) || (dec >= 123 && dec <= 126))){
        pWord= pWord + String.fromCharCode(dec);
        break;
      }
      else{
        dec= Math.floor(Math.random()*95)+32;
      }
    }
  }

  if(selectCriteria > 1){
    var strArray= pWord.split("");
    for(let d=0; d<selectCriteria; d++){
      let holdC= strArray[d];
      let rN= Math.floor(Math.random()*strArray.length);
      strArray[d]= strArray[rN];
      strArray[rN]= holdC;
    }
    debugger;
    pWord= strArray.join("");
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
