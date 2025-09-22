
//Accessing nested object properties safely using optional chaining
//?. - Optional chaining (chay-ning) operator

/*
Rule of thumb:
If the parent object exists but the property is missing → result is undefined.
If the parent object itself is null or undefined → accessing a property throws TypeError, unless you use optional chaining (?.).
*/

const user = {
  name: "Chary",
  address: {
    city: "Hyderabad"
  },
  bankdetails:  {
    name:"SBI", 
    branch:"MG Road",
    account:{
        no:1234567890,
        type:"savings"
    }
  },
   
 
  printDetails: function(){
    //printing user details
    console.log("Inside printDetails method:");
    console.log(this);
    console.log("User Details from the printDetails():");
    console.log(`Name: ${this.name}, City: ${this.address.city}, Bank: ${this.bankdetails.name}, Account No: ${this.bankdetails.account.no}`);
  }
};


let ageEmployee = [20,30,40,50];
console.log(ageEmployee[2]); // accessing an index that exists in the array returns the value
console.log(ageEmployee[4]); // accessing an index that doesn't exist in the array returns undefined
console.log(ageEmployee?.[4]??"Out of Array Range"); // accessing an index that doesn't exist in the array returns undefined, so we use nullish coalescing operator to provide a default value



//steps to access the object properties.
console.log("name:", user.name); // Chary
console.log("city:", user.address.city); // Hyderabad
console.log("account no:", user.bankdetails.account.no); // 1234567890



//accessing the property that doesn't exist
console.log("country:", user.address.country ?? "Unknown Country"); // Undefined


//accessing method of the object.
user.printDetails();

//accessing the method that doesn't exist
//user.scanDetails(); // throws TypeError: user.scanDetails is not a function.
user.scanDetails?.(); // doesn't throw error, but doesn't do anything either.


//accessing property of an object that is null or undefined
//console.log("cibil score : ", user.bankdetails.cibil.score); // throws TypeError: Cannot read properties of undefined (reading 'score')
console.log("cibil score : ", user?.bankdetails?.cibil?.score ?? "CIBIL details not available"); // doesn't throw error, but returns undefined, so we use nullish coalescing operator to provide a default value


const user2 = null;
console.log(user2?.name);
