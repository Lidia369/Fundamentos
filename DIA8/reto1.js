"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, addres) {
        this.name = name;
        this.age = age;
        this.addres = addres;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    Person.prototype.getAddress = function () {
        console.log(this.addres);
    };
    Person.prototype.setAddress = function (addres) {
        this.addres = addres;
        console.log(addres);
    };
    return Person;
}());
exports.Person = Person;
