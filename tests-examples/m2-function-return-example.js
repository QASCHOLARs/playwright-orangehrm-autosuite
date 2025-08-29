//This code demonstrates the use of return statement

function getEmployeeDetails()
{
    return {name: "John",
            age : 40,
            designation: "Software Engineer"};
}


function getEmployeeID()
{
    return 1010;
}

console.log("Received multiple values using the return");
let employeeDetails = getEmployeeDetails();
console.log(employeeDetails);

console.log("Received single value using the return");
let employeeID = getEmployeeID();
console.log(employeeID);
