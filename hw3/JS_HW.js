// ----------------------------------------------- 1 -----------------------------------------------------
console.log("\n--------------------------------------- 1 ------------------------------------------------\n");
// 1. Create a funciton that reverses a number:

function reverseNumber(num) {
  const reversed = num.toString().split('').reverse().join(''); // Convert the number to a string, split makes an array of each number as a character, reverse reverses the array, and join combines it all back into a string
  return Number(reversed); // To convert the string back to a number and return it
}

let input1 = 32243;
let revNum = reverseNumber(input1);

console.log("1. reverseNumber function input : " + input1);
console.log("   reverseNumber function output : " + revNum);

// ----------------------------------------------- 2 -----------------------------------------------------
console.log("\n--------------------------------------- 2 ------------------------------------------------\n");

// 2. Create a function that checks if a string is palindrome or not:

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Convert the string to lowercase and remove non-alphanumeric characters
  const reversedStr = cleanedStr.split('').reverse().join(''); // Reverse the cleaned string
  return cleanedStr === reversedStr; // Check if the cleaned string is the same as the reversed string
}

let input2 = "nurses run"
let pali = isPalindrome(input2);

console.log("2. isPalindrome function input : " + input2);
console.log("   isPalindrome function output : " + pali);

// ----------------------------------------------- 3 -----------------------------------------------------
console.log("\n--------------------------------------- 3 ------------------------------------------------\n");

// 3. Write a function that generates all combinations of a string:

function allCombos(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) { // initial for that iterates through the string
    let combo = "";
    for (let j = i; j < str.length; j++) { // nested for that iterates at the index of i and adds the elements to combo
      combo += str[j];
      result.push(combo);
    }
  }

  return result;
}

let input3 = "dog"
let output3 = allCombos(input3);

console.log("3. allCombos function input : " + input3);
console.log("   allCombos function output : " + output3);


// ----------------------------------------------- 4 -----------------------------------------------------
console.log("\n--------------------------------------- 4 ------------------------------------------------\n");

// 4. Write a function 

function alphabetical (str){
  return str.split('').sort().join(''); // split into array of characters because sort is an array function, sort then join back into string
}

let input4 = "webmaster"
let output4 = alphabetical(input4);

console.log("4. alphabetical function input : " + input4);
console.log("   alphabetical function output : " + output4);

// ----------------------------------------------- 5 -----------------------------------------------------
console.log("\n--------------------------------------- 5 ------------------------------------------------\n");


// 5. Write a function to convert first letter to uppercase

function upperCase (str) {
  str = str.split(''); // split the string into array of characters
  str[0] = str[0].toUpperCase(); // to take care of the first character of the string
  for (let i = 0; i < str.length; i++){
    if (str[i] === ' '){
      str[i+1] = str[i+1].toUpperCase(); // look for spaces, and capitalize the first charater after the space
    } 
  }
  str = str.join(''); // finally join the array back into a string
  return str;
}
let input = 'the quick brown fox';
let newstr = upperCase(input);
console.log("5. upperCase function input : " + input);
console.log("   upperCase function output : " + newstr);

// ------------------------------------------------ 6 -----------------------------------------------------
console.log("\n--------------------------------------- 6 ------------------------------------------------\n");

// 6. Write a function to find the longest word in a string

function longest (str) {
  let words = str.split(' '); // split the string into an array with words
  let longestWord = ""; // to store the longest word

  for (let i = 0; i < words.length; i++){
    if (words[i].length > longestWord.length){ // Compare the current words length to the longest word var
      longestWord = words[i];
    }
  }
  return longestWord;
}

let input6 = "Web Development Tutorial";
let longestWord = longest(input6);

console.log("6. longest function input : " + input6);
console.log("   longest function output : " + longestWord);

// ------------------------------------------------ 7 -----------------------------------------------------
console.log("\n--------------------------------------- 7 ------------------------------------------------\n");

// Write a function to count vowels in a string

function countVowels (str) {
  str = str.toLowerCase();
  str = str.split(''); // split into array of characters
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if ('aeiou'.includes(str[i])){ // iterate through the array of char and increment count if vowel is found
      count++;
    }
  }

  return count;
}

let input7 = "The quick brown fox";
let vowelCount = countVowels(input7);

console.log("7. countVowels function input : " + input7);
console.log("   countVowels function output : " + vowelCount);

// ------------------------------------------------ 8 -----------------------------------------------------
console.log("\n--------------------------------------- 8 ------------------------------------------------\n");

// 8. Write a function to find if the number is prime or not

function isPrime (num) {
  if (num === 1 || num < 1){
    return "Not Prime!";
  }
  else if (num === 2) {
    return "Prime"
  }else {
    for (let i = 2; i < num; i++ ){ // Go through all numbers between 2 and num-1 and check if they divide it evenly
      if (num % i === 0){
        return "Not Prime";
      }
    }
    return "Prime";
  }
}

let input8 = 4;
let primeOrNot = isPrime(input8);

console.log("8. isPrime function input : " + input8);
console.log("   isPrime function output : " + primeOrNot);

// ------------------------------------------------ 9 -----------------------------------------------------
console.log("\n--------------------------------------- 9 ------------------------------------------------\n");

// 9. Write a function that returns the type

function returnType (arg) {
  return typeof(arg); // Simply return the type of the argument
}

function foo(){}

let input9 = foo;
let output9 = returnType(input9);

console.log("9. returnType function input : " + input9);
console.log("   returnType function output : " + output9);

// ------------------------------------------------ 10 -----------------------------------------------------
console.log("\n--------------------------------------- 10 ------------------------------------------------\n");

// 10. Write a function that returns an identity matrix

function identityMatrix (n) {
  let idMatrix = [];
  for (let i = 0; i < n; i++){
    let row = [];
    for (let j = 0; j < n; j++){
      if (i === j){ //If they are equal that means it is the diagonal; push 1
        row.push(1);
      } else {
        row.push(0);
      }
    }
    idMatrix.push(row);
  }

  return idMatrix;
}

let matrix = identityMatrix(5);
let input10 = 5;
console.log("10. identityMatrix function input : " + input10);
console.log("    identityMatrix function output : ", matrix);
// console.log(matrix);

// ------------------------------------------------ 11 -----------------------------------------------------
console.log("\n--------------------------------------- 11 ------------------------------------------------\n");

// Write a function to find 2nd lowest and 2nd highest numbers

function secgreatestLowest (arr) {
  arr = arr.sort((a, b) => (a - b)); // To sort the array

  return `Second lowest: ${arr[1]}, Second Highest: ${arr[arr.length - 2]}`; // Pick the 2nd and 2nd last element
}

let input11 = [1,2,3,4,5];
let output11 = secgreatestLowest([1,2,3,4,5]);

console.log("11. secgreatestLowest function input : " + input11);
console.log("    secgreatestLowest function output : " + output11);

// ------------------------------------------------ 12 -----------------------------------------------------
console.log("\n--------------------------------------- 12 ------------------------------------------------\n");

// 12. Write a function to find if the number is perfect

function isPerfect (num) {
  let divisors = []; // To store the diviors for our num

  if (num <= 1) return "Not Perfect";

  for (let i = 1; i < num; i++){
    if(num % i === 0){
      divisors.push(i); // Find all the divisors
    }
  }

  if ((divisors.reduce((acc,curr)=> acc + curr ) + num)/2 === num){ // To see if all the rules are followed by num
    return `Num: ${num} is Perfect!`
  }else{
    return `Num: ${num} is NOT Perfect!`
  }
}

let input12 = 8128;
let output12 = isPerfect(input12);

console.log("12. isPerfect function input : " + input12);
console.log("    isPerfect function output : " + output12);

// ------------------------------------------------ 13 -----------------------------------------------------
console.log("\n--------------------------------------- 13 ------------------------------------------------\n");

// 13. Write a function to compute factors of positive integers

function findFactors (num) {
  let factors = []; // To store the factors for our num

  for (let i = 1; i <= num; i++){
    if(num % i === 0){
      factors.push(i); // Find all the factors
    }
  }

  return factors;

}

let input13 = 25;
let output13 = findFactors(input13);

console.log("13. findFactors function input : " + input13);
console.log("    findFactors function output : " + output13);

// ------------------------------------------------ 14 -----------------------------------------------------
console.log("\n--------------------------------------- 14 ------------------------------------------------\n");

// 14. Write a function to convert an amount of coins

function amountToCoins(amount, coins) {
  let result = [];

  for (let i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      result.push(coins[i]);
      amount -= coins[i]; // Once you use a coin subtract the coin value from the amount
    }
  }

  return result;
}

let inputAmount14 = 46;
let inputCoins14 = [25,10,5,2,1];
let output14 = amountToCoins(inputAmount14, inputCoins14);

console.log(`14. amountToCoins function input : ${inputAmount14}, ${inputCoins14}`);
console.log("    amountToCoins function output : " + output14);


// ------------------------------------------------ 15 -----------------------------------------------------
console.log("\n--------------------------------------- 15 ------------------------------------------------\n");

// 15. Write a function to compute the value of bn

function power(b, n) {
  return Math.pow(b, n); // b^n
}

let inputB15 = 2;
let inputN15 = 4;
let output15 = power(inputB15, inputN15);

console.log(`15. power function input : ${inputB15}, ${inputN15}`);
console.log("    power function output : " + output15);


// ------------------------------------------------ 16 -----------------------------------------------------
console.log("\n--------------------------------------- 16 ------------------------------------------------\n");

// 16. Write a function to extract unique characters from a string

function uniqueChars(str) {
  return [...new Set(str)].join(''); //Convert into a set to remove duplicates, spread back into the array, and finally join back into a string
}

let input16 = "thequickbrownfoxjumpsoverthelazydog";
let output16 = uniqueChars(input16);

console.log("16. uniqueChars function input : " + input16);
console.log("    uniqueChars function output : " + output16);


// ------------------------------------------------ 17 -----------------------------------------------------
console.log("\n--------------------------------------- 17 ------------------------------------------------\n");

// 17. Write a function to get num of occurences of each letter in a string

function letterCount(str) {
  let result = {};

  for (let char of str) {
    result[char] = (result[char] || 0) + 1; // if char exisis in result use it, if not the new char is going to be added to the object and incremented 
  }
  return result;
}

let input17 = "JavaScript Homework";
let output17 = letterCount(input17);

console.log("17. letterCount function input : " + input17);
console.log("    letterCount function output : ", output17);


// ------------------------------------------------ 18 -----------------------------------------------------
console.log("\n--------------------------------------- 18 ------------------------------------------------\n");

// 18. Write a function for binary search

function binarySearch(arr, target) {
  let sortedArr = [...arr].sort((a,b) => a - b); // Array needs to be sorted for binary search to work
  console.log("    Sorted Array: " + sortedArr)
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // find mid

    if (sortedArr[mid] === target) return mid; // best case mid is the target
    if (sortedArr[mid] < target) left = mid + 1; // if mid is smaller than target - search right half
    else right = mid - 1; // vise versa
  }

  return -1;
}

let inputArr18 = [1,2,5,9,7,6];
let inputTarget18 = 6;
let output18 = binarySearch(inputArr18, inputTarget18);

console.log(`18. binarySearch function input : ${inputArr18}, Target: ${inputTarget18}`);
console.log("    binarySearch function output : " + output18);


// ------------------------------------------------ 19 -----------------------------------------------------
console.log("\n--------------------------------------- 19 ------------------------------------------------\n");

// 19. Write a function that returns elements larger than a number

function largerThan(arr, number) {
  return arr.filter(value => value > number); // filter will give all the values that are greater than number as done in the callback function
}

let arrinput19 = [3,65,78,9,43];
let numinput19 = 23;
let output19 = largerThan(arrinput19, numinput19);

console.log(`19. largerThan function input : [${arrinput19}], ${numinput19}`);
console.log("    largerThan function output : " + output19);

// ------------------------------------------------ 20 -----------------------------------------------------
console.log("\n--------------------------------------- 20 ------------------------------------------------\n");

// 20. Write a function ot generate string of random characters

function generateID(length) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length)); // add chars from the char list randomly
  }

  return result;
}

let input20 = 10;
let output20 = generateID(input20);

console.log("20. generateID function input : " + input20);
console.log("    generateID function output : " + output20);


// ------------------------------------------------ 21 -----------------------------------------------------
console.log("\n--------------------------------------- 21 ------------------------------------------------\n");

// 21. Write a function to get all possible subset of an array

function subsets(arr, length) {
  let result = [];

  function helper(start, combo) {
    if (combo.length === length) { // make sure the subset is only of the length provided by the user
      result.push([...combo]);
      return;
    }

    for (let i = start; i < arr.length; i++) { // start with 1 element keep adding elements to it, once done with the array, move to the next element and keep repeating the process until the last element
      combo.push(arr[i]);
      helper(i + 1, combo);
      combo.pop();
    }
  }

  helper(0, []); // start at index zero with an emply array
  return result;
}

let inputArr21 = [1,2,3];
let inputLength21 = 2;
let output21 = subsets(inputArr21, inputLength21);

console.log(`21. subsets function input : ${inputArr21}, ${inputLength21}`);
console.log("    subsets function output : " , output21);


// ------------------------------------------------ 22 -----------------------------------------------------
console.log("\n--------------------------------------- 22 ------------------------------------------------\n");

// 22. Write a function to count the number of occurences of a specified letter

function countLetter(str, letter) {
  return str.split(letter).length - 1; // split the string everytime you encounter the letter we need to count, the length of the array (- 1) of the splits is the number of times the needed letter was encountered
}

let inputStr22 = "microsoft.com";
let inputLetter22 = "o";
let output22 = countLetter(inputStr22, inputLetter22);

console.log(`22. countLetter function input : ${inputStr22}, ${inputLetter22}`);
console.log("    countLetter function output : " + output22);


// ------------------------------------------------ 23 -----------------------------------------------------
console.log("\n--------------------------------------- 23 ------------------------------------------------\n");

// 23. Write a function to find the first not repeated character

function firstNonRepeated(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) { // if the only index the char was found if the first index of the char that means it the only occurence of the char (char was not repeated again)
      return char;
    }
  }
  return null;
}

let input23 = "abacddbec";
let output23 = firstNonRepeated(input23);

console.log("23. firstNonRepeated function input : " + input23);
console.log("    firstNonRepeated function output : " + output23);


// ------------------------------------------------ 24 -----------------------------------------------------
console.log("\n--------------------------------------- 24 ------------------------------------------------\n");

// 24. Write a function to apply bubble sort

function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) { // flip the less than sign for ascending
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

let input24 = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log("24. bubbleSort function input : " + input24);

let output24 = bubbleSort(input24);
console.log("    bubbleSort function output : " + output24);


// ------------------------------------------------ 25 -----------------------------------------------------
console.log("\n--------------------------------------- 25 ------------------------------------------------\n");

// 25. Write a function to find the longest country name from an array

function Longest_Country_Name(arr) {
  return arr.reduce((longest, current) => // iterate through the array of names
    current.length > longest.length ? current : longest // if current is longer keep current, if not keep longest
  );
}

let input25 = ["Australia", "Germany", "United States of America"];
let output25 = Longest_Country_Name(input25);

console.log("25. Longest_Country_Name function input : " + input25);
console.log("    Longest_Country_Name function output : " + output25);


// ------------------------------------------------ 26 -----------------------------------------------------
console.log("\n--------------------------------------- 26 ------------------------------------------------\n");

// 26. Write a function to find the longest substring without repeating chars

function longestSubstring(str) {
  let set = new Set(); // to store the chars in the window
  let left = 0; // start of current window
  let max = 0; // keep track of the longest valid substring found

  for (let right = 0; right < str.length; right++) { // right will go on expanding the window
    while (set.has(str[right])) { // if duplicate is found shrink the window from the left until duplicate is removed
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]); // add new unique char to the window
    max = Math.max(max, right - left + 1); // update max length
  }

  return max;
}

let input26 = "abcabcababdb";
let output26 = longestSubstring(input26);

console.log("26. longestSubstring function input : " + input26);
console.log("    longestSubstring function output : " + output26);


// ------------------------------------------------ 27 -----------------------------------------------------
console.log("\n--------------------------------------- 27 ------------------------------------------------\n");

// 27. Write a function that returns longest palindrome from a string

function longestPalindrome(str) {
  let longest = ""; // store the longest palindrome

  for (let i = 0; i < str.length; i++) { // for the starting index of substring
    for (let j = i + 1; j <= str.length; j++) { // for the ending index of substring
      let substr = str.slice(i, j); // grab the substring from i to j
      if (
        substr === substr.split('').reverse().join('') && // check if it is a palindrome
        substr.length > longest.length // check if it is longer than the current longest
      ) {
        longest = substr; // if longer make it the current longest
      }
    }
  }

  return longest;
}

let input27 = "Racecar is fast";
let output27 = longestPalindrome(input27);

console.log("27. longestPalindrome function input : " + input27);
console.log("    longestPalindrome function output : " + output27);

// ------------------------------------------------ 28 -----------------------------------------------------
console.log("\n--------------------------------------- 28 ------------------------------------------------\n");

// 28. Write a function to pass a function as a parameter

function greet(name) {
  return `Hello ${name}`;
}

function executeFunction(fn, value) {
  return fn(value);
}

let input28 = "Aki";
let output28 = executeFunction(greet, input28);

console.log("28. executeFunction function input : " + input28);
console.log("    executeFunction function output : " + output28);


// ------------------------------------------------ 29 -----------------------------------------------------
console.log("\n--------------------------------------- 29 ------------------------------------------------\n");

// 29. Write a function to get the function name

function getFunctionName(fn) {
  return fn.name;
}

function sampleFunction() {}
let output29 = getFunctionName(sampleFunction);

console.log("29. getFunctionName function output : ", output29);
