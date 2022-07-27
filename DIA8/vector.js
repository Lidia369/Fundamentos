"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            var longitud = (Math.round(Math.random() * k));
            this.elements.push(longitud);
        }
    }
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        var suma = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            suma.elements[i] = this.elements[i] + v1.elements[i];
        }
        return suma;
    };
    Vector.prototype.subs = function (v1) {
        var resta = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            resta.elements[i] = this.elements[i] - v1.elements[i];
        }
        return resta;
    };
    Vector.prototype.mult = function (v1) {
        var multiplicar = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            multiplicar.elements[i] = this.elements[i] * v1.elements[i];
        }
        return multiplicar;
    };
    Vector.prototype.multNumber = function (n) {
        var multiN = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            multiN.elements[i] = this.elements[i] * n;
        }
        return multiN;
    };
    return Vector;
}());
exports.Vector = Vector;
