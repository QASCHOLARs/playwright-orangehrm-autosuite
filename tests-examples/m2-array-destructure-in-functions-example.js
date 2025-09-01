//This code demonstrates the usage of the array destructure in the functions

function printPyramid([rows, type]) {
  if (type === 'right') {
    for (let i = 1; i <= rows; i++) {
      console.log(' '.repeat(rows - i) + '*'.repeat(i));
    }
  } else {
    for (let i = 1; i <= rows; i++) {
      console.log('*'.repeat(i));
    }
  }
}

let leftarray = [5, 'right', 'both'];
let rightarray = [5, 'left', 'both'];

//Call the functions with the arrays in the arguments.
printPyramid(leftarray);
printPyramid(rightarray);
