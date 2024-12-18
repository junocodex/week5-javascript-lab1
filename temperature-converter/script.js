// ! Temperature Converter

"use strict";

let input = prompt("What is the temperature? (Celsius)");

let c = Number(input);

let f = (c * 9) / 5 + 32;

document.write("The temperature in Fahrenheit is " + f);
