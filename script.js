document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // 1. VALIDACIÓN DE FORMULARIO CON BOOTSTRAP Y JS PERSONALIZADO
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function (event) {
        // Detener el envío si no es válido
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            
            // Retroalimentación visual al usuario
            mostrarAlerta("Por favor, revisa los campos marcados en rojo.", "danger");
        } else {
            // Si es válido, simulamos el procesamiento
            event.preventDefault();
            const userName = document.getElementById('name').value;
            
            // Mensaje de éxito dinámico
            mostrarAlerta(`¡Excelente trabajo, ${userName}! Tu propuesta técnica ha sido registrada para el proyecto de la UAA.`, "success");
            
            // Limpiar formulario
            form.reset();
            form.classList.remove('was-validated');
        }
        form.classList.add('was-validated');
    }, false);

    // Función auxiliar para alertas flotantes
    function mostrarAlerta(mensaje, tipo) {
        const alerta = document.createElement('div');
        alerta.className = `alert alert-${tipo} alert-dismissible fade show shadow-lg position-fixed top-0 start-50 translate-middle-x mt-4`;
        alerta.style.zIndex = "9999";
        alerta.innerHTML = `
            <strong>${tipo === 'success' ? 'Éxito' : 'Atención'}:</strong> ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        document.body.appendChild(alerta);
        
        // Auto-eliminar después de 4 segundos
        setTimeout(() => {
            if (alerta) alerta.remove();
        }, 4000);
    }

    // 2. NAVEGACIÓN FLUÍDA (SMOOTH SCROLL)
    document.querySelectorAll('a.nav-link, a.btn').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70, // Compensación por la Navbar fija
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 3. EFECTO DE APARECIMIENTO AL HACER SCROLL
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});