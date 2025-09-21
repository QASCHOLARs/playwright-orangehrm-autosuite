/*Rule of thumb:
If you want to pick specific elements → destructure in parameters.
If you want to process the entire array → accept array as users, then destructure inside. */

const employeeDetails = [
  { name: 'John', age: 30, department: 'IT', duration: 5 },
  { name: 'Jane', age: 25, department: 'HR', duration: 3 },
  { name: 'Jack', age: 35, department: 'Finance', duration: 7 },
];

//checkPromotion(employeeDetails);
console.log('employee details', employeeDetails);

//Answer 1:
/*
function checkPromotion([{ name: n1, age: a1 }, { name: n2, age: a2 }, {name: n3, age: a3}]) {
  console.log(n1, a1, n2, a2, n3, a3);
}
*/

//Answer 2:
/*
function checkPromotion(promotionArray) {
  promotionArray.forEach(({ name, duration }) => {
    console.log(name, duration);
    if (duration>=5) {
      console.log(name, 'is eligible for promotion');
    } else {
      console.log(name, 'is not eligible for promotion');
    }
  });
}
*/

//Answer 3:
/*
function checkPromotion(promotionArray) {
  let arrayLength = promotionArray.length;
  for (let i=0;i<arrayLength;i++) {
    console.log(promotionArray[i].name);
    console.log(promotionArray[i].duration);
    if (promotionArray[i].duration>=5) {
      console.log(promotionArray[i].name, 'is eligible for promotion');
      promotionArray[i].promotionEligible = true;
    } else {
      console.log(promotionArray[i].name, 'is not eligible for promotion');
      promotionArray[i].promotionEligible = false;
    }
  }
}
*/

//Answer 4:
/*
function checkPromotion(promotionArray) {
  for ({ name, duration } of promotionArray) {
    console.log(name, duration);
  }
*/
//Answer 5;
function checkPromotion(promotionArray) {
  for (key in promotionArray) {
    // console.log(key, promotionArray[key]);
    const { name, duration } = promotionArray[key];
    console.log(name, duration);
    if (duration >= 5) {
      console.log(name, 'is eligible for promotion');
      promotionArray[key].promotionEligible = true;
    } else {
      console.log(name, 'is not eligible for promotion');
      promotionArray[key].promotionEligible = false;
    }
  }
}

checkPromotion(employeeDetails); // Alice Bob
console.log(employeeDetails);
