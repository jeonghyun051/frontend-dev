/*
    6. Destructuring(구조분해)
*/

// ex1 - basic
let fistName;
let lastName;

const user = {
    firstName: "둘",
    lastName: "리",
    email: "dooly@gamil.com"
};

({firstName, lastName} = user);
console.log(firstName, lastName); 

// ex2 - Default Value
const goods = {
    name: "TV",
    price: 10000,
    stockCount: 30
}

let {name, price, soldCount = 0, stockCount} = goods;
console.log(name, price, soldCount, stockCount);

// ex3 - Diffirent Variable Names
const person = {
    name: "안대혁",
    country: "korea"
};

let {name: fullName, country: place} = person;
console.log(fullName, place);