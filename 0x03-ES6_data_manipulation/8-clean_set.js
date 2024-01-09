export default function cleanSet(set, startString) {
  let string = [];
  if (set instanceof Set && typeof startString === 'string' && startString !== '') {
    string = [...set]
      .filter((element) => element.startsWith(startString))
      .map((element) => element.substring(startString.length));
  }
  return string.join('-');
}
