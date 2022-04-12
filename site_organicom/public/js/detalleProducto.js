const btnMenu = document.querySelector('.btn-menu');
const navContenedor = document.querySelector('.categorias-contenedor');
const btnCuenta = document.querySelector('.btn-cuenta');
const contendorLoginRegister = document.querySelector(
   '.contendor-login-register'
);
const btnBuscar = document.querySelector('.btn-buscar');
const barraBusqueda = document.querySelector('.barra-busqueda');

const cantidadInput = document.querySelector(
   '.cantidad-input-contenedor input'
);
const cantidadBtnResta = document.querySelector(
   '.cantidad-input-contenedor .resta'
);
const cantidadBtnSuma = document.querySelector(
   '.cantidad-input-contenedor .suma'
);

const btnFavorito = document.querySelector('.favorito-contenedor p.favorito');
const iconoFavorito = document.querySelector(
   '.favorito-contenedor p.favorito .icono'
);

btnFavorito.addEventListener('click', () => {
   iconoFavorito.classList.toggle('active');
   if (iconoFavorito.classList.contains('active')) {
      btnFavorito.querySelector('span:first-child').textContent = "Quitar de favoritos"
   } else{
      btnFavorito.querySelector('span:first-child').textContent = "Agregar a favoritos"

   }
});

cantidadBtnResta.addEventListener('click', () => {
   modificarCantidad('resta');
   if (cantidadInput.value === '0') {
      cantidadBtnResta.classList.add('disabled');
   }
});
cantidadBtnSuma.addEventListener('click', () => modificarCantidad('suma'));

function modificarCantidad(op) {
   if (op === 'resta') {
      cantidadInput.value = +cantidadInput.value - 1;
   } else {
      cantidadInput.value = +cantidadInput.value + 1;
   }
   cantidadInput.value = +cantidadInput.value < 0 ? 0 : cantidadInput.value;
}

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
