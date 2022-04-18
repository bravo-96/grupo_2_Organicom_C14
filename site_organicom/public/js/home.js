let btn = document.getElementById('animate').addEventListener('click', (e) => {
   document.body.classList.toggle('animate');
});

const swiper = new Swiper('.carousel1', {
   // Optional parameters

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   breakoints: {
      640: {},
   },
   // And if we need scrollbar
   // scrollbar: {
   //   el: '.swiper-scrollbar',
   // },
});

const slide2 = new Swiper('.carousel2', {
   slidesPerView: 2,
   centeredSlides: true,
   spaceBetween: 30,

   pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   breakpoints: {
      640: {
         slidesPerView: 4,
      },
   },
});
