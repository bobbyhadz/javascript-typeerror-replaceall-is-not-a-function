// TypeError: replaceAll is not a function in JavaScript

// EXAMPLE 1 - Convert the value to a String before calling `replaceAll()`

const str = 100;

const result = String(str).replaceAll('0', '9');
console.log(result); // 👉️ "199"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Conditionally check if the value is a String before calling `replaceAll()`

// const value = null;

// const result =
//   typeof value === 'string'
//     ? value.toString().replaceAll('0', '9')
//     : '';
// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 3 - Checking if the value is a string with an `if` statement

// let value2 = 'abc';

// if (typeof value2 === 'string') {
//   value2 = value2.replaceAll('abc', 'xyz');
// }
// console.log(value2); // 👉️ 'xyz'

// ------------------------------------------------------------------

// // EXAMPLE 4 - Alternatives to the `replaceAll()` method

// const str = 'a__b';

// const result = str.replace(/_/g, '#');
// console.log(result); // 👉️ "a##b"

// ------------------------------------------------------------------

// // EXAMPLE 5 - Alternatively, use the `String.split()` and `Array.join()` methods

// const str = 'a__b';

// const result = str.split('_').join('#');
// console.log(result); // 👉️ "a##b"
