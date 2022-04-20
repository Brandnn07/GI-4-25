// VERY EASY: Write a function named min that takes two arguments and returns their minimum.
// EASY: Create an array of students holding their last name, first name, and age with 3 students. To
// validate, please log a greeting with the first name, last name and age of the 2nd student. The output
// should look like "Hello, my name is John Doe and I'm 19 years old."
// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number
// and its corresponding month. For example: if the user enters the number 3, then it should return the
// month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).
// See next page...
// HARD: Given the information below for Tom and Jerry.
// ● Tom - height:  9in mass: 8 g
// ● Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
// variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
// console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

// VERY EASY
var x = 2;
var y = 4;
function min(x, y) {
  return Math.min(x, y)
}
min();

// EASY
var studentA = ["John", "Doe", 18];
var studentB = ["Mary", "Sue", 17];
var studentC = ["Brandon", "Carter", 20];

console.log(
  `Hello, my name is ${studentB[0]} ${studentB[1]} and I am ${studentB[2]} years old.`
);

// MEDIUM
var months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function counting(){
    const input = Number(prompt(
      "Hello! Please input a number from 1-12 and we'll return the month in the console"
    ));
    if (typeof input === 'number') {
        if (input <= 12 && input > 0) {
             var month = input - 1;
            console.log(`You typed in ${input} and that month is ${months[month]}`);
        } else {
            alert("Please use a number 1-12");
            counting();
        }
    } else {
        alert("Please enter a number!");
        counting();
    }
}
counting();

// HARD: Given the information below for Tom and Jerry.
// ● Tom - height:  9in mass: 8 g
// ● Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
// variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
// console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

var tomHeight = 9;
var tomMass = 8
var jerryHeight = 10;
var jerryMass = 45;

function bmi() {
    var tomBMI = tomMass / tomHeight ** 2;
    var jerryBMI = jerryMass / jerryHeight ** 2;
    if (tomBMI > jerryBMI) {
        let decider = true;  
        console.log(`Is Tom's BMI higher than Jerry's? ${decider}`)      
    } else {
        let decider = false;
        console.log(`Is Tom's BMI higher than Jerry's? ${decider}`)
    }
};
bmi();