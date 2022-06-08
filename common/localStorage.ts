export function getItem(key: string) {
  let rawValue;
  if (typeof window !== 'undefined') {
    rawValue = localStorage.getItem(key);
  }
  if (!rawValue) return null;
  try {
    return rawValue;
  } catch (error) {
    console.error('storageUtil.getItem() 함수 에러났음 : ', key, rawValue, error);
    return null;
  }
}

export function setItem(key: string, value: any) {
  localStorage.setItem(key, value);
}

export function removeItem(key: string) {
  localStorage.removeItem(key);
}

export function clear() {
  localStorage.clear();
}
