// Mostrar/ocultar el botón según el scroll
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnSubir");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            btn.classList.add("visible");
        } else {
            btn.classList.remove("visible");
        }
    });

    btn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});