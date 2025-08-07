//counter variable declared with var keyword, and initialized with value 100
//var is global or function scope depends on where it is declared
//if declared outside of any function, it is global
//if declared inside a function, it is function scoped
//in this case, it is global as it is declared outside of any function

//counter variable declared with var keyword, and initialized with value 100
var counter =100;

//read global variable
function readGlobal() {
    console.log("accessing the global counter: " + counter); //accessing global variable
}

//reset global variable
function resetGlobal() {
    counter=0;
    console.log("resetting the global counter: " + counter); //accessing global variable
}

// local variable with the same name
function unModify()
{
    var counter=100; // local variable with the same name, but used with var. So it will not affect the global variable
    console.log("local variable with the same name: " + counter); //accessing local variable
}

//local variable inside the block.
function blockScope() {
    if (counter==undefined) {
        var counter=200;
        console.log("Accessing local variable inside the block: " + counter); //accessing local variable
    }
    console.log("Accessing local variable outside the block: " + counter); //accessing local variable
}





// calling the functions

readGlobal(); // accessing global variable
resetGlobal(); // resetting global variable
unModify(); // accessing local variable
blockScope(); // accessing local variable

