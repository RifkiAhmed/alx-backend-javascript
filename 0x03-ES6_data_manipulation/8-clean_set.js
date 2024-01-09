export default function cleanSet(set, startString) {
  let string = [];
  if (typeof startString === 'string' && startString !== '') {
    string = [...set]
      .filter((element) => element.startsWith(startString))
      .map((element) => element.slice(startString.length));
  }
  return string.join('-');
}
