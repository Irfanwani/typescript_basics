"use strict";
class Employee {
    constructor(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    get empid() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
    getNamewitaddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
let john = new Employee(1, "irfan", "Arahama kashmir");
john.empId = 100;
console.log(john.empid);
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
