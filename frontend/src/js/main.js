// Ventana Modal Cambio de Contraseña
const passwordChangeForm = document.getElementById('passwordChangeForm');

passwordChangeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Aquí puedes agregar la lógica para guardar la nueva contraseña
  // y cerrar el modal si la operación fue exitosa.
  // Por ejemplo, puedes utilizar una solicitud HTTP para enviar los datos al servidor.
});

// Ventana Modal Listado de Clientes
const openModal = document.querySelector(".u-btn-4");
const modal= document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');
const generatePDFBtn = document.getElementById('generatePDFBtn');
const clientListContainer = document.getElementById('clientListContainer');
const totalDebt = document.getElementById('totalDebt');
const scrollUpBtn = document.getElementById('scrollUpBtn');
const scrollDownBtn = document.getElementById('scrollDownBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Datos de ejemplo para la lista de clientes
const clients = [
  {
    nombre: 'Juan Pérez',
    identificacion: '123456789',
    estado: 'Adeudo',
    deuda: 1200,
    bloqueado: false,
  },
  {
    nombre: 'María González',
    identificacion: '987654321',
    estado: 'Paz y Salvo',
    deuda: 0,
    bloqueado: true,
  },
  {
    nombre: 'Carlos López',
    identificacion: '71382975',
    estado: 'Adeudo',
    deuda: 500000,
    bloqueado: false,
  },
  {
    nombre: 'Juanita Perez',
    identificacion: '1054897523',
    estado: 'Paz y Salvo',
    deuda: 0,
    bloqueado: true,
  },
  // ... Agregar más clientes
];

searchBtn.addEventListener('click', () => {
  const searchValue = searchInput.value.trim().toLowerCase();
  const foundClient = clients.find((client) => {
    return (
      client.nombre.toLowerCase() === searchValue ||
      client.identificacion === searchValue
    );
  });

  if (foundClient) {
    generateClientList([foundClient]);
  } else {
    alert('Cliente no encontrado.');
  }
});

scrollUpBtn.addEventListener('click', () => {
  clientListContainer.scrollTop -= 50; // Desplazar hacia arriba
});

scrollDownBtn.addEventListener('click', () => {
  clientListContainer.scrollTop += 50; // Desplazar hacia abajo
});

function generateClientList() {
  clientListContainer.innerHTML = '';
  let totalAdeudado = 0;

  clients.forEach((client) => {
    const clientRow = document.createElement('div');
    clientRow.classList.add('client-row');
    clientRow.innerHTML = `
      <div class="client-info">
        <p><strong>Nombre:</strong> ${client.nombre}</p>
        <p><strong>Identificación:</strong> ${client.identificacion}</p>
        <p><strong>Estado:</strong> ${client.estado}</p>
      </div>
      <div class="client-info">
        <p><strong>Deuda Total:</strong> $${client.deuda.toFixed(2)}</p>
      </div>
      <div class="client-buttons">
        <button class="block-btn">${client.bloqueado ? 'Desbloquear' : 'Bloquear'}</button>
      </div>
    `;

    if (client.bloqueado) {
      clientRow.classList.add('blocked');
    }

    clientListContainer.appendChild(clientRow);

    const blockBtn = clientRow.querySelector('.block-btn');
    blockBtn.addEventListener('click', () => {
      client.bloqueado = !client.bloqueado;
      if (client.bloqueado) {
        client.estado = 'Bloqueado';
      } else {
        client.estado = client.deuda > 0 ? 'Adeudo' : 'Paz y Salvo';
      }
      blockBtn.textContent = client.bloqueado ? 'Desbloquear' : 'Bloquear';
      clientRow.classList.toggle('blocked', client.bloqueado);
      generateClientList();
    });
    totalAdeudado += client.deuda;
  });

  totalDebt.textContent = `$${totalAdeudado.toFixed(2)}`;
}

generatePDFBtn.addEventListener('click', () => {
  // Lógica para generar el archivo PDF con los datos de la lista de clientes
  alert('Archivo PDF generado con éxito.');
});

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
    generateClientList();
    modal.style.display = 'block';
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
   modal.classList.remove('modal--show');
});

// Ventana Modal Consulta de Clientes
const clientQueryForm = document.getElementById('clientQueryForm');
const queryResult = document.getElementById('queryResult');

clientQueryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const identificationType = document.getElementById('identificationType').value;
  const identificationNumber = document.getElementById('identificationNumber').value;

  // Aquí simulo una consulta en la base de datos
  const clientData = {
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 555-123-4567',
    creditHistory: [
      {
        fecha: '2023-08-01',
        descripcion: 'Compra de Electrodomésticos',
        valorDeuda: 1200,
      },
      {
        fecha: '2023-07-15',
        descripcion: 'Préstamo Personal',
        valorDeuda: 5000,
      },
    ],
  };

  // Verificar si el cliente está registrado
  if (clientData.fullName && clientData.email && clientData.phone) {
    queryResult.textContent = `Cliente: ${clientData.fullName}, Email: ${clientData.email}, Teléfono: ${clientData.phone}`;
  } else {
    queryResult.textContent = 'Cliente no registrado, verifique la información ingresada y consulte de nuevo.';
  }
});

// Ventana Modal 2 (Si hay más ventanas modales, agrégales nombres descriptivos)
const modal2 = document.getElementById('modal2');

openModalBtn.addEventListener('click', () => {
  modal2.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal2.style.display = 'none';
});

// Ventana Modal 3 (Si hay más ventanas modales, agrégales nombres descriptivos)
const modal3 = document.getElementById('modal3');

openModalBtn3.addEventListener('click', () => {
  modal3.style.display = 'block';
});

closeModalBtn3.addEventListener('click', () => {
  modal3.style.display = 'none';
});
 
// Ventana modal crear usuarios

const openModalBtn5 = document.getElementById('openModalBtn5');
const closeModalBtn5 = document.getElementById('closeModalBtn5');
const modal5 = document.getElementById('modal5');
const userRegistrationForm = document.getElementById('userRegistrationForm');
const saveUserBtn = document.getElementById('saveUserBtn');
const updateUserBtn = document.getElementById('updateUserBtn');
const clearFieldsBtn = document.getElementById('clearFieldsBtn');
const deleteUserBtn = document.getElementById('deleteUserBtn');
const searchUserBtn5 = document.getElementById('searchUserBtn5');
const userImage = document.getElementById('userImage');
const imageInput = document.getElementById('imageInput');
const uploadImageBtn = document.getElementById('uploadImageBtn');
const deleteImageBtn = document.getElementById('deleteImageBtn');

openModalBtn5.addEventListener('click', () => {
  modal5.style.display = 'block';
});

closeModalBtn5.addEventListener('click', () => {
  modal5.style.display = 'none';
});

/// Lógica para guardar el usuario
saveUserBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const userRegistrationForm = document.getElementById('userRegistrationForm');

  const formData = new FormData(userRegistrationForm);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  try {
    const response = await fetch('http://localhost:1000/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject)
    });

    if (response.ok) {
      alert('Usuario guardado exitosamente');
      userRegistrationForm.reset(); // Limpiar el formulario después de guardar
    } else {
      throw new Error('Error al guardar el usuario');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Ocurrió un error al guardar el usuario.');
  }
});

// Lógica para limpiar los campos del formulario y el campo de búsqueda
clearFieldsBtn.addEventListener('click', () => {
  userRegistrationForm.reset(); // Limpiar el formulario

  const searchInput = document.getElementById('searchInput');
  searchInput.value = ''; // Limpiar el campo de búsqueda
});

// Lógica para buscar y cargar la información del usuario en el formulario según el número de identificación
searchUserBtn5.addEventListener('click', async () => {
  const searchInput = document.getElementById('searchInput').value;

  try {
    const response = await fetch(`http://localhost:1000/api/user/${searchInput}`);
    const userData = await response.json();

    if (response.ok) {
      const userRegistrationForm = document.getElementById('userRegistrationForm');

      // Asignar los valores obtenidos a los campos del formulario
      userRegistrationForm.elements['rol'].value = userData.rol;
      userRegistrationForm.elements['nombres'].value = userData.nombres;
      userRegistrationForm.elements['apellidos'].value = userData.apellidos;
      userRegistrationForm.elements['identificación'].value = userData.identificación;
      userRegistrationForm.elements['contraseña'].value = userData.contraseña;
      userRegistrationForm.elements['telefono'].value = userData.telefono;
      userRegistrationForm.elements['email'].value = userData.email;
      userRegistrationForm.elements['dirección'].value = userData.dirección;
      userRegistrationForm.elements['edad'].value = userData.edad
    } else {
      throw new Error('Error al cargar la información del usuario');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Ocurrió un error al cargar la información del usuario.');
  }
});


// Lógica para actualizar la información del usuario
updateUserBtn.addEventListener('click', async () => {
  const searchInput = document.getElementById('searchInput').value;
  const userRegistrationForm = document.getElementById('userRegistrationForm');
  const formData = new FormData(userRegistrationForm);
  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  try {
    const response = await fetch(`http://localhost:1000/api/user/${searchInput}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject)
    });

    if (response.ok) {
      alert('Usuario actualizado exitosamente');
      userRegistrationForm.reset();
    } else {
      throw new Error('Error al actualizar el usuario');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Ocurrió un error al actualizar el usuario.');
  }
});



// Lógica para eliminar un usuario
deleteUserBtn.addEventListener('click', async () => {
  const searchInput = document.getElementById('searchInput').value;
  
  const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este usuario?');

  if (confirmDelete) {
    try {
      const response = await fetch(`http://localhost:1000/api/user/${searchInput}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        alert('Usuario eliminado exitosamente');
        const userRegistrationForm = document.getElementById('userRegistrationForm');
        userRegistrationForm.reset(); // Limpiar el formulario después de eliminar
        document.getElementById('searchInput').value = ''; // Limpiar el campo de búsqueda
      } else {
        throw new Error('Error al eliminar el usuario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error al eliminar el usuario.');
    }
  }
});




// Lógica para subir una imagen
uploadImageBtn.addEventListener('click', () => {
  imageInput.click();
});

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      userImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Lógica para eliminar la imagen
deleteImageBtn.addEventListener('click', () => {
  userImage.src = '#';
  imageInput.value = '';
});


// Ventana modal registrar clientes

const openModalBtn6 = document.getElementById('openModalBtn6');
const closeModalBtn6 = document.getElementById('closeModalBtn6');
const modal6 = document.getElementById('modal6');
const clientRegistrationForm = document.getElementById('clientRegistrationForm');
const saveClientBtn = document.getElementById('saveClientBtn');
const updateClientBtn = document.getElementById('updateClientBtn');
const clearFieldsBtn1 = document.getElementById('clearFieldsBtn1');
const deleteClientBtn = document.getElementById('deleteClientBtn');
const searchClientBtn = document.getElementById('searchClientBtn');
const clientImage = document.getElementById('clientImage');
//const imageInput = document.getElementById('imageInput');
//const uploadImageBtn = document.getElementById('uploadImageBtn');
//const deleteImageBtn = document.getElementById('deleteImageBtn');

openModalBtn6.addEventListener('click', () => {
  modal6.style.display = 'block';
});

closeModalBtn6.addEventListener('click', () => {
  modal6.style.display = 'none';
});

/// Lógica para guardar un cliente
saveClientBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const clientRegistrationForm = document.getElementById('clientRegistrationForm');

  const formData = new FormData(clientRegistrationForm);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  try {
    const response = await fetch('http://localhost:1000/api/client', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject)
    });

    if (response.ok) {
      alert('Cliente y cuenta guardados exitosamente');
      clientRegistrationForm.reset(); // Limpiar el formulario después de guardar
    } else {
      throw new Error('Error al guardar el cliente');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Ocurrió un error al guardar el cliente.');
  }
});


// Lógica para limpiar los campos del formulario y el campo de búsqueda
clearFieldsBtn1.addEventListener('click', () => {
  clientRegistrationForm.reset(); // Limpiar el formulario

  const searchClientInput = document.getElementById('searchClientInput');
  searchClientInput.value = ''; // Limpiar el campo de búsqueda
});

// Lógica para buscar y cargar la información del cliente en el formulario según el número de identificación
searchClientBtn.addEventListener('click', async () => {
  const searchClientInput = document.getElementById('searchClientInput').value;

  try {
    const response = await fetch(`http://localhost:1000/api/client/${searchClientInput}`);
    const clientData = await response.json();

    if (response.ok) {
      const clientRegistrationForm = document.getElementById('clientRegistrationForm');

      // Asignar los valores obtenidos a los campos del formulario
      clientRegistrationForm.elements['tipo_identificación'].value = clientData.tipo_identificación;
      clientRegistrationForm.elements['identificación'].value = clientData.identificación;
      clientRegistrationForm.elements['nombres'].value = clientData.nombres;
      clientRegistrationForm.elements['apellidos'].value = clientData.apellidos;
      clientRegistrationForm.elements['contraseña'].value = clientData.contraseña;
      clientRegistrationForm.elements['telefono'].value = clientData.telefono;
      clientRegistrationForm.elements['email'].value = clientData.email;
      clientRegistrationForm.elements['dirección'].value = clientData.dirección;
      clientRegistrationForm.elements['edad'].value = clientData.edad
    } else {
      throw new Error('Error al cargar la información del cliente');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Ocurrió un error al cargar la información del cliente.');
  }
});

// Lógica para actualizar la información del usuario
updateClientBtn.addEventListener('click', async () => {
  const searchClientInput = document.getElementById('searchClientInput').value;
  const clientRegistrationForm = document.getElementById('clientRegistrationForm');
  const formData = new FormData(clientRegistrationForm);
  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  try {
    const response = await fetch(`http://localhost:1000/api/client/${searchClientInput}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject)
    });

    if (response.ok) {
      alert('Cliente actualizado exitosamente');
      clientRegistrationForm.reset();
    } else {
      throw new Error('Error al actualizar el cliente');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Ocurrió un error al actualizar el cliente.');
  }
});


// Lógica para eliminar un cliente
deleteClientBtn.addEventListener('click', async () => {
  const searchClientInput = document.getElementById('searchClientInput').value;
  
  const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este cliente?');

  if (confirmDelete) {
    try {
      const response = await fetch(`http://localhost:1000/api/client/${searchClientInput}`, {
        method: 'DELETE'
      });

      const responseData = await response.json();

      if (response.ok) {
        alert('Cliente y cuenta eliminados exitosamente');
        const clientRegistrationForm = document.getElementById('clientRegistrationForm');
        clientRegistrationForm.reset(); // Limpiar el formulario después de eliminar
        document.getElementById('searchClientInput').value = ''; // Limpiar el campo de búsqueda
      } else {
        throw new Error(responseData.message); // Lanzar el mensaje de error desde la API
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error al eliminar el cliente: ' + error.message);
    }
  }
});
  
  
  
  
  

