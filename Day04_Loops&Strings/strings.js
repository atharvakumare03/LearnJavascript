// Strings in js

/* String is a sequence of characters used to represent the text.

There are two ways of creating a string :

1. let str = "Cricket" // Double quotes
2. let str = 'Cricket' // Single quotes

Accessing individual characters from string :

let str = "Cricket"
console.log(str[0]) // outputs ------> C

*/

// String Methods 

// 1) toUpperCase()

let str = "salman khan";
console.log(str.toUpperCase()); // salman khan -------> SALMAN KHAN

// 2) toLowerCase()

let str = "MS DHONI";
console.log(str.toLowerCase()); // MS DHONI ----------> ms dhoni 

// 3) trim()

let str = "      Atharva Kumare  ";
console.log(str.trim()); /* removes the whitespaces from starting and ending of string 
                            but not the one in between the string*/ 

// 4) slice()

let str = "ShivShakti";
console.log(str.slice(0,4)) /* outputs shiv because we have defined start from index 0 and end at 4
                               the end index which we have defined is not logged that means end_index - 1 is logged */

// 5) Concatenation of two strings

// 1st Way :

let str1 = "Hello";
let str2 = "Coders";
console.log(str1.concat(str2)); // Concatenates str2 to str1
                                // outputs HelloCoders 

// 2nd Way :

let str1 = "Nice";
let str2 = "Weather";
console.log(str1+str2); // with the use of +
                        // outputs NiceWeather
