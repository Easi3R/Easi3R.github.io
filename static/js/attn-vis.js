document.addEventListener('DOMContentLoaded', () => {
    const thumbnailData = [
        'boxing-fisheye', 'dance-jump', 'koala', 'car-shadow', 
        'swing', 'bear', 'hike', 'dog-gooses',
        'stunt', 'horsejump-high', 'car-turn', 'soapbox'
    ];

    const thumbnailsHtml = thumbnailData.map(name => `
        <img src="static/thumbs/${name}.jpg" 
             data-video="static/videos/attn/${name}.mp4"
             class="thumbnail attn-thumbnail" 
             alt="${name}" 
             style="cursor: pointer; width: 100px;">
    `).join('');

    const content = `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full panel-style">
                    <h2 class="title is-4">Spatial and Temporal Attention Mechanism</h2>
                    <p style="max-width: 90%; margin: 0 auto; text-align: justify;">
                        To this end, we identify attention activations attributed to object motion. We infer the dynamic attention map for frame \\(a\\) by computing the joint attention using the element-wise product:
                        </p>
                    <div style="max-width: 90%; margin: 0 auto; overflow-x: auto; padding: 10px 0;">
                        <p style="text-align: center; white-space: nowrap; min-width: max-content;">
                            \\( \\mathbf{A}^{a=\\text{dyn}} = (1-\\mathbf{A}^{a=\\text{src}}_{\\mu}) \\cdot \\mathbf{A}^{a=\\text{src}}_{\\sigma} \\cdot \\mathbf{A}^{a=\\text{ref}}_{\\mu} \\cdot (1-\\mathbf{A}^{a=\\text{ref}}_{\\sigma}) \\)
                        </p>
                    </div>
                    <br>
                    <div style="position: relative; width: 95%; margin: 0 auto;">
                        <video id="attn-video" autoplay muted loop playsinline disablePictureInPicture controlsList="nodownload nofullscreen"
                               style="display: none; position: absolute; z-index: 10; top: 0; left: 0; transform: translateY(45%); width: 100%;">
                            <source id="attn-video-source" type="video/mp4">
                        </video>
                        <img src="static/images/attn_label.png" alt="attn_label" 
                             style="width: 100%; position: relative; z-index: 1;">
                    </div>
                    <div class="thumbnail-container" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin: 20px auto 10px; max-width: 100%;">
                        ${thumbnailsHtml}
                    </div>
                </div>
            </div>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        .thumbnail {
            border-radius: 6px;
            border: 2px solid #fff;
            box-shadow: 0 0 4px #888;
            width: 100px;
            height: 70px;
            object-fit: cover;
            transition: transform 0.3s ease;
        }
        .thumbnail:hover { transform: scale(1.1); }
    `;
    document.head.appendChild(style);

    const section = document.getElementById('attn-vis');
    section.innerHTML = content;
    section.style.display = 'block';

    const videoElement = document.getElementById('attn-video');
    const videoSource = document.getElementById('attn-video-source');
    const thumbnails = document.querySelectorAll('.attn-thumbnail');

    thumbnails[0].style.border = '3px solid #92A8D1';
    videoSource.src = thumbnails[0].dataset.video;
    videoElement.style.display = 'block';
    videoElement.load();

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            thumbnails.forEach(t => t.style.border = '2px solid #fff');
            this.style.border = '3px solid #92A8D1';
            
            videoSource.src = this.dataset.video;
            videoElement.style.display = 'block';
            videoElement.load();
            videoElement.play();
        });
    });

    videoElement.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
    });
});

