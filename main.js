function girarFoto(foto) {

    // Si pulsamos una foto que ya está grande,
    // vuelve a hacerse pequeña
    if (foto.classList.contains("activa")) {
        foto.classList.remove("activa");
        return;
    }

    // Hacemos pequeñas todas las fotos
    document.querySelectorAll(".foto").forEach(function(elemento) {
        elemento.classList.remove("activa");
    });

    // Hacemos grande la foto pulsada
    foto.classList.add("activa");
}