import { Punto, Triangulo } from "./punto";
Triangulo


let coordenadas = new Punto(1,3);

console.log(coordenadas.toString());

console.log(coordenadas.distanciaAlOrigen());

let coordenadaNueva = new Punto(2,5);
console.log(coordenadas.calcularDistancia(coordenadaNueva));

console.log(coordenadas.calcularCuadrante());

let p1 = new Punto(2,4);
let p2 = new Punto(-2,-4);
let p3 = new Punto(1,3);
let p4 = new Punto(2,0);
let p5 = new Punto(0,12);

let arr:Punto[] = [p1,p2,p3,p4,p5];
console.log(coordenadas.calcularMasCercano(arr));

let tri = new Triangulo(p1,p3,p4);


console.log(tri.calcularLongitudLados());