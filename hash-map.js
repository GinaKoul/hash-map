import { LinkedList } from "./linked-list.js";

export const HashMap = function () {
  let capacity = 16;
  const loadFactor = 0.75;
  let bucketsLength = 0;
  let hashTable = Array(16);

  function updateCapacity() {
    if (bucketsLength > Math.round(capacity * loadFactor)) {
      capacity = capacity * 2;
      const arrayCopy = Array(capacity);
      for (let i = 0; i < hashTable.length; i++) {
        let currentKey = hashTable[i];
        if (currentKey) {
          arrayCopy[i] = currentKey;
        }
      }
      hashTable = arrayCopy;
    }
  }

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }

  function set(key, value) {
    const index = hash(key);
    if (!hashTable[index]) {
      const bucket = LinkedList();
      bucket.append(key, value);
      hashTable[index] = bucket;
      bucketsLength++;
      updateCapacity();
    } else {
      const bucket = hashTable[index];
      const node = bucket.find(key);
      if (!node) {
        bucket.append(key, value);
      } else {
        node.value = value;
      }
    }
  }

  function get(key) {
    const index = hash(key);
    const bucket = hashTable[index];
    if (!bucket) return null;
    const node = bucket.find(key);
    if (!node) return null;
    return node.value;
  }

  function has(key) {
    const index = hash(key);
    const bucket = hashTable[index];
    if (bucket.contains(key)) {
      return true;
    } else {
      return false;
    }
  }

  function remove(key) {
    const index = hash(key);
    const bucket = hashTable[index];
    if (!bucket) return false;
    return bucket.remove(key);
  }

  function length() {
    let size = 0;
    hashTable.forEach((bucket) => {
      if (bucket) size += bucket.size();
    });
    return size;
  }

  function clear() {
    capacity = 16;
    hashTable = Array(capacity);
    bucketsLength = 0;
  }

  function keys() {
    let keysArray = [];
    hashTable.forEach((bucket) => {
      if (bucket) {
        const bucketKeys = bucket.getNodes();
        if (bucketKeys) {
          bucketKeys.forEach((node) => {
            keysArray.push(node[0]);
          });
        }
      }
    });
    return keysArray;
  }

  function values() {
    let valuesArray = [];
    hashTable.forEach((bucket) => {
      if (bucket) {
        const bucketKeys = bucket.getNodes();
        if (bucketKeys) {
          bucketKeys.forEach((node) => {
            valuesArray.push(node[1]);
          });
        }
      }
    });
    return valuesArray;
  }

  function entries() {
    let entriesArray = [];
    hashTable.forEach((bucket) => {
      if (bucket) {
        const bucketKeys = bucket.getNodes();
        if (bucketKeys) {
          bucketKeys.forEach((node) => {
            entriesArray.push(node);
          });
        }
      }
    });
    return entriesArray;
  }

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
};
