console.log("Hola desde el archivo main.js")
var contenedor = document.getElementById("contenedor")
var contenedor2 = document.getElementById("contenedor2")
//Funcion que he insertado en el evento del boton creado
function crearElemento(){
    // Creamos elemento parrafo
    var parrafo = document.createElement("p")
    // instertamos texto en el elemento p
    parrafo.innerText = "Se ha creado Elemento parrafo"
    parrafo.id = "1p"
    // lo insertamos en nodo padre o en el html 
    contenedor.appendChild(parrafo)
}
//Primer manera para remover elementos desde js Removechild
function funcionRemover(){
    var v = document.getElementById("1p")
    console.log(v)
    contenedor.removeChild(v)
}

//Segunda manera para remover elelemtnos desde js
function funcionRemover2(){
    contenedor.innerHTML= ``
}


//Primer manera de crear un elemento html "Create element"

//1.- Creamos elemento html
var botonCreado = document.createElement('button')
//2.-Le anadimos las propiedades que queramos , id, clase, texto ...
botonCreado.innerText="Boton creado desde JS"
botonCreado.id ="boton1"
botonCreado.type="button"
botonCreado.addEventListener("click",crearElemento)
//3.-Agregar elemento creado al nodo padre (div contenedor)
contenedor.appendChild(botonCreado)

//Segunda manera de crear un elemento html
/*var botonCreado2 = `
    <button id='boton2' onclick='funcionRemover()' >Segundo boton creado desde JS</button>
`*/
//contenedor2.innerHTML= botonCreado2
var botonCreado3 = `
    <button id='boton2' onclick='funcionRemover()' >Segundo boton creado desde JS</button>
    <button id='boton3' onclick='funcionRemover2()' >Tercer boton creado desde JS</button>
`
contenedor2.innerHTML= botonCreado3