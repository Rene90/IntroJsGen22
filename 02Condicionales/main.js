console.log('hola desde main.js');

//Estructura de if y else
//Creando un condicional
// La condición va a recibir un valor booleano
//true, false

// linea por linea
// if(condicion){
//      si la condición se cumple -> es true/verdadero -> pasa lo de este bloque
// } else {
//     si la condición NO se cumple -> es false/falso -> pasa lo este bloque
// }

/* Comentario para multineas

Operadores relacionales
Los operadores relaciones siempre devolveran un valor booleano, true o false
nos ayudan a comparar dos valores
*/

// Tres formas de declarar variables
// var nombre // alcance global
// let edad // alcance local, si se puede re asignar
// const nacionalidad  // alcance local, no se puede re asignar (excepción con los arreglos)


{
    // bloque 1 - casa
    
    {  
        let nombre = 'Daniel'
        // console.log('habitación', nombre);
        //bloque 1.1 - baño
    }

    {
        // console.log('cocina', nombre);
        //bloque 1.2 - cocina
    }
    // console.log(nombre);
}


// main.js -> no estoy dentro de ningun bloque
// console.log('edificio', nombre);

// Operadores relacionales

// == : los valores son iguales
// != : si los valores son diferentes
// > : mayor que
// < : menor que
// >= : mayor o igual que
// <= : menor o igual que
// !== : los valores son diferentes, y su tipo de dato de diferente
// ===: los valores son iguales y tambien su tipo de dato

const numero1 = 50
const numero2 = 50

// numero1 != numero2 -> 10 es diferente de 5 => Si

// la condición del if recibie el true
if(numero1 <= numero2){
    // bloque verdadero
    console.log('bloque 1 ❤️',);
} else {
    // bloque false
    console.log('bloque 2👍🏻');
}




const numero3 = 40 //entero
const numero4 = '40' //string

// == : ¿valores iguales?
// ===: ¿valores iguales y tipo de dato igual?
if(numero3 === numero4){
    // bloque verdadero
    console.log('bloque 1');
    console.log('lo valores son iguales❤️');
} else {
    // bloque falso
    console.log('bloque 2');
    console.log('los valores son diferentes👍🏻');
}


let nombre1 = 'Santiago'
let nombre2 = 'Fabian'

if(nombre1 === nombre2){
    // si la condición se cumple
    // bloque verdadero - true
    console.log(' ❤️');
} else {
    // bloque falso
    console.log('👍🏻');
}

// // if anidados
// if(condicion1){
//     // si la condicion1 es true se activa este bloque
//     //bloque verdadero
// } else if (condicion2){
//     // si la condicion1 es false
//     // si la condicion2 es true se activa este bloque
// } else if(condicion3){
//     // si la condicion1 es false
//     // si la condicion2 es false
//     //si la condicion3 es true se active este bloque
// } else {
//      // si la condicion1 es false
//     // si la condicion2 es false
//     // si la condicion3 es false
//     // se cumple el else, se activa este bloque
// }

let dia = 'soleado'
let hora = '6:00'

if(dia === 'nublado'){
    console.log('no salga, el día esta nublado❤️');
} else if (hora === '5:00'){
    console.log('estás a tiempo de correr, sale ahora!!!👍🏻');
} else {
    console.log('ya no puedes correr🎉');
}

//Operadores lógicos (NOT, AND Y EL OR)
//validar condiciones de N variables

//OR -> es español es o
// ||
//En un negoció se pueda pagar con sencillo o tarjeta de debito
// con que una condición sea true, va a pasar

// Objeto
let persona = {
    name: 'Daniel',
    efectivo: false,
    debito: true,
    edad: 18,
    lleva_carnet: true
}

if(persona.efectivo == true || persona.debito == true){
    console.log('la persona puede comprar');
} else {
    console.log('la persona no puede comprar en el negocio');
}

// AND -> es español es y
// todas las condiciones tiene que ser true para que pase
// se tiene que cumplir todas las condiciones para que pueda pasar
// &&

//En un negoció se pueda pagar con sencillo o tarjeta de debito
//pero si quierer comprar alcohol tienes
// ser mayor o igual a 18 años Y
// tener carnet

// == -> comparando el valor 
// === -> comparando el valor y el tipo de dato
// console.log('------>', '10' == 10);

// true == true -> este valor es verdadero

if(persona.edad >= 18 && persona.lleva_carnet === true){
    console.log('la persona puede comprar alchol: ' , persona.name);
} else {
    console.log('no puedes comprar alcohol:', persona.name);
}

if((persona.debito === true || persona.efectivo === true) && persona.edad >= 18 && persona.lleva_carnet === true){
    console.log('la persona puede comprar alchol: ' , persona.name);
} else {
    console.log('no puedes comprar alcohol:', persona.name);
}

//NOT
//Cambiar al opuesto del valor booleano
// !

let estaVivo = false
// !estaVivo = !true = false
if(!estaVivo){
    // bloque verdadero
    console.log('Esta muerto');
} else {
    // bloque falso
    console.log('Esta vivo 🎉');
}

//Operadores ternarios
// condiciones que devuelvan false o true, de manera más simple
// mejorando la sintaxis

const personaEdad = 17

if(personaEdad >= 18){
    console.log('ES MAYOR DE EDAD');
} else {
    console.log('Es menor de edad');
}

// condicion  ? true : false
personaEdad >= 18 ?  console.log('ES MAYOR DE EDAD') :  console.log('Es menor de edad');



//Declarando la variable
let auto = 0
console.log('auto es', auto);
// Undefined es una variable que no se le asignado un valor

//Falsy
//undefined -> false si lo encierro en una condicional
//null -> false si lo encierro en una condicional
//0 -> false si lo encierro en una condicional
//NaN -> false si lo encierro en una condicional
// "" ->  false si lo encierro en una condicional

//Truthy
// true
//{} -> true si lo encierro en una condicional
//[] -> true si lo encierro en una condicional
// 42 -> true si lo encierro en una condicional
//"0", "jejejejeje" -> true si lo encierro en una condicional
// "false" -> true si lo encierro en una condicional

if(auto){
    //bloque verdadero
    console.log('verdadero');
}else{
    //bloque falso
    console.log('falsoooo');
}

const pelicula = prompt('Ingresa una pelicula')

if(pelicula){
    //bloque verdadoer
    alert('ingresaste', pelicula);
} else {
    alert('no ingresaste nada');
}