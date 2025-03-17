document.addEventListener("DOMContentLoaded", function () {
    // Get all video elements within carousel with the class "item-vid5"
    var carouselVideos = document.querySelectorAll(".item-vid5 video");

    var options = {
      root: null, // Use the viewport as the root element
      rootMargin: "0px", // No margin applied to the root
      threshold: 0.5, // 50% of the video must be visible to trigger loading
    };

    // Create a new Intersection Observer
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Directly address the video element from the entry target
          var video = entry.target;
          var source = video.querySelector("source"); // Find the source element within the video
          source.src = source.dataset.src; // Set src from data-src attribute
          source.removeAttribute("data-src"); // Remove attribute to avoid resetting src
          video.load(); // Load the video
          if (video.autoplay) {
            video.play(); // Play the video if autoplay is enabled
          }

          // Stop observing the video once it starts loading
          observer.unobserve(video);
        }
      });
    }, options);

    // Observe each video element
    carouselVideos.forEach(function (video) {
      observer.observe(video);
    });
});
