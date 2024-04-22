// task 01

document.write("<h2>Task 01</h2>")

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

var evenNumbers = []

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenNumbers.push(numbers[i])
    }
}

document.write("Number of list");
document.write(': [' , numbers , ']');

document.write('<br>');

document.write("After filter even number");
document.write(': [' , evenNumbers , ']');

document.write('<br>');


// task 2

document.write("<h2>Task 2</h2>");

var string = "Hello, World";

document.write("String: ", string);

var reverseString = ''

for(let i = string.length - 1; i >= 0 ; i--) {
    reverseString += string[i]
}

document.write('<br>');

document.write("Reverse String: ", reverseString);


// task 3

document.write("<h2>Task 3</h2>");

var num = 1;

var flag = false

for(let i = 2; i < num/2 ; i++) {
    if (num % i == 0) {
        flag = true
    }
}

if (flag) {
    document.write(num, " this is not a prime number");
} 
else {
    document.write(num," this is prime number");
}


document.write('<br>');