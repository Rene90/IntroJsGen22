console.log("Clase de arreglos")
//Declaracion de un arreglo
//Arreglo vacio
var arreglo1 = []
console.log(arreglo1)
//Declaracion de un arreglo a partir de la clase Array
var arreglo2 = new Array()
console.log(arreglo2)

let alumnos = ["Jorge","Jeremy","Martin","Paola", "Cristobal"]
//Imprimir a Martin (3 elemento)
console.log(alumnos[2])
//Metodo push Adiciona un elemento al final de la lista
console.log(alumnos)
alumnos.push("Camila")
console.log(alumnos)
//imprimir el ultimo elemento HARDCODEADO
console.log(alumnos[5])
//imprime el ultimo elemento mas "automatizado"
//ATRIBUTO LENGTH
console.log(alumnos[alumnos.length-1])
alumnos.push("Joaquin")
console.log(alumnos[alumnos.length-1])
 //Metodo pop borra el ultimo de la lista

alumnos.pop()
alumnos.pop()
console.log(alumnos)
//Adiciona un elemento al principio de la lista
alumnos.unshift("Natalia")
console.log(alumnos)
//Elimina el primer elemento de la lista
alumnos.shift()

//Splice me permite borrar cualquier elemento de mi arreglo usando su indice
//Borrar a Jeremy que se encuentra en el indice 2, le paso como segundo argumento el numero de datos que quiero borrar
alumnos.splice(2,1)
console.log(alumnos)
//SPLICE como POP es decir siempre elimina el ultimo elemento de la lista
alumnos.splice(alumnos.length-1,1)
console.log(alumnos)
alumnos.splice(alumnos.length,0,"Rolando","Jeremy")// SPLICE se comporta como PUSH
console.log(alumnos)
//Splice como shift()
alumnos.splice(0,1) 
//Spplice como unshift()
alumnos.splice(0,0,"Stephano")
console.log(alumnos)
//Concat me une dos areglos
var instructores = ["Daniel","Rene"]
var instructores1 = ["Quinteros","Roberto"]
var arreglonuevo = alumnos.concat(instructores,instructores1)
console.log(arreglonuevo)
//Reverse me invierte el orden de mi arreglo
console.log(arreglonuevo.reverse())

var oracion = 'Rolando es mi alumno de programacion de Chile'
//Split divide una cadena de caracteres de acuerdo al caracter que se pase como parametro
var arregloPal =oracion.split(' ')
console.log(arregloPal)


//Arreglo o matriz de dos dimensiones
 var a2d = [["Rolando","Pao"],["Rene","Camila"]] //Arreglo de 2 x 2

//-----------------------------CICLOS-------------------------------
//HARDCODEADO
console.log(1)
console.log(2)
console.log(3)
console.log(4)
/*
for(let i=0;i<22;i++){ //Bloque de codigo que se ejecuta dentro de este ciclo
    console.log(i)
}
//Esta es una forma mas explicita del paso
for(let i=0;i<22;i=i+1){ //Bloque de codigo que se ejecuta dentro de este ciclo
    console.log(i)
}
//paso de dos en dos
for(let i=0;i<22;i=i+2){ //Bloque de codigo que se ejecuta dentro de este ciclo
    console.log(i)
}
//Version abreviada de el ciclo de arriba
for(let i=0;i<22;i+=2){ //Bloque de codigo que se ejecuta dentro de este ciclo
    console.log(i)
}*/

//Ciclo for que retrocede

for(let i=20;i>0;i--){ //Bloque de codigo que se ejecuta dentro de este ciclo
    console.log(i)
}
//Promedio
var calificaciones = [7,8,9,10,8,6,5,6] //Primer grupo
var calificaciones1 = [10,10,10,10,9,8]//Segundo grupo
var grupos = [calificaciones,calificaciones1]
//promedio = calificaciones[0]+calificaciones[1]+.../ numero de alumnos
var suma =0
for(let i=0;i<calificaciones.length;i++){
    suma = suma + calificaciones[i]
}
var promedios = suma/calificaciones.length

var suma2 = 0

//ANIDAR DOS CICLOS FOR PARA RECORRER UN ARREGLO DE ARREGLOS
var numAlumnos = 0
for(let i=0; i<grupos.length;i++){
    for( let j=0;j<grupos[i].length;j++){
        suma2 = suma2 + grupos[i][j]
        if(grupos[i][j]<6){
            console.log("El alumno del grupo #"+ i+" con #de lista "+ j+" Reprobo")
        }
        numAlumnos++
    }
}
var promediostotal = suma2/numAlumnos
console.log(promediostotal)

//Metodos funcionales de los arreglos

calificaciones.forEach((elemento,indice,arreglo)=>{
    
    console.log("Iteracion numero:"+indice)
    console.log(elemento)
})


var contadorwhile = 0
while(contadorwhile<8){ //CICLO WHILE ES IGUAL EN FUNCIONAMIENTO QUE EL CICLO FOR

    console.log(contadorwhile)

    contadorwhile++
}

//Operador modulo

//6%3 = 0
//7%3 = 1











