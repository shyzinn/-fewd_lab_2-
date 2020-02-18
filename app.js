//3. What is the length of the array?
var myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G']; 
//Result: 7

//4. Write a function called myAlphabetLength which console.logs the length of the array.
function myAlphabetLength(){
console.log(myAlphabet.length);
}
myAlphabetLength();

//5. Declare and initialize an array called 'Planets' with 5 string values.
var planets;
planets=['Mercurio','Venus','Terra','Marte','Jupter'];

//6. Console.log each item using index in the array of Planets.
console.log(planets[0]);
console.log(planets[1]);
console.log(planets[2]);
console.log(planets[3]);
console.log(planets[4]);

//7. Declare and initialize an array called wowDatatypes which has 3 different data types (NOT OBJECTS)
//and console.log the values.
var wowDatatypes;
wowDatatypes=[13,"Gustavo",29/06];
console.log(wowDatatypes);
//8. Write down the values that are returned for the expressions below.
var x=5, y=10, z=15;
x+y; 15
y-x; 5
x*y; 50
y/x; 2
x%2; 1
x++; 5
x--; 6
var x=5,y=10,z=15;
console.log(x+y);
console.log(y-x);
console.log(x*y);
console.log(y/x);
console.log(x%2);
console.log(x++);
console.log(x--);
//9. Write down the values that are returned for the below concatenations.
Var a=5, b="Hello", c="World", d=10;
a+b; 5 Hello
b+c; Hello World
A+d; 15
var a=5, b='Hello', c='World', d=10;
console.log(a+b);
console.log(b+c);
console.log(a+d);

//10.Write down the values that are returned for the below comparison expressions. Note: It’s either true
//or false.
var a=5, b=10, c="5";
var x=a;
a==c; true
a===c; false
a==x; true
a !=b; true
a>b; false
a<b; true
a>=b; false
a<=b; true
a>=c; true
a<=c; true
var a=5, b=10, c='5';
var x=a;
console.log(a==c);
console.log(a===c);
console.log(a==x);
console.log(a !=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a>=c);
console.log(a<=c);

//11.A function is a block of statements that can be executed as often as you like. A function can have
//parameters and can return a value. Functions are defined by the keyword function, followed by the
//parameters enclosed in parentheses, followed by the instructions enclosed in curly brackets. Use the
//keyword return to return a value. At the same time return terminates the function. Functions can be
//assigned to a variable.

var color=function(){
Return 'green';
}
//we define a function that returns the value 'red'. The function has no parameters (the parentheses are
//empty) and contains only the return statement. The function is assigned to the variable color. The
//function is called via this variable:
var result=color();

//Declare a variable hello. Assign a function to it returning 'Hello world!'. 
var hello=function(){
return 'Hello World';
}
var result=hello();
console.log(result);

//12. Console.log the hello function.

console.log(result);

//13.Which value does x have after executing the following code?
var hello=function() {
return ‘Hi!;
};
var x=hello(); Hi!
var hello2=function() {
return 'Hi!';
};
var x=hello2();
console.log(x);




