const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator1 = new Elevator();
const Bet = new Person("Bet", 0, 5)
const Alicia = new Person("Alicia", 1, 5)


elevator1.call(Bet)
elevator1.start()


