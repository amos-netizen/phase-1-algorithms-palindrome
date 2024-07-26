// index.js
function isPalindrome(str) {
  const normalizedStr = str.toLowerCase(); // Normalize the string to lowercase
  const reversedStr = normalizedStr.split('').reverse().join(''); // Reverse the string
  return normalizedStr === reversedStr; // Check if the normalized string is equal to its reverse
}

module.exports = { isPalindrome }; // Export the function to make it available in other files
