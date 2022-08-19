function isPalindrome(word) {
  // Write your algorithm here
  let decision = null;
  let backwardsWord = word.split('').reverse().join('')
  if (backwardsWord === word) {
    decision = true;
  } else {
    decision = false;
  }
  return decision;
}

/* 
  write a function that takes a string

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log('Expecting: true')
  console.log('=>', isPalindrome('mom'));

  console.log('Expecting; false')
  console.log('=>', isPalindrome('fantasy'))
}

module.exports = isPalindrome;
