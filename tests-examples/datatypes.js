//This code demonstrates the data types supported by JavaScript
// and how to use them in a simple example. 

    let Name = "First World"; // String
    let Population = 1000000; // Number
    let IsDeveloped = true; // Boolean
    let GDP =null; //Object - declared, and null is a special value that represents the absence of a value
    let Currency; // Undefined - declared, but not initialized, So JS will treat it as undefined
    let Debt = 123n; //bigint - anything beyond 2 power 53-1 are represented as BigInt

    //let firstName = Symbol('firstName');
    //console.log(firstName.toString);


    console.log(typeof Name); // Output: string
    console.log(typeof Population); // Output: number
    console.log(typeof IsDeveloped); // Output: boolean
    console.log(typeof GDP); // Output: object
    console.log(typeof Currency); // Output: undefined
    console.log(typeof Debt); // Output: bigint


