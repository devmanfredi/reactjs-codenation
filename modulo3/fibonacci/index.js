"use strict";

let fiboArray = [0, 1];

const fibonacci = () => {
  const limit = 350;
  while (fiboArray[fiboArray.length - 1] < limit) {
    fiboArray.push(
      fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2]
    );
  }
  return fiboArray;
};

const isFibonnaci = (num) => {
  return fiboArray.includes(num);
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
