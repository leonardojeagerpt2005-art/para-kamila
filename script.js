function abrirCarta() {
    // Simplemente añadimos o quitamos la clase 'abierto' al body
    document.body.classList.toggle("abierto");
    
    // Opcional: Pequeña vibración en móviles
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}