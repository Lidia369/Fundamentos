let num1= 9;
let num2 = 4;

let pro =  num1 * num2;

console.log(pro);


let stri = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus mattis vehicula consequat. Proin dapibus nuncquam, nec dictum erat feugiat vitae."
console.log(stri.length);

console.log(stri.replace(/ /g, ""));





let proEsmayor = false;

if (pro > 30 ){
    proEsmayor = true
}

console.log(proEsmayor);


// Con condiconales y con .includes
let estaAmet = false;

if (stri.includes("amet")){

    estaAmet = true;
}


console.log(estaAmet);
console.log(stri.includes("amet"));