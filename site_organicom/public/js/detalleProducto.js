// ------------

const btnFavorito = document.querySelector('.favorito-contenedor p.favorito');
const iconoFavorito = document.querySelector(
   '.favorito-contenedor p.favorito .icono'
);

btnFavorito.addEventListener('click', () => {
   iconoFavorito.classList.toggle('active');
   if (iconoFavorito.classList.contains('active')) {
      btnFavorito.querySelector('span:first-child').textContent =
         'Quitar de favoritos';
   } else {
      btnFavorito.querySelector('span:first-child').textContent =
         'Agregar a favoritos';
   }
});
