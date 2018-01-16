class Elevator {
  constructor(Person, floor, direction){
    this.person1 = new Person("Bet", 2, 5);
    this.floor      = floor;
    this.MAXFLOOR   = 10;
    this.MINFLOOR   = 0;
    this.requests   = [];
    this.direction  = direction;

  }

  start() {
    let that = this;
    this.interval = setInterval(function(){ 
      that.update() }, 1000);
    
    }
  

  stop() {
   
    clearInterval(this.interval)
  
  }
  update() {
    if (this.direction === "up") {
      if (this.floor < this.MAXFLOOR) {
        this.floorUp();
        return this.log();
      } else {
        this.stop();
      }
    } else if (this.direction === "down") {
      if (this.floor >  this.MINFLOOR) {
        this.floorDown ();
        return this.log();
      } else {
        this.stop();
      }
    }
    
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    this.floor++;
  }

  floorDown() {
    this.floor--;
  }

  call() {
    
    this.requests.push(this.person1)
   }

  log(){
    console.log( `Direction: ${this.direction} | Floor: ${this.floor} `);
  }
}

module.exports = Elevator;
