class Vehicle{
    constructor(licenseNumber){
        this.licenseNumber = licenseNumber;
        this.gpsEnable = true;
        console.log('constructing vehicle with license: ' + licenseNumber);
    }

    start(){
        console.log('start vehicle');
    }

    static getCompanyName(){
        console.log('My Company');
    }
}

class Drone extends Vehicle{

}

class Car extends Vehicle{
    constructor(licenseNumber){
        super(licenseNumber);
        this.gpsEnable = false;
        console.log('constructing Car');
    }

    start(){
        console.log('start car');
    }

   static getCompanyName(){
        console.log('My Other Company');
    }
}

let car = new Car('as76644');

console.log(car instanceof Vehicle);
console.log('license number '+ car.licenseNumber);
console.log('gps enable '+ car.gpsEnable);

car.start();
Car.getCompanyName();