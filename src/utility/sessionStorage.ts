// High-level data handlers using multiple storage mechanisms, including local
// storage and cookies at the moment.

import { DateTime } from 'luxon'
import { HOMEPAGE_SAVED_VIEW_IDS_KEY } from '../constant/localStorage'
import { logErrorAndCheckStatus } from './errors'

// For fetch, prioritize local storage over cookie
export const getItem = <T>(key: string, asJSON = false): null | T => {
  let value: null | T = null
  try {
    value = getLocalStorage<T>(key, asJSON)
  } catch (e) {
    console.error(e)
  }

  // If we failed to find in local storage, check the cookie
  if (!value) {
    value = getCookie(key, asJSON)
  }

  return value
}

export const setItem = <T>(key: string, value: T, asJSON = false) => {
  try {
    setLocalStorage(key, value, asJSON)
  } catch (e) {
    console.log('setItem', e)
  }
  console.log('setItem', value);
  setCookie(key, value, asJSON)
}

export const removeItem = (key: string) => {
  try {
    removeLocalStorage(key)
  } catch (e) {
    console.log('removeItem', e)
  }
  removeCookie(key)
}

// Local storage handlers
export const getLocalStorage = <T>(key: string, asJSON = false): null | T => {
  const value = localStorage?.getItem(key)
  if (asJSON) {
    return JSON.parse(value ?? 'null')
  }
  return value as null | T
}

export const setLocalStorage = <T>(key: string, value: T, asJSON = false) => {
  let v: T | string = value
  if (asJSON) {
    v = JSON.stringify(value)
  }

  if (typeof v !== 'string') {
    throw new Error('`value` must either be a `string` or `asJSON` must be set')
  }
console.log('setItem',v);
  localStorage?.setItem(key, v)
}

export const getOrCreateLocalStorage = <T>(key: string, defaultValue: T, asJSON = false): T => {
  const returnValue = getLocalStorage<T>(key, asJSON)
  // console.log({ key, defaultValue, returnValue });
  if (returnValue === null || typeof returnValue !== typeof defaultValue) {
    if (typeof returnValue !== typeof defaultValue) {
      logErrorAndCheckStatus(
        `Previously stored value: ${
          returnValue === '' ? '(empty string)' : returnValue
        } had a type (${typeof returnValue}) that did not match the new default value type: ${typeof defaultValue},
        so we are overwriting local storage with this new preferred type and default: ${defaultValue}`
      )
    }
    setLocalStorage<T>(key, defaultValue, asJSON)
    // It's okay to assert that what we fetch is `T` since we just set it
    return getLocalStorage<T>(key, asJSON) as T
  }

  return returnValue
}

export const removeLocalStorage = (key: string) => {
  localStorage?.removeItem(key)
}

// Cookie handlers
export const getCookie = <T>(key: string, asJSON = false): null | T => {
  const cookie = document?.cookie
    ?.split(';')
    ?.find((cookie) => cookie?.trim()?.startsWith(`${encodeURIComponent(key)}=`))
    ?.split('=')?.[1]
    ?.trim()
  if (!cookie) {
    return null
  }
  const value = decodeURIComponent(cookie)
  if (asJSON) {
    return JSON.parse(value)
  }
  return value as T
}

export const setCookie = <T>(
  key: string,
  value: T,
  asJSON = false,
  // Default to 1 year
  expires: DateTime = DateTime.now().plus({ years: 1 }),
  // Default to applying cookie to whole domain
  path = '/',
  // `lax` in this context is usually the browser default. It allows for cookies
  // to be used on first cross-origin load, as opposed to `strict`
  samesite: 'lax' | 'strict' | 'none' = 'lax',
  // Secure specifies that the cookie can only be passed over HTTPS
  secure = false
): void => {
  let v: T | string = value
  if (asJSON) {
    v = JSON.stringify(v)
  }

  if (typeof v !== 'string') {
    throw new Error('`value` must either be a `string` or `asJSON` must be set')
  }
  let cookie = `${encodeURIComponent(key)}=${encodeURIComponent(
    v as string
  )}; expires=${expires.toHTTP()}; samesite=${samesite}; path=${path}`
  if (secure) {
    cookie += '; secure'
  }
  document.cookie = cookie
}

export const removeCookie = (key: string) => {
  // Set expiration date to the past to "delete" the cookie
  document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
}

//session handlers
export const getSessionStorage = <T>(key: string, asJSON = false) => {
  const value = sessionStorage?.getItem(key)
  if (asJSON) {
    return JSON.parse(value ?? 'null')
  }
  return value as null | T
}

export const setSessionStorage = <T>(key: string, value: T) => {
  let v: T | string = value
  v = JSON.stringify(value)
  if (typeof v !== 'string') {
    throw new Error('`v` must either be a JSON or object')
  }
  sessionStorage.setItem(key, v)
}

export const removeSessionStorage = (key: string) => {
  sessionStorage.removeItem(key)
}
