interface Person {
  firstName: string;
  lastName: string;
}

function sayHello(person: Person) {
  console.log(`Hello ${person.firstName} ${person.lastName}`);
}

const person = { firstName: 'John', lastName: 'Doe' };
sayHello(person);