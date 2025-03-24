document.addEventListener('DOMContentLoaded', () => {
    var options = {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      pagination: false,
      autoplay: true,
      autoplaySpeed: 5000,
    };
  
    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
  });
  