import { Vector } from "./vector";

let prueba:Vector = new Vector(4,20);

prueba.print();

let v1:Vector = new Vector(4,20);
let v2:Vector = new Vector(0,0)

v2 = prueba.add(v1)
v2.print();

let v3:Vector= new Vector(0,0);

v3 = prueba.subs(v1);
v3.print();

let v4:Vector = new Vector(0,0);

v4 = prueba.mult(v1);
v4.print();

let v5:Vector = new Vector(0,0);

v5 = prueba.multNumber(4);
v5.print();

