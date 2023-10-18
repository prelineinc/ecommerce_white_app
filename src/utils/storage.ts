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

export const setItem = <T>(key: string, value: T, asJSON = false) => {
  try {
    setLocalStorage(key, value, asJSON);
  } catch {}

  setCookie(key, value, asJSON);
};

export const removeItem = (key: string) => {
  try {
    removeLocalStorage(key);
  } catch {}
  removeCookie(key);
};

export const getLocalStorage = <T>(key: string, asJSON = false): null | T => {
  const value = localStorage?.getItem(key);
  if (asJSON) {
    return JSON.parse(value ?? 'null');
  }
  return value as null | T;
};

export const setLocalStorage = <T>(key: string, value: T, asJSON = false) => {
  let v: T | string = value;
  if (asJSON) {
    v = JSON.stringify(value);
  }

  if (typeof v !== 'string') {
    throw new Error(
      '`value` must either be a `string` or `asJSON` must be set'
    );
  }

  localStorage?.setItem(key, v);
};

export const getOrCreateLocalStorage = <T>(
  key: string,
  defaultValue: T,
  asJSON = false
): T => {
  const returnValue = getLocalStorage<T>(key, asJSON);

  if (returnValue === null) {
    setLocalStorage<T>(key, defaultValue, asJSON);
    return getLocalStorage<T>(key, asJSON) as T;
  }

  return returnValue;
};

export const removeLocalStorage = (key: string) => {
  localStorage?.removeItem(key);
};


export const getCookie = <T>(key: string, asJSON = false): null | T => {
  const cookie = document?.cookie
    ?.split(';')
    ?.find((cookie) =>
      cookie?.trim()?.startsWith(`${encodeURIComponent(key)}=`)
    )
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

export const setCookie = <T>(
  key: string,
  value: T,
  asJSON = false,
  // Default to 1 year
  //expires: DateTime = DateTime.now().plus({ years: 1 }),
  // Default to applying cookie to whole domain
  path = '/',
  // `lax` in this context is usually the browser default. It allows for cookies
  // to be used on first cross-origin load, as opposed to `strict`
  samesite: 'lax' | 'strict' | 'none' = 'lax',
  // Secure specifies that the cookie can only be passed over HTTPS
  secure = false
): void => {
  let v: T | string = value;
  if (asJSON) {
    v = JSON.stringify(v);
  }

  if (typeof v !== 'string') {
    throw new Error(
      '`value` must either be a `string` or `asJSON` must be set'
    );
  }
  let cookie = `${encodeURIComponent(key)}=${encodeURIComponent(
    v as string
  )}; expires=${expires.toHTTP()}; samesite=${samesite}; path=${path}`;
  if (secure) {
    cookie += '; secure';
  }
  document.cookie = cookie;
};

export const removeCookie = (key: string) => {
  document.cookie = `${encodeURIComponent(
    key
  )}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};
