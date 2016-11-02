import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataError} from './data-error.js'

export class FleetDataService{

    constructor(){
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(fleet){
        for (let data of fleet){
            switch(data.type){
                case 'car':
                if(this.validateCarData(data)){
                    let car = this.loadCar(data);
                    if(car){
                        this.cars.push(car);
                    }
                }else{
                    let e = new DataError('invalid car data', data);
                    this.errors.push(e);
                }
                break;
                case 'drone':
                    if(this.validateDroneData(data)){
                        let drone = this.loadDrone(data);
                        if(drone){
                            this.drones.push(drone);
                        }
                    }else{
                        let e = new DataError('invalid drone data', data);
                        this.errors.push(e);
                    }
                    break;
                default:
                    let e = new DataError('Invalid vehivle type', data);
                    this.errors.push(e);
                    break;
            }
        }
    }

    loadCar(data){
        try{
            let car = new Car(data.license, data.model, data.latLong);
            car.miles = data.miles;
            car.make = data.make;

            return car;
        }catch(e){
            this.errors.push(new DataError('error loading car', data));
        }
        return null;
    }

    loadDrone(data){
        try{
            let drone = new Drone(data.license, data.model, data.latLong);
            drone.airTime = data.airTimeHours;
            drone.base = data.base;

            return drone;
        }catch(e){
            this.errors.push(new DataError('error loading dron', data));
        }
        return null;
    }

    validateCarData(car){
        let requiredProps = 'license model latLong miles make'.split(' ');
        let hasErrors = false;
        for(let field of requiredProps){
            if(!car[field]){
                console.log(field,car[field]);
                this.errors.push(new DataError(`invalid field ${field}`, car));
                hasErrors = true;
            }
        }
        if(Number.isNaN(Number.parseFloat(car.miles))){
            this.errors.push(new DataError('invalid milage', car));
            hasErrors = true;
        }
        return !hasErrors;
    }

    validateDroneData(dron){
        let requiredProps = 'license model latLong airTimeHours base'.split(' ');
        let hasErrors = false;
        for(let field of requiredProps){
            if(!dron[field]){
                console.log(field,dron[field]);
                this.errors.push(new DataError(`invalid field ${field}`, dron));
                hasErrors = true;
            }
        }
        if(Number.isNaN(Number.parseFloat(dron.airTimeHours))){
            this.errors.push(new DataError('invalid airTimeHours', dron));
            hasErrors = true;
        }
        return !hasErrors;
    }

    getCarByLicense(license){
        return this.cars.find(function(car){
            return car.license === license;
        })
    }

    getCarsSortedByLicense(){
        return this.cars.sort(function(car1, car2){
            if(car1.license < car2.license){
                return -1;
            }
            if(car1.license > car2.license){
                return 1;
            }
            return 0;
        });
    }

    filterCarsByMake(filter){
        return this.cars.filter(car => car.make.indexOf(filter) >= 0)
    }
}