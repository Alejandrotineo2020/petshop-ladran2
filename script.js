document.addEventListener('DOMContentLoaded', function() {
    const reservaForm = document.getElementById('reservaForm');

    if (reservaForm) {
        reservaForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Guardamos los datos seleccionados
            const datos = {
                cliente: document.getElementById('cliente').value,
                perrito: document.getElementById('perrito').value,
                tamaño: document.getElementById('tamaño').value,
                servicio: document.getElementById('servicio').value,
                fecha: document.getElementById('fecha').value,
                hora: document.getElementById('hora').value
            };

            // Guardar en la base de datos local
            let db = JSON.parse(localStorage.getItem('reservas')) || [];
            db.push(datos);
            localStorage.setItem('reservas', JSON.stringify(db));

            alert('reserva completada. ¡Nos vemos pronto!');
            window.location.href = "index.html"; // Redirigir a bienvenida
        });
    }
});