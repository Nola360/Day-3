// Arrays

const numbers = [42, 23, 33, 24, 6, 3, 2, 11, 22, 21];
const numbers2 = new Array(22, 33, 44, 55, 66);
const fruit = ['apple', 'orange', 'pear', 'pineapple'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

console.log(numbers);
console.log(numbers2);
console.log(fruit);
console.log(mixed);

let val;

// Get Array length
val = numbers.length;
console.log(val);
// Check if its an array
val = Array.isArray(numbers);
console.log(val);
// Get single value
val = numbers[3];
console.log(val);

val = numbers[5];
console.log(val);

// Insert into array
numbers[2] = 100;
console.log(val);

// Find index of value
val = numbers.indexOf(33);
console.log(val);


// Mutating Arrays
// Add on to end of array
numbers.push(45);
console.log(val);

// Add on to front
fruit.unshift(200);
console.log(fruit);

// Take of end of array
numbers2.pop();
console.log(numbers2);

// Take off from front
numbers2.shift();
console.log(numbers2);

// Splice values
numbers2.splice(1, 1);
console.log(numbers2);

// Reverse
fruit.reverse();
console.log(fruit);