let a = parseFloat(prompt("Please enter a number"));
let c = prompt("Please choose +, -, * or /");
let b = parseFloat(prompt("Please enter another number"));
let result;

if (isNaN(a) || isNaN(b)) {
  alert("Not a Number!!");
} else {
  if (c == "+") {
    alert((result = a + b));
  } else if (c == "-") {
    alert((result = a - b));
  } else if (c == "*") {
    alert((result = a * b));
  } else {
    if (c == 0) {
      alert("oopppsss, can't do that...");
    } else {
      alert((result = a / b));
    }
  }
}
console.log("grest job!!");
