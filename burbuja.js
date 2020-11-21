//Algoritmo de burbuja, el más ligero sube, es decir llevar primero el número más pequeño hasta llegar al final del arreglo

function bubbleSort (items){
    var elementos = items.length

    for (var i =(elementos - 1); i > 0; i-- ){
        console.log("Index i : ", i)
        for (var j = (elementos-i); j>0; j--){
            console.log("Index j : ", j)
            if (items[j] < items[j-1]){
                //refactor aquí
                [items[j], items [j-1] ]= [items[j-1],items[j]]//hace los cambios
                //7,9 = 9,7
            }
        }
    }
    return items
}



var array = [7,32,91,15,17,25,0,40,8,234,-4]
//var array = [8,5,9]
console.log (array)

//Ordenar un Array
console.log (bubbleSort(array))

