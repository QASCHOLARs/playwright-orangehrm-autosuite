
//Variables declared with let keyword are block scoped.

const { read } = require("fs");

let counter =100;

function readGlobal() {
    console.log("accessing the global counter: " + counter); //accessing global variable
}

function resetGlobal() {
    counter=0;
    console.log("resetting the global counter: " + counter); //accessing global variable
}

function unModify()
{
    let counter=100; // local variable with the same name, but used with let. So it will not affect the global variable
    console.log("local variable with the same name: " + counter); //accessing local variable
}

//local variable inside the block.
function blockScope() {
    if (counter==0) {
        let counter=200;
        console.log("Accessing local variable inside the block: " + counter); //accessing local variable
    }
    console.log("Accessing local variable outside the block: " + counter); //accessing local variable
}

//calling the functions
console.log ("Calling readGlobal() function");
readGlobal();
console.log ("Calling resetGlobal() function");
resetGlobal();
console.log ("Calling unModify() function");
unModify();
console.log ("Calling blockScope() function");
blockScope();
