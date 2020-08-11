
// Array Iteration

console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #1:");
console.log(" ");

const fruits = ['apple', 'pear', 'cherry'];
// Version #1: for loop
for (let i = 0; i < fruits.length; i += 1) {
    console.log(fruits[i]);
}
// Version #2: for each
fruits.forEach(fruit => console.log(fruit));

// Easier to read, bugs are easier to avoid, infinite loops impossible, avoids incrementing mistakes, and prevents setting wrong conditions.

// Bad: you can't break out of a loop early. Use for or while loops instead.
console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #2:");
console.log(" ");

let capitilizedFruits = [];
fruits.forEach(fruit => {
    let capitilizedFruit = fruit.toUpperCase();
    capitilizedFruits.push(capitilizedFruit);
});
console.log(capitilizedFruits);

console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #3:");
console.log(" ");

const prices = [6.75, 3.10, 4.00, 8.12];
let totalPrices = 0;
prices.forEach(price => totalPrices += price);
console.log(totalPrices);

console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #4:");
console.log(" ");

// Using forEach, copy only the first 2 characters of each string in the days array and store the abbreviations in the dayAbbreviations array.
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

// dayAbbreviations should be: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
days.forEach(day => dayAbbreviations.push(day.slice(0, 2)));
console.log(dayAbbreviations);

console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #5:");
console.log(" ");

// The split method turns a string into an array. In the case of alphabet below, each letter of the string is being turned into an element in an array by split. Using forEach, iterate over the alphabet array and store each letter in the array noel except for the L character.
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let noel = [];

// noel should be: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
alphabet.forEach(character => {
    if (character !== 'L') {
        noel.push(character)
    }
});
console.log(noel);

console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #6:");
console.log(" ");

// Using forEach, iterate over the percentages and store all percentages over 50 percent in the array upperRange.
const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];
let upperRange = [];

// upperRange should be: [67, 90, 82, 99]
percentages.forEach(percentage => {
    if (percentage > 50) {
        upperRange.push(percentage);
    }
});
console.log(upperRange);

console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #7:");
console.log(" ");

// Using forEach, iterate over the colors array and store the hex colors that start with the letter F (ex. #FF0000) in the array filteredColors.
const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
let filteredColors = [];

// filteredColors should be: ['#FFE0F4', '#FF2D2D', '#F7FFEC']
colors.forEach(color => {
    if (color[1] === 'F') {
        filteredColors.push(color);
    }
});
console.log(filteredColors);

console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #8:");
console.log(" ");

// Using forEach, capitalize all the strings in the months array and store them in the array capitalizedMonths.
const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];

// filteredColors should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
// months.forEach(month => {
//     const capitalizedMonth = month.toUpperCase();
//     capitilizedMonths.push(capitilizedMonth);
// });

// ...refactored version from above:
months.forEach(month => capitalizedMonths.push(month.toUpperCase()));
console.log(capitalizedMonths);

console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #9:");
console.log(" ");

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
let sNames = [];
names.forEach(name => {
    if (name.charAt(0) === 'S') {
        sNames.push(name);
    }
});
console.log(sNames);

// Array Manipulation

console.log("--------------------------------------------------------");
console.log("Array Manipulation Example #1:");
console.log(" ");

const names2 = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

// const sNames = names.filter(name => {
// if(name.charAt(0) === 'S') {
//     return true;
// } else {
//     return false;
// }
// });

// Same code as above but since it really is a single statement, it can be reduced to a single line.
const sNames2 = names2.filter(name => name.charAt(0) === 'S');

console.log(sNames2);

console.log("--------------------------------------------------------");
console.log("Array Manipulation Example #2:");
console.log(" ");


const numbersSampleThrees = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const no3 = numbersSampleThrees.filter(number => number !== 3);


console.log("--------------------------------------------------------");
console.log("Array Manipulation Example #3:");
console.log(" ");


const numbersSampleEvens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const noEvens = numbersSampleEvens.filter(number => number % 2 === 0);
console.log(noEvens);

console.log("--------------------------------------------------------");
console.log("Array Manipulation Example #4:");
console.log(" ");


// Using the filter method on the years array, return an array of only the years in the twentieth century (remember: the twentieth century includes the year "2000"). See the comments for the correct result. Store the new array in the variable century20.
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20;

// century20 should be: [1989, 2000, 1999, 1973]
// Write your code below

century20 = years.filter(number => number < 2001);

console.log("--------------------------------------------------------");
console.log("Array Manipulation Example #5:");
console.log(" ");

const strings = ['1', '2', '3', '4', '5'];
const numbers = strings.map(string => parseInt(string, 10));
console.log(numbers);

console.log("--------------------------------------------------------");
console.log("Array Manipulation Example #6:");
console.log(" ");

const fruitsAgain = ['apple', 'pear', 'cherry'];
// let capitalizedFruits = [];
// Before refactoring:
// fruitsAgain.forEach(fruit => {
// let capitalizedFruit = fruit.toUpperCase();
// capitalizedFruits.push(capitalizedFruit);
// });

// With map() version #1:
// const capitalizedFruits = fruitsAgain.map(function(x) { return x.toUpperCase()});

// With map() version #2:
const capitalizedFruits = fruitsAgain.map(fruit => fruit.toUpperCase());

console.log(capitalizedFruits);

console.log("--------------------------------------------------------");
console.log("Array Manipulation Example #7:");
console.log(" ");

// Version #1:
// const dollarPrices = [5, 4.23, 6.4, 8.09, 3.20];
// let pricesConverted = dollarPrices.map(convert => '$' + convert.toFixed(2));

// Version #2 with template literal
const dollarPrices = [5, 4.23, 6.4, 8.09, 3.20];
const priceToDollars = convert => `$${convert.toFixed(2)}`;
const pricesConverted = dollarPrices.map(priceToDollars);

// Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]
console.log(pricesConverted);

console.log("--------------------------------------------------------");
console.log("Array Manipulation Example #8:");
console.log(" ");

// Use the map method on the daysOfWeek array, creating a new array of abbreviated week days. Each abbreviated string should be the first three letters of the long version in daysOfWeek. Store the new array in the variable abbreviatedDays.

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;

// abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// Write your code below

let temp = convert => convert.slice(0, 3);
abbreviatedDays = daysOfWeek.map(temp);

console.log("--------------------------------------------------------");
console.log("Array Manipulation Example #9:");
console.log(" ");

let total = [0, 1, 2, 3].reduce((acc, cur) => acc + cur, 0);
console.log(total);

console.log("--------------------------------------------------------");
console.log("Array Manipulation Example #10:");
console.log(" ");

const reducedPrices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

let reducedTotal = reducedPrices.reduce((sum, price) => sum + price, 0);

console.log(reducedTotal);

console.log("--------------------------------------------------------");
console.log("Array Manipulation Example #11:");
console.log(" ");

const reducedNames = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
let gNameCount = reducedNames.reduce((count, name) => {
    if (name[0] === 'G') {
        return count + 1;
    }
    return count;
}, 0);

console.log(gNameCount);
// Result: 4

console.log("--------------------------------------------------------");
console.log("Filter and Map Example #1:");
console.log(" ");

const arr = [1, 2, 3];
const smallerArr = arr
    .filter(number => number !== 2)
    .map(number => number + 1);
console.log(smallerArr);

console.log("--------------------------------------------------------");
console.log("Filter and Map Example #2:");
console.log(" ");

const years2 = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below

displayYears = years2
    .filter(number => number > 2000)
    .map(number => number + ' A.D.');

console.log("--------------------------------------------------------");
console.log("Filter and Map Example #3:");
console.log(" ");

const users = [
    { name: 'Samir', age: 27 },
    { name: 'Angela', age: 33 },
    { name: 'Beatrice', age: 42 }
];

const newUsersArray1 = users.map(user => `${user.name} is ${user.age} years old.`);
const newUsersArray2 = users.filter(user => user.name !== 'Samir');

console.log(newUsersArray1);
console.log('-----------------');
console.log(newUsersArray2);

console.log("--------------------------------------------------------");
console.log("Filter and Map Example #4:");
console.log(" ");

const authors = [
    { firstName: "Beatrix", lastName: "Potter" },
    { firstName: "Ann", lastName: "Martin" },
    { firstName: "Beverly", lastName: "Cleary" },
    { firstName: "Roald", lastName: "Dahl" },
    { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// Write your code below

fullAuthorNames = authors.map(user => `${user.firstName} ${user.lastName}`);


console.log("--------------------------------------------------------");
console.log("Filter and Map Example #4:");
console.log(" ");

const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];
let unfinishedTasks;

// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// Write your code below

unfinishedTasks = todos
  .filter(tasks => tasks.done === false)
    .map(tasks => tasks.todo);
    console.log(unfinishedTasks);


console.log("--------------------------------------------------------");
console.log("Filter and Map Example #5:");
console.log(" ");

    const products = [
        { name: 'hard drive', price: 59.99 },
        { name: 'lighbulbs', price: 2.59 },
        { name: 'paper towels', price: 6.99 },
        { name: 'flatscreen monitor', price: 159.99 },
        { name: 'cable ties', price: 19.99 },
        { name: 'ballpoint pens', price: 4.49 }
    ];

    const product = products
        .filter(product => product.price < 10)
        .reduce((highest, product) => {
            if (highest.price > product.price) {
                return highest;
            }
            return product;
        });

    console.log(product);

    const productsOverTen = products
        .filter(product => product.price > 10)
        .reduce((sum, product) => sum + product.price, 0)
        .toFixed(2);

    console.log(productsOverTen);

console.log("--------------------------------------------------------");
console.log("Filter and Map Example #6:");
console.log(" ");

    const purchaseItems = [
        {
            name: 'apples',
            dept: 'groceries',
            price: 2.49
        },
        {
            name: 'bread',
            dept: 'groceries',
            price: 2.99
        },
        {
            name: 'batteries',
            dept: 'electronics',
            price: 5.80
        },
        {
            name: 'eggs',
            dept: 'groceries',
            price: 3.99
        },
        {
            name: 't-shirts',
            dept: 'apparel',
            price: 9.99
        }
    ];
    let groceryTotal;
    
    // groceryTotal should be: 9.47
    // Write your code below
    
    groceryTotal = purchaseItems
            .filter(product => product.dept === 'groceries')
            .reduce((sum, product) => sum + product.price, 0);


console.log("--------------------------------------------------------");
console.log("Filter and Map Example #7:");
console.log(" ");


    const movies = [
        ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
        ['Finding Dory'],
        ['Jaws', 'On the Waterfront']
        ]
    const flatMovies = movies.reduce((arr, innerMovies) => [...arr, ...innerMovies], []);
    console.log(flatMovies);
            // Result: ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters', 'Finding Dory', 'Jaws', 'On the Waterfront']


console.log("--------------------------------------------------------");
console.log("Filter and Map Example #8:");
console.log(" ");

    const customerNames = [
        [ "John", "Sandy", "Tyrone", "Elizabeth", "Penny" ],
        [ "Barry", "Wanda", "Jamal", "Hayden" ],
        [ "Portia", "Pam", "Philip" ]
    ];
    let flattenedCustomerNames;

    // flattenedCustomerNames should be: ["John", "Sandy", "Tyrone", "Elizabeth", "Penny", "Barry", "Wanda", "Jamal", "Hayden", "Portia", "Pam", "Philip"]
    // Write your code below

    flattenedCustomerNames = customerNames.reduce((arr, innerNames) => [...arr, ...innerNames], []);

console.log("--------------------------------------------------------");
console.log("Filter and Map Example #9:");
console.log(" ");

const users = [
    {
      name: 'Samir',
      age: 27,
      favoriteBooks:[
        {title: 'The Iliad'},
        {title: 'The Brothers Karamazov'}
      ]
    },
    {
      name: 'Angela',
      age: 33,
      favoriteBooks:[
        {title: 'Tenth of December'},
        {title: 'Cloud Atlas'},
        {title: 'One Hundred Years of Solitude'}
      ]
    },
    {
      name: 'Beatrice',
      age: 42,
      favoriteBooks:[
        {title: 'Candide'}
      ]
    }
  ];
  
      // Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];
    const books = users
        .map(user => user.favoriteBooks.map(book => book.title))
        .reduce((arr, titles) => [...arr, ...titles], []);

    console.log(books);