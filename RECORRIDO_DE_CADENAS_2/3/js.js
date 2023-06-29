let cadena ="Javascript es genial";
let espacio=0
for (let index = 0; index < cadena.length; index++) {
    if (cadena[index]==" ") {

        espacio++
        
    }
}

console.log("Contiene",espacio,"Palabras");