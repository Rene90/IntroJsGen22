console.log('hola desde main.js');
//DOM -> DOCUMENT OBJECT MODEL
//Hace referencia a todo el HTML como un árbol de objetos donde podemos crear, agregar, modificar, eliminar, cualquier elemento del DOM

//Document, es una palabra reservar, hace referencia al arbol de objetos declarado en nuestro JS
// console.log('este es el DOM', document)

//Window, es una palabra reservada, es un objeto, hace referencia a mi ventana
// console.log('este es el window', window);

//OBTENER ELEMENTOS

// document.getElementById(id) -> Traer elemento por id
// document.getElementsByTagName -> Trae elementos por etiquetas de html
// document.getElementsClassName -> Trae los elementos por su nombre de clase
//document.querySelector -> obtener el primer elemento que encuentre por selector - #id, .class
//document.querySelectorAll -> obtiene todos los elementos que encuentre por el selector
//elemento_padre.children -> Obtengo a los hijos a través del padre
//elemento_hijo.parentElement -> Obtener al padre a través de los hijos


// Si el atributo id padreee no existe me devuelve null
const padre = document.getElementById('padre')
console.log('padre', padre);

const etiquetasP = document.getElementsByTagName('p')
console.log('etiquetasP', etiquetasP);

const classHijos = document.getElementsByClassName('hijo')
console.log('clases que tengan nombre hijos', classHijos);

const primerHijo = document.querySelector('.hijo')
console.log('primer hijo', primerHijo);

const todosLosHijos = document.querySelectorAll('.hijo')
console.log('todos los hijo', todosLosHijos);

//elemento_padre.children -> Obtengo a los hijos a través del padre
const primerHijoPorElPadre = padre.children[0]
console.log('primerHijoPorElPadre', primerHijoPorElPadre);

//elemento_hijo.parentElement -> Obtener al padre a través de los hijos
const padrePorELHijo = primerHijo.parentElement
console.log('padrePorELHijo', padrePorELHijo);


//MODIFICAR ELEMENTOS
//Podemos modificar las propiedades de estos elementos
//me refiero a propiedas a atributos, clases, estilos, entre otros.

//elemento.innerHTML -> cambia el contenido del elemento pero el HTML
//element.textContent -> cambia el texto que tiene mi elemento
//element.className -> cambia las clases del elemento
//element.setAtributte -> cambiar o agregar atributos de mi elemento
//elemet.style.property -> cambia directamente el estilo del elemento

// primerHijo.innerHTML = primerHijo.innerHTML + `<p>Hijo 1 a tráves de JS</p>`
primerHijo.innerHTML = `<p>Hijo 1 a tráves de JS</p>`


const segundoHijo = todosLosHijos[1]
segundoHijo.className = 'hijo box-hijo1';

segundoHijo.setAttribute('id', 'hijo-2')
segundoHijo.style.borderRadius = '20px'
segundoHijo.style.border = '2px solid black'


//Eventos en Javascript
// addEventListener tiene dos parametros, el primero recibe el tipo de evento, y el segundo una función con las instrucciones que haga

//Tipos de eventos
// click* -> cuando se hace click se dispara el evento  (la función)
// mouseover -> El usuario pasó su mouse encima del botón
// mouseout ->  El usuario quitó su mouse del botón
// mousemove ->  El usuario movio su mouse del botón
// submit* -> escuchar cuando se envia un formulario, los input deben estar dentro de la etiqueta form
// change -> escuchar los cambios en los inputs

const button = document.getElementById('click-button')
button.addEventListener('click', (e) => {
    // addEventListener me esta enviando todo el elemento
    // target almacena al elemento, su HTML
    e.target.textContent = 'Haz hecho click bro!🎉';
    alert('hiciste click en el botón')
})

const buttonMouse = document.getElementById('mouse-button')

buttonMouse.addEventListener('mouseover', (e) => {
    e.target.textContent = 'Pasaste encima del botón🎉';
})
buttonMouse.addEventListener('mouseout', (e) => {
    e.target.textContent = 'Quitaste el mouse del botón😞';
})
buttonMouse.addEventListener('mousemove', (e) => {
    e.target.textContent = 'Esta moviendo el mouse en el botón😄';
})

const formSubmit = document.getElementById('form')
formSubmit.addEventListener('submit', (e) => {
    e.preventDefault(); //desactiva el comportamiento por defecto y no te refresques
   console.log('enviando formulario')
})

const name = document.getElementById('name')
name.addEventListener('change', (e) => {
    console.log(e.target);
    e.target.value; //desactiva el comportamiento por defecto y no te refresques
   console.log(e.target.value)
})
const sumarButton = document.getElementById('sumar-button')
const resultShow = document.getElementById('result')

sumarButton.addEventListener('click', () => {
    const n1 = document.getElementById('n1').value
    const n2 = document.getElementById('n2').value
    if(!n1 || !n2){
        return alert ("wey ingresa un numero ")  
    }
    const resultado = parseInt(n1) + parseInt(n2)
    resultShow.innerHTML = resultShow.innerHTML  + `<p>${resultado}</p>`
})
