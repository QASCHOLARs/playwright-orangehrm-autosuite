//This code demonstrates the use of closures in JavaScript.
    function outerFunction() {
    let outerVariable = 'I am from outer function';

    //closure function
    function innerFunction() {
      console.log(outerVariable);
      outerVariable = 'Trying to access outer variable directly';
      console.log(outerVariable);
    }

    return innerFunction;
  }

  const closure = outerFunction();
  closure();

  //closure.outerVariable = 'Trying to access outer variable directly'; // This will not work
  //console.log(closure.outerVariable); // undefined, as outerVariable is not accessible directly

 
