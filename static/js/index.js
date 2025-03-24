document.addEventListener('DOMContentLoaded', () => {
    var options = {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      pagination: false,
      autoplay: true,
      autoplaySpeed: 5000
    };
  
    const carousel = document.querySelector('#results-carousel');
    if (carousel) {
      carousel.style.visibility = 'hidden';
      
      const videos = carousel.querySelectorAll('video');
      videos.forEach((video, index) => {
        const source = video.querySelector('source');
        const videoUrl = source.src;
        
        if (index !== 0 && index !== 1 && index !== videos.length - 1) {
          video.preload = 'none';
          source.dataset.originalSrc = videoUrl;
          source.removeAttribute('src');
        }
      });
    }
    
    var carousels = bulmaCarousel.attach('.carousel', options);
    
    if (carousel) {
      carousel.style.visibility = 'visible';
      
      carousels[0].on('slide:before', event => {
        const nextSlide = event.target.slides[event.target.nextIndex];
        if (nextSlide) {
          const video = nextSlide.querySelector('video');
          const source = video.querySelector('source');
          if (!source.src && source.dataset.originalSrc) {
            source.src = source.dataset.originalSrc;
            video.load();
          }
        }
      });
    }
});
  