//This code demonstrates the usage of the sets

//duplicate values are not allowed
//it maintains the insertion order

const employeeAge = new Array(50, 60, 55, 60, 50);
console.log('Length of employeeName array:', employeeAge.length);

for (key of employeeAge) {
  console.log('Employee Name:', key);
}

const empSet = new Set(employeeAge);
console.log('Length of empSet:', empSet.size);

empSet.add(60);

for (let age of empSet) {
  console.log('Employee Age:', age);
}
