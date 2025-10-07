function createMultiplier(multiplier) {
  return function (number) {
    console.log(number * multiplier);
  };
}

const double = createMultiplier(2);
double(5);
