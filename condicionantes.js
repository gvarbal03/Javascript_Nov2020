var texto;
texto = "Servidor On"

if(texto == "Servidor Off"){
    console.log("Prueba exitosa")
}
else{
    console.log("Prueba fallida")
}

var num = 48

if (num===50) {
    console.log("Valor", num)
    console.log("Número es menor")
}else{
    console.log("Lado B")
}


var num2 = 48
var foo = 7
var bar = 5

if (num<= num2 && foo > bar){
    console.log("pass and")
}
if (num< num2 || foo > bar){
    console.log("Pass or")
}

// Ejmeplo con IF con un FALSE

var notTrue = false;
if(!notTrue){
    console.log("El valo es: ", notTrue)
}
if(notTrue){
    console.log("El valo es: ", notTrue)
}


//Ejemplo switch

var rango = "78879"

switch (rango) {
    case "Soldado razo":
            console.log(rango,"no autorizado")
        break;
    case "Comandante":
            console.log(rango,"Necesita autorización")
        break;
    case "Capitan":
            console.log(rango,"Autorización requerida")
        break;
    case "General":
            console.log(rango,"Usuario autorizado")
        break;
    default:
            console.log(rango,"usuario no autorizado")
            break;
    }




    var opciones = 43

    switch (opciones) {
        case 2 :
                console.log(opciones,"no autorizado")
            break;
        case 43 :
                console.log(opciones,"Necesita autorización")
            break;
        case 54 :
                console.log(opciones,"Autorización requerida")
            break;
        case "Error":
                console.log(opciones,"Usuario autorizado")
            break;
        default:
                console.log(opciones,"usuario no autorizado")
                break;
        }


// Funciones en javascript

function myFunction (myArgument1,myArgument2){
    var resultado
    resultado = myArgument1 + myArgument2
    return resultado
}

console.log("El resultado de la función es: ",myFunction(5,8))


function myFunction (myArgument1,myArgument2){
        return myArgument1+myArgument2
}

console.log("El resultado de la función2 es: ",myFunction(5,8))