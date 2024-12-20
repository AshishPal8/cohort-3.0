"use strict";
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user = new Manager("Ashish", 22);
console.log(user.name);
