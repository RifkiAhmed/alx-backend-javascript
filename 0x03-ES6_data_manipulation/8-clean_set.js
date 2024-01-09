export default function cleanSet(set, startString) {
  let strings = [];
  if (set instanceof Set && typeof startString === 'string' && startString !== '') {
    strings = [...set.values()]
      .filter((element) => element.startsWith(startString))
      .map((element) => element.substring(startString.length));
  }
  return strings.join('-');
}
