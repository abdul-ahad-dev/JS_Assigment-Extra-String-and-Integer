

// task 01

document.write("<h2>Task 01</h2>");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 == 0) {
        evenNumbers.push(numbers[i]);
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

document.write("String: ", '"',string, '"');

var reverseString = ''

for(let i = string.length - 1; i >= 0 ; i--) {
    reverseString += string[i]
}

document.write('<br>');

document.write("Reverse String: ", '"',reverseString,'"');


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


// tassk 4

document.write("<h2>Task 4</h2>");

var numbers = [4, 7, 2, 10, 5, 2, 8, 1, 9];

var maxNumber = 0;

for (let i = 0; i < numbers.length; i++) {
    if (maxNumber < numbers[i]) {
        maxNumber = numbers[i]
    }
}

document.write("Number of list: ");

document.write('[' ,numbers, ']');

document.write('<br>');

document.write("Maxium element of the list: ");

document.write(maxNumber);



// task 5

document.write("<h2>Task 5</h2>");

var string = 'civic';

var reverseString = '';

for (let i = string.length - 1; i >= 0 ; i--) {

    reverseString += string[i]

}

document.write("String is: ",string);


document.write('<br>');



if (string === reverseString) {

    document.write("Yes, this is palindrome");

} 
else {

    document.write("No, this is not palindrome");

}



// task 6


document.write("<h2>Task 6</h2>");

var numOfTerm = 10

var a = 0, b = 1, c;

document.write("Fibonacci series:  ");

document.write('<br>');

for (let i = 0; i < numOfTerm; i++) {
    document.write(a, ", ");
    c = a + b
    a = b
    b = c  
}



// task 7



document.write("<h2>Task 7</h2>");

var para = "This is paragraph"

document.write("Text: <br>");

document.write('"', para, '"');


para = para.toLocaleLowerCase();

var vowel = 0

for (let i = 0; i < para.length; i++) {
    if (para[i] == 'a' || para[i] == 'e' || para[i] == 'i' || para[i] == 'o' || para[i] == 'u') {
        vowel++
    }
}

document.write('<br>');

document.write('<br>');

document.write("Number of vowel is: ");

document.write(vowel);



// task 8


document.write("<h2>Task 8</h2>");


var num = 5;

var factorial = 1


for (let i = 1; i <= num; i++) {
    
    factorial *= i   
}


document.write("Factorial of ", num, " is: ",factorial);

