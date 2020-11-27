function Car (marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;//this hace referencia al objeto sobre el que etsamos trabajando
}

console.log(Car)

var micoche = new Car ('Seat', 'Leon', 2020)
var otrocohe = new Car ('Nisan', 'Platina', 1980)
var elotrocohe = new Car ('Nisan', 'Platina', 1980)

console.log (micoche)
console.log (otrocohe)
console.log (elotrocohe)

function Persona (nombre,edad,genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;

}

var maria = new Persona ('Maria',20,'Mujer')
var marifer = new Persona ('Maria Fernanda',27,'Mujer')



function auto (marca, modelo, anio,owner){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.owner = owner;
}

var car54 = new auto('Seat','Cupra',2019,maria)
var car52 = new auto('VW','Bocho',2019,marifer)

car54.color = 'Azul Marino'

console.log (car54)
console.log (car52)