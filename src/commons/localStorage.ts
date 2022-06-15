export function getItem(key: string): string | null {
  let rawValue;
  if (typeof window !== 'undefined') {
    rawValue = localStorage.getItem(key);
  }
  if (!rawValue) return null;
  try {
    return rawValue;
  } catch (error) {
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
