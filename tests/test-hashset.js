import { HashSet } from "../hash-set.js";

export const TestHashSet = function () {
  const test = HashSet();

  test.set("apple");
  test.set("banana");
  test.set("carrot");
  test.set("dog");
  test.set("elephant");
  test.set("frog");
  test.set("grape");
  test.set("hat");
  test.set("ice cream");
  test.set("jacket");
  test.set("kite");
  test.set("lion");
  test.set("hat");
  test.set("ice cream");
  console.log(test.length());
  test.set("moon");
  console.log(test.length());
  console.log(test.get("jacket"));
  console.log(test.get("pink"));
  console.log(test.has("grape"));
  console.log(test.has("sun"));
  test.remove("apple");
  test.remove("bubbles");
  console.log(test.length());
  console.log(test.entries());
  test.clear();
  console.log(test.length());
};
