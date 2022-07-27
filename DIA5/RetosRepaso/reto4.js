// Numeros ordenados
let numOrdenados = [9,16,4,58,34];
console.log(numOrdenados.sort());

let arr = [30, 8, 70, 82, 37];
function ordenar () {
    let l = arr.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arr[ j ] > arr[ j + 1 ] ) {
          [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
        }
      }
    }
  console.log(arr); 
  };
  
  ordenar(arr);
  

// el de las obejas 

let listaObejas = [{
                     "nombre": "obejan1",
                     "color": "rojo"
                    },

                    {
                     "nombre": "obeja2",
                     "color": "blanco"
                    },

                    {
                     "nombre": "obeja3",
                     "color": "marron"
                    },

                    {
                     "nombre": "obeja4",
                     "color": "azul"
                    }
]

function buscar(listaObejas) {
          for(let i = 0; i<listaObejas.length;i++){

                if(listaObejas[i].color == "rojo" && listaObejas[i].nombre.includes("n", "a") ){
                  console.log (listaObejas[i].nombre + " tiene el pelo rojo o su nombre tiene la letra n y la a")
              
              }else{
                  console.log (listaObejas[i].nombre + " no tiene el pelo rojo o su nombre tiene la n ni la a")
                  
              }

          }
};

buscar(listaObejas);

// // let contraseña

let contraseña = "cOdenotch22@";

let segura = true;
num = false
may = false
min = false
car = false

//let caraEsp = "/[ ~!@#$%^&*()_+`-={}[]:";'<>?,.]/";
// Este es con el que tengo problemas con los caracteres especiales

function esValida(contraseña) {
  

for(let i = 0; i<contraseña.length;i++){

  if (contraseña.length >=8){
    min = true
  }
  if(contraseña.match (/[a-zA-Z]/)){
    may = true


  // }if (contraseña.match(/[ ~!@#$%^&*()_+`-={}[]:";'<>?,.]/))
  // {
  //   car = true

  if(contraseña.match(/[\d]/)){
     num = true
  }
  }
}
//&& (car == true) 
 if ((min == true) && (may == true) && (num == true)){
  console.log("Contraseña valida")

}else {
  console.log("Contraseña no valida")
}
}
esValida(contraseña);











