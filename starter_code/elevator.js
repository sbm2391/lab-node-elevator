class Elevator {
  constructor(floor, direction){
    
    this.floor      = floor;
    this.MAXFLOOR   = 10;
    this.MINFLOOR   = 0;
    this.requests   = [];
    this.watingList = [];
    this.passengers = [];
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
  _passengersEnter(person) { 
    if (this.watingList.length > 0) {
      this.passengers.push(person.name)
      this.watingList.shift()
      this.requests.push(person.destinationFloor)
    }
    console.log(`${person.name} has enter the elevator`)
  }

  _passengersLeave(person) { 
    if(person.destinationFloor === this.floor) {
      _.pull(this.passengers, person.name)
    }
    console.log(`${person.name} has left the elevator`)
  }

  floorUp() {
    this.floor++;
  }

  floorDown() {
    this.floor--;
  }

  call(person) {
    this.watingList.push(person.name)
    this.requests.push(person.originFloor)
    
   }

  log(){
    console.log( `Direction: ${this.direction} | Floor: ${this.floor} `);
  }
}

module.exports = Elevator;
