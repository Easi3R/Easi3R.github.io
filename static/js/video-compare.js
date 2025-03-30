function initializeMediaSection(options) {
    const {
        element,
        source,
        thumbnails,
        descriptionId,
        defaultStyles = {
            normal: '2px solid #fff',
            active: '3px solid #92A8D1'
        }
    } = options;

    if (thumbnails.length === 0) return;

    thumbnails[0].style.border = defaultStyles.active;
    source.src = thumbnails[0].getAttribute('data-video');
    element.load();
    element.play();
    
    const descElement = document.getElementById(descriptionId);
    if (descElement) {
        const initialDescription = thumbnails[0].getAttribute('data-description') || '';
        descElement.textContent = initialDescription;
    }

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            thumbnails.forEach(t => t.style.border = defaultStyles.normal);
            this.style.border = defaultStyles.active;
            
            source.src = this.getAttribute('data-video');
            element.load();
            element.play();
            
            const description = this.getAttribute('data-description') || '';
            if (descElement) {
                descElement.textContent = description;
                descElement.style.height = "50px";
                descElement.style.overflow = "auto";
            }
        });
    });
}

const style = document.createElement('style');
style.innerHTML = `
    .thumbnail {
        border-radius: 6px;
        box-shadow: 0 0 4px #888;
        width: 100px;
        height: 70px;
        object-fit: cover;
        transition: transform 0.3s ease;
        vertical-align: bottom;
        cursor: pointer;
    }

    .thumbnail:hover {
        transform: scale(1.1);
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function () {
    const sections = [
        {
            element: document.getElementById('compare-video'),
            source: document.getElementById('compare-video-source'),
            thumbnails: document.querySelectorAll('.compare-thumbnail'),
            descriptionId: 'compare-description'
        },
        {
            element: document.getElementById('compare-video-das3r'),
            source: document.getElementById('compare-video-source-das3r'),
            thumbnails: document.querySelectorAll('.compare-thumbnail-das3r'),
            descriptionId: 'compare-description-das3r'
        },
        {
            element: document.getElementById('compare-video-cut3r'),
            source: document.getElementById('compare-video-source-cut3r'),
            thumbnails: document.querySelectorAll('.compare-thumbnail-cut3r'),
            descriptionId: 'compare-description-cut3r'
        }
    ];

    sections.forEach(section => initializeMediaSection(section));

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

    const disentangleVideo = document.getElementById('disentangle-video');
    const disentangleThumbnails = document.querySelectorAll('.disentangle-video-thumbnail');
    
    if(disentangleThumbnails.length > 0) {
        disentangleThumbnails[0].style.border = '3px solid #92A8D1';
    }

    disentangleThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            disentangleThumbnails.forEach(t => {
                t.style.border = '2px solid #fff';
            });
            
            this.style.border = '3px solid #92A8D1';
            
            const videoSrc = this.getAttribute('data-video');
            disentangleVideo.querySelector('source').src = videoSrc;
            disentangleVideo.load();
            disentangleVideo.play();
        });
    });
}); 