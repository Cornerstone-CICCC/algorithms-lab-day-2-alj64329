// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"

function convertToCamelCase(str) {
    let words = str.split("_")
    let camelCase = []

    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            camelCase.push(words[i])
        } else {
            let chars = words[i].split("")
            chars.splice(0, 1, chars[0].toUpperCase())
            camelCase.push(chars.join(''))
        }
    }
    return camelCase.join('')
}