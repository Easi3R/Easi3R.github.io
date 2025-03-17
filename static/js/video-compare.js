document.addEventListener('DOMContentLoaded', function () {
    const videoElement = document.getElementById('compare-video');
    const videoSource = document.getElementById('compare-video-source');
    const thumbnails = document.querySelectorAll('.compare-thumbnail');
    
    const videoElementDas3r = document.getElementById('compare-video-das3r');
    const videoSourceDas3r = document.getElementById('compare-video-source-das3r');
    const thumbnailsDas3r = document.querySelectorAll('.compare-thumbnail-das3r');
    
    const videoElementCut3r = document.getElementById('compare-video-cut3r');
    const videoSourceCut3r = document.getElementById('compare-video-source-cut3r');
    const thumbnailsCut3r = document.querySelectorAll('.compare-thumbnail-cut3r');
    
    [videoElement, videoElementDas3r, videoElementCut3r].forEach(video => {
        if (video) {
            video.style.margin = "0 auto";
            video.style.display = "block";
        }
    });
    
    if (thumbnails.length > 0) {
        const defaultVideoSrc = thumbnails[0].getAttribute('data-video');
        videoSource.src = defaultVideoSrc;
        videoElement.load();
        videoElement.play();
    }
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            videoSource.src = videoSrc;
            videoElement.load();
            videoElement.play();
            
            const description = this.getAttribute('data-description');
            if (description && document.getElementById('compare-description')) {
                document.getElementById('compare-description').textContent = description;
            }
        });
    });
    
    if (thumbnailsDas3r.length > 0) {
        const defaultVideoSrc = thumbnailsDas3r[0].getAttribute('data-video');
        videoSourceDas3r.src = defaultVideoSrc;
        videoElementDas3r.load();
        videoElementDas3r.play();
    }
    
    thumbnailsDas3r.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            videoSourceDas3r.src = videoSrc;
            videoElementDas3r.load();
            videoElementDas3r.play();
            
            const description = this.getAttribute('data-description');
            if (description && document.getElementById('compare-description-das3r')) {
                document.getElementById('compare-description-das3r').textContent = description;
            }
        });
    });
    
    if (thumbnailsCut3r.length > 0) {
        const defaultVideoSrc = thumbnailsCut3r[0].getAttribute('data-video');
        videoSourceCut3r.src = defaultVideoSrc;
        videoElementCut3r.load();
        videoElementCut3r.play();
    }
    
    thumbnailsCut3r.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            videoSourceCut3r.src = videoSrc;
            videoElementCut3r.load();
            videoElementCut3r.play();
            
            const description = this.getAttribute('data-description');
            if (description && document.getElementById('compare-description-cut3r')) {
                document.getElementById('compare-description-cut3r').textContent = description;
            }
        });
    });

    const style = document.createElement('style');
    style.innerHTML = `
        .thumbnail {
            border-radius: 6px;
            border: 2px solid #fff;
            box-shadow: 0 0 4px #888;
            width: 100px;
            height: 70px;
            object-fit: cover;
            transition: transform 0.3s ease;
            vertical-align: bottom;
        }

        .thumbnail:hover {
            transform: scale(1.1);
        }
    `;
    document.head.appendChild(style);
}); 