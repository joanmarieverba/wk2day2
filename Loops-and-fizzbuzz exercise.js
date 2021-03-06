/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

 function sumOfArray(arr){
    var sum = 0;
    var length = arr.length;
    if (length === 0) {
      return sum;
    }
    else  {
     for (var i = 0; i < length; i++) {
       sum = sum + arr[i];
     }
     return sum;
    }
 }


console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

 console.assert(sumOfArray([1, 2]) === 3);
 console.assert(sumOfArray([]) === 0);
 console.assert(sumOfArray([1, 2, 3]) === 6);
 console.assert(sumOfArray([10, 9, 8]) === 27);

 * PART 1
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

result = 0;
function sum(a, b){
    result = a + b;
    return result;
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

/**
 * PART 2
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

 function GCD(a, b) {
  var first = a;
  var last = b;
  var remainder = 100;
  while(remainder !== 0){
    remainder = first % last;
    if (remainder !== 0 ) {first = last; last = remainder;}
    console.log(remainder);
  }
 return last;
};

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);

/**
 * PART 3
 *
 * write a function that prints out the Least Common Multiple of two numbers
 */

 function LCM(a, b){
   if (a === 0) {return 1;}
   else
   {console.log ((a * b) / GCD(a,b));
   return ((a * b) / GCD(a,b));}
 }


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */
 function fizzbuzz(N){
   var fizzBuzzString = "";
   for (var i = 1; i <= N; i++) {

     if ((i % 3 !== 0) && (i % 5 !== 0)) {
       fizzBuzzString = fizzBuzzString + ".";
   }

   else if ((i % 15) === 0) {

       fizzBuzzString = fizzBuzzString + "fizzbuzz";
   } else if ((i % 3) === 0) {
       fizzBuzzString = fizzBuzzString + "fizz";
   } else if ((i % 5) === 0) {
       fizzBuzzString = fizzBuzzString + "buzz";
   }


   }
   console.log (fizzBuzzString);
   return fizzBuzzString;

 }

console.assert(fizzbuzz(1) === ".");
console.assert(fizzbuzz(2) === "..");
console.assert(fizzbuzz(3) === "..fizz");
console.assert(fizzbuzz(5) === "..fizz.buzz");
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz");
