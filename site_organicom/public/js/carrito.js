// ------ Heder & Footer ------
const btnMenu = document.querySelector('.btn-menu');
const navContenedor = document.querySelector('.categorias-contenedor');
const btnCuenta = document.querySelector('.btn-cuenta');
const contendorLoginRegister = document.querySelector(
   '.contendor-login-register'
);
const btnBuscar = document.querySelector('.btn-buscar');
const barraBusqueda = document.querySelector('.barra-busqueda');

const listaLinksCategorias = document.querySelectorAll('.link-categoria');
const imgFondo = document.querySelectorAll(
   '.categorias-contenedor .imagen-fondo'
);

btnMenu.addEventListener('click', () => {
   navContenedor.classList.toggle('show');
   btnMenu.classList.toggle('active');
});

btnCuenta.addEventListener('click', () => {
   contendorLoginRegister.classList.toggle('show');
   btnCuenta.classList.toggle('active');
});
btnBuscar.addEventListener('click', () => {
   barraBusqueda.classList.toggle('show');
   btnBuscar.classList.toggle('active');
});

listaLinksCategorias.forEach((elm) => {
   elm.addEventListener('mouseenter', (e) => {
      setTimeout(() => {
         imgFondo[0].style.opacity = '0';
         imgFondo[1].style.opacity = '0';
         imgFondo[2].style.opacity = '0';
         imgFondo[3].style.opacity = '0';
         
         const categoria = e.target.dataset.nombre_categoria;

         imgFondo.forEach((elm) => {
            if (elm.classList.contains(categoria)) {
               elm.style.opacity = '1';
            }
         });
      }, 300);
   });
});

// ------------

const cantidadInput = document.querySelector(
   '.cantidad-input-contenedor input'
);
const cantidadBtnResta = document.querySelector(
   '.cantidad-input-contenedor .resta'
);
const cantidadBtnSuma = document.querySelector(
   '.cantidad-input-contenedor .suma'
);

cantidadBtnResta.addEventListener('click', () => {
   modificarCantidad('resta');
});
cantidadBtnSuma.addEventListener('click', () => modificarCantidad('suma'));

function modificarCantidad(op) {
   if (op === 'resta') {
      cantidadInput.value = +cantidadInput.value - 1;
   } else {
      cantidadInput.value = +cantidadInput.value + 1;
   }
   cantidadInput.value = +cantidadInput.value < 1 ? 1 : cantidadInput.value;
}
