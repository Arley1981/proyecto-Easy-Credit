const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const passwordChangeForm = document.getElementById('passwordChangeForm');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

passwordChangeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Aquí puedes agregar la lógica para guardar la nueva contraseña
  // y cerrar el modal si la operación fue exitosa.
  // Por ejemplo, puedes utilizar una solicitud HTTP para enviar los datos al servidor.
});