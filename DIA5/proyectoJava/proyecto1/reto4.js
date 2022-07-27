let myArray = [2,3,4,5];
let myArray2 = [1,2,4,3]

myArray.forEach((value, index) => {

    if(myArray.length == myArray2.length){
        myArray2[index] += value;
    }else{
        console.log("No tienen el mismo número de elementos");
    }

});

console.log(myArray2);

let myArray1 = [2,2,4,8];
let myArrayM = [1,2,1,4];

let myArraySuma = myArray1.map(
                    function(value, index)
                    {
                    if(myArray1.length == myArrayM.length){
                    return value + myArrayM[index];
                    }else{
                        console.log("No tienen el mismo número de elementos");
                    }
                });
console.log(myArraySuma);


let v = [1,2,4,5,6];

let filtrarPares = v.filter(
                        function(value, index)
                        {
                            return value % 2 == 0;
                        }

                        );
console.log(filtrarPares);

let arrayNumero = [2,3,2,4,5,8];
let arrayNum = arrayNumero.reduce(
                                function(accumulator, value, index)
                                {
                                    return accumulator + value;
                                });
console.log(arrayNum);