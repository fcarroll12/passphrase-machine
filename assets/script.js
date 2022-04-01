// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = 0123456789;
var specialchars = " !'()*+,-./:;<=>?@%][^_`&{|}~$ ";
var candidates = "";
var length = 0;
var includeLower = false;
var includeUpper = false;
var includeSpecial = false;
var includeNumbers = false;
var letter = "";

function generatePassword() {
  var password = "password";
  // TODO: add code to generate the password here
  var length = window.prompt("Enter desired password length");
  if (length <8 || length >128) {
    window.alert("Password should be from 8 to 128 characters long");
    return password;
  }

  includeLower = window.prompt("Use lowercase letters?");
  if (includeLower = true) {
    console.log(lowercase + candidates);
    letter = letter + lowercase[Math.floor(Math.random() * lowercase.length)];
    password = (password + letter);
  }

  includeUpper = window.prompt("Use uppercase letters?");
  if (includeUpper = true) {
    console.log(uppercase + candidates);
    letter = letter + uppercase[Math.floor(Math.random() * uppercase.length)];
    password = (password + letter);
  }

  includeSpecial = window.prompt("Use special characters?");
  if (includeSpecial = true) {
    console.log(specialchars + candidates);
    letter = letter + specialchars[Math.floor(Math.random() * specialchars.length)];
    password = (password + letter);
  }

  includeNumbers = window.prompt("Use numbers?");
  if (includeNumbers = true) {
    console.log(numbers + candidates);
    letter = letter + numbers[Math.floor(Math.random()* numbers.length)];
    password = (password + letter);
  }

  if (candidates.length === 0) {
    window.alert("You must choose at least one character type.");
    return "";
  }

  while (password.length < length){
    letter = letter + password[Math.floor(Math.random() * password.length)];
    console.log (letter + password);
  }
  console.log(password);
  document.querySelector("#generate").textContent = password;
return password;
}

generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
(writePassword);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();