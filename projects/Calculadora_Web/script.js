let result = document.getElementById('result'); // tomamos el valor result del documento
let todo = document.querySelector('body'); // tomamos el valor body del documento

const operaciones = ['+', '-', '*', '/'];

function sub(x) { // funcion para cada numero y operacion de calculo
    if (result.innerText === "0") { // si el texto es 0 entonces el valor inicia con el primer numero que se escriba
        result.innerText = x 
    } else if (result.innerText === '0' && x === '/') {
        result.innerText = '0'
    } else if (result.innerText.includes('/') && x === '/' || result.innerText.includes('*') && x === '*' || 
    result.innerText.includes('-') && x === '-' || result.innerText.includes('+') && x === '+' || 
    result.innerText.includes('.') && x === '.') { // si el texto incluye culalquier operacion de calculo, esta no se volvera a repetir
        result.innerText.slice(-1)
    } else if (result.innerText === 'Error!' || result.innerText === 'Infinity') { // si el texto es error o infinito, tomara el primer numero que se escriba
        result.innerText = ''
        result.innerText += x;
    } else { // de lo contrario se concatena el contenido del texto con los nuevos valores agregados, ya sean numeros u operaciones
        result.innerText += x;
    }

}
function blank() { // funcion para inicializar el texto en 0
    result.innerText = '0'
}
function borrar() { // funcion para borrar 1 elemento del final
    if (result.innerText.length === 1) { // no borra si el valor del texto es 0
        result.innerText = '0'
    } else {
        result.innerText = result.innerText.slice(0, -1)
    }
}

function percent() { // funcion para calcular el porcentaje
    result.innerText = result.innerText / 100
}

function raiz() { // funcion para calcular la raiz cuadrada con Math
    result.innerText = Math.sqrt(result.innerText)
    
}

function igual() { // funcion para evaluar el string y en dependencia de la operacion de calculo es que dará el resultado
    if (result.innerText.endsWith('/') || result.innerText.endsWith('*') || result.innerText.endsWith('-') || result.innerText.endsWith('+')) { // si el texto termina con alguna de las operaciones de calculo entonces dará error dado que no se podrá calular nada
        result.innerText = 'Error!';
    } else {
    let resultadoFinal = eval(result.innerText); // evalúa el string y da el resultado
    result.innerText = resultadoFinal;
}
}

// SECCION PARA EVENTO CON LAS TECLAS DEL TECLADO
// objeto con los diferentes valores de codigo de las teclas del 0 al 9 y las operaciones de calculo
const keys = {96:'0', 97:'1', 98:'2', 99:'3', 100:'4', 101:'5', 102:'6', 103:'7', 104:'8', 105:'9', 107:'+', 109:'-', 106:'*', 110:'.', 111:'/'}

todo.addEventListener('keydown', function(event)  { // se le añade un evento al apretar una tecla al body ya que es el que contiene la calculadora
    console.log(event.keyCode) // se muestra en consola los valores de las teclas que se aprietan
    for (const key in keys) { // bucle for in para cada valor de tecla
        if (event.keyCode == key) { // si el valor de tecla presionada es igual a la key
            if (result.innerText === '0') { // si el texto es 0
                result.innerText = keys[key] // se inicializa el texto con el valor de la tecla
            } else if (result.innerText === 'Error!' || result.innerText === 'Infinity') { // si el texto es error o infinito, tomara el primer numero que se escriba 
                result.innerText = keys[key]
            } else if (result.innerText.includes('/') && keys[key] === '/' || result.innerText.includes('*') && keys[key] === '*' || 
            result.innerText.includes('-') && keys[key] === '-' || result.innerText.includes('+') && keys[key] === '+' || 
            result.innerText.includes('.') && keys[key] === '.') { // si el texto incluye culalquier operacion de calculo, esta no se volvera a repetir
                result.innerText.slice(-1)
            } else {
                result.innerText += keys[key];  // de lo contrario se concatena el valor del texto con el valor de la tecla
            }
            
        }
    }
    if (event.keyCode === 13) { // si se aprieta enter/intro se llama a la funcion igual()
        igual()
    }
    if (event.keyCode === 8) {
        borrar()
    }
})