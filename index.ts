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
//map vs forEach

const prices = [10, 20, 30];
let total = 0;

prices.forEach((p) => {
  total += p;
});

console.log(`Total price: ${total}`);


// Task -7
//Object spacing + closures

const user = { name: 'John' };

const sayHi = (): void => {
  console.log(`Hi ${user.name}`);
};

sayHi();


// Task -8 
//Iteration + formatting

const colors = ['red', 'blue'];

colors.forEach((c) => {
  console.log(`Color: ${c}`);
});


// Task -9
// Functional returns

const items = [1, 2, 3];

const doubled = items.map((i) => {
  return i * 2;
});

console.log(`Doubled items: ${doubled}`);


// Task -10
// Logic simplification

const checkAuth = (user: { isAdmin: boolean }): boolean => {
  return user.isAdmin;
};

console.log(`Is Admin: ${checkAuth({ isAdmin: true })}`);


/* Task -11


const main = async (): Promise<void> => {
  await read('./package.json');
};

main();



// Task -12

const getData = async (url: string): Promise<unknown> => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw new Error(`Fetch failed: ${error}`);
  }
};



const mainFetch = async (): Promise<void> => {
  const data = await getData('https://jsonplaceholder.typicode.com/todos/1');
  console.log(`Fetched Data: ${JSON.stringify(data)}`);
};

mainFetch();
*/



// Task -13
// Typed functional chains

const processData = (data: number[]): number[] => {
  return data
    .filter((x: number): boolean => {
      return x > 10;
    })
    .map((x: number): number => {
      return x * 2;
    });
};

console.log(`Processed Data: ${processData([5, 15, 20])}`);


// Task -14
// Promises + async tests

const timer = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const testTimer = async (): Promise<void> => {
  console.log(`Timer started`);
  await timer(1000);
  console.log(`Timer finished`);
};

testTimer();


// Task -15
// Logging & conventions

// LOG ERROR MESSAGE
const logErr = (m: string): void => {
  console.error(`Error: ${m}`);
};

logErr('Something went wrong');









