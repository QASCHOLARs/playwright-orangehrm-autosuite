//This code demonstrates the use of lexical scoping
    function outerFunction() {
    let outerVariable = 'I am variable from outer function';

    //inner function
    function innerFunction() {
      let innerVariable= 'Im variable from inner function';
      console.log(innerVariable);
      console.log(outerVariable);
      }
  innerFunction();
  console.log(outerVariable);
  
  }

 outerFunction();



