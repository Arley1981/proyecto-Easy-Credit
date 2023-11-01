(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');


                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }

        });
    }


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();


const openModalBtn = document.getElementById('openModalBtn');
const openModalBtn1 = document.getElementById('openModalBtn1');
const openModalBtn2 = document.getElementById('openModalBtn2');
const openModalBtn3 = document.getElementById('openModalBtn3');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeModalBtn2 = document.getElementById('closeModalBtn2');
const closeModalBtn3 = document.getElementById('closeModalBtn3');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');

const clientQueryForm = document.getElementById('clientQueryForm');
const creditHistoryBody = document.getElementById('creditHistoryBody');
const totalDebt = document.getElementById('totalDebt');
const payTotalBtn = document.getElementById('payTotalBtn');
const statusMessage = document.getElementById('statusMessage');

const confirmBtn = document.getElementById('confirmBtn');
const invoiceDetails = document.getElementById('invoiceDetails');
const clientName = document.getElementById('clientName');
const clientImage = document.getElementById('clientImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const generatePdfBtn3 = document.getElementById('generatePdfBtn3');


const payAllBtn = document.getElementById('payAllBtn');
const creditList = document.querySelector('.credit-list');
const totalAdeudadoSpan = document.getElementById('totalAdeudado');

// Datos simulados para el historial de crédito
const creditHistoryData = [
  { tipoCompra: 'Producto 1', numFactura: 'F12345', fechaFactura: '2023-08-01', valor: '$100.00' },
  { tipoCompra: 'Producto 2', numFactura: 'F12346', fechaFactura: '2023-08-10', valor: '$150.00' },
  { tipoCompra: 'Producto 3', numFactura: 'F12347', fechaFactura: '2023-08-15', valor: '$250.00' },
  // ... (más elementos)
];

// Calcula el total de las facturas adeudadas
function updateTotalAdeudado() {
  const totalAdeudado = creditHistoryData.reduce((total, factura) => total + parseFloat(factura.valor.slice(1)), 0);
  totalAdeudadoSpan.textContent = `$${totalAdeudado.toFixed(2)}`;
}

const totalAdeudado = creditHistoryData.reduce((total, factura) => total + parseFloat(factura.valor.slice(1)), 0);


openModalBtn.addEventListener('click', () => {
  statusMessage.textContent = totalAdeudado > 0 ? 'Adeudo' : 'Paz y Salvo';
  loadCreditHistory();
  updateTotalAdeudado();
  modal.style.display = 'block';
});

openModalBtn1.addEventListener('click', () => {
  statusMessage.textContent = totalAdeudado > 0 ? 'Adeudo' : 'Paz y Salvo';
  loadCreditHistory();
  updateTotalAdeudado();
  modal.style.display = 'block';
});

  openModalBtn2.addEventListener('click', () => {
    // Simulamos que se obtienen los detalles de la factura de la base de datos
    const tipoCompra = 'Compra Mercado';
    const numFactura = '12345';
    const fechaFactura = '2023-08-04';
    const valorFactura = '$100.00';
  
    invoiceDetails.innerHTML = `
      <p><strong>Tipo de Compra:</strong> ${tipoCompra}</p>
      <p><strong>N° de Factura:</strong> ${numFactura}</p>
      <p><strong>Fecha de Factura:</strong> ${fechaFactura}</p>
      <p><strong>Valor:</strong> ${valorFactura}</p>
    `;
  
    modal2.style.display = 'block';
  });

  openModalBtn3.addEventListener('click', () => {
    // Simulamos que se obtiene la información del cliente de la base de datos
    const cliente = {
      nombre: 'Carlos López',
      direccion: '123 Calle Principal',
      telefono: '555-1234',
      email: 'carlos123@example.com',
      foto: 'imagen_del_cliente.jpg'
    };
  
    clientName.textContent = cliente.nombre;
    clientImage.src = cliente.foto;
    currentPage = 0;
    updateCreditHistory1();
    modal3.style.display = 'block';
  });



  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

closeModalBtn2.addEventListener('click', () => {
  modal2.style.display = 'none';
});

confirmBtn.addEventListener('click', () => {
  // Lógica para guardar el pago en la base de datos y actualizar el estado de cuenta e historial de crédito del cliente
  // Puedes implementar aquí la lógica de conexión a la base de datos para guardar la información del pago
  alert('Pago realizado con éxito.');
  modal2.style.display = 'none';
});

closeModalBtn3.addEventListener('click', () => {
  modal3.style.display = 'none';
});

// Condiciones estado de cuenta mejorado

payAllBtn.addEventListener('click', () => {
  if (totalAdeudado > 0) {
    // Lógica para realizar el pago de todas las facturas
    // Actualiza la base de datos y el estado de cuenta del cliente
    statusMessage.textContent = 'Paz y Salvo';
    creditHistoryData.length = 0;
    creditList.innerHTML = '';
    updateTotalAdeudado(); // Actualiza el total adeudado a $0.00
    alert('Todas las facturas han sido pagadas.');
  } else {
    alert('El cliente no tiene facturas pendientes.');
  }
});

function loadCreditHistory() {
  let html = '';
  creditHistoryData.forEach((factura, index) => {
    html += '<div class="credit-item">';
    html += `<p><strong>Tipo de Compra:</strong> ${factura.tipoCompra}</p>`;
    html += `<p><strong>N° de Factura:</strong> ${factura.numFactura}</p>`;
    html += `<p><strong>Fecha de Factura:</strong> ${factura.fechaFactura}</p>`;
    html += `<p><strong>Valor:</strong> ${factura.valor}</p>`;
    html += `<button class="payBtn" data-index="${index}">Pagar</button>`;
    html += '</div>';
  });

  creditList.innerHTML = html;

  const payButtons = document.querySelectorAll('.payBtn');
  payButtons.forEach(button => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');
      payInvoice(index);
    });
  });
}

function payInvoice(index) {
  const factura = creditHistoryData[index];
  // Lógica para pagar la factura
  // Actualiza la base de datos y el estado de cuenta del cliente
  creditHistoryData.splice(index, 1);
  loadCreditHistory();
  updateTotalAdeudado();
  alert(`La factura ${factura.numFactura} ha sido pagada.`);
}





// condiciones ventana modal perfil cliente

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updateCreditHistory1();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < creditHistoryData.length - 1) {
    currentPage++;
    updateCreditHistory1();
  }
});

generatePdfBtn3.addEventListener('click', () => {
  // Lógica para generar el PDF con la información del perfil del cliente
  // Puedes implementar aquí la generación del PDF utilizando alguna librería o servicio
  alert('PDF generado exitosamente.');
});


// Datos simulados para el historial de crédito
const creditHistoryData1 = [
  { descripcion: 'Compra 1', numFactura: 'F12345', fechaFactura: '2023-08-01', valor: '$100.00' },
  { descripcion: 'Compra 2', numFactura: 'F12346', fechaFactura: '2023-08-10', valor: '$150.00' },
  { descripcion: 'Compra 3', numFactura: 'F12347', fechaFactura: '2023-08-15', valor: '$250.00' },
  // ... (más elementos)
];

let currentPage = 0;


function updateCreditHistory1() {
  const creditList1 = document.querySelector('.credit-list1');
  const creditItem = creditHistoryData1[currentPage];

  let html = '';
  creditHistoryData1.forEach((item, index) => {
    html += `<p><strong>Descripción:</strong> ${item.descripcion}</p>`;
    html += `<p><strong>N° de Factura:</strong> ${item.numFactura}</p>`;
    html += `<p><strong>Fecha de Factura:</strong> ${item.fechaFactura}</p>`;
    html += `<p><strong>Valor:</strong> ${item.valor}</p>`;
    if (index !== creditHistoryData1.length - 1) {
      html += '<hr>';
    }
  });

  creditList1.innerHTML = html;
} //fin



// ... (Código previo para obtener los datos del cliente y su historial de crédito)

// Calcular el total adeudado
const totalDebtValue = clientData.creditHistory.reduce((total, item) => total + item.valor, 0);
totalDebt.textContent = `$${totalDebtValue.toFixed(2)}`;

// Mostrar el mensaje informativo según el estado del cliente
if (totalDebtValue > 0) {
  statusMessage.textContent = 'Adeudo';
} else {
  statusMessage.textContent = 'Paz y Salvo';
}

// Agregar evento para pagar una factura individual
const payButtons = document.getElementsByClassName('pay-btn');
for (const button of payButtons) {
  button.addEventListener('click', () => {
    const row = button.parentNode.parentNode;
    const rowIndex = row.rowIndex;
    creditHistoryBody.deleteRow(rowIndex);

    // Actualizar el total adeudado después de pagar la factura
    const newTotalDebtValue = totalDebtValue - parseFloat(row.cells[3].textContent.substring(1));
    totalDebt.textContent = `$${newTotalDebtValue.toFixed(2)}`;

    // Mostrar el mensaje informativo según el estado del cliente
    if (newTotalDebtValue > 0) {
      statusMessage.textContent = 'Adeudo';
    } else {
      statusMessage.textContent = 'Paz y Salvo';
    }
  });
}

// Agregar evento para pagar el total
payTotalBtn.addEventListener('click', () => {
  // Simulamos el pago de todas las facturas
  creditHistoryBody.innerHTML = '';
  totalDebt.textContent = '$0.00';
  statusMessage.textContent = 'Paz y Salvo';
});