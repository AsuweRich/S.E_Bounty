export default function hasValuesFromArray(set, arr) {
  for (const el of arr) {
    if (!set.has(el)) return false;
  }
  return true;
}
