//Variables y constantes

/*Dato Javascript del día:
Reglas de nombres de variables en Javascript:
- El primer caracter debe ser una letra, un guión bajo (_), o un signo de dólar ($). Los caracteres subsiguientes pueden ser letras, dígitos, subrayados o signos de dólar.
- Los números no están permitidos como el primer caracter.
- Los nombres de variable no pueden incluir un operador matemático o lógico en el nombre. Por ejemplo, 2*algo o esto+eso;
- Los nombres en JavaScript no deben contener espacios.
- No debes usar ningún símbolo especial, como my#num, num%, etc.
*/

//Para declarar una variable solo se utiliza 'var'
var arbol="Roble";
var nombre="Guillermo";
var apellido= "Vargas";
var edad=30
var miNumero

console.log ("***Imprimir las variables***")
console.log(arbol, nombre, apellido, edad, miNumero)

//Cambiamos las variables
edad = true
miNumero=true

console.log ("\n***Imprimir cambio en las variables***")
console.log(arbol, nombre, apellido, edad, miNumero)

edad = "Casa"

// Constantes
const accesorio = "Laptop     "
console.log("\nConstante accesorio: ",accesorio)
console.log("Constante accesorio longitud: ",accesorio.length,"\n")


//Arrays
var dogs = ['Rex','Vincent','simba'];
//inserción de un valor en el arreglo
dogs[3]= true
console.log(dogs)


var miStack = [,];
console.log("\nArray vacío")
console.log(miStack)
console.log("\nmiStack es un Array? ",Array.isArray(miStack));

miStack.push(false);
miStack.push("arbol");
miStack.push(3);
console.log("\nInserción al array")
console.log(miStack)
miStack.splice(1,1)
console.log("\nSe elimina el indice 1 y el array se recorre")
miStack.push("nuevo valor");
console.log(miStack)



console.log(miStack.pop())
//console.log(miStack.shift())


// Usar NULL en variables
var emptyVariable = null
console.log("\nVariable con valor NULL: ",emptyVariable)

var vaciaVariable
console.log("\nVariable sin valor: ",vaciaVariable)



var myArray = [0,1,2,3,4,5,6,7,8,9]
var splice = myArray.splice(3,5)

console.log(splice)
console.log(myArray)
/*
var num =0;
const ArrayPI = [3,"tres",1,4,1,5,9,"."]
ArrayPI.push("fin");
console.log ("\n el número TT es: ",ArrayPI)
ArrayPI[0] = num;
console.log ("\n el número TT2 es: ",ArrayPI)

num = ArrayPI;
console.log ("\n el número TT3 es: ",num)*/