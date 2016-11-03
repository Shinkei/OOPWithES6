import {Page} from '../framework/page.js';
import {DataTable} from '../ui/data-table.js';
import {application} from '../app.js';

export class CarsPage extends Page {
    
    constructor() {
        super('Cars');
    }
    
    createElement() {
        super.createElement();
        
        let headers = 'License Make Model Miles'.split(' ');
        let dataTable = new DataTable(headers, application.dataService.cars);
        dataTable.appendToElement(this.element);
    }
    
    getElementString() {
        return '<div style="margin: 20px;"><h3>Cars</h3></div>';
    }
}