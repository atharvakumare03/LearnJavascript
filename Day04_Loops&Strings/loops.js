// Loops

// 1) for loop

for(i = 1; i <= 5; i++) // syntax-----> (initialization; stopping condition; updation)
{
    console.log("Hello Coders!!!"); // logs the messsage 5 times
}

// 2) while loop

let i = 1; // initialization
while(i <= 5) // stopping condition
{
    console.log("Hello Coders!!!"); // logs the message 5 times
    i++; // updation
}

// 3) do-while loop

let i = 1; // initialization
do
{
    console.log("Hello Coders!!!");
    i++; // updation
} while(i <= 5); // stopping condition 

// 4) for of loop

let str = "Coders";

for(let i of str) // iterates and logs each character of strings
{
    console.log("i = ",i);
}

// 5) for in loop

let student = {
    name : "Atharva",
    age : 20,
    cgpa : 7.98
};

for (i in student) // only returns the key of object
{
    console.log(i);
}





