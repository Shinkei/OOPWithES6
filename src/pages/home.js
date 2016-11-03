import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {Button} from '../ui/button.js';
import {application} from '../app.js';

export class HomePage extends Page{

    constructor(){
        super('Home');
    }

    createElement(){
        super.createElement();

        let image = new Image('../../image/drone.jpg');
        image.appendToElement(this.element);

        let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px';
        let button = new Button('Self Driving Cars');
        button.setStyleString(styleString);
        button.appendToElement(this.element);
        button.element.click(() => application.activateRoute('Cars'));

        let button2 = new Button('Drones');
        button2.setStyleString(styleString);
        button2.appendToElement(this.element);
        button2.element.click(() => application.activateRoute('Drones'));
    }

    getElementString(){
        return '<div style="text-align: center;"></div>';
    }
}
