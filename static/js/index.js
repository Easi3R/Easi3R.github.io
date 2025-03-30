document.addEventListener('DOMContentLoaded', () => {
  var options = {
			slidesToScroll: 3,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			initialSlide: 2,
			autoplay: false,
			autoplaySpeed: 6000,
			pagination: false,
  };

  // Initialize all div with carousel class
  var carousels = bulmaCarousel.attach('.carousel', options);

  const videos = document.querySelectorAll('#carousel-results video');
  let loadedCount = 0;
  const requiredLoads = 3;

  videos.forEach((video) => {
    video.addEventListener('loadeddata', () => {
      loadedCount++;
      if (loadedCount >= requiredLoads) {
        document.getElementById('carousel-results').style.visibility = 'visible';
      }
    });
  });
});

window.HELP_IMPROVE_VIDEOJS = false;

