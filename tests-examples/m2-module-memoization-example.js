// Pretend this is expensive
function slowSquare(n) {
  console.log("Calculating...");
  // busy-wait ~100ms to simulate heavy work
  const end = Date.now() + 100;
  while (Date.now() < end) {}
  return n * n;
}

module.exports = { slowSquare };
