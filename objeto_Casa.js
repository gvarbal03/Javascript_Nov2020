//Tarea Creación de objeto casa

const cocina = {
    nombre: 'cocina',
    piso: 'laminado',
    m2: 33,
    ventanas: true
}

const baño = {
    nombre: 'baño',
    piso: 'azulejo',
    m2: 15,
    ventanas: true
}

const garage = {
    nombre: 'garage',
    piso: 'concreto',
    m2: 20,
    ventanas: false
}


function muestraCasa (){
    console.log('La casa tiene ', this.nombre, ' con suelo ',this.piso,' de ',this.m2, ' m2')
}

//instancia del objeto
baño.muestraCasa = muestraCasa;

//Manda llamar la función instanciada
baño.muestraCasa()
