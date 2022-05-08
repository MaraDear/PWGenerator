var uppercasePassword = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lowercasePassword = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var numberPassword = ['0','1','2','3','4','5','6','7','8','9'];
var specialPassword = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','{','}','?','[',']','|',';',':','/','`','~',];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function createPassword() {
  var passLength = prompt("How long would you like your password to be? Please choose a number between 8-128.");
  if (passLength < 8 || passLength > 128) {
    alert("Please choose a number between 8-128.");
    return "Looks like there was a mistake. Please choose a number between 8-128.";
  }

  if (isNaN(passLength)){
    window.alert("Please choose a number between 8-128.");
    return "Looks like there was a mistake. Please choose a number between 8-128.";
  }

  var uppercase = confirm("Use uppercase letters in your password?");
  var lowercase = confirm("Use lowercase letters in your password?");
  var numerics = confirm("Use numbers in your password?");
  var special = confirm("Use special characters in your password?");
  var password = "";
  var choose = [];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
