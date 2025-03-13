import { HashMap } from "../hash-map.js";

export const TestHashMap = function () {
  const test = HashMap();

  test.set("apple", "red");
  test.set("banana", "yellow");
  test.set("carrot", "orange");
  test.set("dog", "brown");
  test.set("elephant", "gray");
  test.set("frog", "green");
  test.set("grape", "purple");
  test.set("hat", "black");
  test.set("ice cream", "white");
  test.set("jacket", "blue");
  test.set("kite", "pink");
  test.set("lion", "golden");
  test.set("hat", "newBlack");
  test.set("ice cream", "newWhite");
  console.log(test.length());
  test.set("moon", "silver");
  console.log(test.length());
  console.log(test.get("jacket"));
  console.log(test.get("pink"));
  console.log(test.has("grape"));
  console.log(test.has("sun"));
  test.remove("apple");
  test.remove("bubbles");
  console.log(test.length());
  console.log(test.keys());
  console.log(test.values());
  console.log(test.entries());
  test.clear();
  console.log(test.length());
};
