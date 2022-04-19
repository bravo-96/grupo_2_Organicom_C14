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
      imgFondo[0].classList.remove('show');
      imgFondo[1].classList.remove('show');
      imgFondo[2].classList.remove('show');
      imgFondo[3].classList.remove('show');

      const categoria = e.target.dataset.nombre_categoria;

      imgFondo.forEach((elm) => {
         if (elm.classList.contains(categoria)) {
            elm.classList.add('show');
         }
      });
   });

   elm.addEventListener('mouseleave', () => {
      imgFondo[0].classList.remove('show');
      imgFondo[1].classList.remove('show');
      imgFondo[2].classList.remove('show');
      imgFondo[3].classList.remove('show');
   });
});

// ------ CARRITO LATERAL ------

const btnCarrito = document.querySelector('.btn-carrito');
const carritoLateralContenedor = document.querySelector('.carrito-lateral');
const modalBg = document.querySelector('body > .modalBg');
const btnCerrarCarrito = document.querySelector(
   '.carrito-lateral > button.cerrar'
);

btnCarrito.addEventListener('click', () => {
   document.body.classList.add('modal-open');
   carritoLateralContenedor.classList.add('show');
   modalBg.style.display = 'block';
   modalBg.style.position = 'fixed';
});

btnCerrarCarrito.addEventListener('click', () => {
   document.body.classList.remove('modal-open');
   carritoLateralContenedor.classList.remove('show');
   modalBg.style.display = 'none';
});
modalBg.addEventListener('click', () => {
   document.body.classList.remove('modal-open');
   modalBg.style.display = 'none';
   carritoLateralContenedor.classList.remove('show');
});

// ------   CANTIDAD  ------

const cantidadBtnsResta = document.querySelectorAll(
   '.cantidad-input-contenedor .resta'
);
const cantidadBtnsSuma = document.querySelectorAll(
   '.cantidad-input-contenedor .suma'
);

cantidadBtnsResta.forEach((elm) => {
   elm.addEventListener('click', (e) => {
      modificarCantidad('resta', e);
   });
});

cantidadBtnsSuma.forEach((elm) => {
   elm.addEventListener('click', (e) => {
      modificarCantidad('suma', e);
   });
});

function modificarCantidad(op, e) {
   const elmPadre = e.target.closest('.cantidad-input-contenedor');
   const cantidadInput = elmPadre.querySelector('input[type="text"]');

   if (op === 'resta') {
      cantidadInput.value = +cantidadInput.value - 1;
   } else {
      cantidadInput.value = +cantidadInput.value + 1;
   }
   cantidadInput.value = +cantidadInput.value < 1 ? 1 : cantidadInput.value;
}
