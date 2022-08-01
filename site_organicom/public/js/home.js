document.addEventListener('DOMContentLoaded', function () {
   new Splide('#bannerSlide', {
      type: 'loop',
      perPage: 1,
      pagination: true,
      arrowPath: '0',
      autoplay: true,
      interval: 5000,
   }).mount();

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
         1200: {
            perPage: 4,
         },
      },
      perPage: 5,
      perMove: 2,
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
         1200: {
            perPage: 4,
         },
      },
      perPage: 5,
      perMove: 2,
      pagination: false,
      arrowPath: '0',
      gap: '2rem',
      padding: '0.5rem',
   }).mount();

   new Splide('#frutosSecosSlider', {
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
         1200: {
            perPage: 4,
         },
      },
      perPage: 5,
      perMove: 2,
      pagination: false,
      arrowPath: '0',
      gap: '2rem',
      padding: '0.5rem',
   }).mount();

   new Splide('#jugosSlider', {
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
         1200: {
            perPage: 4,
         },
      },
      perPage: 5,
      perMove: 2,
      pagination: false,
      arrowPath: '0',
      gap: '2rem',
      padding: '0.5rem',
   }).mount();
});
