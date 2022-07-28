                        // ******************** CHAPTER 1 ******************

import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);

// same as the code below:

import React from "react";
import ReactDOM from "react-dom/client";

function Hello(props) {
  return <h1>Hello World!</h1>;
}

ReactDOM.render(<Hello />, document.getElementById("root"));

/*
The examples in this tutorial are created using the
create-react-app.

Install the create-react-app,
and you will be able to run the same examples on your computer.

In this example we create a component called 'Hello'.
The component is rendered in a container called 'root'.
*/

                                            React Introduction
What is React?
React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.

React is a tool for building UI components.

How does React Work?
React creates a VIRTUAL DOM in memory.

Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

React only changes what needs to be changed!

React finds out what changes have been made, and changes only what needs to be changed.

You will learn the various aspects of how React does this in the rest of this tutorial.

React.JS History
Current version of React.JS is V18.0.0 (April 2022).

Initial Release to the Public (V0.3.0) was in July 2013.

React.JS was first used in 2011 for Facebook's Newsfeed feature.

Facebook Software Engineer, Jordan Walke, created it.

Current version of create-react-app is v5.0.1 (April 2022).

create-react-app includes built tools such as webpack, Babel, and ESLint.

                                                React Getting Started

To use React in production, you need npm which is included with Node.js.

To get an overview of what React is, you can write React code directly in HTML.

But in order to use React in production, you need npm and Node.js installed.

React Directly in HTML
The quickest way start learning React is to write React directly in your HTML files.

W3Schools Spaces
The easiest way to get started with creating HTML files is W3Schools Spaces!

It is the perfect place to create, edit, and share your work with others!


Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.

You will learn more about JSX in the React JSX chapter.

Example
Include three CDN's in your HTML file:

<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>

    <div id="mydiv"></div>

    <script type="text/babel">
      function Hello() {
        return <h1>Hello World!</h1>;
      }

      ReactDOM.render(<Hello />, document.getElementById('mydiv'))
    </script>

  </body>
</html>

This way of using React can be OK for testing purposes, but for production you will need to set up a React environment.

Modify the React Application
So far so good, but how do I change the content?

Look in the my-react-app directory, and you will find a src folder. Inside the src folder there is a file called App.js, open it and it will look like this:

/myReactApp/src/App.js:

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

Try changing the HTML content and save the file.

Notice that the changes are visible immediately after you save the file, you do not have to reload the browser!

Example
Replace all the content inside the <div className="App"> with a <h1> element.

See the changes in the browser when you click Save.

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;

Notice that we have removed the imports we do not need (logo.svg and App.css).

The result:


What's Next?
Now you have a React Environment on your computer, and you are ready to learn more about React.

In the rest of this tutorial we will use our "Show React" tool to explain the various aspects of React, and how they are displayed in the browser.

If you want to follow the same steps on your computer, start by stripping down the src folder to only contain one file: index.js. You should also remove any unnecessary lines of code inside the index.js file to make them look like the example in the "Show React" tool below:

Example
Click the "Run Example" button to see the result.

index.js:

import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);

                                                        React ES6
What is ES6?
ES6 stands for ECMAScript 6.

ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

Why Should I Learn ES6?
React uses ES6, and you should be familiar with some of the new features like:

Classes
Arrow Functions
Variables (let, const, var)
Array Methods like .map()
Destructuring
Modules
Ternary Operator
Spread Operator

                                                        React ES6 Classes
Classes
ES6 introduced classes.

A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

Example
A simple class constructor:

class Car {
  constructor(name) {
    this.brand = name;
  }
}

Notice the case of the class name. We have begun the name, "Car", with an uppercase character. This is a standard naming convention for classes.

Now you can create objects using the Car class:

Example
Create an object called "mycar" based on the Car class:

<!DOCTYPE html>
<html>

<body>
  
<script>
class Car {
  constructor(name) {
    this.brand = name;
  }
}

const mycar = new Car("Ford");

document.write(mycar.brand);
</script>

</body>
</html>

Note: The constructor function is called automatically when the object is initialized.

Output is : Ford

Method in Classes
You can add your own methods in a class:

Example
Create a method named "present":

<!DOCTYPE html>
<html>

<body>
  
<script>
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

const mycar = new Car("Ford");
document.write(mycar.present());
</script>

</body>
</html>

Output is : I hava a Ford

As you can see in the example above, you call the method by referring to the object's method name followed by parentheses (parameters would go inside the parentheses).

Class Inheritance
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:

Example
Create a class named "Model" which will inherit the methods from the "Car" class:

<!DOCTYPE html>
<html>

<body>
  
<script>
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
    return this.present() + ', it is a ' + this.model
  }
}

const mycar = new Model("Ford", "Mustang");
document.write(mycar.show());
</script>

</body>
</html>

Output is : I have a Ford, it is a Mustang

The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

To learn more about classes, check out our JavaScript Classes section.

                                                    React ES6 Arrow Functions
Arrow Functions
Arrow functions allow us to write shorter function syntax:

Before:
hello = function() {
  return "Hello World!";
}

With Arrow Function:

<!DOCTYPE html>
<html>

<body>

<h1>Arrow Function</h1>

<p>A demonstration of a simple arrow function.</p>

<p id="demo"></p>
  
<script>
hello = () => {
  return "Hello World!";
}

document.getElementById("demo").innerHTML = hello();
</script>

</body>
</html>

It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

Arrow Functions Return Value by Default:
hello = () => "Hello World!";

Note: This works only if the function has only one statement.

If you have parameters, you pass them inside the parentheses:

Arrow Function With Parameters:

<!DOCTYPE html>
<html>

<body>

<h1>Arrow Function</h1>

<p>A demonstration of an arrow function in one line, with parameters.</p>

<p id="demo"></p>
  
<script>
hello = (val) => "Hello " + val;

document.getElementById("demo").innerHTML = hello("World");
</script>

</body>
</html>

Output is : Hello World

In fact, if you have only one parameter, you can skip the parentheses as well:

Arrow Function Without Parentheses:

hello = val => "Hello " + val;


What About this?
The handling of this is also different in arrow functions compared to regular functions.

In short, with arrow functions there is no binding of this.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions, the this keyword always represents the object that defined the arrow function.

Let us take a look at two examples to understand the difference.

Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

The first example uses a regular function, and the second example uses an arrow function.

The result shows that the first example returns two different objects (window and button), and the second example returns the Header object twice.

Example
With a regular function, this represents the object that called the function:

class Header {
  constructor() {
    this.color = "Red";
  }

//Regular function:
  changeColor = function() {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
 

Example
With an arrow function, this represents the Header object no matter who called the function:

class Header {
  constructor() {
    this.color = "Red";
  }

//Arrow function:
  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
 

Remember these differences when you are working with functions. Sometimes the behavior of regular functions is what you want, if not, use arrow functions.

                                                React ES6 Variables

Variables
Before ES6 there was only one way of defining your variables: with the var keyword. If you did not define them, they would be assigned to the global object. Unless you were in strict mode, then you would get an error if your variables were undefined.

Now, with ES6, there are three ways of defining your variables: var, let, and const.

var
var x = 5.6;

If you use var outside of a function, it belongs to the global scope.

If you use var inside of a function, it belongs to that function.

If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.

var has a function scope, not a block scope.

let
let x = 5.6;

let is the block scoped version of var, and is limited to the block (or expression) where it is defined.

If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.

let has a block scope.

const
const x = 5.6;

const is a variable that once it has been created, its value can never change.

const has a block scope.

The keyword const is a bit misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object

                                                        React ES6 Array Methods
Array Methods
There are many JavaScript array methods.

One of the most useful in React is the .map() array method.

The .map() method allows you to run a function on each item in the array, returning a new array as the result.

In React, map() can be used to generate lists.

Example

import React from 'react';
import ReactDOM from 'react-dom/client';

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

ReactDOM.render(myList, document.getElementById('root'));

Output is : apple banana orange

                                                        React ES6 Destructuring
Destructuring
To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

Destructuring makes it easy to extract only what is needed.

Destructing Arrays
Here is the old way of assigning array items to a variable:

Before:
const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
Here is the new way of assigning array items to a variable:

With destructuring:
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
When destructuring arrays, the order that variables are declared is important.

If we only want the car and suv we can simply leave out the truck but keep the comma:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;
Destructuring comes in handy when a function returns an array:

Example

<!DOCTYPE html>
<html>

<body>
  
<script>
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

document.write("<p>Sum: " + add + "</p>");
document.write("<p>Difference " + subtract + "</p>");
document.write("<p>Product: " + multiply + "</p>");
document.write("<p>Quotient " + divide + "</p>");
</script>

</body>
</html>

Destructuring Objects
Here is the old way of using an object inside a function:

Before:
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

// old way
function myVehicle(vehicle) {
  const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}
Here is the new way of using an object inside a function:

With destructuring:
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}

Notice that the object properties do not have to be declared in a specific order.

We can even destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:

Example

<!DOCTYPE html>
<html>

<body>

<p id="demo"></p>
  
<script>
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';

  document.getElementById("demo").innerHTML = message;
}
</script>

</body>
</html>

Output : My Mustang is registered in Texas.

                                                    React ES6 Spread Operator
Spread Operator
The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

Example
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

The spread operator is often used in combination with destructuring.

Example
Assign the first and second items from numbers to variables and put the rest in an array:

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

We can use the spread operator with objects too:

Example
Combine these two objects:

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.

                                                    React ES6 Modules
Modules
JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain the code-base.

ES Modules rely on the import and export statements.

Export
You can export a function or variable from any file.

Let us create a file named person.js, and fill it with the things we want to export.

There are two types of exports: Named and Default.

Named Exports
You can create named exports two ways. In-line individually, or all at once at the bottom.

In-line individually:
person.js

export const name = "Jesse"
export const age = 40
All at once at the bottom:
person.js

const name = "Jesse"
const age = 40

export { name, age }


Default Exports
Let us create another file, named message.js, and use it for demonstrating default export.

You can only have one default export in a file.

Example
message.js

const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
};

export default message;
Import
You can import modules into a file in two ways, based on if they are named exports or default exports.

Named exports must be destructured using curly braces. Default exports do not.

Import from named exports
Import named exports from the file person.js:

import { name, age } from "./person.js";

Import from default exports

Import a default export from the file message.js:

<!DOCTYPE html>
<html>

<body>

<p id="demo"></p>

<script type="module">
import message from "./message.js";

document.getElementById("demo").innerHTML = message();

</script>

</body>
</html>

Output : Jesse is 40 years old.

                                                React ES6 Ternary Operator
Ternary Operator
The ternary operator is a simplified conditional operator like if / else.

Syntax: condition ? <expression if true> : <expression if false>

Here is an example using if / else:

Before:

<!DOCTYPE html>
<html>

<body>

<h1 id="demo"></h1>

<script>
function renderApp() {
  document.getElementById("demo").innerHTML = "Welcome!";
}

function renderLogin() {
  document.getElementById("demo").innerHTML = "Please log in";
}

let authenticated = true;

if (authenticated) {
  renderApp();
} else {
  renderLogin();
}

</script>

Here is the same example using a ternary operator:

With Ternary

authenticated ? renderApp() : renderLogin();

                                                    React Render HTML

React's goal is in many ways to render HTML in a web page.

React renders HTML to the web page by using a function called ReactDOM.render().

The Render Function
The ReactDOM.render() function takes two arguments, HTML code and an HTML element.

The purpose of the function is to display the specified HTML code inside the specified HTML element.

But render where?

There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.

You'll notice a single <div> in the body of this file. This is where our React application will be rendered.

Example
Display a paragraph inside an element with the id of "root":

ReactDOM.render(<p>Hello</p>, document.getElementById('root'));
The result is displayed in the <div id="root"> element:

<body>
  <div id="root"></div>
</body>

Note that the element id does not have to be called "root", but this is the standard convention.

The HTML Code
The HTML code in this tutorial uses JSX which allows you to write HTML tags inside the JavaScript code:

Do not worry if the syntax is unfamiliar, you will learn more about JSX in the next chapter.

Example
Create a variable that contains HTML code and display it in the "root" node:


import React from 'react';
import ReactDOM from 'react-dom/client';

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

ReactDOM.render(myelement, document.getElementById('root'));

The Root Node
The root node is the HTML element where you want to display the result.

It is like a container for content managed by React.

It does NOT have to be a <div> element and it does NOT have to have the id='root':

Example
The root node can be called whatever you like:

<body>

  <header id="sandy"></header>

</body>
Display the result in the <header id="sandy"> element:

ReactDOM.render(<p>Hallo</p>, document.getElementById('sandy'));

                                                        React JSX
What is JSX?
JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

Coding JSX
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.

You are not required to use JSX, but JSX makes it easier to write React applications.

Here are two examples. The first uses JSX and the second does not:

Example 1
JSX:

const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

Example 2
Without JSX:

const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.

JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.

Expressions in JSX
With JSX you can write expressions inside curly braces { }.

The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:

Example
Execute the expression 5 + 5:

const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

Inserting a Large Block of HTML
To write HTML on multiple lines, put the HTML inside parentheses:

Example
Create a list with three list items:

const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

One Top Level Element
The HTML code must be wrapped in ONE top level element.

So if you like to write two paragraphs, you must put them inside a parent element, like a div element.

Example
Wrap two paragraphs inside one DIV element:

const myElement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);

JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.

Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.

A fragment looks like an empty HTML tag: <></>.

Example
Wrap two paragraphs inside a fragment:

const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);

Elements Must be Closed
JSX follows XML rules, and therefore HTML elements must be properly closed.

Example
Close empty elements with />

const myElement = <input type="text" />;

JSX will throw an error if the HTML is not properly closed.

Attribute class = className
The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

Use attribute className instead.

JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.

Example
Use attribute className instead of class in JSX:

const myElement = <h1 className="myclass">Hello World</h1>;

Conditions - if statements
React supports if statements, but not inside JSX.

To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:

Option 1:
Write if statements outside of the JSX code:

Example
Write "Hello" if x is less than 10, otherwise "Goodbye":

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>;

Option 2:
Use ternary expressions instead:

Example

import React from 'react';
import ReactDOM from 'react-dom/client';

const x = 5;

const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

Note that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.

                                                React Components

Components are like functions that return HTML elements.

React Components
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks, which were added in React 16.8. There is an optional section on Class components for your reference.

Create Your First Component
When creating a React component, the component's name MUST start with an upper case letter.

Class Component
A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

The component also requires a render() method, this method returns HTML.

Example
Create a Class component called Car

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

Function Component
Here is the same example as above, but created using a Function component instead.

A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.

Example
Create a Function component called Car

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}


Rendering a Component
Now your React application has a component called Car, which returns an <h2> element.

To use this component in your application, use similar syntax as normal HTML: <Car />

Example
Display the Car component in the "root" element:

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

Props
Components can be passed as props, which stands for properties.

Props are like function arguments, and you send them into the component as attributes.

You will learn more about props in the next chapter.

Example
Use an attribute to pass a color to the Car component, and use it in the render() function:

function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>);

Components in Components
We can refer to components inside other components:

Example
Use the Car component inside the Garage component:

function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

Components in Files
React is all about re-using code, and it is recommended to split your components into separate files.

To do that, create a new file with a .js file extension and put the code inside it:

Note that the filename must start with an uppercase character.

Example
This is the new file, we named it "Car.js":

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

export default Car;

To be able to use the Car component, you have to import the file in your application.

Example
Now we import the "Car.js" file in the application, and we can use the Car component as if it was created here.

import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

                                                            React Props
Props are arguments passed into React components.

Props are passed to components via HTML attributes.

props stands for properties.

React Props
React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:

Example
Add a "brand" attribute to the Car element:

const myElement = <Car brand="Ford" />;

The component receives the argument as a props object:

Example
Use the brand attribute in the component:

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

Pass Data
Props are also how you pass data from one component to another, as parameters.

Example
Send the "brand" property from the Garage component to the Car component:

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:

Example
Create a variable named carName and send it to the Car component:

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carName } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

Or if it was an object:

Example
Create an object named carInfo and send it to the Car component:

function Car(props) {
  return <h2>I am a { props.brand.model }!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carInfo } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

Note: React Props are read-only! You will get an error if you try to change their value.

                                                    React Events

Just like HTML DOM events, React can perform actions based on user events.

React has the same events as HTML: click, change, mouseover etc.

Adding Events
React events are written in camelCase syntax:

onClick instead of onclick.

React event handlers are written inside curly braces:

onClick={shoot}  instead of onClick="shoot()".

React:
<button onClick={shoot}>Take the Shot!</button>
HTML:
<button onclick="shoot()">Take the Shot!</button>

Example:
Put the shoot function inside the Football component:

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);

Passing Arguments
To pass an argument to an event handler, use an arrow function.

Example:
Send "Goal!" as a parameter to the shoot function, using arrow function:

function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);

React Event Object
Event handlers have access to the React event that triggered the function.

In our example the event is the "click" event.

Example:
Arrow Function: Sending the event object manually:

function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);
 

This will come in handy when we look at Form in a later chapter.


                                            // ******************** CHAPTER 2 ******************

                                            React Conditional Rendering
In React, you can conditionally render components.

There are several ways to do this.

if Statement
We can use the if JavaScript operator to decide which component to render.

Example:
We'll use these two components:

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}
Example:
Now, we'll create another component that chooses which component to render based on a condition:

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);

Try changing the isGoal attribute to true:

Example:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={true} />);


Logical && Operator
Another way to conditionally render a React component is by using the && operator.

Example:
We can embed JavaScript expressions in JSX by using curly braces:

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);

If cars.length is equates to true, the expression after && will render.

Try emptying the cars array:

Example:
const cars = [];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);

Ternary Operator
Another way to conditionally render elements is by using a ternary operator.

condition ? true : false
We will go back to the goal example.

Example:
Return the MadeGoal component if isGoal is true, otherwise return the MissedGoal component:

function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);

                                                                        React Lists
In React, you will render lists with some type of loop.

The JavaScript map() array method is generally the preferred method.

If you need a refresher on the map() method, check out the ES6 section.

Example:
Let's render all of the cars from our garage:

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

When you run this code in your create-react-app, it will work but you will receive a warning that there is no "key" provided for the list items.

Keys
Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

Keys need to be unique to each sibling. But they can be duplicated globally.

Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.

Example:
Let's refactor our previous example to include keys:

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

                                                                React Forms

Just like in HTML, React uses forms to allow users to interact with the web page.

Adding Forms in React
You add a form with React like any other element:

Example:
Add a form that allows users to enter their name:

function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

This will work as normal, the form will submit and the page will refresh.

But this is generally not what we want to happen in React.

We want to prevent this default behavior and let React control the form.

Handling Forms
Handling forms is about how you handle the data when it changes value or gets submitted.

In HTML, form data is usually handled by the DOM.

In React, form data is usually handled by the components.

When the data is handled by the components, all the data is stored in the component state.

You can control changes by adding event handlers in the onChange attribute.

We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.

See the React Hooks section for more information on Hooks.

Example:
Use the useState Hook to manage the input:

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

Submitting Forms
You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:

Example:
Add a submit button and an event handler in the onSubmit attribute:

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

Multiple Input Fields
You can control the values of more than one input field by adding a name attribute to each element.

We will initialize our state with an empty object.

To access the fields in the event handler use the event.target.name and event.target.value syntax.

To update the state, use square brackets [bracket notation] around the property name.

Example:
Write a form with two input fields:

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

Note: We use the same event handler function for both input fields, we could write one event handler for each, but this gives us much cleaner code and is the preferred way in React.

Textarea
The textarea element in React is slightly different from ordinary HTML.

In HTML the value of a textarea was the text between the start tag <textarea> and the end tag </textarea>.

<textarea>
  Content of the textarea.
</textarea>
In React the value of a textarea is placed in a value attribute. We'll use the useState Hook to mange the value of the textarea:

Example:
A simple textarea with some content:

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

Select
A drop down list, or a select box, in React is also a bit different from HTML.

in HTML, the selected value in the drop down list was defined with the selected attribute:

HTML:
<select>
  <option value="Ford">Ford</option>
  <option value="Volvo" selected>Volvo</option>
  <option value="Fiat">Fiat</option>
</select>

In React, the selected value is defined with a value attribute on the select tag:

Example:
A simple select box, where the selected value "Volvo" is initialized in the constructor:

function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

By making these slight changes to <textarea> and <select>, React is able to handle all input elements in the same way.

                                                                React Router

Create React App doesn't include page routing.

React Router is the most popular solution.

Add React Router
To add React Router in your application, run this in the terminal from the root directory of the application:

npm i -D react-router-dom
Note: This tutorial uses React Router v6.

If you are upgrading from v5, you will need to use the @latest flag:

npm i -D react-router-dom@latest
Folder Structure
To create an application with multiple page routes, let's first start with the file structure.

Within the src folder, we'll create a folder named pages with several files:

src\pages\:

Layout.js
Home.js
Blogs.js
Contact.js
NoPage.js
Each file will contain a very basic React component.

Basic Usage
Now we will use our Router in our index.js file.

Example
Use React Router to route to pages based on URL:

index.js:

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

Example Explained
We wrap our content first with <BrowserRouter>.

Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.

<Route>s can be nested. The first <Route> has a path of / and renders the Layout component.

The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.

The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.

Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.

Pages / Components
The Layout component has <Outlet> and <Link> elements.

The <Outlet> renders the current route selected.

<Link> is used to set the URL and keep track of browsing history.

Anytime we link to an internal path, we will use <Link> instead of <a href="">.

The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.

Layout.js:

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
Home.js:

const Home = () => {
  return <h1>Home</h1>;
};

export default Home;
Blogs.js:

const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

export default Blogs;
Contact.js:

const Contact = () => {
  return <h1>Contact Me</h1>;
};

export default Contact;
NoPage.js:

const NoPage = () => {
  return <h1>404</h1>;
};

export default NoPage;

                                                                React Memo  

Using memo will cause React to skip rendering a component if its props have not changed.

This can improve performance.

This section uses React Hooks. See the React Hooks section for more information on Hooks.

Problem
In this example, the Todos component re-renders even when the todos have not changed.

Example:
index.js:

import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
Todos.js:

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default Todos;

When you click the increment button, the Todos component re-renders.

If this component was complex, it could cause performance issues.

Solution
To fix this, we can use memo.

Use memoto keep the Todos component from needlessly re-rendering.

Wrap the Todos component export in memo:

Example:
index.js:

import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
Todos.js:

import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);

Now the Todos component only re-renders when the todos that are passed to it through props are updated.

                                                                  Styling React Using CSS
There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:

Inline styling
CSS stylesheets
CSS Modules
Inline Styling
To style an element with the inline style attribute, the value must be a JavaScript object:

Example:
Insert an object with the styling information:

const Header = () => {
  return (
    <>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.

camelCased Property Names
Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax:

Example:
Use backgroundColor instead of background-color:

const Header = () => {
  return (
    <>
      <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

JavaScript Object
You can also create an object with styling information, and refer to it in the style attribute:

Example:
Create a style object named myStyle:

const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

CSS Stylesheet
You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.

App.css:
Create a new file called "App.css" and insert some CSS code in it:

body {
  background-color: #282c34;
  color: white;
  padding: 40px;
  font-family: Sans-Serif;
  text-align: center;
}

Note: You can call the file whatever you like, just remember the correct file extension.

Import the stylesheet in your application:

index.js:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

CSS Modules
Another way of adding styles to your application is to use CSS Modules.

CSS Modules are convenient for components that are placed in separate files.

The CSS inside a module is available only for the component that imported it, and you do not have to worry about name conflicts.

Create the CSS module with the .module.css extension, example: my-style.module.css.

Create a new file called "my-style.module.css" and insert some CSS code in it:

my-style.module.css:
.bigblue {
  color: DodgerBlue;
  padding: 40px;
  font-family: Sans-Serif;
  text-align: center;
}

Import the stylesheet in your component:

Car.js:
import styles from './my-style.module.css'; 

const Car = () => {
  return <h1 className={styles.bigblue}>Hello Car!</h1>;
}

export default Car;

Import the component in your application:

index.js:
import ReactDOM from 'react-dom/client';
import Car from './Car.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

                                                                Styling React Using Sass
What is Sass
Sass is a CSS pre-processor.

Sass files are executed on the server and sends CSS to the browser.

You can learn more about Sass in our Sass Tutorial.

Can I use Sass?
If you use the create-react-app in your project, you can easily install and use Sass in your React projects.

Install Sass by running this command in your terminal:

>npm i sass
Now you are ready to include Sass files in your project!

Create a Sass file
Create a Sass file the same way as you create CSS files, but Sass files have the file extension .scss

In Sass files you can use variables and other Sass functions:

my-sass.scss:
Create a variable to define the color of the text:

$myColor: red;

h1 {
  color: $myColor;
}

Import the Sass file the same way as you imported a CSS file:

index.js:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './my-sass.scss';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

                                                    // ******************** CHAPTER 3 ******************
