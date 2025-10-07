/*
 *
 * *
 * * *
 * * * *
 */

function printPyramid(...pyraMid) {
  const [numRows, printSymbol] = pyraMid;

  console.log('Number of rows', numRows);
  console.log('Print symbol', printSymbol);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(printSymbol + ' ');
      //console.log(printSymbol+" ");
    }
    process.stdout.write('\n');
    //console.log();
  }
}

printPyramid(6, '*');
