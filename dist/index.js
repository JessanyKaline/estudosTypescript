"use strict";
let frutas = ["pera", "abacaxi", "uva"];
let item = ["maça", 10, true];
const imprimirTeste = [
    ["teste1", 250],
    ["teste2", 250, 360, 400],
    ["teste3", 250, 360, 400, 520, 670],
];
var Species;
(function (Species) {
    Species[Species["feline"] = 1] = "feline";
    Species[Species["dog"] = 2] = "dog";
    Species[Species["bird"] = 3] = "bird";
})(Species || (Species = {}));
const animal = [
    {
        firstName: "Estrela",
        age: 1,
        species: Species.feline,
    },
    {
        firstName: "Mahina",
        age: 7,
        species: Species.dog,
    },
    {
        firstName: "Francisquinho",
        age: 2,
        species: Species.bird,
    },
];
const animalTuple = [
    ["Estrela", 1, Species.feline],
    ["Mahina", 7, Species.feline],
];
const add = (num1, num2) => {
    return num1 + num2;
};
const result = (price) => {
};
result(add(6, 5));
const user = {
    firstName: "Jessany",
    lastName: "Kaline",
    age: 30,
};
const userTwo = {
    firstName: "Caroline",
    lastName: "Melo",
    age: 28,
};
const exUnion = "ge";
const userInput = (input1, input2) => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = `${input1}${input2}`;
    }
    return result;
};
const addValues = userInput(100, 40);
console.log(addValues);
const addText = userInput("Mangustão e ", "Fruta Pão");
console.log(addText);
const numString = userInput("Meu número da sorte é ", 7);
console.log(numString);
let productPrice;
let productSize;
productSize = "M";
const e1 = {
    firstName: "Maria",
    age: 31,
    id: 1,
    role: "admin",
};
class Student {
    constructor(n, id, course) {
        this.name = n;
        this.idUser = id;
        this.numberCourses = course;
    }
    get amountCourses() {
        return this.numberCourses;
    }
    addCourses(amount) {
        this.numberCourses += amount;
    }
}
const student1 = new Student('Jessany', 13, 2);
student1.addCourses(2);
console.log(student1);
let product;
product = {
    id: 1,
    title: "skirt",
    variantId: 3,
    itemMessage(message) {
        console.log(message + this.title);
    },
};
product.itemMessage('This is a ');
class StudentBA {
    constructor(name, typeCourse) {
        this.name = name;
        this.typeCourse = typeCourse;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    findBookByTitle(title) {
        return this.books.find((book) => book.title === title);
    }
}
const myBook = {
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    publicationYear: 1943,
    isbn: '978-3-16-148410-0',
    pageCount: 128,
};
const myBook2 = {
    title: 'A Song of Ice and Fire',
    author: 'George R. R. Martin',
    publicationYear: 1996,
    isbn: '978-0553103540',
    pageCount: 694,
};
const myLibrary = new Library();
myLibrary.addBook(myBook);
myLibrary.addBook(myBook2);
const bookFound = myLibrary.findBookByTitle('A Song of Ice and Fire');
console.log(bookFound);
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(meters) {
        console.log(`${this.name} moved ${meters}m.`);
    }
}
class Snake extends Animal {
    move(meters) {
        console.log('Slithering...');
        super.move(meters);
    }
}
class Pony extends Animal {
    move(meters) {
        console.log('Galloping...');
        super.move(meters);
    }
}
const sammy = new Snake("Sammy the Snake");
sammy.move(5);
const pokey = new Pony("Pokey the Pony");
pokey.move(34);
