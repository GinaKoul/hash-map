import { Node } from "./node.js";

export const LinkedList = function () {
  let listHead = Node(null, null, null);

  function append(key, value) {
    if (
      listHead.key === null &&
      listHead.value === null &&
      listHead.nextNode === null
    ) {
      listHead.key = key;
      listHead.value = value;
      return;
    }
    let tmp = listHead;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = Node(key, value, tmp.nextNode);
  }

  function prepend(key, value) {
    if (
      listHead.key === null &&
      listHead.value === null &&
      listHead.nextNode === null
    ) {
      listHead.key = key;
      listHead.value = value;
    } else {
      listHead = Node(key, value, listHead);
    }
  }

  function size() {
    let tmp = listHead;
    if (
      listHead.key === null &&
      listHead.value === null &&
      listHead.nextNode === null
    )
      return 0;
    let count = 1;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      count++;
    }
    return count;
  }

  function head() {
    if (
      listHead.key === null &&
      listHead.value === null &&
      listHead.nextNode === null
    )
      return null;
    return listHead;
  }

  function tail() {
    if (
      listHead.key === null &&
      listHead.value === null &&
      listHead.nextNode === null
    )
      return null;
    let tmp = listHead;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  function at(index) {
    if (
      listHead.key === null &&
      listHead.value === null &&
      listHead.nextNode === null
    )
      return null;
    let tmp = listHead;
    for (let i = 0; i < index; i++) {
      if (tmp.nextNode === null) return false;
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  function pop() {
    if (
      listHead.key === null &&
      listHead.nextNode === null &&
      listHead.value === null
    ) {
      return false;
    } else if (listHead.nextNode === null) {
      listHead.key = null;
      listHead.value = null;
      return true;
    }
    let tmp = listHead;
    let prev = tmp;
    while (tmp.nextNode !== null) {
      prev = tmp;
      tmp = tmp.nextNode;
    }
    prev.nextNode = null;
    return true;
  }

  function contains(key) {
    let tmp = listHead;
    while (tmp.key !== key) {
      if (tmp.nextNode === null) {
        return false;
      }
      tmp = tmp.nextNode;
    }
    return true;
  }

  function findIndex(key) {
    let tmp = listHead;
    let count = 0;
    while (tmp.key !== key) {
      if (tmp.nextNode === null) {
        count = null;
        break;
      }
      tmp = tmp.nextNode;
      count++;
    }
    return count;
  }

  function find(key) {
    let tmp = listHead;
    while (tmp.key !== key) {
      if (tmp.nextNode === null) {
        return false;
      }
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  function toString() {
    if (
      listHead.key === null &&
      listHead.value === null &&
      listHead.nextNode === null
    )
      return null;
    let tmp = listHead;
    let listString = "";
    while (tmp.nextNode !== null) {
      listString += `( [${tmp.key}, ${tmp.value}] ) -> `;
      tmp = tmp.nextNode;
    }
    listString += `( [${tmp.key}, ${tmp.value}] ) -> null`;
    return listString;
  }

  function getNodes() {
    if (
      listHead.key === null &&
      listHead.value === null &&
      listHead.nextNode === null
    )
      return null;
    let tmp = listHead;
    let list = [];
    while (tmp.nextNode !== null) {
      list.push([tmp.key, tmp.value]);
      tmp = tmp.nextNode;
    }
    list.push([tmp.key, tmp.value]);
    return list;
  }

  function insertAt(key, value, index) {
    if (
      listHead.key === null &&
      listHead.value === null &&
      listHead.nextNode === null
    ) {
      if (index === 0) {
        listHead.key = key;
        listHead.value = value;
        return true;
      } else {
        return false;
      }
    }
    let tmp = listHead;
    let prev = tmp;
    for (let i = 0; i < index; i++) {
      if (tmp.nextNode === null) {
        if (i + 1 !== index) {
          return true;
        } else {
          tmp.nextNode = Node(key, value, null);
          return true;
        }
      }
      prev = tmp;
      tmp = tmp.nextNode;
    }
    prev.nextNode = Node(key, value, tmp);
    return true;
  }

  function removeAt(index) {
    if (
      listHead.key === null &&
      listHead.value === null &&
      listHead.nextNode === null
    ) {
      return false;
    } else if (listHead.nextNode === null && index === 0) {
      listHead.key = null;
      listHead.value = null;
      return true;
    } else if (index === 0) {
      listHead = listHead.nextNode;
      return true;
    }
    let tmp = listHead;
    let prev = tmp;
    for (let i = 0; i < index; i++) {
      if (tmp.nextNode === null) return false;
      prev = tmp;
      tmp = tmp.nextNode;
    }
    prev.nextNode = tmp.nextNode;
    return true;
  }

  function remove(key) {
    if (
      listHead.key === null &&
      listHead.value === null &&
      listHead.nextNode === null
    ) {
      return false;
    } else if (listHead.key === key && listHead.nextNode === null) {
      listHead.key = null;
      listHead.value = null;
      listHead.nextNode = null;
      return true;
    } else if (listHead.key === key) {
      listHead = listHead.nextNode;
      return true;
    }
    let tmp = listHead;
    let prev = tmp;
    while (tmp.key !== key) {
      if (tmp.nextNode === null) {
        return false;
      }
      prev = tmp;
      tmp = tmp.nextNode;
    }
    prev.nextNode = tmp.nextNode;
    return true;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    findIndex,
    find,
    toString,
    getNodes,
    insertAt,
    removeAt,
    remove,
  };
};
