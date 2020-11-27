var miCoche = new Object()

miCoche.marca = 'Ford'
miCoche.modelo = 'Mustang'
miCoche.anio = 1970
miCoche.color = 'Rojo'

//console.log(miCoche.llantas=4)
//console.log(miCoche)
//console.log(miCoche.marca)
//console.log(miCoche['marca'])


var objetoExe = new Object();


var cadena = 'String'
var randome = Math.random();
var obj = new Object

objetoExe.type = "referencia a propiedades de punto"
objetoExe['fecha']= 'Referencia a corhhetes y espacios'
objetoExe[cadena] = 'Esta es referencia a una variable string'
objetoExe[randome] = 'Referencia a una variable númerica'
objetoExe[obj] = 'Referencia a otro objeto'
objetoExe [''] = 'Cadena vacía'

//console.log (objetoExe)

//console.log(Object.getOwnPropertyNames(objetoExe))
console.log(Object.keys(objetoExe))

function mostrarProps (obj, objName){
    var resultado = '';
    //Notación para batch y en consola ejecución de for
    for (var i in obj){
        if(obj.hasOwnProperty(i)){
            resultado += '${objName}.${i} = ${obj [i]}\n';
        }

    }
    return resultado;

}

console.log(mostrarProps(objetoExe,'objetoExe'))


