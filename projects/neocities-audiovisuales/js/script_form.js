var f = new Date();
var fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
document.getElementById("fecha").textContent = fecha;