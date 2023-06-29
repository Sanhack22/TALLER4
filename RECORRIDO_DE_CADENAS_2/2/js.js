let cadena ="Somos SENA";
let contador=0;
for (let index = 0; index < cadena.length; index++) {
    console.log(cadena[index]);    
    if (cadena[index]=="o") {
        contador++
        
    }
}
console.log("Contiene",contador,"letras 'O'");

if (cadena.includes("E")) {

    console.log("Contiene la letra 'E'");
    
}