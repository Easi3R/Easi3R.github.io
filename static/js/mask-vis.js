document.addEventListener('DOMContentLoaded', () => {
    const thumbnailData = [
        'koala', 'mbike-trick', 'schoolgirls', 'dog-gooses', 
        'goat', 'rhino', 'crossing', 'elephant',
        'drift-chicane', 'bear', 'judo', 'bike-packing'
    ];

    const thumbnailsHtml = thumbnailData.map(name => `
        <img src="static/thumbs/${name}.jpg" 
             data-video="static/videos/mask/${name}.mp4"
             class="thumbnail mask-thumbnail" 
             alt="${name}" 
             style="cursor: pointer; width: 100px;">
    `).join('');

    const content = `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full panel-style">
                    <h2 class="title is-4">Dynamic Object Segmentation</h2>
                    <p style="max-width: 90%; margin: 0 auto; text-align: left;">
                        The refined dynamic attention map 
                        \\( \\mathbf{A}^{t=\\text{dyn}}_{\\text{fuse}} \\in \\mathbb{R}^{h \\times w} \\) 
                        is used to infer the dynamic object segmentation by
                        \\( \\mathbf{M}^{t}(x,y) = 𝟙[\\mathbf{A}^{t=\\text{dyn}}_{\\text{fuse}}(x,y) > \\alpha] \\), 
                        where \\( \\alpha \\) is an automatic image thresholding using <a href="https://en.wikipedia.org/wiki/Otsu%27s_method">Otsu's method</a>.
                    </p>
                    <br>
                    <div class="video-container">
                        <div class="video-labels">
                            <span class="video-label">Input Video</span>
                            <span class="video-label">MonST3R</span>
                            <span class="video-label">DAS3R</span>
                            <span class="video-label">Ours</span>
                            <span class="video-label">GT</span>
                        </div>
                        <div id="mask-video-container" style="width: 100%; position: relative; aspect-ratio: 4678/532;">
                            <video id="mask-video" autoplay muted loop playsinline disablePictureInPicture controlsList="nodownload nofullscreen" style="width: 100%; height: 100%;">
                                <source id="mask-video-source" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="thumbnail-container">
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

    const section = document.getElementById('mask-vis');
    section.innerHTML = content;
    section.style.display = 'block';

    const videoElement = document.getElementById('mask-video');
    const videoSource = document.getElementById('mask-video-source');
    const thumbnails = document.querySelectorAll('.mask-thumbnail');

    thumbnails[0].style.border = '3px solid #92A8D1';
    videoSource.src = thumbnails[0].dataset.video;
    videoElement.load();

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            
            thumbnails.forEach(t => t.style.border = '2px solid #fff');
            thumbnail.style.border = '3px solid #92A8D1';
            
            videoSource.src = thumbnail.dataset.video;
            videoElement.load();
            videoElement.play();
        });
    });

    videoElement.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
    });
});