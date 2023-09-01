export function setCache(key: string, value?: any): void {
  if (typeof window !== 'undefined') {
    if (value) {
      const limit = 20000;
      if (value.length > limit) {
        console.log('too big - ', value);

        // TODO - If needed we can add localforage to act like a database inside the browser to store big data
        // localforage.setItem(key, value);
      } else localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }
}

export function getCache(key: string) {
  if (typeof window !== 'undefined') {
    const cached = JSON.parse(localStorage.getItem(key) || '{}');
    return cached;
  }
}
