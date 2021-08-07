const rest = new Map();
rest.set("name", "Classico Italiano");
// pfwe
// rest.set("name", "Classico Italiano");
rest.set(1, "Firenze,Italy");
rest.set(2, "Lisbon,Prtugal");
rest.set("categories", ["Italian", "Pizzeria", "Vegetarian"]);
rest.set("open", 11);
rest.set("close", 23);
rest.set(true, "we are open");
rest.set(false, "we are closed");
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(false));

console.log(rest);
let time = 21;
let ls =
  time >= rest.get("open") && time <= rest.get("close")
    ? rest.get(true)
    : rest.get(false);
console.log(ls);
console.log(rest.has("categories"));
console.log(rest.delete("categories"));
console.log(rest);
const question = new Map([
  ["question", "what is the best programming langauage in `the world?"],
  [1, "c"],
  [2, "java"],
  [3, "js"],
  ["correct", 3],
  [true, "correct"],
  [false, "try again"],
]);
console.log(question);
// covert object to map
// const myobj=new Map(Object.entries(object))
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key} : ${value}`);
// }
// let myAnus = prompt("Enter you answer");
// console.log(question.get(question.get("correct") === Number(myAnus))); //The middle part evaluate the expression if it became true then OUTER question.get will get true value and true value is correct otherwise false
console.log("Questions", ...question);
console.log([...question]); //To convert Map into an array
console.log([question.keys()]);
console.log([question.values()]);
