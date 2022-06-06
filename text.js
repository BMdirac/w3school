                // ********************** chapter 1 ****************** 

                                        JavaScript Introduction

This page contains some examples of what JavaScript can do.

JavaScript Can Change HTML Content
One of many JavaScript HTML methods is getElementById().

The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":

Example
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

</body>
</html>

Example
document.getElementById('demo').innerHTML = 'Hello JavaScript';
JavaScript Can Change HTML Attribute Values
In this example JavaScript changes the value of the src (source) attribute of an <img> tag:

<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

</body>
</html>

ADVERTISEMENT

JavaScript Can Change HTML Styles (CSS)
Changing the style of an HTML element, is a variant of changing an HTML attribute:

Example
document.getElementById("demo").style.fontSize = "35px";
JavaScript Can Hide HTML Elements
Hiding HTML elements can be done by changing the display style:

Example
document.getElementById("demo").style.display = "none";
JavaScript Can Show HTML Elements
Showing hidden HTML elements can also be done by changing the display style:

Example
document.getElementById("demo").style.display = "block";
Did You Know?
JavaScript and Java are completely different languages, both in concept and design.

JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.

ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.

                                            JavaScript Where To

The <script> Tag
In HTML, JavaScript code is inserted between <script> and </script> tags.

Example
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

Old JavaScript examples may use a type attribute: <script type="text/javascript">.
The type attribute is not required. JavaScript is the default scripting language in HTML.

JavaScript Functions and Events
A JavaScript function is a block of JavaScript code, that can be executed when "called" for.

For example, a function can be called when an event occurs, like when the user clicks a button.

You will learn much more about functions and events in later chapters.

JavaScript in <head> or <body>
You can place any number of scripts in an HTML document.

Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.

JavaScript in <head>
In this example, a JavaScript function is placed in the <head> section of an HTML page.

The function is invoked (called) when a button is clicked:

Example
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>

JavaScript in <body>
In this example, a JavaScript function is placed in the <body> section of an HTML page.

The function is invoked (called) when a button is clicked:

Example
<!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>
Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.

External JavaScript
Scripts can also be placed in external files:

External file: myScript.js
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
External scripts are practical when the same code is used in many different web pages.

JavaScript files have the file extension .js.

To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:

Example
<script src="myScript.js"></script>
You can place an external script reference in <head> or <body> as you like.

The script will behave as if it was located exactly where the <script> tag is located.

External scripts cannot contain <script> tags.

External JavaScript Advantages
Placing scripts in external files has some advantages:

It separates HTML and code
It makes HTML and JavaScript easier to read and maintain
Cached JavaScript files can speed up page loads
To add several script files to one page  - use several script tags:

Example
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>
External References
An external script can be referenced in 3 different ways:

With a full URL (a full web address)
With a file path (like /js/)
Without any path
This example uses a full URL to link to myScript.js:

Example
<script src="https://www.w3schools.com/js/myScript.js"></script>

This example uses a file path to link to myScript.js:

Example
<script src="/js/myScript.js"></script>

This example uses no path to link to myScript.js:

Example
<script src="myScript.js"></script>

You can read more about file paths in the chapter HTML File Paths.

                                        JavaScript Output

JavaScript Display Possibilities
JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().
Using innerHTML
To access an HTML element, JavaScript can use the document.getElementById(id) method.

The id attribute defines the HTML element. The innerHTML property defines the HTML content:

Example
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>
Changing the innerHTML property of an HTML element is a common way to display data in HTML.

Using document.write()
For testing purposes, it is convenient to use document.write():

Example
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>
Using document.write() after an HTML document is loaded, will delete all existing HTML:

Example
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<button type="button" onclick="document.write(5 + 6)">Try it</button>

</body>
</html>
The document.write() method should only be used for testing.

ADVERTISEMENT

Using window.alert()
You can use an alert box to display data:

Example
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>
You can skip the window keyword.

In JavaScript, the window object is the global scope object, that means that variables, properties, and methods by default belong to the window object. This also means that specifying the window keyword is optional:

Example
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
alert(5 + 6);
</script>

</body>
</html>
Using console.log()
For debugging purposes, you can call the console.log() method in the browser to display data.

You will learn more about debugging in a later chapter.

Example
<!DOCTYPE html>
<html>
<body>

<script>
console.log(5 + 6);
</script>

</body>
</html>
JavaScript Print
JavaScript does not have any print object or print methods.

You cannot access output devices from JavaScript.

The only exception is that you can call the window.print() method in the browser to print the content of the current window.

Example
<!DOCTYPE html>
<html>
<body>

<button onclick="window.print()">Print this page</button>

</body>
</html>

                                                JavaScript Statements

Example
let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4
JavaScript Programs
A computer program is a list of "instructions" to be "executed" by a computer.

In a programming language, these programming instructions are called statements.

A JavaScript program is a list of programming statements.

In HTML, JavaScript programs are executed by the web browser.

JavaScript Statements
JavaScript statements are composed of:

Values, Operators, Expressions, Keywords, and Comments.

This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo":

Example
document.getElementById("demo").innerHTML = "Hello Dolly.";
Most JavaScript programs contain many JavaScript statements.

The statements are executed, one by one, in the same order as they are written.

JavaScript programs (and JavaScript statements) are often called JavaScript code.

Semicolons ;
Semicolons separate JavaScript statements.

Add a semicolon at the end of each executable statement:

Examples
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c
When separated by semicolons, multiple statements on one line are allowed:

a = 5; b = 6; c = a + b;
On the web, you might see examples without semicolons.
Ending statements with semicolon is not required, but highly recommended.

ADVERTISEMENT

JavaScript White Space
JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.

The following lines are equivalent:

let person = "Hege";
let person="Hege";
A good practice is to put spaces around operators ( = + - * / ):

let x = y + z;
JavaScript Line Length and Line Breaks
For best readability, programmers often like to avoid code lines longer than 80 characters.

If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

Example
document.getElementById("demo").innerHTML =
"Hello Dolly!";
JavaScript Code Blocks
JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.

The purpose of code blocks is to define statements to be executed together.

One place you will find statements grouped together in blocks, is in JavaScript functions:

Example
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
In this tutorial we use 2 spaces of indentation for code blocks.
You will learn more about functions later in this tutorial.

JavaScript Keywords
JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

Our Reserved Words Reference lists all JavaScript keywords.

Here is a list of some of the keywords you will learn about in this tutorial:

Keyword	Description
var	Declares a variable
let	Declares a block variable
const	Declares a block constant
if	Marks a block of statements to be executed on a condition
switch	Marks a block of statements to be executed in different cases
for	Marks a block of statements to be executed in a loop
function	Declares a function
return	Exits a function
try	Implements error handling to a block of statements
JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.

                                                        JavaScript Syntax

JavaScript syntax is the set of rules, how JavaScript programs are constructed:

// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;
JavaScript Values
The JavaScript syntax defines two types of values:

Fixed values
Variable values
Fixed values are called Literals.

Variable values are called Variables.

JavaScript Literals
The two most important syntax rules for fixed values are:

1. Numbers are written with or without decimals:

10.50

1001
2. Strings are text, written within double or single quotes:

"John Doe"

'John Doe'
ADVERTISEMENT

JavaScript Variables
In a programming language, variables are used to store data values.

JavaScript uses the keywords var, let and const to declare variables.

An equal sign is used to assign values to variables.

In this example, x is defined as a variable. Then, x is assigned (given) the value 6:

let x;
x = 6;
JavaScript Operators
JavaScript uses arithmetic operators ( + - * / ) to compute values:

(5 + 6) * 10
JavaScript uses an assignment operator ( = ) to assign values to variables:

let x, y;
x = 5;
y = 6;
JavaScript Expressions
An expression is a combination of values, variables, and operators, which computes to a value.

The computation is called an evaluation.

For example, 5 * 10 evaluates to 50:

5 * 10
Expressions can also contain variable values:

x * 10
The values can be of various types, such as numbers and strings.

For example, "John" + " " + "Doe", evaluates to "John Doe":

"John" + " " + "Doe"
JavaScript Keywords
JavaScript keywords are used to identify actions to be performed.

The let keyword tells the browser to create variables:

let x, y;
x = 5 + 6;
y = x * 10;
The var keyword also tells the browser to create variables:

var x, y;
x = 5 + 6;
y = x * 10;
In these examples, using var or let will produce the same result.

You will learn more about var and let later in this tutorial.

JavaScript Comments
Not all JavaScript statements are "executed".

Code after double slashes // or between /* and */ is treated as a comment.

Comments are ignored, and will not be executed:

let x = 5;   // I will be executed

// x = 6;   I will NOT be executed
You will learn more about comments in a later chapter.

JavaScript Identifiers / Names
Identifiers are JavaScript names.

Identifiers are used to name variables and keywords, and functions.

The rules for legal names are the same in most programming languages.

A JavaScript name must begin with:

A letter (A-Z or a-z)
A dollar sign ($)
Or an underscore (_)
Subsequent characters may be letters, digits, underscores, or dollar signs.

Note
Numbers are not allowed as the first character in names.

This way JavaScript can easily distinguish identifiers from numbers.

JavaScript is Case Sensitive
All JavaScript identifiers are case sensitive. 

The variables lastName and lastname, are two different variables:

let lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
JavaScript does not interpret LET or Let as the keyword let.

JavaScript and Camel Case
Historically, programmers have used different ways of joining multiple words into one variable name:

Hyphens:

first-name, last-name, master-card, inter-city.

Hyphens are not allowed in JavaScript. They are reserved for subtractions.

Underscore:

first_name, last_name, master_card, inter_city.

Upper Camel Case (Pascal Case):

FirstName, LastName, MasterCard, InterCity.

Lower Camel Case:

JavaScript programmers tend to use camel case that starts with a lowercase letter:

firstName, lastName, masterCard, interCity.

JavaScript Character Set
JavaScript uses the Unicode character set.

Unicode covers (almost) all the characters, punctuations, and symbols in the world.

For a closer look, please study our Complete Unicode Reference.


                                    // ********************** chapter 2 ****************** 

                                    JavaScript Comments
JavaScript comments can be used to explain JavaScript code, and to make it more readable.

JavaScript comments can also be used to prevent execution, when testing alternative code.

Single Line Comments
Single line comments start with //.

Any text between // and the end of the line will be ignored by JavaScript (will not be executed).

This example uses a single-line comment before each code line:

Example
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";

// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";
This example uses a single line comment at the end of each line to explain the code:

Example
let x = 5;      // Declare x, give it the value of 5
let y = x + 2;  // Declare y, give it the value of x + 2
Multi-line Comments
Multi-line comments start with /* and end with */.

Any text between /* and */ will be ignored by JavaScript.

This example uses a multi-line comment (a comment block) to explain the code:

Example
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
It is most common to use single line comments.
Block comments are often used for formal documentation.

ADVERTISEMENT

Using Comments to Prevent Execution
Using comments to prevent execution of code is suitable for code testing.

Adding // in front of a code line changes the code lines from an executable line to a comment.

This example uses // to prevent execution of one of the code lines:

Example
//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
This example uses a comment block to prevent execution of multiple lines:

Example
/*
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
*/

                                                      JavaScript Variables

4 Ways to Declare a JavaScript Variable:
Using var
Using let
Using const
Using nothing
What are Variables?
Variables are containers for storing data (storing data values).

In this example, x, y, and z, are variables, declared with the var keyword:

Example
var x = 5;
var y = 6;
var z = x + y;
In this example, x, y, and z, are variables, declared with the let keyword:

Example
let x = 5;
let y = 6;
let z = x + y;
In this example, x, y, and z, are undeclared variables:

Example
x = 5;
y = 6;
z = x + y;
From all the examples above, you can guess:

x stores the value 5
y stores the value 6
z stores the value 11
When to Use JavaScript var?
Always declare JavaScript variables with var,let, orconst.

The var keyword is used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

If you want your code to run in older browser, you must use var.

When to Use JavaScript const?
If you want a general rule: always declare variables with const.

If you think the value of the variable can change, use let.

In this example, price1, price2, and total, are variables:

Example
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Variables</h1>

<p>In this example, price, price2, and total are variables.</p>

<p id="demo"></p>

<script>
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
document.getElementById("demo").innerHTML =
"The total is: " + total;
</script>

</body>
</html>

These are constant values and cannot be changed.

The variable total is declared with the let keyword.

This is a value that can be changed.

Just Like Algebra
Just like in algebra, variables hold values:

let x = 5;
let y = 6;
Just like in algebra, variables are used in expressions:

let z = x + y;
From the example above, you can guess that the total is calculated to be 11.

Note
Variables are containers for storing values.

ADVERTISEMENT

JavaScript Identifiers
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter
Names can also begin with $ and _ (but we will not use it in this tutorial)
Names are case sensitive (y and Y are different variables)
Reserved words (like JavaScript keywords) cannot be used as names
Note
JavaScript identifiers are case-sensitive.

The Assignment Operator
In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.

This is different from algebra. The following does not make sense in algebra:

x = x + 5
In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.

(It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)

Note
The "equal to" operator is written like == in JavaScript.

JavaScript Data Types
JavaScript variables can hold numbers like 100 and text values like "John Doe".

In programming, text values are called text strings.

JavaScript can handle many types of data, but for now, just think of numbers and strings.

Strings are written inside double or single quotes. Numbers are written without quotes.

If you put a number in quotes, it will be treated as a text string.

Example
const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';
Declaring a JavaScript Variable
Creating a variable in JavaScript is called "declaring" a variable.

You declare a JavaScript variable with the var or the let keyword:

var carName;
or:
let carName;
After the declaration, the variable has no value (technically it is undefined).

To assign a value to the variable, use the equal sign:

carName = "Volvo";
You can also assign a value to the variable when you declare it:

let carName = "Volvo";
In the example below, we create a variable called carName and assign the value "Volvo" to it.

Then we "output" the value inside an HTML paragraph with id="demo":

Example
<p id="demo"></p>

<script>
let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
</script>
Note
It's a good programming practice to declare all variables at the beginning of a script.

One Statement, Many Variables
You can declare many variables in one statement.

Start the statement with let and separate the variables by comma:

Example
let person = "John Doe", carName = "Volvo", price = 200;
A declaration can span multiple lines:

Example
let person = "John Doe",
carName = "Volvo",
price = 200;
Value = undefined
In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

A variable declared without a value will have the value undefined.

The variable carName will have the value undefined after the execution of this statement:

Example
let carName;
Re-Declaring JavaScript Variables
If you re-declare a JavaScript variable declared with var, it will not lose its value.

The variable carName will still have the value "Volvo" after the execution of these statements:

Example
var carName = "Volvo";
var carName;
Note
You cannot re-declare a variable declared with let or const.

This will not work:

let carName = "Volvo";
let carName;
JavaScript Arithmetic
As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:

Example
let x = 5 + 2 + 3;
You can also add strings, but strings will be concatenated:

Example
let x = "John" + " " + "Doe";
Also try this:

Example
let x = "5" + 2 + 3;
Note
If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

Now try this:

Example
let x = 2 + 3 + "5";
JavaScript Dollar Sign $
Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:

Example
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.

In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery $("p"); means "select all p elements".

JavaScript Underscore (_)
Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:

Example
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.

                                                          JavaScript Let

The let keyword was introduced in ES6 (2015).

Variables defined with let cannot be Redeclared.

Variables defined with let must be Declared before use.

Variables defined with let have Block Scope.

Cannot be Redeclared
Variables defined with let cannot be redeclared.

You cannot accidentally redeclare a variable.

With let you can not do this:

Example
let x = "John Doe";

let x = 0;

// SyntaxError: 'x' has already been declared
With var you can:

Example
var x = "John Doe";

var x = 0;
Block Scope
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

Example
{
  let x = 2;
}
// x can NOT be used here
Variables declared with the var keyword can NOT have block scope.

Variables declared inside a { } block can be accessed from outside the block.

Example
{
  var x = 2;
}
// x CAN be used here
Redeclaring Variables
Redeclaring a variable using the var keyword can impose problems.

Redeclaring a variable inside a block will also redeclare the variable outside the block:

Example
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
Redeclaring a variable using the let keyword can solve this problem.

Redeclaring a variable inside a block will not redeclare the variable outside the block:

Example
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
Browser Support
The let keyword is not fully supported in Internet Explorer 11 or earlier.

The following table defines the first browser versions with full support for the let keyword:

Chrome 49	Edge 12	Firefox 44	Safari 11	Opera 36
Mar, 2016	Jul, 2015	Jan, 2015	Sep, 2017	Mar, 2016
ADVERTISEMENT

Redeclaring
Redeclaring a JavaScript variable with var is allowed anywhere in a program:

Example
var x = 2;
// Now x is 2

var x = 3;
// Now x is 3
With let, redeclaring a variable in the same block is NOT allowed:

Example
var x = 2;    // Allowed
let x = 3;    // Not allowed

{
let x = 2;    // Allowed
let x = 3     // Not allowed
}

{
let x = 2;    // Allowed
var x = 3     // Not allowed
}
Redeclaring a variable with let, in another block, IS allowed:

Example
let x = 2;    // Allowed

{
let x = 3;    // Allowed
}

{
let x = 4;    // Allowed
}
Let Hoisting
Variables defined with var are hoisted to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:

Example
This is OK:

carName = "Volvo";
var carName;
If you want to learn more about hoisting, study the chapter JavaScript Hoisting.

Variables defined with let are also hoisted to the top of the block, but not initialized.

Meaning: Using a let variable before it is declared will result in a ReferenceError:

Example
carName = "Saab";
let carName = "Volvo";

                                            JavaScript Const

The const keyword was introduced in ES6 (2015).

Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.

Cannot be Reassigned
A const variable cannot be reassigned:

Example
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
Must be Assigned
JavaScript const variables must be assigned a value when they are declared:

Correct
const PI = 3.14159265359;
Incorrect
const PI;
PI = 3.14159265359;
When to use JavaScript const?
As a general rule, always declare a variable with const unless you know that the value will change.

Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp
Constant Objects and Arrays
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object
Constant Arrays
You can change the elements of a constant array:

Example
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<p>Declaring a constant array does NOT make the elements unchangeable:</p>

<p id="demo"></p>

<script>
// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");      /* push adds element at the end of an array  */

// Display the Array:
document.getElementById("demo").innerHTML = cars; 
</script>

</body>
</html>

But you can NOT reassign the array:

Example
const cars = ["Saab", "Volvo", "BMW"];  {/* note the bracket used here  */}

cars = ["Toyota", "Volvo", "Audi"];    // ERROR
Constant Objects
You can change the properties of a constant object:

Example
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};  {/* note the bracket used here  */

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
But you can NOT reassign the object:

Example
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
Browser Support
The const keyword is not supported in Internet Explorer 10 or earlier.

The following table defines the first browser versions with full support for the const keyword:

Chrome 49	IE 11 / Edge	Firefox 36	Safari 10	Opera 36
Mar, 2016	Oct, 2013	Feb, 2015	Sep, 2016	Mar, 2016
ADVERTISEMENT

Block Scope
Declaring a variable with const is similar to let when it comes to Block Scope.

The x declared in the block, in this example, is not the same as the x declared outside the block:

Example
const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10
You can learn more about block scope in the chapter JavaScript Scope.

Redeclaring
Redeclaring a JavaScript var variable is allowed anywhere in a program:

Example
var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed
Redeclaring an existing var or let variable to const, in the same scope, is not allowed:

Example
var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}
Reassigning an existing const variable, in the same scope, is not allowed:

Example
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}
Redeclaring a variable with const, in another scope, or in another block, is allowed:

Example
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}
Const Hoisting
Variables defined with var are hoisted to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:

Example
This is OK:

carName = "Volvo";
var carName;
If you want to learn more about hoisting, study the chapter JavaScript Hoisting.

Variables defined with const are also hoisted to the top, but not initialized.

Meaning: Using a const variable before it is declared will result in a ReferenceError:

Example
alert (carName);
const carName = "Volvo";

                                            JavaScript Operators

Example
Assign values to variables and add them together:

let x = 5;         // assign the value 5 to x
let y = 2;         // assign the value 2 to y
let z = x + y;     // assign the value 7 to z (5 + 2)
The assignment operator (=) assigns a value to a variable.

Assignment
let x = 10;
The addition operator (+) adds numbers:

Adding
let x = 5;
let y = 2;
let z = x + y;
The multiplication operator (*) multiplies numbers.

Multiplying
let x = 5;
let y = 2;
let z = x * y;
ADVERTISEMENT

JavaScript Arithmetic Operators
Arithmetic operators are used to perform arithmetic on numbers:

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
Arithmetic operators are fully described in the JS Arithmetic chapter.

JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
The addition assignment operator (+=) adds a value to a variable.

Assignment
let x = 10;
x += 5;
Assignment operators are fully described in the JS Assignment chapter.

JavaScript String Operators
The + operator can also be used to add (concatenate) strings.

Example
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Operators</h2>

<p>The + operator concatenates (adds) strings.</p>

<p id="demo"></p>

<script>
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
document.getElementById("demo").innerHTML = text3;
</script>

</body>
</html>


The result of text3 will be:

John Doe
The += assignment operator can also be used to add (concatenate) strings:

Example
let text1 = "What a very ";
text1 += "nice day";
The result of text1 will be:

What a very nice day
When used on strings, the + operator is called the concatenation operator.

Adding Strings and Numbers
Adding two numbers, will return the sum, but adding a number and a string will return a string:

Example
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
The result of x, y, and z will be:

10
55
Hello5
If you add a number and a string, the result will be a string!

JavaScript Comparison Operators
Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
Comparison operators are fully described in the JS Comparisons chapter.

JavaScript Logical Operators
Operator	Description
&&	logical and
||	logical or
!	logical not
Logical operators are fully described in the JS Comparisons chapter.

JavaScript Type Operators
Operator	Description
typeof	Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type
Type operators are fully described in the JS Type Conversion chapter.

JavaScript Bitwise Operators
Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
Operator	Description	Example	Same as	Result	Decimal
&	AND	5 & 1	0101 & 0001	0001	 1
|	OR	5 | 1	0101 | 0001	0101	 5
~	NOT	~ 5	 ~0101	1010	 10
^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
<<	left shift	5 << 1	0101 << 1	1010	 10
>>	right shift	5 >> 1	0101 >> 1	0010	  2
>>>	unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2
The examples above uses 4 bits unsigned examples. But JavaScript uses 32-bit signed numbers.
Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.
~00000000000000000000000000000101 will return 11111111111111111111111111111010

Bitwise operators are fully described in the JS Bitwise chapter.

                                            JavaScript Arithmetic

JavaScript Arithmetic Operators
Arithmetic operators perform arithmetic on numbers (literals or variables).

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
Arithmetic Operations
A typical arithmetic operation operates on two numbers.

The two numbers can be literals:

Example
let x = 100 + 50;
or variables:

Example
let x = a + b;
or expressions:

Example
let x = (100 + 50) * a;
Operators and Operands
The numbers (in an arithmetic operation) are called operands.

The operation (to be performed between the two operands) is defined by an operator.

Operand	Operator	Operand
100	+	50
ADVERTISEMENT

Adding
The addition operator (+) adds numbers:

Example
let x = 5;
let y = 2;
let z = x + y;
Subtracting
The subtraction operator (-) subtracts numbers.

Example
let x = 5;
let y = 2;
let z = x - y;
Multiplying
The multiplication operator (*) multiplies numbers.

Example
let x = 5;
let y = 2;
let z = x * y;
Dividing
The division operator (/) divides numbers.

Example
let x = 5;
let y = 2;
let z = x / y;
Remainder
The modulus operator (%) returns the division remainder.

Example
let x = 5;
let y = 2;
let z = x % y;
In arithmetic, the division of two integers produces a quotient and a remainder.

In mathematics, the result of a modulo operation is the remainder of an arithmetic division.

Incrementing
The increment operator (++) increments numbers.

Example
let x = 5;
x++;
let z = x;
Decrementing
The decrement operator (--) decrements numbers.

Example
let x = 5;
x--;
let z = x;
Exponentiation
The exponentiation operator (**) raises the first operand to the power of the second operand.

Example
let x = 5;
let z = x ** 2;          // result is 25
x ** y produces the same result as Math.pow(x,y):

Example
let x = 5;
let z = Math.pow(x,2);   // result is 25
Operator Precedence
Operator precedence describes the order in which operations are performed in an arithmetic expression.

Example
let x = 100 + 50 * 3;
Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?

Is the addition or the multiplication done first?

As in traditional school mathematics, the multiplication is done first.

Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

And (as in school mathematics) the precedence can be changed by using parentheses:

Example
let x = (100 + 50) * 3;
When using parentheses, the operations inside the parentheses are computed first.

When many operations have the same precedence (like addition and subtraction), they are computed from left to right:

Example
let x = 100 + 50 - 3;
JavaScript Operator Precedence Values
Pale red entries indicates ECMAScript 2015 (ES6) or higher.

Value	Operator	Description	Example
21	( )	Expression grouping	(3 + 4)
 	 	 	 
20	.	Member	person.name
20	[]	Member	person["name"]
20	()	Function call	myFunction()
20	new	Create	new Date()
 	 	 	 
18	++	Postfix Increment	i++
18	--	Postfix Decrement	i--
 	 	 	 
17	++	Prefix Increment	++i
17	--	Prefix Decrement	--i
17	!	Logical not	!(x==y)
17	typeof	Type	typeof x
 	 	 	 
16	**	Exponentiation (ES2016)	10 ** 2
 	 	 	 
15	*	Multiplication	10 * 5
15	/	Division	10 / 5
15	%	Division Remainder	10 % 5
 	 	 	 
14	+	Addition	10 + 5
14	-	Subtraction	10 - 5
 	 	 	 
13	<<	Shift left	x << 2
13	>>	Shift right	x >> 2
13	>>>	Shift right (unsigned)	x >>> 2
 	 	 	 
12	<	Less than	x < y 
12	<=	Less than or equal	x <= y
12	>	Greater than	x > y
12	>=	Greater than or equal	x >= y
12	in	Property in Object	"PI" in Math
12	instanceof	Instance of Object	instanceof Array
 	 	 	 
11	==	Equal	x == y
11	===	Strict equal	x === y
11	!=	Unequal	x != y
11	!==	Strict unequal	x !== y
 	 	 	 
10	&	Bitwise AND	x & y
9	^	Bitwise XOR	x ^ y
8	|	Bitwise OR	x | y
7	&&	Logical AND	x && y
6	||	Logical OR	x || y
5	??	Nullish Coalescing	x ?? y
4	? :	Condition	? "Yes" : "No"
 	 	 	 
3	+=	Assignment	x += y
3	/=	Assignment	x /= y
3	-=	Assignment	x -= y
3	*=	Assignment	x *= y
3	%=	Assignment	x %= y
3	<<=	Assignment	x <<= y
3	>>=	Assignment	x >>= y
3	>>>=	Assignment	x >>>= y
3	&=	Assignment	x &= y
3	^=	Assignment	x ^= y
3	|=	Assignment	x |= y
 	 	 	 
2	yield	Pause Function	yield x
1	,	Comma	5 , 6

                                                // ********************** chapter 3 ****************** 

                                                JavaScript Assignment
JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
<<=	x <<= y	x = x << y
>>=	x >>= y	x = x >> y
>>>=	x >>>= y	x = x >>> y
&=	x &= y	x = x & y
^=	x ^= y	x = x ^ y
|=	x |= y	x = x | y
**=	x **= y	x = x ** y
The **= operator is a part of ECMAScript 2016.

Assignment Examples
The = assignment operator assigns a value to a variable.

Assignment
let x = 10;
The += assignment operator adds a value to a variable.

Assignment
let x = 10;
x += 5;
The -= assignment operator subtracts a value from a variable.

Assignment
let x = 10;
x -= 5;
The *= assignment operator multiplies a variable.

Assignment
let x = 10;
x *= 5;
The /= assignment divides a variable.

Assignment
let x = 10;
x /= 5;
The %= assignment operator assigns a remainder to a variable.

Assignment
let x = 10;
x %= 5;

                                                  JavaScript Data Types

JavaScript variables can hold different data types: numbers, strings, objects and more:

let length = 16;                               // Number
let lastName = "Johnson";                      // String
let x = {firstName:"John", lastName:"Doe"};    // Object
The Concept of Data Types
In programming, data types is an important concept.

To be able to operate on variables, it is important to know something about the type.

Without data types, a computer cannot safely solve this:

let x = 16 + "Volvo";
Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?

JavaScript will treat the example above as:

let x = "16" + "Volvo";
When adding a number and a string, JavaScript will treat the number as a string.

Example
let x = 16 + "Volvo";
Example
let x = "Volvo" + 16;
JavaScript evaluates expressions from left to right. Different sequences can produce different results:

JavaScript:
let x = 16 + 4 + "Volvo";
Result:

20Volvo
JavaScript:
let x = "Volvo" + 16 + 4;
Result:

Volvo164
In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

In the second example, since the first operand is a string, all operands are treated as strings.

ADVERTISEMENT

JavaScript Types are Dynamic
JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

Example
let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
JavaScript Strings
A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:
Example
let carName1 = "Volvo XC60";   // Using double quotes
let carName2 = 'Volvo XC60';   // Using single quotes
You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

Example
let answer1 = "It's alright";             // Single quote inside double quotes
let answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
let answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes
You will learn more about strings later in this tutorial.

JavaScript Numbers
JavaScript has only one type of numbers.

Numbers can be written with, or without decimals:

Example
let x1 = 34.00;     // Written with decimals
let x2 = 34;        // Written without decimals
Extra large or extra small numbers can be written with scientific (exponential) notation:

Example
let y = 123e5;      // 12300000
let z = 123e-5;     // 0.00123
You will learn more about numbers later in this tutorial.

JavaScript Booleans
Booleans can only have two values: true or false.

Example
let x = 5;
let y = 5;
let z = 6;
(x == y)       // Returns true
(x == z)       // Returns false
Booleans are often used in conditional testing.

You will learn more about conditional testing later in this tutorial.

JavaScript Arrays
JavaScript arrays are written with square brackets.

Array items are separated by commas.

The following code declares (creates) an array called cars, containing three items (car names):

Example
const cars = ["Saab", "Volvo", "BMW"];
Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

You will learn more about arrays later in this tutorial.

JavaScript Objects
JavaScript objects are written with curly braces {}.

Object properties are written as name:value pairs, separated by commas.

Example
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

You will learn more about objects later in this tutorial.

The typeof Operator
You can use the JavaScript typeof operator to find the type of a JavaScript variable.

The typeof operator returns the type of a variable or an expression:

Example
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

Example

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript typeof</h2>
<p>The typeof operator returns the type of a variable or an expression.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
typeof 0 + "<br>" + 
typeof 314 + "<br>" +
typeof 3.14 + "<br>" +
typeof (3) + "<br>" +
typeof (3 + 4);
</script>

</body>
</html>

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"
You will learn more about typeof later in this tutorial.

Undefined
In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

Example
let car;    // Value is undefined, type is undefined
Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

Example
car = undefined;    // Value is undefined, type is undefined
Empty Values
An empty value has nothing to do with undefined.

An empty string has both a legal value and a type.

Example
let car = "";    // The value is "", the typeof is "string"

                                                      JavaScript Functions

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

Example
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

A Function is much the same as a Procedure or a Subroutine, in other programming languages.

Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)
You will learn a lot more about function invocation later in this tutorial.

ADVERTISEMENT

Function Return
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

Example
Calculate the product of two numbers, and return the result:

let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
The result in x will be:

12
Why Functions?
You can reuse code: Define the code once, and use it many times.

You can use the same code many times with different arguments, to produce different results.

Example
Convert Fahrenheit to Celsius:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>

<p>This example calls a function to convert from Fahrenheit to Celsius:</p>
<p id="demo"></p>

<script>
function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);
</script>

</body>
</html>
document.getElementById("demo").innerHTML = toCelsius(77);
The () Operator Invokes the Function
Using the example above, toCelsius refers to the function object, and toCelsius() refers to the function result.

Accessing a function without () will return the function object instead of the function result.

Example
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius;
Functions Used as Variable Values
Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

Example
Instead of using a variable to store the return value of a function:

let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
You can use the function directly, as a variable value:

let text = "The temperature is " + toCelsius(77) + " Celsius";
You will learn a lot more about functions later in this tutorial.

Local Variables
Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.

Example
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Local variables are created when a function starts, and deleted when the function is completed.

                                            JavaScript Objects

Real Life Objects, Properties, and Methods
In real life, a car is an object.

A car has properties like weight and color, and methods like start and stop:

Object	Properties	Methods
	
car.name = Fiat

car.model = 500

car.weight = 850kg

car.color = white	
car.start()

car.drive()

car.brake()

car.stop()
All cars have the same properties, but the property values differ from car to car.

All cars have the same methods, but the methods are performed at different times.

JavaScript Objects
You have already learned that JavaScript variables are containers for data values.

This code assigns a simple value (Fiat) to a variable named car:

let car = "Fiat";
Objects are variables too. But objects can contain many values.

This code assigns many values (Fiat, 500, white) to a variable named car:

const car = {type:"Fiat", model:"500", color:"white"};
The values are written as name:value pairs (name and value separated by a colon).

It is a common practice to declare objects with the const keyword.

Learn more about using const with objects in the chapter: JS Const.

ADVERTISEMENT

Object Definition
You define (and create) a JavaScript object with an object literal:

Example
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
Spaces and line breaks are not important. An object definition can span multiple lines:

Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
Object Properties
The name:values pairs in JavaScript objects are called properties:

Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
Accessing Object Properties
You can access object properties in two ways:

objectName.propertyName
or

objectName["propertyName"]
Example1
person.lastName;
Example2
person["lastName"];
JavaScript objects are containers for named values called properties.

Object Methods
Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.

Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}
A method is a function stored as a property.

Example
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
In the example above, this refers to the person object.

I.E. this.firstName means the firstName property of this.

I.E. this.firstName means the firstName property of person.

What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
Note
this is not a variable. It is a keyword. You cannot change the value of this.
See Also:
The JavaScript this Tutorial

The this Keyword
In a function definition, this refers to the "owner" of the function.

In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object.

Learn more about this in The JavaScript this Tutorial.

Accessing Object Methods
You access an object method with the following syntax:

objectName.methodName()

Example

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>
<p>An object method is a function definition, stored as a property value.</p>

<p id="demo"></p>

<script>
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
</script>

</body>
</html>

name = person.fullName();

If you access a method without the () parentheses, it will return the function definition:

Example
name = person.fullName;
Do Not Declare Strings, Numbers, and Booleans as Objects!
When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.

You will learn more about objects later in this tutorial.

                                                  JavaScript Events

HTML events are "things" that happen to HTML elements.

When JavaScript is used in HTML pages, JavaScript can "react" on these events.

HTML Events
An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

An HTML web page has finished loading
An HTML input field was changed
An HTML button was clicked
Often, when events happen, you may want to do something.

JavaScript lets you execute code when events are detected.

HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

With single quotes:

<element event='some JavaScript'>
With double quotes:

<element event="some JavaScript">
In the following example, an onclick attribute (with code), is added to a <button> element:

Example

<!DOCTYPE html>
<html>
<body>

<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>

<p id="demo"></p>

</body>
</html>

In the example above, the JavaScript code changes the content of the element with id="demo".

In the next example, the code changes the content of its own element (using this.innerHTML):

Example

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Events</h2>
<button onclick="this.innerHTML=Date()">The time is?</button>

</body>
</html>

JavaScript code is often several lines long. It is more common to see event attributes calling functions:

Example

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Events</h2>
<p>Click the button to display the date.</p>

<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>

</body>
</html> 


ADVERTISEMENT

Common HTML Events
Here is a list of some common HTML events:

Event	Description
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page
The list is much longer: W3Schools JavaScript Reference HTML DOM Events.

JavaScript Event Handlers
Event handlers can be used to handle and verify user input, user actions, and browser actions:

Things that should be done every time a page loads
Things that should be done when the page is closed
Action that should be performed when a user clicks a button
Content that should be verified when a user inputs data
And more ...
Many different methods can be used to let JavaScript work with events:

HTML event attributes can execute JavaScript code directly
HTML event attributes can call JavaScript functions
You can assign your own event handler functions to HTML elements
You can prevent events from being sent or being handled
And more ...
You will learn a lot more about events and event handlers in the HTML DOM chapters.


                                                        // ********************** chapter 4 ****************** 

                                                        JavaScript Strings
JavaScript strings are for storing and manipulating text.

A JavaScript string is zero or more characters written inside quotes.

Example
let text = "John Doe";
You can use single or double quotes:

Example
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

Example
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
String Length
To find the length of a string, use the built-in length property:

Example
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
ADVERTISEMENT

Escape Character
Because strings must be written within quotes, JavaScript will misunderstand this string:

let text = "We are the so-called "Vikings" from the north.";
The string will be chopped to "We are the so-called ".

The solution to avoid this problem, is to use the backslash escape character.

The backslash (\) escape character turns special characters into string characters:

Code	Result	Description
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash
The sequence \"  inserts a double quote in a string:

Example
let text = "We are the so-called \"Vikings\" from the north.";
The sequence \'  inserts a single quote in a string:

Example
let text= 'It\'s alright.';
The sequence \\  inserts a backslash in a string:

Example
let text = "The character \\ is called backslash.";
Six other escape sequences are valid in JavaScript:

Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
The 6 escape characters above were originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML.

Breaking Long Code Lines
For best readability, programmers often like to avoid code lines longer than 80 characters.

If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

Example
document.getElementById("demo").innerHTML =
"Hello Dolly!";
You can also break up a code line within a text string with a single backslash:

Example
document.getElementById("demo").innerHTML = "Hello \
Dolly!";
The \ method is not the preferred method. It might not have universal support.
Some browsers do not allow spaces behind the \ character.

A safer way to break up a string, is to use string addition:

Example
document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";
You cannot break up a code line with a backslash:

Example
document.getElementById("demo").innerHTML = \
"Hello Dolly!";
JavaScript Strings as Objects
Normally, JavaScript strings are primitive values, created from literals:

let x = "John";
But strings can also be defined as objects with the keyword new:

let y = new String("John");
Example
let x = "John";
let y = new String("John");
Do not create Strings objects.

The new keyword complicates the code and slows down execution speed.

String objects can produce unexpected results:

When using the == operator, x and y are equal:

let x = "John";
let y = new String("John");
When using the === operator, x and y are not equal:

let x = "John";
let y = new String("John");
Note the difference between (x==y) and (x===y).

(x == y) true or false?

let x = new String("John");
let y = new String("John");
(x === y) true or false?

let x = new String("John");
let y = new String("John");
Comparing two JavaScript objects always returns false.

Complete String Reference
For a complete String reference, go to our:

Complete JavaScript String Reference.

The reference contains descriptions and examples of all string properties and methods.

                                                      JavaScript String Methods

String methods help you to work with strings.

String Methods and Properties
Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.

JavaScript String Length
The length property returns the length of a string:

Example
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
JavaScript String slice()
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).

Example
Slice out a portion of a string from position 7 to position 13 (13 not included):

let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
Note
JavaScript counts positions from zero.

First position is 0.

Second position is 1.

If a parameter is negative, the position is counted from the end of the string.

This example slices out a portion of a string from position -12 to position -6:

Example
let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);
If you omit the second parameter, the method will slice out the rest of the string:

Example
let part = str.slice(7);
or, counting from the end:

Example
let part = str.slice(-12);
ADVERTISEMENT

JavaScript String substring()
substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().

Example
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
If you omit the second parameter, substring() will slice out the rest of the string.

JavaScript String substr()
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.

Example
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
If you omit the second parameter, substr() will slice out the rest of the string.

Example
let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
If the first parameter is negative, the position counts from the end of the string.

Example
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);
Replacing String Content
The replace() method replaces a specified value with another value in a string:

Example

<!DOCTYPE html>
<html>

<body>

<h2>JavaScript String Methods</h2>

<p>Replace "Microsoft" with "W3Schools" in the paragraph below:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo">Please visit Microsoft!</p>

<script>
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.replace("Microsoft","W3Schools");
}
</script>

</body>
</html>


Note
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

By default, the replace() method replaces only the first match:

Example
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

Example
let text = "Please visit Microsoft!";
let newText = text.replace("MICROSOFT", "W3Schools");

To replace case insensitive, use a regular expression with an /i flag (insensitive):

Example
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");

Note
Regular expressions are written without quotes.

To replace all matches, use a regular expression with a /g flag (global match):

Example
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

Note
You will learn a lot more about regular expressions in the chapter JavaScript Regular Expressions.

Converting to Upper and Lower Case
A string is converted to upper case with toUpperCase():

A string is converted to lower case with toLowerCase():

JavaScript String toUpperCase()

Example
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript String Methods</h2>
<p>Convert string to upper case:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo">Hello World!</p>

<script>
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.toUpperCase();
}
</script>

</body>
</html>

JavaScript String toLowerCase()
Example
let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower
JavaScript String concat()
concat() joins two or more strings:

Example
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
The concat() method can be used instead of the plus operator. These two lines do the same:

Example
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
Note
All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.

JavaScript String trim()
The trim() method removes whitespace from both sides of a string:

Example
let text1 = "      Hello World!      ";
let text2 = text1.trim();
JavaScript String Padding
ECMAScript 2017 added two String methods: padStart() and padEnd() to support padding at the beginning and at the end of a string.

JavaScript String padStart()
The padStart() method pads a string with another string:

Example

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript String Methods</h2>

<p>The padStart() method pads a string with another string:</p>

<p id="demo"></p>

<script>
let text = "5";
document.getElementById("demo").innerHTML = text.padStart(4,"x");
</script>

</body>
</html>

Example
let text = "5";
let padded = text.padStart(4,"0");
Note
The padStart() method is a string method.

To pad a number, convert the number to a string first.

See the example below.

Example

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript String Methods</h2>

<p>The padStart() method pads a string with another string:</p>

<p id="demo"></p>

<script>
let numb = 5;
let text = numb.toString();
document.getElementById("demo").innerHTML = text.padStart(4,0);
</script>

</body>
</html>

Browser Support
padStart() is an ECMAScript 2017 feature.

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
padStart() is not supported in Internet Explorer.

JavaScript String padEnd()
The padEnd() method pads a string with another string:

Example
let text = "5";
let padded = text.padEnd(4,"x");
Example
let text = "5";
let padded = text.padEnd(4,"0");
Note
The padEnd() method is a string method.

To pad a number, convert the number to a string first.

See the example below.

Example
let numb = 5;
let text = numb.toString();
let padded = text.padEnd(4,"0");
Browser Support
padEnd() is an ECMAScript 2017 feature.

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
padEnd() is not supported in Internet Explorer.

Extracting String Characters
There are 3 methods for extracting string characters:

charAt(position)
charCodeAt(position)
Property access [ ]
JavaScript String charAt()
The charAt() method returns the character at a specified index (position) in a string:

Example
let text = "HELLO WORLD";
let char = text.charAt(0);
JavaScript String charCodeAt()
The charCodeAt() method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).

Example
let text = "HELLO WORLD";
let char = text.charCodeAt(0);
Property Access
ECMAScript 5 (2009) allows property access [ ] on strings:

Example
let text = "HELLO WORLD";
let char = text[0];
Note
Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
Example
let text = "HELLO WORLD";
text[0] = "A";    // Gives no error, but does not work
Converting a String to an Array
If you want to work with a string as an array, you can convert it to an array.

JavaScript String split()
A string can be converted to an array with the split() method:

Example
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
If the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array of single characters:

Example
text.split("")
Complete String Reference
For a complete String reference, go to our:

Complete JavaScript String Reference.

The reference contains descriptions and examples of all string properties and methods.


                                                    // ********************** chapter 5 ******************

                                                    JavaScript String Search
JavaScript Search Methods
String indexOf()
String lastIndexOf()
String startsWith()
String endsWith()
JavaScript String indexOf()
The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

Example
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate");
Note
JavaScript counts positions from zero.

0 is the first position in a string, 1 is the second, 2 is the third, ...

JavaScript String lastIndexOf()
The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

Example
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate");
Both indexOf(), and lastIndexOf() return -1 if the text is not found:

Example
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("John");
Both methods accept a second parameter as the starting position for the search:

Example
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate", 15);
The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

Example
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate", 15);
JavaScript String search()
The search() method searches a string for a specified value and returns the position of the match:

Example
let str = "Please locate where 'locate' occurs!";
str.search("locate");
Did You Notice?
The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?

The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
You will learn more about regular expressions in a later chapter.

ADVERTISEMENT

JavaScript String match()
The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

Example 1
Search a string for "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g);
Read more about regular expressions in the chapter JS RegExp.

Note
If a regular expression does not include the g modifier (to perform a global search), the match() method will return only the first match in the string.

Syntax
string.match(regexp)
regexp	Required. The value to search for, as a regular expression.
Returns:	An Array, containing the matches, one item for each match, or null if no match is found
Example 2
Perform a global, case-insensitive search for "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi);
JavaScript String includes()
The includes() method returns true if a string contains a specified value.

Example
let text = "Hello world, welcome to the universe.";
text.includes("world");
Syntax
string.includes(searchvalue, start)
searchvalue	Required. The string to search for
start	Optional. Default 0. Position to start the search
Returns:	Returns true if the string contains the value, otherwise false
JS Version:	ES6 (2015)
Check if a string includes "world", starting the search at position 12:

let text = "Hello world, welcome to the universe.";
text.includes("world", 12);
Browser Support
includes() is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
includes() is not supported in Internet Explorer.

JavaScript String startsWith()
The startsWith() method returns true if a string begins with a specified value, otherwise false:

Example
let text = "Hello world, welcome to the universe.";

text.startsWith("Hello");
Syntax
string.startsWith(searchvalue, start)
Parameter Values
Parameter	Description
searchvalue	Required. The value to search for.
start	Optional. Default 0. The position to start the search.
Examples
let text = "Hello world, welcome to the universe.";

text.startsWith("world")    // Returns false
let text = "Hello world, welcome to the universe.";

text.startsWith("world", 5)    // Returns false
let text = "Hello world, welcome to the universe.";

text.startsWith("world", 6)    // Returns true
Note
The startsWith() method is case sensitive.

Browser Support
startsWith() is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
startsWith() is not supported in Internet Explorer.

JavaScript String endsWith()
The endsWith() method returns true if a string ends with a specified value, otherwise false:

Example
Check if a string ends with "Doe":

let text = "John Doe";
text.endsWith("Doe");
Syntax
string.endsWith(searchvalue, length)
Parameter Values
Parameter	Description
searchvalue	Required. The value to search for.
length	Optional. The length to search.
Check if the 11 first characters of a string ends with "world":

let text = "Hello world, welcome to the universe.";
text.endsWith("world", 11);

Note
The endsWith() method is case sensitive.

                                                    JavaScript Template Literals
Synonyms:

Template Literals
Template Strings
String Templates
Back-Tics Syntax
Back-Tics Syntax
Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

Example
let text = `Hello World!`;

Quotes Inside Strings
With template literals, you can use both single and double quotes inside a string:

Example
let text = `He's often called "Johnny"`;

Multiline Strings
Template literals allows multiline strings:

Example
let text =
`The quick
brown fox
jumps over
the lazy dog`;

Interpolation
Template literals provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is:

${...}
Variable Substitutions
Template literals allow variables in strings:

Example
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

Automatic replacing of variables with real values is called string interpolation.

Expression Substitution
Template literals allow expressions in strings:

Example
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

Automatic replacing of expressions with real values is called string interpolation.

HTML Templates

Example
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Template Literals</h2>

<p>Template literals allows variables in strings:</p>

<p id="demo"></p>

<p>Template literals are not supported in Internet Explorer.</p>

<script>
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demo").innerHTML = html;
</script>

</body>
</html>

                                                            JavaScript Numbers

JavaScript has only one type of number. Numbers can be written with or without decimals.

Example
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals

Extra large or extra small numbers can be written with scientific (exponent) notation:

Example
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123

JavaScript Numbers are Always 64-bit Floating Point
Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

Value (aka Fraction/Mantissa)	Exponent	Sign
52 bits (0 - 51) 	11 bits (52 - 62)	1 bit (63)
Integer Precision
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

Example
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
The maximum number of decimals is 17.

Floating Precision
Floating point arithmetic is not always 100% accurate:

let x = 0.2 + 0.1;

To solve the problem above, it helps to multiply and divide:

let x = (0.2 * 10 + 0.1 * 10) / 10;
ADVERTISEMENT

Adding Numbers and Strings
WARNING !!

JavaScript uses the + operator for both addition and concatenation.

Numbers are added. Strings are concatenated.

If you add two numbers, the result will be a number:

Example
let x = 10;
let y = 20;
let z = x + y;
If you add two strings, the result will be a string concatenation:

Example
let x = "10";
let y = "20";
let z = x + y;
If you add a number and a string, the result will be a string concatenation:

Example
let x = 10;
let y = "20";
let z = x + y;
If you add a string and a number, the result will be a string concatenation:

Example
let x = "10";
let y = 20;
let z = x + y;
A common mistake is to expect this result to be 30:

Example
let x = 10;
let y = 20;
let z = "The result is: " + x + y;
A common mistake is to expect this result to be 102030:

Example
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;
The JavaScript interpreter works from left to right.

First 10 + 20 is added because x and y are both numbers.

Then 30 + "30" is concatenated because z is a string.

Numeric Strings
JavaScript strings can have numeric content:

let x = 100;         // x is a number

let y = "100";       // y is a string
JavaScript will try to convert strings to numbers in all numeric operations:

This will work:

let x = "100";
let y = "10";
let z = x / y;

This will also work:

let x = "100";
let y = "10";
let z = x * y;

And this will work:

let x = "100";
let y = "10";
let z = x - y;

But this will not work:

let x = "100";
let y = "10";
let z = x + y;

In the last example JavaScript uses the + operator to concatenate the strings.

NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

Example
let x = 100 / "Apple";

However, if the string contains a numeric value , the result will be a number:

Example
let x = 100 / "10";
You can use the global JavaScript function isNaN() to find out if a value is a not a number:

Example
let x = 100 / "Apple";
isNaN(x);
Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:

Example
let x = NaN;
let y = 5;
let z = x + y;
Or the result might be a concatenation like NaN5:

Example
let x = NaN;
let y = "5";
let z = x + y;
NaN is a number: typeof NaN returns number:

Example
typeof NaN;

Infinity
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

Example

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Numbers</h2>

<p>Infinity is returned if you calculate a number outside the largest possible number:</p>

<p id="demo"></p>

<script>
let myNumber = 2; 
let txt = "";
while (myNumber != Infinity) {
   myNumber = myNumber * myNumber;
   txt = txt + myNumber + "<br>";
}
document.getElementById("demo").innerHTML = txt;
</script>

</body>
</html>

Division by 0 (zero) also generates Infinity:

Example
let x =  2 / 0;
let y = -2 / 0;
Infinity is a number: typeof Infinity returns number.

Example
typeof Infinity;
Hexadecimal
JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

Example
let x = 0xFF;
Never write a number with a leading zero (like 07).
Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

By default, JavaScript displays numbers as base 10 decimals.

But you can use the toString() method to output numbers from base 2 to base 36.

Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

Example
let myNumber = 32;
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(12);
myNumber.toString(10);
myNumber.toString(8);
myNumber.toString(2);
JavaScript Numbers as Objects
Normally JavaScript numbers are primitive values created from literals:

let x = 123;
But numbers can also be defined as objects with the keyword new:

let y = new Number(123);
Example
let x = 123;
let y = new Number(123);
Do not create Number objects.

The new keyword complicates the code and slows down execution speed.

Number Objects can produce unexpected results:

When using the == operator, x and y are equal:

let x = 500;
let y = new Number(500);
When using the === operator, x and y are not equal.

let x = 500;
let y = new Number(500);
Note the difference between (x==y) and (x===y).

(x == y) true or false?

let x = new Number(500);
let y = new Number(500);
(x === y) true or false?

let x = new Number(500);
let y = new Number(500);
Comparing two JavaScript objects always returns false.

                                                                  JavaScript Number Methods
Number methods help you work with numbers.

Number Methods and Properties
Primitive values (like 3.14 or 2014), cannot have properties and methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.

The toString() Method
The toString() method returns a number as a string.

All number methods can be used on any type of numbers (literals, variables, or expressions):

Example
let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();
The toExponential() Method
toExponential() returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point:

Example
let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);
The parameter is optional. If you don't specify it, JavaScript will not round the number.

ADVERTISEMENT

The toFixed() Method
toFixed() returns a string, with the number written with a specified number of decimals:

Example
let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);
toFixed(2) is perfect for working with money.

The toPrecision() Method
toPrecision() returns a string, with a number written with a specified length:

Example
let x = 9.656;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);
The valueOf() Method
valueOf() returns a number as a number.

Example
let x = 123;
x.valueOf();
(123).valueOf();
(100 + 23).valueOf();
In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

There is no reason to use it in your code.

All JavaScript data types have a valueOf() and a toString() method.

Converting Variables to Numbers
There are 3 JavaScript methods that can be used to convert variables to numbers:

The Number() method
The parseInt() method
The parseFloat() method
These methods are not number methods, but global JavaScript methods.

Global JavaScript Methods
JavaScript global methods can be used on all JavaScript data types.

These are the most relevant methods, when working with numbers:

Method	Description
Number()	Returns a number, converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns an integer
The Number() Method
Number() can be used to convert JavaScript variables to numbers:

Example
Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");
If the number cannot be converted, NaN (Not a Number) is returned.

The Number() Method Used on Dates
Number() can also convert a date to a number.

Example
Number(new Date("1970-01-01"))
The Number() method returns the number of milliseconds since 1.1.1970.

The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:

Example
Number(new Date("1970-01-02"))
Example
Number(new Date("2017-09-30"))
The parseInt() Method
parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

Example
parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");
If the number cannot be converted, NaN (Not a Number) is returned.

The parseFloat() Method
parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

Example
parseFloat("10");
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");
If the number cannot be converted, NaN (Not a Number) is returned.

Number Properties
Property	Description
MAX_VALUE	Returns the largest number possible in JavaScript
MIN_VALUE	Returns the smallest number possible in JavaScript
POSITIVE_INFINITY	Represents infinity (returned on overflow)
NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
NaN	Represents a "Not-a-Number" value
JavaScript MIN_VALUE and MAX_VALUE
MAX_VALUE returns the largest possible number in JavaScript.

Example

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Number Properties</h2>

<p>MAX_VALUE returns the largest possible number in JavaScript.</p>

<p id="demo"></p>

<script>
let x = Number.MAX_VALUE;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

MIN_VALUE returns the lowest possible number in JavaScript.

Example
let x = Number.MIN_VALUE;
JavaScript POSITIVE_INFINITY
Example
let x = Number.POSITIVE_INFINITY;
POSITIVE_INFINITY is returned on overflow:

Example
let x = 1 / 0;
JavaScript NEGATIVE_INFINITY
Example
let x = Number.NEGATIVE_INFINITY;
NEGATIVE_INFINITY is returned on overflow:

Example
let x = -1 / 0;
JavaScript NaN - Not a Number
Example
let x = Number.NaN;
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

Example
let x = 100 / "Apple";

Number Properties Cannot be Used on Variables
Number properties belongs to the JavaScript's number object wrapper called Number.

These properties can only be accessed as Number.MAX_VALUE.

Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined:

Example
let x = 6;
x.MAX_VALUE

                                                                    JavaScript Arrays
An array is a special variable, which can hold more than one value:

const cars = ["Saab", "Volvo", "BMW"];
Why Use Arrays?
If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.

Creating an Array
Using an array literal is the easiest way to create a JavaScript Array.

Syntax:

const array_name = [item1, item2, ...];      
It is a common practice to declare arrays with the const keyword.

Learn more about const with arrays in the chapter: JS Array Const.

Example
const cars = ["Saab", "Volvo", "BMW"];
Spaces and line breaks are not important. A declaration can span multiple lines:

Example
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];
You can also create an array, and then provide the elements:

Example
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
Using the JavaScript Keyword new
The following example also creates an Array, and assigns values to it:

Example
const cars = new Array("Saab", "Volvo", "BMW");
The two examples above do exactly the same.

There is no need to use new Array().

For simplicity, readability and execution speed, use the array literal method.

ADVERTISEMENT

Accessing Array Elements
You access an array element by referring to the index number:

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
Note: Array indexes start with 0.

[0] is the first element. [1] is the second element.

Changing an Array Element
This statement changes the value of the first element in cars:

cars[0] = "Opel";
Example
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
Access the Full Array
With JavaScript, the full array can be accessed by referring to the array name:

Example
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
Arrays are Objects
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

Arrays use numbers to access its "elements". In this example, person[0] returns John:

Array:
const person = ["John", "Doe", 46];
Objects use names to access its "members". In this example, person.firstName returns John:

Object:
const person = {firstName:"John", lastName:"Doe", age:46};
Array Elements Can Be Objects
JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
Array Properties and Methods
The real strength of JavaScript arrays are the built-in array properties and methods:

cars.length   // Returns the number of elements
cars.sort()   // Sorts the array
Array methods are covered in the next chapters.

The length Property
The length property of an array returns the length of an array (the number of array elements).

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
The length property is always one more than the highest array index.

Accessing the First Array Element
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
Accessing the Last Array Element
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];

Looping Array Elements
One way to loop through an array, is using a for loop:

Example

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p>The best way to loop through an array is using a standard for loop:</p>

<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

You can also use the Array.forEach() function:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
Adding Array Elements
The easiest way to add a new element to an array is using the push() method:

Example
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
New element can also be added to an array using the length property:

Example
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
WARNING !
Adding elements with high indexes can create undefined "holes" in an array:

Example
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
Associative Arrays
Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.  

Example
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"
WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.

 Example:
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined
The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.

When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.
JavaScript new Array()
JavaScript has a built in array constructor new Array().

But you can safely use [] instead.

These two different statements both create a new empty array named points:

const points = new Array();
const points = [];
These two different statements both create a new array containing 6 numbers:

const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];
The new keyword can produce some unexpected results:

// Create an array with three elements:
const points = new Array(40, 100, 1);
// Create an array with two elements:
const points = new Array(40, 100);
// Create an array with one element ???
const points = new Array(40);  
A Common Error
const points = [40];
is not the same as:

const points = new Array(40);
// Create an array with one element:
const points = [40];
// Create an array with 40 undefined elements:
const points = new Array(40);  
How to Recognize an Array
A common question is: How do I know if a variable is an array?

The problem is that the JavaScript operator typeof returns "object":

const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
The typeof operator returns object because a JavaScript array is an object.

Solution 1:
To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():

Array.isArray(fruits);
Solution 2:
The instanceof operator returns true if an object is created by a given constructor:

const fruits = ["Banana", "Orange", "Apple"];

fruits instanceof Array;

                                                          JavaScript Array Methods
Converting Arrays to Strings
The JavaScript method toString() converts an array to a string of (comma separated) array values.

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Result:

Banana,Orange,Apple,Mango
The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
Result:

Banana * Orange * Apple * Mango
Popping and Pushing
When you work with arrays, it is easy to remove elements and add new elements.

This is what popping and pushing is:

Popping items out of an array, or pushing items into an array.

JavaScript Array pop()
The pop() method removes the last element from an array:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
The pop() method returns the value that was "popped out":

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
JavaScript Array push()
The push() method adds a new element to an array (at the end):

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
The push() method returns the new array length:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");
Shifting Elements
Shifting is equivalent to popping, but working on the first element instead of the last.

JavaScript Array shift()
The shift() method removes the first array element and "shifts" all other elements to a lower index.

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
The shift() method returns the value that was "shifted out":

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
JavaScript Array unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
The unshift() method returns the new array length.

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
Changing Elements
Array elements are accessed using their index number:

Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
JavaScript Array length
The length property provides an easy way to append a new element to an array:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
JavaScript Array delete()
Warning !
Array elements can be deleted using the JavaScript operator delete.

Using delete leaves undefined holes in the array.

Use pop() or shift() instead.

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
Merging (Concatenating) Arrays
The concat() method creates a new array by merging (concatenating) existing arrays:

Example (Merging Two Arrays)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
The concat() method does not change the existing arrays. It always returns a new array.

The concat() method can take any number of array arguments:

Example (Merging Three Arrays)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
The concat() method can also take strings as arguments:

Example (Merging an Array with Values)
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 
Splicing and Slicing Arrays
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.

JavaScript Array splice()
The splice() method can be used to add new items to an array:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.

JavaScript Array slice()
The slice() method slices out a piece of an array into a new array.

This example slices out a part of an array starting from array element 1 ("Orange"):

Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
Note
The slice() method creates a new array.

The slice() method does not remove any elements from the source array.

This example slices out a part of an array starting from array element 3 ("Apple"):

Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
The slice() method can take two arguments like slice(1, 3).

The method then selects elements from the start argument, and up to (but not including) the end argument.

Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2);
Automatic toString()
JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

This is always the case when you try to output an array.

These two examples will produce the same result:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
Note
All JavaScript objects have a toString() method.

Finding Max and Min Values in an Array
There are no built-in functions for finding the highest or lowest value in a JavaScript array.

You will learn how you solve this problem in the next chapter of this tutorial.

Sorting Arrays
Sorting arrays are covered in the next chapter of this tutorial.

                                                                JavaScript Sorting Arrays
Sorting an Array
The sort() method sorts an array alphabetically:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
Reversing an Array
The reverse() method reverses the elements in an array.

You can use it to sort an array in descending order:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
Numeric Sort
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
Use the same trick to sort an array descending:

Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
ADVERTISEMENT

The Compare Function
The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative a is sorted before b.

If the result is positive b is sorted before a.

If the result is 0 no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Sort</h2>

<p>Click the buttons to sort the array alphabetically or numerically.</p>

<button onclick="myFunction1()">Sort Alphabetically</button>
<button onclick="myFunction2()">Sort Numerically</button>

<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;  

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}
function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}
</script>

</body>
</html>

Sorting an Array in Random Order
Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});

The Fisher Yates Method
The above example, array.sort(), is not accurate, it will favor some numbers over the others.

The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!

In JavaScript the method can be translated to this:

Example
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = points[i]
  points[i] = points[j]
  points[j] = k
}

Find the Highest (or Lowest) Array Value
There are no built-in functions for finding the max or min value in an array.

However, after you have sorted an array, you can use the index to obtain the highest and lowest values.

Sorting ascending:

Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
Sorting descending:

Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value
Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.

Using Math.max() on an Array
You can use Math.max.apply to find the highest number in an array:

Example
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).

Using Math.min() on an Array
You can use Math.min.apply to find the lowest number in an array:

Example
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).

My Min / Max JavaScript Methods
The fastest solution is to use a "home made" method.

This function loops through an array comparing each value with the highest value found:

Example (Find Max)
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

This function loops through an array comparing each value with the lowest value found:

Example (Find Min)
function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

Sorting Object Arrays
JavaScript arrays often contain objects:

Example
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
Even if objects have properties of different data types, the sort() method can be used to sort the array.

The solution is to write a compare function to compare the property values:

Example
cars.sort(function(a, b){return a.year - b.year});
Comparing string properties is a little more complex:

Example
cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});

                                                              JavaScript Array Iteration
Array iteration methods operate on every array item.

JavaScript Array forEach()
The forEach() method calls a function (a callback function) once for each array element.

Example
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
The example above uses only the value parameter. The example can be rewritten to:

Example
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
}
JavaScript Array map()
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.

This example multiplies each array value by 2:

Example
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
When a callback function uses only the value parameter, the index and array parameters can be omitted:

Example
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
ADVERTISEMENT

JavaScript Array filter()
The filter() method creates a new array with array elements that passes a test.

This example creates a new array from elements with a value larger than 18:

Example
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
In the example above, the callback function does not use the index and array parameters, so they can be omitted:

Example
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
JavaScript Array reduce()
The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array. See also reduceRight().

The reduce() method does not reduce the original array.

This example finds the sum of all numbers in an array:

Example
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself
The example above does not use the index and array parameters. It can be rewritten to:

Example
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
The reduce() method can accept an initial value:

Example
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}
JavaScript Array reduceRight()
The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

The reduceRight() works from right-to-left in the array. See also reduce().

The reduceRight() method does not reduce the original array.

This example finds the sum of all numbers in an array:

Example
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself
The example above does not use the index and array parameters. It can be rewritten to:

Example
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}
JavaScript Array every()
The every() method check if all array values pass a test.

This example check if all array values are larger than 18:

Example
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
When a callback function uses the first parameter only (value), the other parameters can be omitted:

Example
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
JavaScript Array some()
The some() method check if some array values pass a test.

This example check if some array values are larger than 18:

Example
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
JavaScript Array indexOf()
The indexOf() method searches an array for an element value and returns its position.

Note: The first item has position 0, the second item has position 1, and so on.

Example
Search an array for the item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
Syntax
array.indexOf(item, start)
item	Required. The item to search for.
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
Array.indexOf() returns -1 if the item is not found.

If the item is present more than once, it returns the position of the first occurrence.

JavaScript Array lastIndexOf()
Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

Example
Search an array for the item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
Syntax
array.lastIndexOf(item, start)
item	Required. The item to search for
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning
JavaScript Array find()
The find() method returns the value of the first array element that passes a test function.

This example finds (returns the value of) the first element that is larger than 18:

Example
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
Browser Support
find() is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
find() is not supported in Internet Explorer.

JavaScript Array findIndex()
The findIndex() method returns the index of the first array element that passes a test function.

This example finds the index of the first element that is larger than 18:

Example
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
Browser Support
findIndex() is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
findIndex() is not supported in Internet Explorer.


JavaScript Array.from()
The Array.from() method returns an Array object from any object with a length property or any iterable object.

Example
Create an Array from a String:

Array.from("ABCDEFG");
Browser Support
from() is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
from() is not supported in Internet Explorer.

JavaScript Array Keys()
The Array.keys() method returns an Array Iterator object with the keys of an array.

Example
Create an Array Iterator object, containing the keys of the array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
}
Browser Support
keys() is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
keys() is not supported in Internet Explorer.

Array entries()
Example
Create an Array Iterator, and then iterate over the key/value pairs:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}
The entries() method returns an Array Iterator object with key/value pairs:

[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]

The entries() method does not change the original array.

Browser Support
entries() is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
entries() is not supported in Internet Explorer.

JavaScript Array includes()
ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true

                                                            JavaScript Array Const
ECMAScript 2015 (ES6)
in 2015, JavaScript introduced an important new keyword: const.

It has become a common practice to declare arrays using const:

Example
const cars = ["Saab", "Volvo", "BMW"];
Cannot be Reassigned
An array declared with const cannot be reassigned:

Example
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR
Arrays are Not Constants
The keyword const is a little misleading.

It does NOT define a constant array. It defines a constant reference to an array.

Because of this, we can still change the elements of a constant array.

Elements Can be Reassigned
You can change the elements of a constant array:

Example
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
Browser Support
The const keyword is not supported in Internet Explorer 10 or earlier.

The following table defines the first browser versions with full support for the const keyword:

Chrome 49	IE 11 / Edge	Firefox 36	Safari 10	Opera 36
Mar, 2016	Oct, 2013	Feb, 2015	Sep, 2016	Mar, 2016
Assigned when Declared
JavaScript const variables must be assigned a value when they are declared:

Meaning: An arrays declared with const must be initialized when it is declared.

Using const without initializing the array is a syntax error:

Example
This will not work:

const cars;
cars = ["Saab", "Volvo", "BMW"];
Arrays declared with var can be initialized at any time.

You can even use the array before it is declared:

Example
This is OK:

cars = ["Saab", "Volvo", "BMW"];
var cars;
Const Block Scope
An array declared with const has Block Scope.

An array declared in a block is not the same as an array declared outside the block:

Example
const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"
An array declared with var does not have block scope:

Example
var cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  var cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota"
You can learn more about Block Scope in the chapter: JavaScript Scope.

Redeclaring Arrays
Redeclaring an array declared with var is allowed anywhere in a program:

Example
var cars = ["Volvo", "BMW"];   // Allowed
var cars = ["Toyota", "BMW"];  // Allowed
cars = ["Volvo", "Saab"];      // Allowed
Redeclaring or reassigning an array to const, in the same scope, or in the same block, is not allowed:

Example
var cars = ["Volvo", "BMW"];     // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
{
  var cars = ["Volvo", "BMW"];   // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
}
Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed:

Example
const cars = ["Volvo", "BMW"];   // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
var cars = ["Volvo", "BMW"];     // Not allowed
cars = ["Volvo", "BMW"];         // Not allowed

{
  const cars = ["Volvo", "BMW"]; // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
  var cars = ["Volvo", "BMW"];   // Not allowed
  cars = ["Volvo", "BMW"];       // Not allowed
}
Redeclaring an array with const, in another scope, or in another block, is allowed:

Example
const cars = ["Volvo", "BMW"];   // Allowed
{
  const cars = ["Volvo", "BMW"]; // Allowed
}
{
  const cars = ["Volvo", "BMW"]; // Allowed
}


                                              // ********************** chapter 6 ******************
{/* continue from js Dates */}




