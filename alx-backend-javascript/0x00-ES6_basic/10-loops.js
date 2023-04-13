export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (const value of array) {
    res.push(appendString + array[array.indexOf(value)]);
  }

  return res;
}
