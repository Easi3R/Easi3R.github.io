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
    
    const videos = carousel.querySelectorAll('video');
    let loadedVideos = 0;
    
    videos.forEach(video => {
      video.addEventListener('loadeddata', () => {
        loadedVideos++;
        if (loadedVideos === videos.length) {
          var carousels = bulmaCarousel.attach('.carousel', options);
          carousel.style.visibility = 'visible';
        }
      });
    });
});
  