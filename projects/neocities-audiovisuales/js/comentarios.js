//comentarios
const formulario = document.getElementById('formulario');
const comentariosDiv = document.getElementById('comentarios');

// Cargar comentarios al iniciar
async function loadComments() {
const response = await fetch('/comments');
const comments = await response.json();
comments.forEach(comment => addCommentToDiv(comment));
}

// Agregar comentario
async function addComment(event) {
event.preventDefault();
const nombre = document.getElementById('nombre').value;
const comentario = document.getElementById('comentario').value;

const data = { nombre, comentario };

await fetch('/add-comment', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
});

addCommentToDiv(data);
formulario.reset(); // Limpiar el formulario
}

// Agregar un comentario al DOM
function addCommentToDiv({ nombre, comentario }) {
const div = document.createElement('div');
div.classList.add('comentario');
div.innerHTML = `<strong>${nombre}</strong>: <p>${comentario}</p>`;
comentariosDiv.appendChild(div);
}

formulario.addEventListener('submit', addComment);
window.onload = loadComments;