// Examples of console interaction
// console.log('Hello world');
// console.warn('test');
// console.error("test");

// var, let, const are the three types of variable declarations possible. Want to mainly use let, as var is globally scoped.
// string, numbers, boolean, null, undefined, symbol are the common data types.

// Examples of the primative data types.
let name = 'Jake';
let age = 21;
let rating = 10.9;
let isCool = true;
let x = null;
let y = undefined;
let z;

console.log(typeof(age));

// Strings
// Concatenation

// Normal way
console.log('My name is ' + name + ' and I am ' + age + ' years old');
// Template string
console.log(`My name is ${name} and I am ${age} years old`);

/// String Methods
const s = 'Hello world';
const csvString = 'this, is, a, csv, string';
console.log(s.length);
console.log(s.toUpperCase());
// Chaining methods
console.log(s.substring(0, 5).toLowerCase());
// Split the string by specified character.
console.log(s.split(''));
console.log(csvString.split(', '));

// Arrays

// Using the array constructor
const numbers = new Array(2,2,4,5,4);
console.log(numbers);

// Using square brackets.
// Different data types can be stored in the same array.
const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits);
fruits[3] = 'grapes';
console.log(fruits[3]);
fruits.push('mangos');
fruits.unshift('strawberry');
console.log(fruits);
fruits.pop();
console.log(fruits);
// Check if object is an array
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));

// Object literals
// Creating an object can be done just like this.
let person = {
    firstName: 'Jake',
    lastName: 'Hall',
    age: 30,
    hobbies: ['sleeping', 'programming', 'depression'],
    address: {
        street: 'B3227 Main Road',
        city: 'Taunton',
        county: 'Somerset'
    }
}

// Outputting values from said object examples...
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.firstName, person.hobbies[1], person.address.county);

// Getting values from an object literal in another way... destructuring.
const { firstName, lastName, address: { city }} = person;
console.log(firstName, lastName, city);

person.email = 'jake.hall@hotmail.co.uk';

console.log(person);

// Array of objects.
let todos = [
    {
        id: 1,
        text: 'Task 1',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Task 2',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Task 3',
        isCompleted: false
    },
];

console.log(todos);
console.log(todos[1].text);

// JSON
let todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For loops
for (let i = 0; i < 10; i++) {
    console.log(`For loop number ${i}`);
}

// While 
let i = 0;
while (i < 10) {
    i++;
    console.log(`While number ${i}`);
}

// Loop through array
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

// For of loop
for(let todo of todos) {
    console.log(todo.text);
}

// High order array methods; foreach, map, filter
// ForEach
todos.forEach(function(todo) {
    console.log(todo.text);
});

//Map returning array of just text values
let todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

// Filter combined with map to return only completed todos, but only the text.
let todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoCompleted);

// Conditionals

x = 6;
y = 11

// Double equal matches the value - not the data type
if(x == 10) {
    console.log('x is equal to 10');
}
else {
    console.log('x is not equal to 10');
}

// For triple equal to be true, the value and data type must be the same
if(x === 10) {
    console.log('x is equal to 10');
}
else {
    console.log('x is not equal to 10');
}

// if, else if and else
if(x === 10) {
    console.log('x is equal to 10');
}
else if (x >= 10) {
    console.log('x is greater than 10');
}
else {
    console.log('x is not equal to 10');
}

// or comparison
if (x > 5 || y > 10) {
    console.log(' x is more than 5 or y is more than 10');
}

// and comparison
if (x > 5 && y > 10) {
    console.log(' x is more than 5 and y is more than 10');
}

// Ternary operator
let a = 9;

let colour = x > 10 ? 'Blue' : 'Red';
console.log(colour);

// switch statement
switch (colour) {
    case 'Red':
        console.log('Colour is red');
        break;
    case 'Blue':
        console.log('Colour is blue')
        break;
    default:
        console.log('Colour is not red or blue');
        break;
}

// functions
// basic function with default values
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5, 5));

// Arrow function, allows the function to be slimmed down a lot.
const addNums2 = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNums2(5, 7));

// Example of an arrow function on a higher order array.
todos.forEach((todo) => console.log(todo.text));

// Object oriented JavaScript - pre ES6

// Example of using a function to create an object
// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// Add methods to the prototype rather than the objects themselves
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate objects
let person1 = new Person('Jake', 'Hall', '03-30-1999');
let person2 = new Person('Tobi', 'Hall', '03-30-2002');
let person3 = new Person('Isaac', 'Hall', '03-30-2009');

console.log(person1);
console.log(person1.dob.getFullYear());
console.log(person2.getBirthYear());
console.log(person3.getFullName());

// Object oriented JavaScript - post ES6

// Class
class Person2 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate objects
let person4 = new Person2('Jake', 'Hall', '03-30-1999');
let person5 = new Person2('Tobi', 'Hall', '03-30-2002');
let person6 = new Person2('Isaac', 'Hall', '03-30-2009');

console.log(person4);
console.log(person4.dob.getFullYear());
console.log(person5.getBirthYear());
console.log(person6.getFullName());