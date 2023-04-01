function sayHello(person) {
    console.log("Hello ".concat(person.firstName, " ").concat(person.lastName));
}
var person = { firstName: 'John', lastName: 'Doe' };
sayHello(person);
