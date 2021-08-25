
// Check the number if even or odd 
// function EvenAndOdd()
// {
//     for(let i = 1 ; i <= 15; i++){
//         console.log(i % 2 === 0 ?`Number ${i} is Even ` :`Number ${i} is Odd` );
//     }
// }
// EvenAndOdd ();

// Fizz Buzz Game
// function FizzBuzz()
// {
//     for(let i =1; i <= 15; i++){  
//         console.log(i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" : 
//                     i % 3 === 0 ? "Fizz" : 
//                     i % 5 === 0 ? "Buzz" : 
//                     i);
//     }
// }
// FizzBuzz();

// Reverse String 
// function ReverseMessage()
// {
//     let message = "Welcome";
//     let result = message.split('').reverse().join('');
//     console.log(result);
// }
// ReverseMessage();

// // Compute Circle Area and Circumference
// function CircleRules()
// {
//     let raduis = parseFloat(prompt("Enter a Raduis : "));
//     let area =  3.14 * raduis * raduis ;
//     let circumference = 2 * 3.14 * raduis ;
//     console.log(`Area of Circle is ${area}`);
//     console.log(`Circumference of Circle is ${circumference}`);
// }
// CircleRules();

// // //check two given numbers and return true if one of the number is 50 or if their sum is 50.
// function CheckForResult50() 
// {
//     var number1 = Number(prompt("Enter first number : "));
//     var number2 = Number(prompt("Enter second number : "));
//     var result = number1 === 50 || number2 === 50 ? true: number1 + number2 === 50 ? true : false ;
//     console.log(result);
// }
// CheckForResult50();

// // //check from two given integers, whether one is positive and another one is negative.
// function CheckPositiveAndNegative()
// {
//     var num1 = parseInt(prompt("Enter first number : ")) ;
//     var num2 = parseInt(prompt("Enter second number : "));

//     var result = num1>0 && num2<0 || num1<0 && num2>0 ? "There is one number is positive and another is negative": false ;
//     console.log(result);
    
// }
// CheckPositiveAndNegative();

// // check whether a given positive number is a multiple of 5 or a multiple of 8.
// function CheckMultiple5Or8()
// {
//     var n = parseInt(prompt("Enter first number : ")) ;
//     if (n>0)
//     {
//         if(n % 5 == 0 )
//         {
//             console.log(`${n} is a multiple of 5`);
//         }
//         else if (n % 8 == 0)
//         {
//             console.log(`${n} is a multiple of 8`);
//         }
//         else
//         {
//             console.log(`${n} is not a multiple of 8 or 5`);
//         }
//     }
//     else
//     {
//         console.log("This number is not a positive number");
//     }
// }
// CheckMultiple5Or8();

// find the largest of three given integers
// function FindTheLargestNumber()
// {
//     var num1 = Number(prompt("Enter First number : ")) ;
//     var num2 = Number(prompt("Enter Second number : "));
//     var num3 = Number(prompt("Enter Third number : "));

//     var result;

//     if (num2 >= num1 && num2 >= num3) 
//     {
//         result = num2;
//     }
//     else if(num1 >= num2 && num1 >= num3) 
//     {
//         result = num1;
//     }
//     else 
//     {
//         result = num3;
//     }
//     console.log(`The largest number of ${num1} and ${num2} and ${num3} is : ${result}`);

// }
// FindTheLargestNumber();

// // Compute The sum of the numbers from 1 to 10
// function sumGofNumbers(){
//     let sum = 0;
//     for(let i = 1 ; i <= 10; i++){
//         // Sum = sum + i
//         sum += i;
//     }
//     console.log(sum);
// }
// sumGofNumbers(); 

// // display the pattern like right angle triangle using an asterisk.
// function ShapeWithStars()
// {
//     for(var i = 1 ; i < 5 ; i++)
//     {
//         for(var j = 1 ; j <= i ; j++)
//         {
//             console.log(`*\n`);
//         }
//     }
// }
// ShapeWithStars();

// // check whether a given number is positive or negative.
// function CheckPosOrNeg()
// {
//     var Number1 = Number(prompt("Enter number : ")) ; 
//     if(Number1 > 0)
//     {
//         console.log(`${Number1} is Positive.`);
//     }
//     else if(Number1 < 0)
//     {
//         console.log(`${Number1} is Negative.`);
//     }
//     else
//     {
//         console.log(Number1);
//     }
// }
// CheckPosOrNeg();

// store elements in an array and print it.
// function Store()
// {
//     var nt = Number(prompt("Enter number : ")) ; 
//     var e = prompt("Enter element : ");

//     var list = [10];
//     for (let i=0 ; i < 10 ; i++)
//     {
//         list[i]=prompt("Enter array element : ");
//     }
//     console.log("Array element are : ");
//     for(let i = 0;i<10;i++)
//     {
//         console.log(`${list[i]}`);
//     }
// }
// Store();

// print sum of two numbers
// function sum()
// {
//     var a = 1 ;
//     var b = 1 ;
//     var sum = a+b;
//     console.log(`sum is ${sum}`);
// }
// sum();

// calculate the factorial of a given number
// function factorial()
// {
//     var nf = Number(prompt("Enter array element : "));
//     var factorial = 1;

//     for(var i=1 ; i<=nf ; i++)
//     {
//         factorial = factorial * i ;
//     }
//     i--;
//     console.log(`factorial of ${i} is ${factorial}`)
// }
// factorial();

//Create Simple Calculator
// function Calculator()
// {
//     var operation = prompt('Enter the operation you need to execute ( either +, -, * or / ): ');
//     var operand1 = Number(prompt('Enter first number: '));
//     var operand2 = Number(prompt('Enter second number: '));
//     var res ;
  
//     console.log(operation == '+'? res = operand1 + operand2 : 
//         operation == '-'? res = operand1 - operand2: 
//         operation == '*'? res = operand1 * operand2:
//         operation == '/'? res = operand1 / operand2: 
//                 `undefined operation`);

//     console.log(`The result is ${res}.`);
// }
// Calculator();
