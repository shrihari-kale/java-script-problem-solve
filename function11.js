/* Functions in JS */

/* 

Function: 
- is created when we want to use some lines of code multiple times in our project 
and we don't know when and where exactly we need to have this block of code

- in simple terms, functions are a block of code that performs specific tasks
DRY Principle - Don't repeat yourself
*/

/* Defining a function - Function Definition */
/* function naming rules is same as variable naming rules */
function greetUser() {
  console.log("Hello World");
}

/* Calling or Invoking a function */
greetUser();
greetUser();
greetUser();
greetUser();
console.log("Bye World");
console.log("Bye World");
greetUser();
greetUser();
greetUser();

/* Parameterized function */
/* name variable here is a parameter */
/* name is neither let, const nor var */
function greetSpecificUser(name) {
  console.log("Hello " + name);
}

/* "Deep" here is argument passed to greetSpecificUser function */
greetSpecificUser("Deep");
greetSpecificUser("Anjlesh");

function showCheckInTime(name, time) {
  console.log("Hello " + name + " you checked in at: " + time);
}

showCheckInTime("Mayur", "9pm");
showCheckInTime("Shweta", "10am");

/* Ques: write a single funtion to print these lines while using only one console.log
Hello Riya, Welcome to our App
Hello Pratik, Welcome to our Website
Hello Deep, Welcome to our Office
*/

function welcomeGuest(name, place) {
  console.log("Hello " + name + " Welcome to our " + place);
}

welcomeGuest("Riya", "App");
welcomeGuest("Pratik", "Website");
welcomeGuest("Deep", "Office");

/* `return` statement */
function sum(a, b) {
  const c = a + b;
  return c;
}

const sum1 = sum(1, 4);
const sum2 = sum(13, 9);
const sum3 = sum(2, 10);

console.log({ sum1, sum2, sum3 });

/* NOTE: functions without return statement returns undefined */
const sf = greetUser();
console.log({ sf });

/* Question: Write a function to find the greatest of two numbers */

/* const max = Math.max(23, 12);
console.log({ max }); */

function max(a, b) {
  /* Method 1
    if(a > b) 
        return a;
    
    return b; */
  /* Method 2
    const mx = Math.max(a,b);
    */
  /* Method 3
    const mx = a > b ? a : b;
    return mx;
    */

  /* Method 4 */
  return a > b ? a : b;
}

const m1 = max(2, 4);
const m2 = max(19, 23);
const m3 = max(29, 38);

console.log({ m1, m2, m3 });

/* HW: Write a function to print the Minimum of two numbers 
(try this question using all four methods discussed above) */

/* giving default values to parameters (params) */

/* 
    Write a function to calculate both
    (sum of two numbers) and (sum of three numbers)

    Ex: 
    - sum(2,10) should output 12
    - sum(1,3,10) should output 14
 */

function sum23(a = 0, b = 0, c = 0) {
  return a + b + c;
}

const sumOfTwoNumbers = sum23(10, 12);
const sumOfThreeNumbers = sum23(1, 4, 2);
console.log({ sumOfTwoNumbers, sumOfThreeNumbers });

/* Nested functions */

// assuming today is 25th
function calculateDays(issuedDate) {
  return 25 - issuedDate;
}

/* function to calculate fine while submitting book in library */
/* Assuming issued date is from current month */
function libraryFine(issuedDate = 0) {
  /* 
    if book is issued for 10 or less days then fine is zero 
    else fine is (3 rs per day after 10 days) = [(number of days of issued book) - 10] * 3;
    */
  const daysOfIssuance = calculateDays(issuedDate);
  /* Method 1
  let fine = 0;
  if(daysOfIssuance > 10) {
    fine = (daysOfIssuance - 10) * 3;
  } 

  return fine; */

  return daysOfIssuance > 10 ? (daysOfIssuance - 10) * 3 : 0;
}

console.log("Total Fine: " + libraryFine(2)); //23 - 10 = 13 * 3 = 39
console.log("Total Fine: " + libraryFine(12)); //13 - 10 = 3 * 3 = 9
console.log("Total Fine: " + libraryFine(22)); //3 -> fine = 0

/* How console is handling different number of arguments??
console.log(1, 2, 3, 4, 4);
console.log(1);
console.log(); 
*/

/* Rest operator - combines all the values inside it and makes an array,
-  always comes at last position in functions params */
function sumN(a, b, ...c) {
  console.log(a, b, c);
}

sumN(1, 3, 1, 3);