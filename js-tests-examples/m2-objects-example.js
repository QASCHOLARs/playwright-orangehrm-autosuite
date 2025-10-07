//This example demonstrates object destructuring in JavaScript

let code = Symbol('code');
console.log('The value of the symbol', code);
console.log('The value of the symbol', typeof code);
console.log('The value of the symbol', code.toString());

const bookDetails = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925,
  [code]: '12345',
  99: 'Ten',
  11: 'Eleven',
  1: 'One',
  displayInfo: function () {
    const { title, author, year } = this;
    console.log(`Title: ${title}`);
    console.log(`Author: ${author}`);
    console.log(`Year: ${year}`);
    console.log(`Code: ${this[code]}`);
  },
};

const { title, author: myauthor, year: myyear } = bookDetails;

console.log(`Title: ${title}`);
console.log(`Author: ${myauthor}`);
console.log(`Year: ${myyear}`);
/*
for (const attribute in bookDetails) {
  //console.log (attribute);
  //console.log (bookDetails[attribute]);
  console.log(`Key: ${attribute}, Value: ${bookDetails[attribute]}`);
}
  */

console.log(bookDetails.hasOwnProperty('title'));
console.log('100' in bookDetails);
