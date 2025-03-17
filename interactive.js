const results = [
    [
      "people_dancing",
      [
        "/build/",
        "?playbackPath=/recordings/006545_mpii_test.viser",
        "&synchronizedVideoOverlay=/recordings/006545_mpii_test.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        "&darkMode",
      ],
      "./recordings/006545_mpii_test.jpg",
    ],
    [
      "cars2",
      [
        "/build/",
        "?playbackPath=/recordings/cars2.viser",
        "&synchronizedVideoOverlay=/recordings/cars2.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        "&darkMode",
      ],
      "./recordings/cars2.png",
    ],
    [
      "cats04",
      [
        "/build/",
        "?playbackPath=/recordings/cats04.viser",
        "&synchronizedVideoOverlay=/recordings/cats04.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        "&darkMode",
      ],
      "./recordings/cats04.png",
    ],
    [
      "people04",
      [
        "/build/",
        "?playbackPath=/recordings/people04.viser",
        "&synchronizedVideoOverlay=/recordings/people04.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        "&darkMode",
      ],
      "./recordings/people04.png",
    ],
    [
      "4ed63fb1",
      [
        "/build/",
        "?playbackPath=/recordings/4ed63fb1.viser",
        "&synchronizedVideoOverlay=/recordings/4ed63fb1.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        "&darkMode",
      ],
      "./recordings/4ed63fb1.png",
    ],
    [
      "06eb2803",
      [
        "/build/",
        "?playbackPath=/recordings/06eb2803.viser",
        "&synchronizedVideoOverlay=/recordings/06eb2803.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        "&darkMode",
      ],
      "./recordings/06eb2803.png",
    ],
    [
      "08aed382",
      [
        "/build/",
        "?playbackPath=/recordings/08aed382.viser",
        "&synchronizedVideoOverlay=/recordings/08aed382.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        "&darkMode",
      ],
      "./recordings/08aed382.png",
    ],
    [
      "8c898220",
      [
        "/build/",
        "?playbackPath=/recordings/8c898220.viser",
        "&synchronizedVideoOverlay=/recordings/8c898220.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        "&darkMode",
      ],
      "./recordings/8c898220.png",
    ],
    [
      "14a3d25c",
      [
        "/build/",
        "?playbackPath=/recordings/14a3d25c.viser",
        "&synchronizedVideoOverlay=/recordings/14a3d25c.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        "&darkMode",
      ],
      "./recordings/14a3d25c.png",
    ],
    [
      "people05",
      [
        "/build/",
        "?playbackPath=/recordings/people05.viser",
        "&synchronizedVideoOverlay=/recordings/people05.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        "&darkMode",
      ],
      "./recordings/people05.png",
    ],
    [
      "soldier",
      [
        "/build/",
        "?playbackPath=/recordings/soldier.viser",
        "&synchronizedVideoOverlay=/recordings/soldier.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        "&darkMode",
      ],
      "./recordings/soldier.png",
    ],
  ];
  
  function initializeResultSelector(resultsElement) {
    const selectorElement = resultsElement.querySelector(".results-selector");
    const resultsThumbnails = selectorElement.querySelector(
      ".results-thumbnails",
    );
    const prevButton = selectorElement.querySelector(".results-prev");
    const nextButton = selectorElement.querySelector(".results-next");
    let currentIndex = 0;
  
    function createIframe(src) {
      const iframe = document.createElement("iframe");
      console.log("Creating iframe with src", src);
      iframe.src = src;
      return iframe;
    }
  
    function showIframe(src) {
      const wrapper = resultsElement.querySelector(".iframe-wrapper");
      wrapper.innerHTML = "";
      const iframe = createIframe(Array.isArray(src) ? src.join("") : src);
      wrapper.appendChild(iframe);
    }

    function hideIframe() {
        const wrapper = resultsElement.querySelector(".iframe-wrapper");
        wrapper.innerHTML = ""; // Remove iframe from DOM
    }
  
    function updateSelection(index) {
      if (currentIndex !== index) {
          hideIframe(); // Hide previous iframe
      }
      currentIndex = index;
      resultsThumbnails
        .querySelectorAll("a")
        .forEach((a, i) =>
          a.setAttribute("data-selected", i === index ? "true" : "false"),
        );
      
      const selectedThumbnail = resultsThumbnails.children[index];
  
      // Scroll the selected thumbnail into view
      const thumbnailsContainer = resultsThumbnails;
      const scrollLeft =
        selectedThumbnail.offsetLeft -
        (thumbnailsContainer.clientWidth - selectedThumbnail.clientWidth) / 2;
      thumbnailsContainer.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
  
      // Update URL with the selected result
      const resultName = results[index][0].toLowerCase().replace(/\s+/g, "-");
      const currentPath = window.location.pathname;
      const newUrl = `${currentPath}?result=${resultName}`;
      history.pushState(null, "", newUrl);

      showIframe(results[index][1]);
    }
  
    results.forEach(([label, src, thumbnail], index) => {
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("data-selected", index === 0 ? "true" : "false");
      link.addEventListener("click", (e) => {
        e.preventDefault();
        updateSelection(index);
      });
  
      const img = document.createElement("img");
      img.src = thumbnail;
      img.alt =
        "Thumbnail that can be clicked to show a result of our method: " + label;
      img.title = label;
  
      link.appendChild(img);
      resultsThumbnails.appendChild(link);
    });
  
    prevButton.addEventListener("click", () => {
      updateSelection((currentIndex - 1 + results.length) % results.length);
    });
  
    nextButton.addEventListener("click", () => {
      updateSelection((currentIndex + 1) % results.length);
    });
  
    // Check URL for initial result selection
    const urlParams = new URLSearchParams(window.location.search);
    const initialResult = urlParams.get("result");
    if (initialResult) {
      const index = results.findIndex(
        (result) =>
          result[0].toLowerCase().replace(/\s+/g, "-") === initialResult,
      );
      if (index !== -1) {
        updateSelection(index);
      } else {
        showIframe(results[0][1]);
      }
    } else {
      showIframe(results[0][1]);
    }
  }
  
  // Initialize all result on the page
  document.querySelectorAll(".results").forEach(initializeResultSelector);