// eslint-disable-next-line consistent-return
export default function cleanSet(set, startString) {
  let res = '';
  if (!startString || !startString.length) return res;
  for (const el of set) {
    if (el && el.startsWith(startString)) {
      res += `${el.slice(startString.length)}-`;
    }
  }
  return res.slice(0, res.length - 1);
}
