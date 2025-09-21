//This code demonstrates the use of closures in JavaScript.
    function outerFunction() {
    let outerVariable = 'This is outerside variable';

    //closure function
    function innerFunction() {
      console.log(outerVariable);
      //outerVariable = 'Trying to access outer variable directly';
     // console.log(outerVariable);
     let innervariable = "This is inner variable";
     console.log(innervariable);  
    }
    //innerFunction();
    return innerFunction;
  }



  const closure = outerFunction();
closure();

//console.log(closure.outerVariable);





  //closure.outerVariable = 'Trying to access outer variable directly'; // This will not work
  //console.log(closure.outerVariable); // undefined, as outerVariable is not accessible directly

 
