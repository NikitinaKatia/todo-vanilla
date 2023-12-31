export function getValue<T>(key: string): T | null {
  const localValue = localStorage.getItem(key);
  return JSON.parse(localValue ? localValue : "null");
}

export function setValue<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}
