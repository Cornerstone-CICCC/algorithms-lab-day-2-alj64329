// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }

function getQueryParams(str) {

    let queryString = str.split("?")[1]
    let pairs = queryString.split("&")

    let result = {}

    for (let pair of pairs) {
        let words = pair.split("=")
        result[words[0]] = words[1]
    }
    return result
}


