// ! Temperature Converter

"use strict";

function calculateTemp(c) {
  let f = (c * 9) / 5 + 32;
  alert(c + " degrees Celcius converted to Ferinheight is " + f);
}

let userInput = prompt("What is the temp in Celcius?");

calculateTemp(userInput);

// ! Age Verification

let userInput1 = prompt("What is your age?");

function determineAgeGroup(age) {
  if (age < 18) {
    alert("Minor");
  } else if (age >= 18 && age < 55) {
    alert("Adult");
  } else {
    alert("Senior");
  }
}

determineAgeGroup(userInput1);

// ! Simple Calculator

function mathTime(num1, num2, operator) {
  if (operator === "addition") {
    alert(num1 + num2);
  } else if (operator === "subtraction") {
    alert(num1 - num2);
  } else if (operator === "multiplication") {
    alert(num1 * num2);
  } else if (operator === "division") {
    alert(num1 / num2);
  }
}

let number1 = Number(prompt("What is the first number?"));
let number2 = Number(prompt("What is the second number?"));
let oper = prompt(
  "What operation is being performed? (addition, subtraction, multiplication, or division)"
);
mathTime(number1, number2, oper);
