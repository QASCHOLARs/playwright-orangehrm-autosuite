function computeTotalPrice(product, quantity, price) {
  console.log('Type of quantity', typeof quantity);
  console.log('Type of price', typeof price);

  // Convert quantity and price to numbers
  let numQuantity = +quantity;
  let numPrice = +price;

  console.log('Type of quantity', typeof numQuantity);
  console.log('Type of price', typeof numPrice);

  // Check if conversion was successful
  if (isNaN(numQuantity) || isNaN(numPrice)) {
    throw new Error('Invalid quantity or price');
  }

  // Calculate total price
  return numQuantity * numPrice;
}

function displayMessage(name, message) {
  console.log(typeof name);
  console.log(typeof message);

  strname = toString(name);
  strname = String(name);

  console.log(typeof strname);
  console.log(typeof message);
  console.log(strname + message);
}

let product = 'iPhone';
let quantity = 2;
let price = '1000';

//let totalPrice = computeTotalPrice(product, quantity, price);
//console.log("Total price:", totalPrice);

//let para1= 23;
//let par2 ="How are you?"
//displayMessage(para1, par2);

//Number or unary + - converting to Number
//String or toString() - converting to string
//Boolean

//let num = 42;
//let boolnum = Boolean(num);
//console.log(boolnum);

//let str= "42";
//console.log(Number(str));

/*
let productName = null;

if (productName)
{
    console.log("Its a laptop");
}
    else
    {
    console.log("Its not a laptop");
}

*/

let num = 42;
let str = '5';

let result = num + str;
console.log(result);
