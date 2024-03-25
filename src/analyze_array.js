export default analyzeArray = function (anArray) {
  return {
    average: sum(anArray) / anArray.length,
    min: Math.min(...anArray),
    max: Math.max(...anArray),
    length: anArray.length,
  };
};

function sum(array) {
  // use reduce() method to find the sum
  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return sum;
}
