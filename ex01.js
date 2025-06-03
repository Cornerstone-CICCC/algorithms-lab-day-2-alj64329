// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"

function capitalizeWords(str) {
    let words = str.split(" ")
    let output = []

    for (let i = 0; i < words.length; i++) {
        let chars = words[i].split("")
        chars.splice(0, 1, chars[0].toUpperCase())
        output.push(chars.join(''))
    }
    return output.join(' ')
}