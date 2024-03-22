function validarFormulario() {
    var nombre = document.forms["formularioContacto"]["nombre"].value;
    var email = document.forms["formularioContacto"]["email"].value;
    var mensaje = document.forms["formularioContacto"]["mensaje"].value;
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (nombre == "" || email == "" || mensaje == "") {
      alert("Todos los campos son obligatorios.");
      return false;
    } else if (!regexEmail.test(email)) {
      alert("Por favor, introduce una dirección de correo electrónico válida.");
      return false;
    }
    return true;
  }
  
  function enviarFormulario() {
    if (validarFormulario()) {
      // Simula el envío del formulario
      mostrarConfirmacion();
    }
  }
/*
  function enviarFormulario() {
  if (validarFormulario()) {
    // Captura los valores del formulario
    var nombre = document.forms["formularioContacto"]["nombre"].value;
    var email = document.forms["formularioContacto"]["email"].value;
    var mensaje = document.forms["formularioContacto"]["mensaje"].value;

    // Crea un objeto con los datos del formulario
    var datosFormulario = {
      nombre: nombre,
      email: email,
      mensaje: mensaje
    };

    // Configura la solicitud HTTP POST
    fetch('tu-url-de-destino', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosFormulario)
    })
    .then(response => {
      if (response.ok) {
        mostrarConfirmacion();
      } else {
        throw new Error('Algo salió mal con la solicitud.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

*/
  function mostrarConfirmacion() {
    var elementoConfirmacion = document.getElementById('respuestaConfirmacion');
    elementoConfirmacion.style.display = 'block';
    elementoConfirmacion.textContent = '¡Formulario enviado con éxito!';
  }