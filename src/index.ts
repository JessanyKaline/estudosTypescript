// Array só pode ter um tipo definido
let frutas: string[] = ["pera", "abacaxi", "uva"];

// Tuplas podem ter mais de um tipo de dado
let item: [string, number, boolean] = ["maça", 10, true];

//Exemplo de Alias com spread operator
type Teste = [string, ...number[]];

const imprimirTeste: Teste[] = [
  ["teste1", 250],
  ["teste2", 250, 360, 400],
  ["teste3", 250, 360, 400, 520, 670],
];

//console.log(imprimirTeste);

// Exemplo de enum - que consiste em uma abstração para deixar o código mais legível nomeando e atribuindo valores inteiros
enum Species {
  feline = 1,
  dog = 2,
  bird = 3,
}

const animal: { firstName: string; age: number; species: Species }[] = [
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

//console.log(animal);

// Exemplo de uma array de tuplas que contem três tipos e um enum
const animalTuple: [string, number, Species][] = [
  ["Estrela", 1, Species.feline],
  ["Mahina", 7, Species.feline],
];

const add = (num1: number, num2: number) => {
  return num1 + num2;
};

// Lembrete importante funções void não retornam nada
const result = (price: number) => {
  //console.log('The result is ' + price)
};

// Passando dentro da função void outra função que realiza somas
result(add(6, 5));

//console.log (result(add(6,5))) undefined

//ALIAS

type Users = {
  firstName: string;
  lastName: string;
  age: number;
};

const user: Users = {
  firstName: "Jessany",
  lastName: "Kaline",
  age: 30,
};

const userTwo: Users = {
  firstName: "Caroline",
  lastName: "Melo",
  age: 28,
};

// UNION

const exUnion: boolean | string = "ge";

const userInput = (input1: number | string, input2: number | string) => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
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

// LITERAL + UNION

let productPrice: 10 | 20 | 30;
let productSize: "S" | "M" | "L";

productSize = "M";

// INTERSECTION

type User = {
  firstName: string;
  age: number;
};

type JobRole = {
  id: number;
  role: string;
};

type employee = User & JobRole;

const e1: employee = {
  firstName: "Maria",
  age: 31,
  id: 1,
  role: "admin",
};

// POO - CLASSES

class Student {
  name: string;
  idUser: number;
  private numberCourses: number;

  constructor(n: string, id: number, course: number) {
    this.name = n;
    this.idUser = id;
    this.numberCourses = course;
  }
  // método

  get amountCourses() {
    return this.numberCourses;
  }
  addCourses(amount:number){
    this.numberCourses += amount
  }
}

const student1 = new Student('Jessany', 13, 2)

student1.addCourses(2)

console.log(student1)

//INTERFACES

interface addToCart {
  id: number;
  title: string;
  variantId?: number;

  itemMessage(message: string): void;
}

let product: addToCart;

product = {
  id: 1,
  title: "skirt",
  variantId: 3,

  itemMessage(message: string) {
    console.log(message + this.title);
  },
};

product.itemMessage('This is a ');

//  CLASSES DE FORMA DIRETA - readonly 

class StudentBA {
  constructor(readonly name: string, public typeCourse: string){

  }
}

// MESCLANDO CONCEITOS DE CLASSES E INTERFACES

interface Book {
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;
  pageCount: number;
}

class Library {
  books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  findBookByTitle(title: string): Book | undefined {
    return this.books.find((book) => book.title === title);
  }
}

const myBook: Book = {
  title: 'The Little Prince',
  author: 'Antoine de Saint-Exupéry',
  publicationYear: 1943,
  isbn: '978-3-16-148410-0',
  pageCount: 128,
};

const myBook2: Book = {
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


