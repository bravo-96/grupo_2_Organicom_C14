const swiper = new Swiper('.carousel1', {
    // Optional parameters  
    slidesPerView: 1,  
    loop: true,    
    centeredSlides: true,
    spaceBetween: 10,
  
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',  
    },  
  breakpoints: {
    768:{
      slidesPerView: 3,
    },
    986:{
      slidesPerView: 4,
    }
  }
  
  
  })