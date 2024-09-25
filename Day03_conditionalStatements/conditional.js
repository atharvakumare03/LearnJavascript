// Conditional statements

// 1) if 

let a = 7

if(a>5) //checks whether value of a is greater than 5 if yes it logs below message
{
    console.log("Value of a is greater")
} 

// 2) if-else

let age = 20

if(age > 18) //checks whether age is greater than 18 or not
{
    console.log("you can vote")
}
else //if age is not greater than 18 it logs below message
{
    console.log("you cannot vote")
}

// 3) else-if

let score = 61

if(score >= 75 && score<= 100)
{
    console.log("Distinction")
}

else if(score >= 60 && score <= 74) //used to check multiple conditions
{
    console.log("First Class")
}

else if(score >= 35 && score <= 59)
{
    console.log("Second Class")
}

else
{
    console.log("Fail")
} 
