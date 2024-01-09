export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    map.forEach((value, key) => value === 1 && map.set(key, 100));
    return map;
  }
  throw new Error('Cannot process');
}
