// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2

function countWordOccurrences(str, key) {
    let arr = str.split(" ")
    let count = 0

    for (let word of arr) {
        if (word === key) {
            count++
        }
    }
    return count
}