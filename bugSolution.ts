function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, Number('2')); // Fixed: Convert string to number using Number()
console.log(result); 

//alternative solution
let result2 = add(1, parseInt('2')); //Fixed: Parse the string into a number using parseInt()
console.log(result2); 