// Assignment Code
var generateBtn = document.querySelector("#generate");


// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-',
//   '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`',
//   '{', '|', '}', '}', '~'];
// var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var letters = 'abcdefghigklmnopqrstuvwxyz';
var special = '!"#$%&'+"'()*+,-./:;<=>?@[\\]^_`{|}~";
var numbers = '0123456789';

var letNum = letters.concat(numbers);
var letSpec = letters.concat(special);
var everything = letters.concat(numbers, special);


// Make random int function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generatePassword() {
  // Make a blank password
  function makePassword() {
    var password = "";
    var i;
    for (i = 0; i <= len - 1; i++) {
      password += letters[getRandomInt(26)];
    }
    return password;
  }
  
  // Add uppercase letters to password
  function addUpper(password){
    // Change a random amount of letters to uppercase
    var rando = NaN;
    var split = password.split("");
    var newP = "";
    for (var j = 0; j <= split.length - 1; j++) {
      rando = getRandomInt(2);
      if (rando == 0) {
        newP += split[j];
      } else if (rando == 1) {
        up = split[j].toUpperCase();
        newP += up;
      }
    }
    return newP;
  }

  // function to make password with numbers 
  function numPass(){
    var password = "";
    var i;
    for (i = 0; i <= len - 1; i++) {
      password += letNum[getRandomInt(36)];
    }
    return password;
  }

  // Make password with special chars
  function specPass(){
    var password = "";
    var i;
    for (i = 0; i <= len - 1; i++) {
      password += letSpec[getRandomInt(59)];
    }
    return password;
  }

  // Make password with numbers and special characters
  function numSpec(){
    var password = "";
    var i;
    for (i = 0; i <= len - 1; i++) {
      password += everything[getRandomInt(69)];
    }
    return password;
  }

  // Asks for length of passwords and closes everything if cancel is clicked
  var len = prompt("Choose length of password(8-128):");
  if (len == null) {
    return;
  }
  while (len < 8 || len > 128) {
    len = prompt("Try again... Choose length of password(8-128):");
    if (len == null) {
      return;
    }
  }
  // Asks for upper case letters, numbers and special characters
  var letterCase = confirm("Include uppercase letters?");
  if (letterCase){
    var check = alert("You chose to include uppercase letters.");
    
  } else {
    var check = alert("You chose not to include uppercase letters.");
  }

  var numbersA = confirm("Include numbers?");
  if (numbersA){
    var check = alert("You chose to include numbers.");
    
  } else {
    var check = alert("You chose not to include numbers.");
  }

  var specialA = confirm("Include special characters?");
  if (specialA){
    var check = alert("You chose to include special characters.");
    
  } else {
    var check = alert("You chose not to include special characters.");
  }

  var password = "";

  // Generate password
  if (letterCase == false && numbersA == false && specialA == false) {
    // Create blank new lowercase password
    password = makePassword();
    return password;

  } else if (letterCase && numbersA == false && specialA == false) {
    // Creates password with random uppercase letters
    password = makePassword();
    upperPass = addUpper(password);
    return upperPass;
    
  } else if (letterCase == false && numbersA && specialA == false) {
    // Creates password with random numbers and letters
    password = makePassword();
    numbPass = numPass();
    return numbPass;

  } else if (letterCase == false && numbersA == false && specialA){
    // Makes password with special characters and letter
    password = makePassword();
    speciPass = specPass();
    return speciPass;

  } else if (letterCase && numbersA && specialA == false){
    // Makes password with random numbers and random letters upper and/or lower case
    password = makePassword();
    numbPass = numPass();
    upperPass = addUpper(numbPass);
    return upperPass;

  } else if (letterCase && numbersA == false && specialA){
    // Password with lettercase and special chars selected
    password = makePassword();
    speciPass = specPass();
    upperPass = addUpper(speciPass);
    return upperPass;

  } else if (letterCase == false && numbersA && specialA){
    numSpecPassword = numSpec();
    return numSpecPassword;

  } else {
    numSpecPassword = numSpec();
    upperPass = addUpper(numSpecPassword);

    return upperPass;
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

