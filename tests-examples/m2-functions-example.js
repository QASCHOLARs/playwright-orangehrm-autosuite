
let firstNumber =10;
let secondNumber=20;


MessageDisplay('Before swapping:', null); //calling function
MessageDisplay('First Number:', firstNumber);
MessageDisplay('Second Number:', secondNumber);



[firstNumber, secondNumber] = [secondNumber, firstNumber];

MessageDisplay('After swapping:',null);
MessageDisplay('First Number:', firstNumber);
MessageDisplay('Second Number:', secondNumber);

function MessageDisplay(message,value) // function declaration //called function
{
    console.log(message, value); // function definition
    console.log("Done"); 
}
