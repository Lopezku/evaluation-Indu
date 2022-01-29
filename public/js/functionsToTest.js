/* eslint-disable no-unused-vars */
export const returnAnObject = (...args) => {
  let response = {};
  if (args.length) {
    let index = 0;
    args.forEach((arg) => {
      response[index] = arg;
      index++;
    });
  } else {
    response = "No argument was given to the function.";
  }
  return response;
};
/* eslint-disable no-unused-vars */
export const multiplyAllByTwo = (arrayOfNumbers) => {
  let response;
  if (
    /* eslint-disable-next-line */
    Array.isArray(arrayOfNumbers)
  ) {
    response = arrayOfNumbers.map((val) => val * 2);
  } else {
    response = "The argument is not an Array of numbers";
  }
  return response;
};
