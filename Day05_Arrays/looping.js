/* Arrays in JS

- It is a collection of elements

- Array is itself of object type

- Creation of array :

        let arr = [70,43,423,95,48];

        Here "arr" is the name of array which contains the elements as 70,43....

**Note : Strings are ----> Immutable
         Arrays are -----> Mutable

*/

// Looping over array

/* 

- Prints all the elements of array
- array length = last index + 1

*/

// 1) looping using for loop

let arr = ["A", "B", "C", "D", "E"];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]); // logs all the elements of array
} 

// 2) looping using for-of loop

let arr = [1, 2, 3, 4, 5];

for(let element of arr){
    console.log(element); // logs all the elements of array
}
