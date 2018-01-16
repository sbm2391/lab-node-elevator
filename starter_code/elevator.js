class Elevator {
  constructor(){
    
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.MINFLOOR   = 0;
    this.requests   = [];
    this.watingList = [];
    this.passengers = [];
    this.direction  = "up";

  }

  start() {
    let that = this;
    this.interval = setInterval(function(){ 
      that.update() }, 1000);
    
    }
  

  stop() {
   
    clearInterval(this.interval)
  
  }
  update(person) {
    //for(let i = 0; i < this.requests.length; i++) {
      if(this.floor < this.requests[0]) {
        this.floorUp()
        if (this.floor === person.originFloor) {
          this._passengersEnter(person)          
        } else if (this.floor === person.destinationFloor) {
          this._passengersLeave(person)
        }
      } else if (this.floor > this.requests[0]) {
        this.floorDown()
        if (this.floor === person.originFloor) {
          this._passengersEnter(person)          
        } else if (this.floor === person.destinationFloor) {
          this._passengersLeave(person)
        } else {
          this.stop();
        }
      }
    }
  //} 
  _passengersEnter(person) { 
    if (this.watingList.length > 0) {
      this.passengers.push(person.name)
      this.watingList.shift()
      this.requests.push(person.destinationFloor)
      this.requests.sort(function(a, b){return a-b})
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
    this.direction = "up"
    this.floor++;
  }

  floorDown() {
    this.direction = "down"
    this.floor--;
  }

  call(person) {
    this.watingList.push(person.name)
    this.requests.push(person.originFloor)
    this.requests.sort(function(a, b){return a-b})
    
   }

  log(){
    console.log( `Direction: ${this.direction} | Floor: ${this.floor} `);
  }
}

module.exports = Elevator;
