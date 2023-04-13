export default function iterateThroughObject(reportWithIterator) {
  let n = reportWithIterator.next();
  let res = '';

  while (!n.done) {
    res += `${n.value} | `;
    n = reportWithIterator.next();
  }
  return res.slice(0, res.length - 3);
}
