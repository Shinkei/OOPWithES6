import $ from 'jquery';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js'
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './pages/home.js';
import {CarsPage} from './pages/cars.js';
import {DronesPage} from './pages/drones.js';
import {MapPage} from './pages/map.js';

export class App extends ApplicationBase{

    constructor(){
        super('Fleet Manager');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);

        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Cars', new CarsPage(), false);
        this.addRoute('Drones', new DronesPage(), false);
        this.addRoute('Map', new MapPage(), false);

    }

}

export let application = new App();
application.show($('body'));