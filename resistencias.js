
//Tarea problema reisstencias
//var miResistencia {banda1, banda2, multiplicador, Tolerancia}

function valor(a){
    switch(a){
        case 'black':
            a = 0;break;
        case 'brown':
            a = 1; break;
        case 'red':
            a = 2;break;
        case 'orange':
            a = 3;break;
        case 'yellow':
            a = 4;break;
        case 'green':
            a = 5; break;
        case 'blue':
            a = 6;break;
        case 'violet':
            a = 7;break
        case 'gray':
            a = 8;break;
        case 'white':
            a = 9;break    
        default:
            a = 'XX'
    }
    return a;
}

function multiplicador(a){
    switch(a){
        case 'black':
            a = '.';break;
        case 'brown':
            a = '0'; break;
        case 'red':
            a = '00';break;
        case 'orange':
            a ='000';break;
        case 'yellow':
            a = '0,000';break;
        case 'green':
            a = '00,000'; break;
        case 'blue':
            a = '000,000';break;
        case 'violet':
            a = '0,000,000';break
        case 'gray':
            a = '00,000,000';break;
        case 'white':
            a = '000,000,000';break    
        default:
            a = 'XX'
    }
    return a;
}

function resistencia (color1, color2, color3){
    return (console.log(color1,' | ',color2, ' | ', color3, ' = ',valor(color1),valor(color2),multiplicador(color3),'ohms'))
}

var rest1 = new resistencia ('violet','white','blue')


