let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passId = 0
let tripId = 0

class Driver {
  constructor(name){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(
      function(trip){
        return trip.driverId === this.id
      }.bind(this)
    )
  }
  passengers(){
    return this.trips().forEach(trip => {
      console.log(trip.passenger());
    }).bind(this)
  }
}

class Passenger {
  constructor(name){
    this.name = name
    this.id = ++passId
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(
      function(trip){
        return trip.passengerId === this.id
      }.bind(this)
    )
  }

  drivers(){
    return this.trips().forEach(trip => {
      console.log(trip.driver()); 
    }).bind(this)
  }
}





















class Trip{
  constructor(driverId, passId){
    this.driverId = driverId.id
    this.passengerId = passId.id
    this.id = ++tripId
    store.trips.push(this)
  }
  passenger(){
    return store.passengers.find(
      function(pass){
        return pass.id === this.passengerId
      }.bind(this)
    )
  }

  driver(){
    return store.drivers.find(
      function(driver){
        return driver.id === this.driverId
      }.bind(this)
    )
  }
}
