// Exercise 7: Write a function `validateEmail` that takes a string as an email
// and returns true if the email is valid, and false otherwise. Use basic validation
// (e.g., the presence of "@" and a ".").
// Example: validateEmail("test@example.com") should return true.

console.log(validateEmail("test@example.com")); // Expected output: true
console.log(validateEmail("invalid-email.com")); // Expected output: false

function validateEmail(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "@") {
            let chars = str.substring(i, str.length)
            if (chars.includes(".")) {
                return true
            }
        }
    }
    return false
}