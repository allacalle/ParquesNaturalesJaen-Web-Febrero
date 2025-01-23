const form = document.getElementById('contactForm');
const messageElement = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Obtener los valores de los campos
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validación básica (puedes agregar más validaciones)
  if (!name || !email || !message) {
    messageElement.textContent = 'Por favor, completa todos los campos.';
    return;
  }

  // Simulación de envío (reemplaza con tu lógica de envío real)
  messageElement.textContent = 'Mensaje enviado correctamente';

  // Limpiar los campos del formulario
  form.reset();
});