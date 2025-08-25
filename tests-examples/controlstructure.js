
//conditionals 
// if, if else, else if, switch

//This code demonstrates if condition

/* let age = 10;
if (age >= 60) {
    console.log("You are an adult");
} else if (age < 60 && age >= 18) {
    console.log("You are a middle-aged");
} else {
    console.log("You are minor");
} */


/* let age = 60;

switch (age)
{
    case 60:
        console.log("You are an adult");
        break;
    case 18:
        console.log("You are a middle-aged");
        break;
    default:
        console.log("You are minor");
        break;
}
console.log ("moved out of the switch")





//loops

//for,while.do while

// This code demonstrates a for loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration: " + i);
}
//This code demonstrates while loop 

let i=10;
while (i < 5) {
    console.log("Counter: " + i);
    i++;
}
console.log("Exited while loop");

// for, while, do while

let j=0;
do {
    console.log("Counter: " + j);
    j++;
} while (j < 5);
console.log("Exited do while loop");
 */


for (let tableCount=1; tableCount<=3; tableCount++) {
    console.log("Table of " + tableCount);

    for (let i=1; i<=10; i++) {
        console.log(tableCount + " x " + i + " = " + tableCount*i);
        
    }
    }


console.log (null == undefined);