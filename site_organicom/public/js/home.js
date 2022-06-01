document.addEventListener('DOMContentLoaded', function () {
   new Splide('#popularesSlider', {
      breakpoints: {
         450: {
            perPage: 1,
         },
         600: {
            perPage: 2,
         },
         800: {
            perPage: 3,
            gap: '1rem',
         },
         950: {
            perPage: 4,
         },
      },
      perPage: 5,
      pagination: false,
      arrowPath: '0',
      gap: '2rem',
      padding: '0.5rem',
   }).mount();

   new Splide('#ofertasSlider', {
      breakpoints: {
         450: {
            perPage: 1,
         },
         600: {
            perPage: 2,
         },
         800: {
            perPage: 3,
            gap: '1rem',
         },
         950: {
            perPage: 4,
         },
      },
      perPage: 5,
      pagination: false,
      arrowPath: '0',
      gap: '2rem',
      padding: '0.5rem',
   }).mount();
});
