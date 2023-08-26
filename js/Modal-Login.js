const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const passwordRecoveryForm = document.getElementById('passwordRecoveryForm');
const recoveryStatusMessage = document.getElementById('recoveryStatusMessage');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

passwordRecoveryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const identificationType = document.getElementById('identificationType').value;
  const identificationNumber = document.getElementById('identificationNumber').value;
  const email = document.getElementById('email').value;

  // Aquí puedes realizar la lógica para enviar el enlace de recuperación al correo electrónico registrado

  // Simulamos el envío del enlace de recuperación en este ejemplo
  setTimeout(() => {
    recoveryStatusMessage.textContent = `Se ha enviado un enlace de recuperación a ${email}. Por favor, revise su correo electrónico.`;
  }, 1500);

  // Limpia el formulario después del envío del enlace
  passwordRecoveryForm.reset();
});

// Agregar evento para borrar el mensaje de estado cuando se cierre la ventana modal
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    recoveryStatusMessage.textContent = '';
  }
});