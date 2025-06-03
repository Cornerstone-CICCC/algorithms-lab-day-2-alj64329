// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

//count non-vowel chars
//vowels-> a,e,i,o,u

const countConsonants = function (str) {
    let chars = str.split('')
    let vowels = ["a", "e", "i", "o", "u"]

    let result = chars.filter((char) => !vowels.includes(char) && char !== " ")

    return result.length
}


console.log(countConsonants("hello world")); // Expected output: 7

