function foo(a, b) {
  if (a === null || b === null) {
    //Improved error handling
    return undefined; // Treat null as undefined 
  } else {
    return a + b;
  }
}

console.log(foo(null, 5)); // Output: undefined
console.log(foo(5, null)); // Output: undefined
console.log(foo(5, 5)); // Output: 10