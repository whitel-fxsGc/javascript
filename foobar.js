console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
console.log( "A" - "B" + "2");
const arrayContains = (arr, element) => arr.includes(element);