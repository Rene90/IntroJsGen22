console.log("Esta es una introduccion al DOM y JS")
//Seleccionar un elemento del DOM desde JAVASCRIPT
console.log(document)
var button = document.getElementById("boton")
//outerhtml me lee lo que tiene el nodo
console.log(button.outerHTML)


const cambiartexto = function(){
    //innerText me permite escribir lo que contiene el nodo
    if(button.outerText[0]=="M"){
        button.innerText="Ejecuta una funcion JAVASCRIPT"
    }else{
        button.innerText="MODIFIQUE DESDE JAVASCRIPT"
    }
    
    
}
