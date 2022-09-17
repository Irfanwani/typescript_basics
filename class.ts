import { Login, User } from "./interface";

class Employee implements Login {
  // ! mark after the variable name is used when we don't initialize the variable and still don't want to get the error
  id!: number;

  name!: string;

  address!: string;

  constructor(id: number, name: string, address: string) {
    this.address = address;
    this.id = id;
    this.name = name;
  }

  Login(): User {
    return {id: 1, name: 'Irfanwani', email: 'my@email'}
  }

  get empid(): number {
    return this.id;
  }

  set empId(id: number) {
    this.id = id;
  }

  getNamewitaddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

let john = new Employee(1, "irfan", "Arahama kashmir");
john.empId = 100;
console.log(john.empid);

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }
}

