let cruzar = true;
let color = "verde";
let coche = false;

if(color == "verde" && coche==false){
    cruzar = true;
    console.log("puedes pasar");
}else{
    cruzar = false; 
    console.log("No puedes pasar");
}

cruzar = (color == "verde" && coche == false) ? "puedes pasar" : "no puedes pasar"