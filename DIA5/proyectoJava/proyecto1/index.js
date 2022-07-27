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

module.exports={sumArrow, resArrow, mulArrow, diArrow}