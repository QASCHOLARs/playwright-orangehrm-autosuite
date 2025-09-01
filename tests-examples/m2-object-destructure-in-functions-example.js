//This code demonstrates the usage of destructure objects in the functions.
const employeeDetails = {
  name: 'John',
  age: 30,
  department: 'IT',
  duration: 4,
};

checkPromotion(employeeDetails);
console.log('employee details', employeeDetails);

function checkPromotion({ name, duration }) {
  console.log('Employee Name', name);
  console.log('Duration', duration);

  if (duration >= 5) {
    employeeDetails.eligibleforPromtion = true;
    //delete employeeDetails.department
    console.log('Eligible for promotion');
  } else {
    employeeDetails.eligibleforPromtion = false;
    console.log('Not eligible for promotion');
  }
}
