
// MenuToggle - Animação

let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function(){
    navigation.classList.toggle('active')
    main.classList.toggle('active')
}

// adicionar classe hoverred é selecionado item da lista

let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}

list.forEach((item) =>
item.addEventListener('mouseover',activeLink));
