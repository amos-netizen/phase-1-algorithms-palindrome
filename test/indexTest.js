// test/indexTest.js
const { isPalindrome } = require('../index.js'); // Import the isPalindrome function from index.js
const { assert } = require('chai'); // Import Chai for assertions

describe('isPalindrome Tests', () => {
    it("should return true for 'abba'", () => {
        assert.isTrue(isPalindrome('abba'), "Expected 'abba' to be a palindrome");
    });

    it("should return true for 'racecar'", () => {
        assert.isTrue(isPalindrome('racecar'), "Expected 'racecar' to be a palindrome");
    });

    it("should return true for 'a'", () => {
        assert.isTrue(isPalindrome('a'), "Expected 'a' to be a palindrome");
    });

    it("should return false for 'robot'", () => {
        assert.isFalse(isPalindrome('robot'), "Expected 'robot' to not be a palindrome");
    });

    it("should return false for 'ab'", () => {
        assert.isFalse(isPalindrome('ab'), "Expected 'ab' to not be a palindrome");
    });
});
