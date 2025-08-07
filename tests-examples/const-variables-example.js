//Variables declared with const keyword are block scoped.
// The value of a const variable cannot be changed once it is assigned.

const pi= 3.14;

function readGlobal() {
    console.log("accessing the global counter: " + pi); //accessing global variable
}

function resetGlobal() {
    pi=0;
    console.log("resetting the global counter: " + pi); //accessing global variable
}   

function unModify() {
    const pi=100; // local variable with the same name, but used with let. So it will not affect the global variable
    console.log("local variable with the same name: " + pi); //accessing local variable
}
function blockScope() {
    if (pi==3.14) {
        const pi=200;
        console.log("Accessing local variable inside the block: " + pi); //accessing local variable
    }
    console.log("Accessing local variable outside the block: " + pi); //accessing local variable
}


//calling the functions
console.log ("Calling readGlobal() function");
readGlobal();
console.log ("Calling resetGlobal() function");
//resetGlobal();
console.log ("Calling unModify() function");
unModify();
console.log ("Calling blockScope() function");
blockScope();   
