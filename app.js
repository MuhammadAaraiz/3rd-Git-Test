// Chapter no1 ARRAYS AND LOOP 

// Q3

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }


// Q4
// var userInput = +prompt("Enter a number to show its multiplication table");

// var tablelength=+prompt("Enter  Length Multiplication table")

// for (var i=1; i <= tablelength; i++)
// {
// document.write(userInput + " " + "x" + " " + i + " " + "=" + " " + userInput * i + "<br>")
// };


// Q5

// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//      console.log("Elements of " + fruits[i] + " at " + " " + i)
// }


// // Q6

// console.log("Counting:");
// for (let i = 1; i <= 15; i++) {
//     console.log(i);
// }
// console.log("Reverse counting:");
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
// console.log("Even:");
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }
// console.log("Odd:");
// for (let i = 1; i <= 19; i += 2) {
//     console.log(i);
// }
// console.log("Series:");
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i + "k");
// }


//  Q7

// const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// function searchItem(item) {
//     const index = A.indexOf(item);
//     return index;
// }

// const userInput = prompt("Enter an item to search:");

// const indexFound = searchItem(userInput);

// if (indexFound !== -1) {
//     alert(userInput + " is found at index " + indexFound + " in our bakery ");
// } else {
//     alert( " We are sorry " + userInput + " is not found in the bakery");
// }




// // Q8
// var A = [24, 53, 78, 91, 12];

// var maxNumber = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > maxNumber) {
//         maxNumber = A[i];
//     }
// }

// console.log(" The largest number in the array is: " + maxNumber);



// // Q9

// var A = [24, 53, 78, 91, 12];

// var minNumber = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] < minNumber) {
//         minNumber = A[i];
//     }
// }
// console.log(" The Smallest number in the array is: " + minNumber);



// Q10

// for (i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }




// Chapter 17 - 20 (for Loops)
// Home Assignment

// Q1

// for (i = 0; i < 10; i++) {
//     console.log(" Loop no " + (i + 1));
// }



// Q2
// for (i = 0; i <= 11; i++) {
//     console.log("Loop no  " + (i + 1));
// }



// Q3
// for ( var i = 0 ; i <= 4 ; i++)



// Q4
// for (count = 0; count < 100; count++) {
//     console.log("Loop no " + (count + 1));
// }


// Q5
// for (i = 3; i > 0; i--) {
//     console.log("Loop no  " + i);
// }


// Q6

// var myArray = [1, 2, 3, 4, 5];
// var numberOfElements = myArray.length;

// console.log("The number of elements in the array is: " + numberOfElements);



// Q7
// var flag = true; 


// Q8
// const pets = ["cat", "dog", "parrot", "pigeons"];

// for (let i = 0; i < pets.length; i++) {
//     // Loop body: code to be executed for each element in the 'pets' array
//     console.log("Pet: " + pets[i]);
// }



// Q9
// for ( i = 0; i < 10; i++) {
//     if (i === 1) {
//         alert(" Counter: " + i);
//         break; 
//     }
// }



//  Q10
// const userNames = ["Michle", "Charles", "Steve", "Mitchel", "Cameron"];

// const firstName = prompt("Enter first name");

// var matchFound = false;

// for (i = 0; i < userNames.length; i++) {
//     if (firstName === userNames[i]) {
//         matchFound = true;
//         break; 
//     }
// }
// if (matchFound) {
//     alert("Welcome, " + firstName + "!");
// } else {
//     alert("Please write the correct user name.");
// }




// Q11



// Q12
// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < firstArr.length; i++) {
//     for (let j = 0; j < secondArr.length; j++) {
//         console.log(firstArr[i] + secondArr[j]);
//     }
// }
