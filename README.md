# Hash Map

This repository contains 3 javascript files.

## main.js, test-hashmap.js, test-hashset.js

File main.js is used for testing

## node.js

Contains and exports a factory function called Node used to create a node of a linked list. It accepts a key, a value and a nextNode.

## linked-list.js

Contains and exports a factory function called LinkedList that initializes the head of the linked list and contains the following methods:

- **append(value):** adds a new node containing value to the end of the list
- **prepend(value):** adds a new node containing value to the start of the list
- **size():** returns the total number of nodes in the list
- **head():** returns the first node in the list
- **tail():** returns the last node in the list
- **at(index):** returns the node at the given index
- **pop():** removes the last element from the list and returns the removed value
- **contains(value):** returns true if the passed in value is in the list and otherwise returns false.
- **findIndex(key):** returns the index of the node containing the key, or null if not found.
- **find(key):** returns the node containing the key, or null if not found.
- **toString():** represents the linked list objects as strings with the following format: ( value ) -> ( value ) -> ( value ) -> null
- **getKeys():** returns an array containing all the keys of the linked list
- **getValues():** returns an array containing all the values of the linked list
- **getNodes():** returns an array containing all the key-value pairs of the linked list
- **insertAt(value, index):** inserts a new node with the provided value at the given index and returns the inserted value
- **removeAt(index):** removes the node at the given index and returns the removed value

## hash-map.js

Contains and exports a factory function called HashMap that initializes the capacity, loadFactor and hashmap and contains the following methods:

- **updateCapacity():** only used inside the factory function. Grows the buckets to double their capacity when the hash map reaches the load factor.
- **hash(key):** takes a key and produces a hash code with it.
- **set(key, value):** takes two arguments: the first is a key, and the second is a value that is assigned to this key. If the hash is empty a new linked list is created and the key and value are assigned to the head of the list. If the hash is not empty and the key does not exist, the key and value are appended as a new node to the list. If a key already exists, then the old value is overwritten.
- **has(key):** takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
- **remove(key):** takes a key as an argument. If the given key is in the hash map, it removes the entry with that key and return true. If the key isn’t in the hash map, it returns false.
- **length():** returns the number of stored keys in the hash map.
- **clear():** removes all entries in the hash map.
- **keys():** returns an array containing all the keys inside the hash map.
- **values():** returns an array containing all the values.
- **entries():** returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]

## hash-set.js

Contains and exports a factory function called HashSet that initializes the capacity, loadFactor and hashset and contains the following methods:

- **updateCapacity():** only used inside the factory function. Grows the buckets to double their capacity when the hash map reaches the load factor.
- **hash(key):** takes a key and produces a hash code with it.
- **set(key):** takes a key. If the hash is empty a new linked list is created and the key is assigned to the head of the list. If the hash is not empty and the key does not exist, the key is appended as a new node to the list.
- **has(key):** takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
- **remove(key):** takes a key as an argument. If the given key is in the hash map, it removes the entry with that key and return true. If the key isn’t in the hash map, it returns false.
- **length():** returns the number of stored keys in the hash map.
- **clear():** removes all entries in the hash map.
- **entries():** returns an array containing all the keys inside the hash map.
