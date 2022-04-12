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
const imgFondo = document.querySelector('.categorias-contenedor .imagen-fondo');

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
         const categoria = e.target.dataset.nombre_categoria;

         imgFondo.classList = imgFondo.classList[0];

         switch (categoria) {
            case 'cereales':
               imgFondo.classList.add('cereales');
               break;
            case 'frutos-secos':
               imgFondo.classList.add('frutos-secos');
               break;
            case 'jugos':
               imgFondo.classList.add('jugos');
               break;
            case 'infusiones':
               imgFondo.classList.add('infusiones');
               break;
         }
      }, 250);
   });
});

// ------------
