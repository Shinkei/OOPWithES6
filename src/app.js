class Drone{
    constructor(id, name){
        console.log('in Drone Constructor');
        console.log(id + ' ' + name);
        this._id = id;
        this._name = name;
    }

    static getCompany(){
        console.log('in getCompany');
    }

    fly(){
        console.log('Drone ' + this.id + ' is fliying');
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
}

let drone = new Drone(123,'perro');
Drone.getCompany();
drone.fly();
// with the get method, you can access the property without parenthesis
console.log('drone: ' + drone.id + ' ' + drone.name);
// with the set method you can assign a value to the property id (tener en cuenta que el nombre real de esta variable es _id)
drone.id = 987;
console.log('drone: ' + drone.id + ' ' + drone.name);
