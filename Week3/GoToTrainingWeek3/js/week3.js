/*
 Dan Williams
 SDI Section #3
 Go To Training Week #3
 12-10-2014
 */

//alert("Testing To Make Sure we are working.");

//Create code that sorts through of fruit names and picks out pears

//Create our "fruit bowl" array

var bowlOfFruit = ["apple", "banana","pear", "peach", "pear", "tomato", "kiwi", "pear"];

//Console logs the WHOLE array
console.log(bowlOfFruit);

//How can i get one fruit inside the bowl.

console.log(bowlOfFruit[1]);

//how many fruits are in the bowl?
//how many items are in an array?
//Length of the array
// Dot Syntax - "use a period!"
console.log(bowlOfFruit.length);

//What is the last index number of the array, using the length property?
// Last index number is ALWAYS one less than the length.
// bowlOfFruit.length - 1 - last index #
//Create a variable to track the number of pears we have
var totalNumPears = 0;

//Test each item and see if it is a pear

//if(condition to test) { Code to run if true}

if(bowlOfFruit[0]==="pear")
{
 //this will run if true
 //add one to our counting variable
 console.log("This fruit is a pear!")
 totalNumPears++;

} else {
    //This code will run if the if statement is FALSE!

    console.log("This fruit is not a pear");
}

if(bowlOfFruit[1]==="pear!") {
 //this will run if true
 //add one to our counting variable
 console.log("This fruit is a pear!")
 totalNumPears++;

} else {
    //This code will run if the statement is FALSE!

     console.log("This fruit is not a pear!");

}

if(bowlOfFruit[2]==="pear") {
 //this will run if true
 //add one to our counting variable
 console.log("This fruit is a pear!")
 totalNumPears++;

} else {
    //This code will run if the statement is False!

 console.log("This fruit is not a pear!");
}

if(bowlOfFruit[3]==="pear") {
 //this will run if true
 //add one to our counting variable
 console.log("This fruit is a pear!")
 totalNumPears++;

} else {
 //This code will run if the statement is False!

 console.log("This fruit is not a pear!");
}