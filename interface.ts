export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

let user: User = {name: 'Irfan', id: 1, email: ""}

interface Employees extends User {
    salary: number;
}

let employee: Employees = {name: 'Irfan', id: 1, email: '', salary: 200000};

export interface Login {
    Login(): User;
}
