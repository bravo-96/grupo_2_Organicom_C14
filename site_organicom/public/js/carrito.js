// ------------

const btnMostrarResumen = document.querySelector(
   '.resumen-compra .ver-ocultar'
);
const cuerpoResumen = document.querySelector('.resumen-compra .cuerpo');
const cuerpoResumenHeight = document.querySelector(
   '.resumen-compra .cuerpo .cuerpo-height'
);
const cuerpoHeight =
   cuerpoResumenHeight.clientHeight + cuerpoResumenHeight.style.paddingTop;

btnMostrarResumen.addEventListener('click', () => {
   if (!cuerpoResumen.style.height) {
      cuerpoResumen.style.height = `${cuerpoHeight}px`;
      btnMostrarResumen.textContent = 'Ocultar resúmen';
      btnMostrarResumen.classList.add('show');
   } else {
      cuerpoResumen.style.height = '';
      btnMostrarResumen.textContent = 'Ver resúmen';
      btnMostrarResumen.classList.remove('show');
   }
});

// ------------

const btnEditarProductos = document.querySelector('.btn-editar-productos');

btnEditarProductos.addEventListener('click', () => {
   document.body.classList.add('modal-open');
   carritoLateralContenedor.classList.add('show');
   modalBg.style.display = 'block';
   modalBg.style.position = 'fixed';
});
