const sum = (a, b) => a + b;

const customFunction = (input) => {
  if (typeof input === "number") {
    return "number";
  } else {
    throw new Error("Invalid Input Provided");
  }
};

const fakeFetch = (callback) => {
  setTimeout(() => {
    callback("This a fake fetch response");
  }, 1000);
};

const fetchPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("fetch promise"), 1000);
  });
};

module.exports = { sum, customFunction, fakeFetch, fetchPromise };
