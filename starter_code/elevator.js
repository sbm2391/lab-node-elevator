class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = "up"
  }

  start() {
    let that = this;
    setInterval(function(){ that.update() }, 1000);
  }
  stop() {
    let interval = this.start();
    clearInterval(interval);
  }
  update() {
    return this.log();
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
  }
  floorDown() { }
  call() { }
  log() {
    console.log( `Direction: ${this.direction} | Floor: ${this.floor} `);
  }
}

module.exports = Elevator;
