// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var pwProm = prompt("How many characters between 8 and 128?");
  var pwLength = pwProm;

  if (pwLength < 8 || pwLength > 128 || pwLength === "") {
    alert("Password must be between 8 and 128 characters in length!")
  }
  else {
    var numb = confirm("Would you like to include a Number?");
    var char = confirm("Would you like to include a Speical Character?");
    var lowerCase = confirm("Would you like to include a Lowercase Letter?");
    var upperCase = confirm("Would you like to include an Uppercase Letter?");
  }

  var numeric = "0123456789";
  var character = "@#$%^&*";
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // var numb = confirm("Would you like to include a Number?");
  // var char = confirm("Would you like to include a Speical Character?");
  // var lowerCase = confirm("Would you like to include a Lowercase Letter?");
  // var upperCase = confirm("Would you like to include an Uppercase Letter?");

  var passwordCombo = "";
  var Password = "";

  if (numb) {
    passwordCombo += numeric;
  }

  if (char) {
    passwordCombo += character;
  }

  if (lowerCase) {
    passwordCombo += lowerLetters;
  }

  if (upperCase) {
    passwordCombo += upperLetters;
  }



  for (var i = 0; i < pwLength; i++) {
    var combination = Math.floor(Math.random() * passwordCombo.length);
    console.log(combination);
    Password += passwordCombo[combination];
  }

  return '';



}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

