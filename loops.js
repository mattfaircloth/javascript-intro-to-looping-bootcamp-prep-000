function forLoop(array) {
  var finalArray = [];
  for (let i = 0; i < 25; i++) {
    if (i === 0 || i === 1) {
      finalArray.push("I am 1 strange loop.")
    } else {
      finalArray.push("I am " + i + " strange loops.")
    }
  }
  return finalArray;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--);
  }
  return 'done';
}
function maybeTrue() {
return Math.random() >= 0.5
}
function doWhileLoop(array) {
  do {
    array.pop();
  } while (maybeTrue())
 
}
