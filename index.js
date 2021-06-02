//caesar cipher function:
function encryptCipher() {
  var string = document.getElementById("txt").value;
  var key = document.getElementById("key").value;
  key = key % 26;
  var alphabetsArr = "abcdefghijklmnopqrstuvwxyz".split("");
  var lowerCaseString = string.toLowerCase();
  var newString = "";
  var charCount = lowerCaseString.length;

  for (i = 0; i < charCount; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }
    var charIndex = alphabetsArr.indexOf(currentLetter);
    var newIndex = charIndex + key;

    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;

    if (string[i] === lowerCaseString[i].toUpperCase()) {
      newString += alphabetsArr[newIndex].toUpperCase();
    } else {
      newString += alphabetsArr[newIndex];
    }
  }
  document.getElementById("display").innerHTML = newString;
  //return newString;
}
function decryptCipher() {
  var string = document.getElementById("txt").value;
  var key = document.getElementById("key").value;
  key = key % 26;
  var alphabetsArr = "abcdefghijklmnopqrstuvwxyz".split("");
  var lowerCaseString = string.toLowerCase();
  var newString = "";
  var charCount = lowerCaseString.length;

  for (i = 0; i < charCount; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }
    var charIndex = alphabetsArr.indexOf(currentLetter);
    var newIndex = charIndex - key;

    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;

    if (string[i] === lowerCaseString[i].toUpperCase()) {
      newString += alphabetsArr[newIndex].toUpperCase();
    } else {
      newString += alphabetsArr[newIndex];
    }
  }
  document.getElementById("display").innerHTML = newString;
}
