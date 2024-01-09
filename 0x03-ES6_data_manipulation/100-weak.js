const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const currentCount = weakMap.get(endpoint);
    weakMap.set(endpoint, currentCount + 1);

    if (currentCount + 1 >= 5) {
      throw new Error('Endpoint load is high');
    }
  }

  return weakMap.get(endpoint);
}

export { queryAPI, weakMap };
