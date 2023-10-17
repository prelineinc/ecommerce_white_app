export function groupArrayBy<T>(
  list: T[],
  keyGetter: (arg: T) => string
): T[][] {
  const map = new Map<string, T[]>();
  list.forEach((x) => {
    const key = keyGetter(x);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [x]);
    } else {
      collection.push(x);
    }
  });
  return [...map.values()];
}
