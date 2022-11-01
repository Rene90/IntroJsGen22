console.log("Hola desde el archivo js")

const ejemplo=  function(lista){
    if (lista.length>0){
        lista.forEach((elemento,indice, arreglo) => {
            console.log(elemento)
        });
        return 1
    }else{
        return 0
    }
       
}

var alumnos = ['Tomas', 'Quidel','Benjamin','Rolando','Nico','Santiago']
var profesores = ['Daniel','Rene']
var resultado = ejemplo(alumnos)
resultado = ejemplo(profesores)
console.log(resultado)
//Objeto literal
const objetoLiteral={
    //propiedades
    propiedad:'Mi valor',
    propiedad2:31,
    propiedad3:true,
    //metodos o funciones propias de mi objeto
    miMetodo: ()=> 'Este es el return implicito en la arrow function'
}
console.log(objetoLiteral)
console.log(profesores)
//MANERA 1 PARA ACCEDER A LAS PROPIEDADES DE MI OBJETO notacion punto
console.log(objetoLiteral.propiedad)
console.log(profesores[0])
//MANERA 2 PARA ACCEDER A LAS PROPIEDADES DE MI OBJETO corchete
console.log(objetoLiteral['propiedad'])
//Acceder a la funcion de mi objeto 
console.log(objetoLiteral.miMetodo())
//En el caso de los metodos, la notacion corchete solamente me mostrara lo que coniente la llave  NO ME EJECUTA LA FUNCION
console.log(objetoLiteral['miMetodo'])

const alumno ={
    nombre:'Alen',
    edad:17,
    soltero:true,
    ocupacion:'estudiante',
    comer: ()=>'Estoy comiendo' ,
    dormir:()=>'Estoy durmiendo',
    jugar: ()=>'Estoy jugando!!!'
}

console.log(`Soy alumno de devf, mi nombre es ${alumno.nombre} tengo ${alumno.edad} anios, soy ${alumno.ocupacion}, lo que estoy haciendo ahorita : ${alumno.jugar()}`)
//en JS todo es un objeto! de aqui el hecho de que JS sea orientada a Objetos (POO)
const texto = 'Hola soy un texto'
console.log(texto.__proto__)

// CLASES
// LAS CLASES SON PLANTILLAS DE UN OBJETO QUE COMPARTE ATRIBUTPS Y METODOS O FUNCIONES
//LAS CLASES ESTAN PRESENTES DENTRO DE LOS LENGUAJES DE PROGRAMACION ORIENTADO A OBJETOS

class miClase {
    //El constructor me inicia un objeto con ciertos atributos o propiedades, o en el caso de que sea un constructor vacio, solo me crea el objeto
    /*constructor(){
        this.propiedad1 = "PROPIEDAD 1"
        this.propiedad2 = "PROPIEDAD 2"
    }*/
    

    constructor(pro1,pro2){
        this.propiedad1 = pro1
        this.propiedad2 = pro2
    }

    miMetodo1(){
        return "Saludos desde el metodo1"
    }
    miMetodo2(){
        return "Saludos desde el metodo2"
    }
}

const objeto1 = new miClase("Quidel","Santiago")

console.log(objeto1.propiedad1)
console.log(objeto1.propiedad2)
console.log(objeto1.miMetodo1())
console.log(objeto1.miMetodo2())

const marco = function(){
    var suma = 2+2
    return suma
}
console.log(marco())

//Ejemplo estudiantes de devf

class estudiantesDevf {
    //Constructor que asigna valores a cada una de las propiedades

    // # es para definir una propiedad privada
    #mascota="blanco"
    constructor(nombre, edad,ocupacion,soltero,animefavorito){
        this.nombre = nombre
        this.edad = edad
        this.ocupacion = ocupacion
        this.soltero = soltero
        this.anime = animefavorito

    }
    // getter para propiedades privadas
    get mascota(){
        return this.#mascota
    }
    set mascota(nuevaMascota){
        this.#mascota = nuevaMascota
    }
    comer(){
        return `Hola , mi nombre es ${this.nombre}, y estoy comiendo`
    }
    vertele(){
        return `Soy ${this.ocupacion}, pero ahorita estoy viendo mi anime favorito que es ${this.anime}`
    }
    cita(){
        if(this.soltero){
            return `Tengo ${this.edad} anios, pero estoy solter@`
        }else{
            return "Si tengo novi@"
        }
    }
    //Getters es para obtener los atributos de mi objeto 
    getNombre(){
        return this.nombre
    }
    getEdad(){
        return this.edad
    }
    //Setters Modifica los atributos de mi objeto
    setNombre(nuevoNombre){
        this.nombre = nuevoNombre
        return this.nombre
    }
    setEdad(nuevaEdad){

        return this.edad
    }
}

var Quidel = new estudiantesDevf("Quidel",17,"estudiante",true,"mob psycho 100")
var Rolando = new estudiantesDevf("Rolando",17,"estudiante",true,"pokemon")

console.log(Quidel.edad)
//Imprimir la edad pero ahora con el getter
console.log(Quidel.getEdad())
//Imprimiendo una propiedad privada usando getter
console.log(Quidel.mascota)
//Cambiando una propiedad privada con setter
Quidel.mascota = "Gari"
console.log(Quidel.mascota)
console.log(Quidel.ocupacion)
Quidel.ocupacion = "Programador"
console.log(Quidel.ocupacion)
console.log(Rolando.vertele())

//HERENCIA
//Se heredan las propiedades y metodos de la clase padre (estudiantesDevf) a la clase hija (estudiantesHdevf)
//lA herencia nos permite ahorrar codigo cuando queremos una clase que se derive de otra 
class estudiantesHdevf extends estudiantesDevf{
    constructor(nombre, edad,ocupacion,soltero,anime,equipoSoccer){
        //super se usa para asignar valores a las propiedades heredadas
        super(nombre,edad,ocupacion,soltero,anime)
        this.equipo =equipoSoccer
    }
    irAlEstadio(){
        return `Ire al estadio a ver a mi equipo favorito que es ${this.equipo}`
    }
}

var tomas = new estudiantesHdevf("Tomas",18,"Estudiante",true,"Naruto","Barcelona")

console.log(tomas.nombre)
console.log(tomas.edad)
console.log(tomas.vertele())
console.log(tomas.irAlEstadio())


