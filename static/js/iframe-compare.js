document.addEventListener('DOMContentLoaded', function() {
    setupCompareSection(
        'left-iframe', 
        'right-iframe', 
        '.viser-thumbnail', 
        'compare-description'
    );
    
    setupCompareSection(
        'left-iframe-das', 
        'right-iframe-das', 
        '.viser-thumbnail-das', 
        'compare-description-das'
    );
    
    setupCompareSection(
        'left-iframe-cut', 
        'right-iframe-cut', 
        '.viser-thumbnail-cut', 
        'compare-description-cut'
    );
    
    const style = document.createElement('style');
    style.innerHTML = `
        .viser-thumbnail, .viser-thumbnail-das, .viser-thumbnail-cut {
            border-radius: 6px;
            box-shadow: 0 0 4px #888;
            width: 100px;
            height: 70px;
            object-fit: cover;
            transition: transform 0.3s ease;
            vertical-align: bottom;
            cursor: pointer;
        }

        .viser-thumbnail:hover, .viser-thumbnail-das:hover, .viser-thumbnail-cut:hover {
            transform: scale(1.1);
        }
    `;
    document.head.appendChild(style);
    
    function setupCompareSection(leftIframeId, rightIframeId, thumbnailSelector, descriptionId) {
        const leftIframe = document.getElementById(leftIframeId);
        const rightIframe = document.getElementById(rightIframeId);
        const thumbnails = document.querySelectorAll(thumbnailSelector);
        const compareDescription = document.getElementById(descriptionId);
        
        if (!leftIframe || !rightIframe || thumbnails.length === 0 || !compareDescription) {
            return;
        }
        
        thumbnails.forEach(thumbnail => {
            thumbnail.style.border = '2px solid #fff';
        });
        
        thumbnails[0].style.border = '3px solid #92A8D1';
        
        const leftViser = thumbnails[0].getAttribute('data-left-viser');
        const rightViser = thumbnails[0].getAttribute('data-right-viser');
        const description = thumbnails[0].getAttribute('data-description');
        
        leftIframe.src = `https://Easi3R.github.io/build/?playbackPath=${leftViser}`;
        rightIframe.src = `https://Easi3R.github.io/build/?playbackPath=${rightViser}`;
        
        compareDescription.textContent = description;
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                thumbnails.forEach(t => {
                    t.style.border = '2px solid #fff';
                });
                
                this.style.border = '3px solid #92A8D1';
                
                const leftViser = this.getAttribute('data-left-viser');
                const rightViser = this.getAttribute('data-right-viser');
                const description = this.getAttribute('data-description');
                
                leftIframe.src = `https://Easi3R.github.io/build/?playbackPath=${leftViser}`;
                rightIframe.src = `https://Easi3R.github.io/build/?playbackPath=${rightViser}`;
                
                compareDescription.textContent = description;
            });
        });
    }
}); 