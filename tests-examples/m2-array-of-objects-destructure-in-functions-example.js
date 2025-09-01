
const employeeDetails = [
  { name: 'John', age: 30, department: 'IT', duration: 5 },
  { name: 'Jane', age: 25, department: 'HR', duration: 3 },
  { name: 'Jack', age: 35, department: 'Finance', duration: 7 },
];

checkPromotion(employeeDetails);
console.log('employee details', employeeDetails);

function checkPromotion({ name, duration }) {
  console.log('Employee Name', name);
  console.log('Duration', duration);

  if (duration >= 5) {
    employeeDetails.eligibleforPromtion = true;
    console.log('Eligible for promotion');
  } else {
    employeeDetails.eligibleforPromtion = false;
    console.log('Not eligible for promotion');
  }
}
