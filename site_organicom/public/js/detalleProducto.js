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

// slider ------------------------------------

new Splide('#sliderRecomendados', {
   pagination: false,
   arrowPath: '0',
}).mount();

// // thumbnail ----------------------------------
// document.addEventListener('DOMContentLoaded', function () {
//    const main = new Splide('#main-carousel', {
//       pagination: false,
//       arrowPath: '0',
//    });

//    const thumbnails = new Splide('#thumbnail-carousel', {
//       gap: 3,
//       drag: false,
//       perMove: 1,
//       perPage: 4,
//       // fixedWidth: 70,
//       focus: 'center',
//       arrows: false,
//       pagination: false,
//       isNavigation: true,
//    });

//    main.sync(thumbnails);
//    main.mount();
//    thumbnails.mount();
// });
