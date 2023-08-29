document.addEventListener("DOMContentLoaded", function () {
    
    const navLinks = document.querySelectorAll(".nav-link");


    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = this.getAttribute("data-target");
            const section = document.getElementById(target);

            
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
