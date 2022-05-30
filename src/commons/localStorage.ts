/**
 * Localstorage에서 JSON.parse하여 조회
 * @param key
 */
export function getItem(key: string) {
  const rawValue = localStorage.getItem(key);
  if (!rawValue) return null;
  try {
    return JSON.parse(rawValue);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('storageUtil.getItem()', key, rawValue, error);
    return null;
  }
}

/**
 * Localstorage에 JSON.stringify하여 저장
 * @param key
 * @param value
 */
export function setItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeItem(key: string) {
  localStorage.removeItem(key);
}

export function clear() {
  localStorage.clear();
}
