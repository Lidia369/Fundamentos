// let precioNeto = 1500;
let precio = 1500;
let enEspana = true;



if (precio >= 2000 && enEspana == true){

    ( precioBruto = precio * 100 / 16)

}else if (precio < 2000 && enEspana == true){

    ( precioBruto = precio * 100 / 10)

}else if (precio >= 2000 && enEspana == false){

    ( precioBruto = (precio * 100 / 16)) *100 /10

}else if (precio < 2000 && enEspana == false){

    ( precioBruto = (precio * 100 / 10)) *100 /10
}

console.log(precioBruto);

