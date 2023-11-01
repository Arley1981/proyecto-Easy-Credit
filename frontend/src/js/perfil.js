// Puedes usar JavaScript para obtener los datos del cliente desde una base de datos
// y luego actualizar los campos en el HTML con la información correspondiente.

// Por ejemplo, aquí simulo la obtención de datos del cliente y su historial de crédito y actualizo los campos en el HTML.
document.addEventListener('DOMContentLoaded', () => {
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const totalDebt = document.getElementById('totalDebt');
  
    // Datos del cliente (simulación)
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
  
    // Actualizar campos en el HTML con los datos del cliente
    fullName.textContent = clientData.fullName;
    email.textContent = clientData.email;
    phone.textContent = clientData.phone;
  
    // Calcular el total adeudado
    const totalDebtValue = clientData.creditHistory.reduce((total, item) => total + item.valorDeuda, 0);
    totalDebt.textContent = `$${totalDebtValue.toFixed(2)}`;
    
    // Agregar evento para cerrar la ventana al hacer clic en el icono de cerrar
    const closeBtn = document.getElementById('closeBtn');
    closeBtn.addEventListener('click', () => {
      window.history.back(); // Regresar a la pantalla anterior
    });
  });