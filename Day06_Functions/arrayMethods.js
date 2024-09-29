// Array methods

// 1) Map :

/* 

- Creates a new array with results of some operation

- The value its callback returns are used to form new array

- Syntax : arr.map(callbackFunction(value,index,array))

*/

// 2) Filter :

/* 

- Creates a new array of elements that give true for a condition or filter

- Example : all even elements

*/

const newArr = arr.Filter((val)=>
{
    return val % 2 == 0;
}); 

// 3) Reduce :

/*
- Performs some operations and reduces the array to a single value.

- Example : Sum of all the numbers in array
*/

let arr = [1, 2, 3, 4, 5];

const output = arr.reduce((previous,current) =>

    {
        return previous + current;
    }

);

console.log(output);
