"use strict";
exports.__esModule = true;
exports.Triangulo = exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        return "Cordenada X - " + this.x + "\n" + "Cordenada Y - " + this.y;
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.distanciaAlOrigen = function () {
        return Math.sqrt((Math.pow(this.x, 2)) + (Math.pow(this.y, 2)));
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        return Math.sqrt((Math.pow(otroPunto.x - this.x, 2)) + (Math.pow(otroPunto.y - this.y, 2)));
    };
    Punto.prototype.calcularCuadrante = function () {
        var cuadrante = 0;
        if (this.x == 0 && this.y == 0) {
            cuadrante = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            cuadrante = 3;
        }
        else {
            cuadrante = 4;
        }
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var punto = new Punto(0, 0);
        var cercano = this.calcularDistancia(puntos[0]);
        var cerca = 0;
        punto = puntos[0];
        for (var i = 1; i < puntos.length; i++) {
            cerca = this.calcularDistancia(puntos[i]);
            if (cerca < cercano) {
                cerca = cercano;
                punto = puntos[i];
            }
        }
        return punto;
    };
    return Punto;
}());
exports.Punto = Punto;
var Triangulo = /** @class */ (function () {
    function Triangulo(v1, v2, v3) {
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var longitud = [];
        longitud.push(this.v1.calcularDistancia(this.v2), this.v2.calcularDistancia(this.v3), this.v3.calcularDistancia(this.v1));
        return longitud;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
