const openModal = document.querySelector(".u-btn-4");
const openModalBtn = document.getElementById('openModalBtn');
const openModalBtn3 = document.getElementById('openModalBtn3');
const modal= document.querySelector('.modal');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeModalBtn3 = document.getElementById('closeModalBtn3');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const closeModal = document.querySelector('.modal_close');
const passwordChangeForm = document.getElementById('passwordChangeForm');
const clientQueryForm = document.getElementById('clientQueryForm');
const queryResult = document.getElementById('queryResult');
const modalContent4 = document.querySelector('.modal-content4');
const clientListContainer = document.getElementById('clientListContainer');
const totalDebt = document.getElementById('totalDebt');
const generatePDFBtn = document.getElementById('generatePDFBtn');
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


// Función para generar la lista de clientes
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



openModalBtn.addEventListener('click', () => {
    modal2.style.display = 'block';
  });

  openModalBtn3.addEventListener('click', () => {
    modal3.style.display = 'block';
  });


closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
   modal.classList.remove('modal--show');
});

closeModalBtn.addEventListener('click', () => {
    modal2.style.display = 'none';
  });

  closeModalBtn3.addEventListener('click', () => {
    modal3.style.display = 'none';
  });


  passwordChangeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para guardar la nueva contraseña
    // y cerrar el modal si la operación fue exitosa.
    // Por ejemplo, puedes utilizar una solicitud HTTP para enviar los datos al servidor.
  });

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
 
// Ventana modal crear usuarios

const openModalBtn5 = document.getElementById('openModalBtn5');
const closeModalBtn5 = document.getElementById('closeModalBtn5');
const modal5 = document.getElementById('modal5');
const userRegistrationForm = document.getElementById('userRegistrationForm');
const saveUpdateBtn = document.getElementById('saveUpdateBtn');
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

// Lógica para guardar o actualizar el usuario
saveUpdateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // Lógica para guardar o actualizar el usuario en la base de datos
});

// Lógica para limpiar los campos del formulario
clearFieldsBtn.addEventListener('click', () => {
  userRegistrationForm.reset();
});

// Lógica para eliminar el registro del usuario
deleteUserBtn.addEventListener('click', () => {
  // Lógica para eliminar el usuario de la base de datos
});

searchUserBtn5.addEventListener('click', () => {
  const searchInput = document.getElementById('searchInput').value;
  // Lógica para buscar y cargar la información del usuario en el formulario según el número de identificación
  // Puedes usar el valor de 'searchInput' para realizar la búsqueda en la base de datos
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
//const userRegistrationForm = document.getElementById('userRegistrationForm');
//const saveUpdateBtn = document.getElementById('saveUpdateBtn');
//const clearFieldsBtn = document.getElementById('clearFieldsBtn');
//const deleteUserBtn = document.getElementById('deleteUserBtn');
const searchUserBtn6 = document.getElementById('searchUserBtn5');
//const userImage = document.getElementById('userImage');
//const imageInput = document.getElementById('imageInput');
//const uploadImageBtn = document.getElementById('uploadImageBtn');
//const deleteImageBtn = document.getElementById('deleteImageBtn');

openModalBtn6.addEventListener('click', () => {
  modal6.style.display = 'block';
});

closeModalBtn6.addEventListener('click', () => {
  modal6.style.display = 'none';
});



searchUserBtn6.addEventListener('click', () => {
  const searchInput = document.getElementById('searchInput').value;
  // Lógica para buscar y cargar la información del usuario en el formulario según el número de identificación
  // Puedes usar el valor de 'searchInput' para realizar la búsqueda en la base de datos
});



  
  
  
  
  

