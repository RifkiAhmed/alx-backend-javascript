export default function cleanSet(set, startString) {
  let string = '';
  if (!startString || startString === '') {
    return string;
  }
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      string += (string.length === 0)
        ? element.slice(startString.length) : `-${element.slice(startString.length)}`;
    }
  });
  return string;
}
