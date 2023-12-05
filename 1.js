const fs = require("fs");

const data = fs.readFileSync("data", { encoding: "utf8", flag: "r" });

let datArray = data.split("\n");

//part 1
function sum() {
  let total = 0;

  for (let i = 0; i < datArray.length; i++) {
    let digits = datArray[i].replace(/\D/g, "");
    let number = digits[0] + digits[digits.length - 1];
    total += +number;
  }
  return total;
}
// total is 54081

//part 2

function wordsToNum() {
  let total = 0;
  for (let i = 0; i < datArray.length; i++) {
    let digits = datArray[i]
      .replace("oneight", "18")
      .replace("twone", "21")
      .replace("threeight", "38")
      .replace("fiveight", "58")
      .replace("sevenine", "79")
      .replace("eightwo", "82")
      .replace("eighthree", "83")
      .replace("nineight", "98")
      .replace("zerone", "01")
      .replace("one", "1")
      .replace("two", "2")
      .replace("three", "3")
      .replace("four", "4")
      .replace("five", "5")
      .replace("six", "6")
      .replace("seven", "7")
      .replace("eight", "8")
      .replace("nine", "9")
      .replace("zero", "0")
      .replace(/\D/g, "");

    let number = digits[0] + digits[digits.length - 1];
    total += +number;
  }
  return total;
}
console.log(wordsToNum());
