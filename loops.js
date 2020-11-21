//Ciclo For
//var i;
for (var i=0;i<3;i++){
    console.log("Valor: ",i)
}



var arreglo = ['A','B','C']
var texto = "54678"
//length solo se utiliza para las cadenas

console.log (arreglo.length)
console.log (texto.length)

for (var i=0; i<arreglo.length;i++){
    console.log("El elmento del arregloes: ",arreglo[i], " con el índice ", i)
}


//Loop While

var cervezas = 99;
while (cervezas>0){
    console.log("Aún hay "+ cervezas + " en la hielera")
    cervezas-=1

}