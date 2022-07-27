"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.toString = function () {
        var titulos = "";
        for (var i = 0; i < this.books.length; i++) {
            titulos += "Book" + (i + 1) + "\n" + this.books[i].toString() + "\n";
        }
        return titulos;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var authores = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                authores.push(this.books[i]);
            }
        }
        return authores;
    };
    return Library;
}());
exports.Library = Library;
