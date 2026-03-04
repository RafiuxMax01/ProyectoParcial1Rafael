document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // 1. Validación de Formulario (Bootstrap)
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            alert("Por favor, revisa los campos marcados en rojo.");
        } else {
            event.preventDefault();
            const userName = document.getElementById('name').value;
            alert(`¡Gracias ${userName}! Tu registro para el proyecto UAA ha sido exitoso.`);
            form.reset();
            form.classList.remove('was-validated');
        }
        form.classList.add('was-validated');
    }, false);

    // 2. Smooth Scroll para enlaces internos
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});