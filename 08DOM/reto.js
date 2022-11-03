console.log('hola desde reto.js');

const title = document.getElementById('title')
title.innerHTML = '<h1>Hola desde JS</h1>'

const subtitle = document.getElementsByClassName('subtitle');
subtitle[0].innerHTML = ' <h3>Subtitulo desde JS</h3>'
subtitle[0].innerHTML += '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, architecto aut atque iure impedit voluptate distinctio quod provident eius totam vel aliquam velit officiis</p>'

const h3 = document.getElementsByTagName('h3')[0]
h3.setAttribute('class', 'text--red')

const p = document.getElementsByTagName('p')[0]
p.setAttribute('class', 'text--orange')