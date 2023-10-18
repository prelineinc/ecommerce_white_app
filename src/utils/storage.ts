export const getItem = <T>(key: string, asJSON = false): null | T => {
  let value: null | T = null;
  try {
    value = getLocalStorage<T>(key, asJSON);
  } catch {}
  if (!value) {
    value = getCookie(key, asJSON);
  }

  return value;
};

export const getLocalStorage = <T>(key: string, asJSON = false): null | T => {
  const value = localStorage?.getItem(key);
  if (asJSON) {
    return JSON.parse(value ?? 'null');
  }
  return value as null | T;
};

export const getCookie = <T>(key: string, asJSON = false): null | T => {
  const cookie = document?.cookie
    ?.split(';')
    ?.find((x) => x?.trim()?.startsWith(`${encodeURIComponent(key)}=`))
    ?.split('=')?.[1]
    ?.trim();
  if (!cookie) {
    return null;
  }
  const value = decodeURIComponent(cookie);
  if (asJSON) {
    return JSON.parse(value);
  }
  return value as T;
};
