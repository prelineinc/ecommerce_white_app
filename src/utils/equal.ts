export const isEqual = (a: any, b: any): boolean => {
  if (a === b) {
    return true;
  }

  if (a == null || b == null || (isPrimitive(a) && isPrimitive(b))) {
    return a !== a && b !== b;
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (const key in a) {
    if (!(key in b)) {
      return false;
    }
    if (!isEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
};

export const isPrimitive = (obj: any): boolean => {
  return obj !== Object(obj);
};
