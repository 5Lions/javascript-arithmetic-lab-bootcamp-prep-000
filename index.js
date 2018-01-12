function add(a, b) {
  return(parseInt(a) + parseInt(b));
}

console.log("add " + add(1, 2));

function subtract(a, b) {
  return(parseInt(a) - parseInt(b));
}

console.log("subtract " + subtract(4, 3));

function multiply(a, b) {
  return(parseInt(a) * parseInt(b));
}

console.log("multiply " + multiply(2, 3));

function divide(a, b) {
  return(parseInt(a)/parseInt(b));
}

console.log("divide " + divide(20,5));

function inc(a) {
  return(parseInt(a)+1);
}

console.log("increment " + inc(23));
 
function dec(a) {
  return(a--);
}
console.log("decrement " + dec(150));