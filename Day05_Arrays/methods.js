// Array Methods

// 1) push() : Adds the element at the end

let items = [1, 2, 3, 4, 5];
items.push(6); // adds 6 at the end
console.log(items); // [1,2,3,4,5,6]

// 2) pop() : deletes the element from the end

let items = [1, 2, 3, 4, 5];
items.pop(); // deletes 5 from array
console.log(items); // [1,2,3,4]

// 3) toString() : Converts the array to string
// Note : toString does not change the original array rather it returns new string

let items = ["A", "B", "C", "D", "E"];
items.toString(); // conversion into string
console.log(items);

// 4) concat() : Joins multiple arrays and returns the result

let items1 = ["Apple", "Banana"];
let items2 = ["Mango", "Orange"];
let final_items = items1.concat(items2); // joins item2 with item1
console.log(final_items); // [Apple,Banana,Mango,Orange]

// 5) unshift() : It adds the element at the start

let items = [1, 2, 3, 4, 5];
items.unshift(77); // adds 77 at the start
console.log(items); // [77,1,2,3,4,5]

// 6) shift() : It deletes the element from the start

let items = [1, 2, 3, 4, 5];
items.shift(); // deletes 1 from the array
console.log(items); // [2,3,4,5]

// 7) slice() : returns a particular part of array

// Syntax : slice(startIndex , endIndex)

let items = ["apple", "banana", "orange", "mango", "guava", "papaya"];
console.log(items.slice(1,3)); // [banana,orange]


// 8) splice() : used for adding, deleting and replacing the elements

// Syntax : slice(startIdx , deleteCount, newElement1)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
cricketers.splice(4,2,101,102); // 4 states starting index,
                                // 2 states how many elements you want to delete
                                // 101 , 102 states these are the elements that will be added in place of deleted ones
console.log(numbers); // [1,2,3,4,101,102,7,8]
