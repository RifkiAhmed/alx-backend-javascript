export default function updateUniqueItems(map) {
  const array = Array.from(map.keys());
  array.forEach((element) => {
    if (map.get(element) === 1) {
      map.set(element, 100);
    }
  });

  return map;
}
