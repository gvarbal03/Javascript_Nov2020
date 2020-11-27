const Manager = {
    name: 'Guillermo',
    company: 'Telefonica',
    edad : 32,
    job: 'Software Engineer'
}

const Interno = {
    name: 'Paco',
    edad : 21,
    job: 'Ir por los cafes del Starbucks'
}

function sayHi(){
    console.log ('Hola mi nombre es ', this.name)
}

function miEdad(){
    console.log('Tengo ', this.edad, 'años')

}


//Referencia fuera del objeto
Manager.sayHi = sayHi;
Manager.miEdad = miEdad;
Interno.sayHi = sayHi;

Manager.sayHi() 
Manager.miEdad()
Interno.sayHi()
