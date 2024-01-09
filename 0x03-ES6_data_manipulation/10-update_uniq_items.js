export default function updateUniqueItems(map) {
  const array = Array.from(map.keys());
  array.map((element) => map.get(element) === 1 && map.set(element, 100));

  return map;
}
