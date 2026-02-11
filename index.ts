//let number = 3;
//const helloFunction = () => console.log("Hej!");

// Task -1

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


