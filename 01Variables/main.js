//Ejemplo de console.log
console.log("Hola Mundo");
console.log("Esta es la segunda linea");
//console.log("Hola",prompt("Dime tu nombre"));

//Variables

//Javascript no declara el tipo de variable, 
//int rolandoEdad   AQUI SE DECLARA EL TIPO DE VARIABLE EN OTRO LENGUAJE
//rolandoEdad = 17 NO ES NECESARIO EN JS
var rolandoEdad = 17;
var numero1 = 3.1416;
var rolandoNombre = "Rolando";
var nombreProf = "Rene";
//En este caso puedo imprimir en consola una variable
console.log(rolandoNombre,rolandoEdad);
//variable puede cambiar de valor
rolandoEdad=18;
console.log(rolandoNombre,rolandoEdad);

const senseiLunes = "Rene";
const edadSensei =31;
// const para variables que no cambiaran o que seran constantes
//senseiLunes ="Daniel" ME GENERA ERROR PORQUE ES CONSTANTE

//let es muy parecido a var con la diferencia del alcance de la variable
//la difencia entre let y var es el "alcance" o scope de la variable
if(0==0){ //if(true){}  
   //logica de js dentro de un bloque de codigo{}
   
   //var alumno ="Natalia" // var si existe fuera del bloque de codigo
   let alumno = "Martin" // let ya no existe acabando el bloque y me genera error
    console.log(alumno)
}
//let se conoce como variable local
//console.log(alumno)

let alumno2 = "Paola" //si se declara una variable let fuera de cualquier bloque, funciona variable global
//variable global que se puede usar en cualquier en cualquier bloque
console.log(alumno2)
if(1==1){
    console.log("Estamos dentro")
    
    alumno2 = "Cristobal"
    console.log(alumno2)
}
console.log("Estamos fuera")
console.log(alumno2)

//TIPOS DE DATOS
//numero
let numero = 1990
console.log(numero)
console.log(typeof numero)

//string o cadena de caracteres
let oracion = "Este es un buen grupo"
console.log(oracion)
console.log(typeof oracion)

//booleano (true/false)
let bol = true
console.log(bol)
console.log(typeof bol)

//Arrays o arrglos o  listas  []
let alumnos =["Paola","Cristobal",oracion,numero,"Said"]
let vacio = []
console.log(alumnos[0])
console.log(alumnos[2])

//Objeto
let objeto = {programadorPython:"Martin",
              sensei1: "rene",
              sensei2: "Daniel",
              arreglo: alumnos
} //llaves y variables 

console.log(objeto.sensei1)
console.log(typeof objeto.sensei1)//string
console.log(typeof objeto)// objeto

//operadores aritmeticos

//Suma
let suma = 10+2
console.log(suma)

let resta = 5-4

let multiplicacion = 7*8
let division = 50/10

//modulo o residuo
let residuo = 20%3 // es el resiudo de la division

























