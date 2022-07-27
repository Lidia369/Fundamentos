"use strict";
exports.__esModule = true;
var punto_1 = require("./punto");
punto_1.Triangulo;
var coordenadas = new punto_1.Punto(1, 3);
console.log(coordenadas.toString());
console.log(coordenadas.distanciaAlOrigen());
var coordenadaNueva = new punto_1.Punto(2, 5);
console.log(coordenadas.calcularDistancia(coordenadaNueva));
console.log(coordenadas.calcularCuadrante());
var p1 = new punto_1.Punto(2, 4);
var p2 = new punto_1.Punto(-2, -4);
var p3 = new punto_1.Punto(1, 3);
var p4 = new punto_1.Punto(2, 0);
var p5 = new punto_1.Punto(0, 12);
var arr = [p1, p2, p3, p4, p5];
console.log(coordenadas.calcularMasCercano(arr));
var tri = new punto_1.Triangulo(p1, p3, p4);
console.log(tri.calcularLongitudLados());
