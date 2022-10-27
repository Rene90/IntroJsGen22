console.log('Hola desde el script.js')

//Funciones
//Las funciones son un conjunto de instrucciones que podemos LLAMAR cuando sean requeridas en un determinado momento de nuestro código

//Sintáxis básica de una función
function miPrimeraFuncion(){
    // Código a ejecutar
}

//Sintáxis de función con parametros
// function miFuncionConParametros(param1, param2, param3){
    //Código a ejecutar
    //Podemos acceder a los parametros, param1, param2, param3
// }

//Para llamar a función, tenemos que invocarla, es muy simpre invocar una función, dado que, solo tenemos que escribir su nombre, pasandole los parámetros si es necesario.
// miPrimeraFuncion()
// miFuncionConParametros('texto', 23, true, 'cuatro parámetro')

//Función tradicional
function saludar(){
    console.log('Hola mundo🎉')
}

saludar()

function saludarAlumno(nombre){
    console.log('Hola,' +nombre+ ' desde mi funcion saludarAlumno');
}

saludarAlumno('Martin Bernabe')
saludarAlumno('Alen Orlando')
saludarAlumno('Constanza Rojas')


//Una función que reciba dos parametros
// La función se debe llamar verNumeros
// Y se debe imprimir en consola los número que envie por parámetro

function verNumeros(num1, num2){
    console.log('tradicional', 'Número 1 es: ', num1)
    console.log('tradicional', 'Número 2 es: ', num2)
}
verNumeros(16,12)

//Función flecha, arrow functions
// Sintáxis básica () => {} 
// La arrow function tiene que estar asociada a una variable y como buena práctica, declararlas las variables const
const verNumerosFlecha = (num1, num2) => {
    console.log('arrow function', 'Número 1 es: ', num1)
    console.log('arrow function', 'Número 2 es: ', num2)
}

verNumerosFlecha(16, 12)


//RETURN
//Es una palabra reservada (RETURN), me sirve para indicar DONDE FINALIZA NUESTRA FUNCIÓN Y/O QUÉ ES LO QUE DEBE REGRESAR O RETORNAR
//Todo lo que pongamos después del RETURN, NO SE VA A EJECUTAR EN EL CÓDIGO

const sumar = (num1, num2) => {
    const resultado = num1 + num2
    return resultado
    console.log('---->','estoy antes del return')
}

const resultadoFuncion = sumar(20, 30)

console.log(resultadoFuncion);


//Crear una función que retorne la multplicación de dos números
const multiplicar = (num1, num2) => {
    const resultado = num1*num2
    return resultado
}

const resultadoTotal = multiplicar(10,5)
console.log(resultadoTotal);


const sumaIncluyeReturn = (num1, num2) => {
    const resultado = num1 + num2
    return resultado
}
console.log(sumaIncluyeReturn(30, 30))

//OTRO ATRIBUTO DE LAS ARROW FUNCTIONS
//En las funciones flechas, si la declaración queda en una sola línea, el return es implicito, es decir, NO SE NECESITA ESCRIBIR
const sumaReturnImplicto = (num1,num2) => resultado = num1 + num2
console.log(sumaReturnImplicto(60,60))


const imprimirEnConsola = (valor, valor2, valor3, valor4) => {
    return console.log(valor, valor2, valor3, valor4)
}

//Llamar una función dentro de una función
const resta = (num1, num2) => resultado = num1 - num2
console.log(resta(30, 40))
// console.log(-10)

imprimirEnConsola('ejejejejje', 12, true, {name: "patricio"})
imprimirEnConsola(resta(30, 40))

//Hacer una función que retorne el área de un triángulo
// va a recibir 3 parámetros, va retornar 2 resultados
const areaTriangulo = (base, altura, medida) => {
    const area = (base * altura) / 2
    const triangulo = {
        area: area,
        medida: medida
    }
    return (triangulo)
}

const resultadoTriangulo = areaTriangulo(20, 30, 'cm')
console.log(resultadoTriangulo.area, resultadoTriangulo.medida)

// VAR -> ALCANCE GLOBAL
//LET -> ALCANCE LOCAL, SE PUEDE MODIFIFICAR
//CONST -> ALCANCE LOCAL, NO SE PUEDE MODIFICAR A EXCEPCIÓN CON LOS ARREGLOS