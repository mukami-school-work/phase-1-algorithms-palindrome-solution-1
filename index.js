function isPalindrome(word) {
  // Write your algorithm here
  const reverseString = word.split('').reverse().join('');

  return word === reverseString;
}

/* 
  Add your pseudocode here
  initialize a function isPalindrome with an argument word

  convert the word into an array, reverse the array values, and convert the reverse array values into a string

  run a condition to see if the string and the reverse string are equal and if so, return true else return false
*/

/*
  Add written explanation of your solution here
  The function isPalindrome takes an argument word, our input in this case is a string. 
  The string is then converted into an array and the values reversed then converted again into a reversestring
  The reversestring is then compared to the original string and if true then we return true else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("civic"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("liz"));
}

module.exports = isPalindrome;
