# **JavaScript Language Fundamentals and Concepts**

## **Language Features**

- [Constants](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through reassignment, and it can't be redeclared.

Ex. #1:

        const number = 42;

        try {
        number = 99;
        } catch(err) {
        console.log(err);
        }

        console.log(number);
        // expected output: 42

Ex #2:

        const carId = 42

        cardId = 100;
        // error

- [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

The let statement declares a block scope local variable, optionally initializing it to a value.

Ex. #1:

        let x = 1;

        if (x === 1) {
        let x = 2;

        console.log(x);
        // expected output: 2
        }

        console.log(x);
        // expected output: 1

Ex #2:

        if (true) {
            var foo = 9;
        }

        console.log(foo);
        // 9

...or...

        if (true) {
            let foo = 9;
        }

        console.log(foo);
        // error

- [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

The var statement declares a variable, optionally initializing it to a value.

        var x = 1;

        if (x === 1) {
        var x = 2;

        console.log(x);
        // expected output: 2
        }

        console.log(x);
        // expected output: 2

- [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

        function sum(...theArgs) {
        return theArgs.reduce((previous, current) => {
            return previous + current;
        });
        }

        console.log(sum(1, 2, 3));
        // expected output: 6

        console.log(sum(1, 2, 3, 4));
        // expected output: 10

- [Destructuring Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

        var a, b, rest;
        [a, b] = [10, 20];

        console.log(a);
        // expected output: 10

        console.log(b);
        // expected output: 20

        [a, b, ...rest] = [10, 20, 30, 40, 50];

        console.log(rest);
        // expected output: [30,40,50]

- [Destructuring Objects](https://wesbos.com/destructuring-objects/)

Extension of destructing arrays.

        const wes = {
        first: 'Wes',
        last: 'Bos',
        links: {
            social: {
            twitter: 'https://twitter.com/wesbos',
            facebook: 'https://facebook.com/wesbos.developer',
            },
            web: {
            blog: 'https://wesbos.com'
            }
        }
        };

        const twitter = wes.links.social.twitter;
        const facebook = wes.links.social.facebook;
        // Annoying!

or 

        const { twitter, facebook } = wes.links.social;
        console.log(twitter, facebook); // logs the 2 variables 

- [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

        function sum(x, y, z) {
        return x + y + z;
        }

        const numbers = [1, 2, 3];

        console.log(sum(...numbers));
        // expected output: 6

        console.log(sum.apply(null, numbers));
        // expected output: 6

- [typeof()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

The typeof operator returns a string indicating the type of the unevaluated operand.

        console.log(typeof 42);
        // expected output: "number"

        console.log(typeof 'blubber');
        // expected output: "string"

        console.log(typeof true);
        // expected output: "boolean"

        console.log(typeof declaredButUndefinedVariable);
        // expected output: "undefined";

- Common Type Conversions

- Controlling Loops

## **Operators**

- Equality Operators

- Unary Operators

- Logical (Boolean) Operators

- Relational Operators

- Conditional Operators

- Assignment Operators

- Operator Precedence

## **Functions and Scope**

- Function Scope

- Block Scope

- IIFE's

- Closures

- this

- call()

- apply()

- bind()

- Arrow Functions

- Default Parameters

## **Objects and Arrays**

- Constructor Functions

- Prototypes

- Objects Using Prototypes

- JSON / JavaScript Object Notation

- Array Iteration

## **Classes and Modules**

- [Class Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

Class Declarations:

        class Rectangle {
            constructor(height, width) {
                this.height = height;
                this.width = width;
            }
        }

Class Expressions

        // unnamed
        let Rectangle = class {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        };
        console.log(Rectangle.name);
        // output: "Rectangle"

        // named
        let Rectangle = class Rectangle2 {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        };
        console.log(Rectangle.name);
        // output: "Rectangle2"

Ex. #3:

        class Car {}

        let car = new Car();

- [Constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

The constructor method is a special method for creating and initializing an object created within a class.

Ex. #1:

        class Polygon {
        constructor() {
            this.name = "Polygon";
        }
        }

        var poly1 = new Polygon();

        console.log(poly1.name);
        // expected output: "Polygon"

Ex. #2:

        class Car {
            constructor(id) {
                this.id = id;
            }
        }

        let car = new Car(123);
        console.log(car.id); // 123

- Methods

In a function definition, this refers to the "owner" of the function. In the example above, this is the person object that "owns" the fullName function. In other words, this.firstName means the firstName property of this object.

Ex. #1:

        var person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        }
        };

Ex. #2:

        class Car {
            constructor(id) {
                this.id = id;
            }
            identify() {
                return `Car Id: ${this.id}`;
            }
        }

        let car = new Car(123);
        console.log(car.identify()); // Car Id: 123

- Inheritance

- Creating Modules

- Importing Modules

## **Programmin the BOM and DOM**

- Introduction

- The window Object

Listed below is just a small sample on various BOM / DOM ideas and notes..

    Properties
        document
        location
        console
        innerHeight
        innerWidth
        pageXOffset
        pageYOffest

    Methods
        alert()
        back()
        confirm()

    Events
        (not common)

- Timers

- The location Object

- The document Object

- Selecting DOM Elements

- Modifying DOM Elements

## **Promises and Error Handling**

- Errors in JavaScript

- Error Handling Using try and catch

- finally

- Developer Defined Errors

- Creating a Promise

- Setting a Promise
