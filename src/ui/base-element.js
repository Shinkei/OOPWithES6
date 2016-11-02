import $ from 'jquery';

export class BaseElement{

    constructor(){
        this.element = null; // jQuery object
    }

    getElementString(){
        throw 'Please override getElementString in BaseElement';
    }

    createElement(){
        let s = this.getElementString();
        this.element = $(s);
    }

    appendToElement(el){
        this.createElement();
        el.append(this.element);
        this.enableJS();
    }

    enableJS(){
        componentHandler.upgradeElement(this.element[0]);
    }
}