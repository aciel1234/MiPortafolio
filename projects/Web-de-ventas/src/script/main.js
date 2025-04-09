let btnNav = document.getElementById('btnNav');
let navList = document.getElementById('navList');

btnNav.addEventListener('click', () => {
    navList.classList.toggle('mostrarLista');
})