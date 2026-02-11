//let number = 3;
//const helloFunction = () => console.log("Hej!");

// Task -1
/*Sample Code (Fix this):
 let greet = firstName => 'Hello ' + firstName greet('Student') Checklist to complete: Add braces {} and return statement Use const Add semicolons Use template literals Fix spacing*/

const greet = (firstName: string): string => {
  return `Hello ${firstName}`;
};

greet('Student');

// Task -2

const double = (n: number): number => {
  return n * 2;
};

console.log(`Result: ${double(5)}`);

// Task -3

const isEven = (num: number): boolean => {
  return num % 2 === 0;
};

console.log(`Is even: ${isEven(4)}`);

// Task -4 

const square = (x: number): number => {
  return x * x;
};

console.log(`Square: ${square(5)}`);

// Task -5

const getAge = (year: number): number => {
  return 2026 - year;
};

console.log(`Calculated age: ${getAge(2000)}`);

// Task -6

const prices = [10, 20, 30];
let total = 0;

prices.forEach((p) => {
  total += p;
});

console.log(`Total price: ${total}`);


// Task -7

const user = { name: 'John' };

const sayHi = (): void => {
  console.log(`Hi ${user.name}`);
};

sayHi();

// Task -8 

const colors = ['red', 'blue'];

colors.forEach((c) => {
  console.log(`Color: ${c}`);
});





