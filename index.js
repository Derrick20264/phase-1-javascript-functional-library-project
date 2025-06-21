function isArrayOrObject(collection) {
  return Array.isArray(collection) ? collection : Object.values(collection);
}

function myEach(collection, callback) {
  const values = isArrayOrObject(collection);
  for (let i = 0; i < values.length; i++) {
    callback(values[i]);
  }
  return collection;
}

function myMap(collection, callback) {
  const values = isArrayOrObject(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    result.push(callback(values[i], i, collection));
  }
  return result;
}

function myReduce(collection, callback, acc) {
  const values = isArrayOrObject(collection);
  let startIndex = 0;
  if (acc === undefined) {
    acc = values[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }
  return acc;
}

function myFind(collection, predicate) {
  const values = isArrayOrObject(collection);
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) return values[i];
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const values = isArrayOrObject(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) result.push(values[i]);
  }
  return result;
}

function mySize(collection) {
  const values = isArrayOrObject(collection);
  return values.length;
}

function myFirst(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
