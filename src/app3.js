import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);

let car = new Car();
let drone = new Drone();

console.log("Car: "+car);
console.log("Drone: "+drone);
console.log(fleet);
console.log("data cars: " + dataService.cars);
console.log("Car licenses :\n");
for(let car of dataService.cars){
    console.log(car.license);
}
for(let e of dataService.errors){
    console.log(e.message);
}

let carBL = dataService.getCarByLicense('AT9900');
console.log(carBL);

console.log("CARS SORTED BY LICENSE");
let carsSort = dataService.getCarsSortedByLicense();
for (let car of carsSort) {
    console.log(car.license);
}

console.log("CARS FILTERED BY MAKE");
let carsFilt = dataService.filterCarsByMake('e');
for (let car of carsFilt) {
    console.log(car.make);
}

