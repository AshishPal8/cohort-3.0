interface People {
  name: string;
  age: number;
}

class Manager implements People {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new Manager("Ashish", 22);
console.log(user.name);
