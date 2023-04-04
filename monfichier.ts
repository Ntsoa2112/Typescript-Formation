interface Person {
  firstName: string;
  lastName: string;
}

function sayHello(person: Person) {
  console.log(`Hello ${person.firstName} ${person.lastName}`);
}

const person = { firstName: 'John', lastName: 'Doe' };
sayHello(person);


const a: string = "hard";
const n: number = 3;
const b: boolean = true;
const nu: null = null;
const date: Date = new Date();

//      Les type avancés de TypeScript

// 1 - Union types
var unionTypes: string | number = "L'union fait la force";
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, but got ${padding}.`);
}

console.log(padLeft("hello", 4)); // "   hello"
console.log(padLeft("world", "<<<")); // "<<<world"

// 2 - Intersection types
interface A {
  x: number;
}

interface B {
  y: number;
}

type C = A & B;

const obj: C = { x: 1, y: 2 };
console.log(obj); // { x: 1, y: 2 }

// 3 - Literal types
type Color = "red" | "green" | "blue";

function getColorCode(color: Color) {
  switch (color) {
    case "red":
      return "#ff0000";
    case "green":
      return "#00ff00";
    case "blue":
      return "#0000ff";
    default:
      throw new Error(`Unknown color: ${color}`);
  }
}

console.log(getColorCode("red")); // "#ff0000"
console.log(getColorCode("green")); // "#00ff00"
console.log(getColorCode("blue")); // "#0000ff"

// 4 - Mapped types
interface User {
  id: number;
  name: string;
  age: number;
}

type OptionalUser = {
  [K in keyof User]?: User[K];
}

const userOptional: OptionalUser = {
  id: 1,
  name: "John Doe"
};

// Bonus
const arr: Array<string | number> = ["Test", 3]
const arrstr: string[] = ["hello", "world"]
const arrany: any[] = ["geek", 3];
const user: {nom: string, prenom: string} = {
    nom: "MM",
    prenom: "Ntsoa"
};
const listobj: {firstname: string, numbre?: number} = {firstname: "RAKOTO"};
const listin: {lot: string, [key: string]: string} = {
    lot: "B75",
    ville: "Tana",
    region: "Analamg"
}

// Typage de fonction simple en TypeScript :
function addition(a: number, b: number): number {
  return a + b;
}

// Typage de fonction en TypeScript qui retourne un objet :
function createUser(name: string, age: number): {name: string, age: number} {
  return {
    name: name,
    age: age
  };
}

// Typage de fonction en TypeScript qui retourne un tableau contenant des objets:
interface PersonT {
  name: string;
  age: number;
}

function createPeople(names: string[], ages: number[]): PersonT[] {
  const people: PersonT[] = [];
  for (let i = 0; i < names.length; i++) {
    people.push({ name: names[i], age: ages[i] });
  }
  return people;
}
const names = ["John", "Jane", "Bob"];
const ages = [30, 25, 40];
const people = createPeople(names, ages);
console.log(people); // [{ name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Bob", age: 40 }]


interface Calculator {
  (num1: number, num2: number): number;
}

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function subtract(num1: number, num2: number): number {
  return num1 - num2;
}

// La fonction calculator prend en paramètre une fonction de type Calculator
function calculator(operation: Calculator, num1: number, num2: number): number {
  return operation(num1, num2);
}


// Utilisation de la fonction calculator avec différentes opérations
console.log(calculator(add, 5, 3)); // Output: 8
console.log(calculator(subtract, 10, 4)); // Output: 6