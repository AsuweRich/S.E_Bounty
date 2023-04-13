export default function groceriesList() {
  const arr = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const mp = new Map();
  // eslint-disable-next-line no-unused-vars
  for (const el of arr) {
    mp.set(el[0], el[1]);
  }
  return mp;
}
