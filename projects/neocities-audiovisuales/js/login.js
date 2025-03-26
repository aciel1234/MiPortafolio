document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('username').value;
    if(usuario != "oricel.perez") {
      alert('usuario incorrecto');
      return;
    }
    var clave = document.getElementById('password').value;
    if (clave != "Feliz*2024") {
      alert('La clave no es válida');
      return;
    }
    window.location.href = "atencion_poblacion.html";
  }