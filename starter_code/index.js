const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator1 = new Elevator(5, "down");

//elevator1.start();

//console.log(elevator1)

elevator1.call();
console.log(elevator1)
