function realizarDonacion() {
    // Obtener el valor ingresado por el usuario
    var cantidad = parseInt(document.getElementById('amount').value);

    // Verificar si la cantidad es válida
    if (cantidad > 0) {
        // Aquí podrías realizar alguna acción, como enviar la cantidad a un servidor, etc.
        // En este ejemplo, simplemente mostraremos un mensaje
        alert('¡Gracias por tu donación de $' + cantidad + '!');
    } else {
        // Mostrar un mensaje de error si la cantidad no es válida
        alert('Por favor ingresa una cantidad válida.');
    }
}