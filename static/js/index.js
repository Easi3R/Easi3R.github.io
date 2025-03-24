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
  
    const carousel = document.querySelector('#results-carousel');
    if (carousel) {
      carousel.style.visibility = 'hidden';
    }
    
    var carousels = bulmaCarousel.attach('.carousel', options);
    
    if (carousel) {
      carousel.style.visibility = 'visible';
    }
});
  