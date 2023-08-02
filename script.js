document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos todos los elementos con la clase "nav-link"
    const navLinks = document.querySelectorAll(".nav-link");

    // Agregamos el manejador de eventos a cada enlace
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = this.getAttribute("data-target");
            const section = document.getElementById(target);

            // Hacemos scroll hacia la sección correspondiente
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
