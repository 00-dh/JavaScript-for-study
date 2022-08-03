const calculator = {
  add: function (a, b) {
    return a + b;
  },
  min: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const addResult = calculator.add(2, 2);
const minResult = calculator.min(2, 2);
const timesResult = calculator.times(2, 2);
const divResult = calculator.div(2, 2);
const powerResult = calculator.power(2, 2);

console.log(addResult);
console.log(minResult);
console.log(timesResult);
console.log(divResult);
console.log(powerResult);
