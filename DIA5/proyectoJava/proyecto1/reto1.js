function calculadora(operacion, op1,op2=0){

    if(operacion == "+"){
       
        return op1 + op2
    }else if (operacion == "-"){

        return op1 - op2
    }else if (operacion == "*"){

        return op1 * op2
    } else if (operacion == "/"){

        return op1 / op2
    }


}

console.log(calculadora("+", 10, 5));
console.log(calculadora("+", 10));
console.log(calculadora("-", 10, 5));
console.log(calculadora("-", 10 ));
console.log(calculadora("*", 10, 5));
console.log(calculadora("*", 10));
console.log(calculadora("/", 10, 5));
console.log(calculadora("/", 10));

//SUMA ARROW
let sumArrow = (a, b) => {
    
    return a + b 
  }

console.log(sumArrow(8, 2) + " suma funcion ARROW");

let resArrow = (c, d) => {
    
    return c - d
  }

console.log(resArrow(10, 2)  + " resta funcion ARROW");


let mulArrow = (c, d) => {
    
    return c * d
  }

console.log(mulArrow(10, 2)  + " multi funcion ARROW");


let diArrow = (c, d) => {
    
    return c / d
  }

console.log(diArrow(10, 2)  + " div funcion ARROW");



let calculadoraArrow = (operador, a, b) => {

    if(operador == "+"){

        return a + b
    }else if (operador == "-"){

        return a - b
    }else if (operador == "*"){

        return a * b
    } else if (operador == "/"){

        return a / b
    }


}

console.log(calculadoraArrow ("+", 20, 2) + " Calculadora arrow");
console.log(calculadoraArrow ("-", 20, 2) + " Calculadora arrow");
console.log(calculadoraArrow ("*", 20, 2) + " Calculadora arrow");
console.log(calculadoraArrow ("/", 20,2) + " Calculadora arrow");



let sumaArrow  = (operando1,operando2) => operando1+operando2;
console.log(sumaArrow(3, 6) + " Arrow mas simple");


let restaArrow  = (operando1,operando2) => operando1-operando2;
console.log(restaArrow(3, 6) + " Arrow mas simple");


let multArrow  = (operando1,operando2) => operando1*operando2;
console.log(multArrow(3, 6) + " Arrow mas simple");


let divArrow  = (operando1,operando2) => operando1/operando2;
console.log(divArrow(3, 6) + " Arrow mas simple" );




//Multiplicar el mismo numero con una funcion arrow
//let mult = x => x * x;
//console.log(mult (4));

