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
