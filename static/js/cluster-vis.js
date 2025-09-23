document.addEventListener('DOMContentLoaded', () => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS_HTML';
    document.head.appendChild(script);

    const thumbnailData = [
        {src: 'dogs-scale', alt: 'dogs-scale'},
        {src: 'tennis', alt: 'tennis'},
        {src: 'drone', alt: 'drone'},
        {src: 'stroller', alt: 'stroller'},
        {src: 'snowboard', alt: 'snowboard'},
        {src: 'bike-packing', alt: 'bike-packing'},
        {src: 'lucia', alt: 'lucia'},
        {src: 'koala', alt: 'koala'},
        {src: 'breakdance-flare', alt: 'breakdance-flare'},
        {src: 'judo', alt: 'judo'},
        {src: 'hike', alt: 'hike'},
        {src: 'bear', alt: 'bear'}
    ];

    const thumbnailsHtml = thumbnailData.map(({src, alt}) => `
        <img src="static/thumbs/${src}.jpg" 
             data-video="static/videos/cluster/${src}.mp4"
             class="thumbnail cluster-thumbnail" 
             alt="${alt}" 
             style="cursor: pointer; width: 100px;">
    `).join('');

    const content = `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full panel-style">
                    <h2 class="title is-4">Cross-frame Feature Clustering</h2>
                    <p style="max-width: 90%; margin: 0 auto; text-align: justify;">
                        We observe that features from the DUSt3R encoder exhibit temporal consistency, with cluster assignments \\( {C}^t \\) from K-means remaining stable across frames.
                        This improves temporal consistency in dynamic segmentation \\( \\mathbf{A}^{t=\\text{dyn}}_{\\text{fuse}} \\) through clustering-guided temporal fusing.
                    </p>
                    <br>
                    <div style="position: relative; width: 95%; margin: 0 auto;">
                        <div style="display: flex; justify-content: space-between; margin-top: auto; align-items: center;">
                            <span style="flex: 1; text-align: center; font-size: 16px; font-weight: bold;">Input Video</span>
                            <span style="flex: 1; text-align: center; font-size: 16px; font-weight: bold;">Dynamic Attention \\( \\mathbf{A}^{t=\\text{dyn}} \\)</span>
                            <span style="flex: 1; text-align: center; font-size: 16px; font-weight: bold;">Cluster Assignment \\( {C}^t \\)</span>
                            <span style="flex: 1; text-align: center; font-size: 16px; font-weight: bold;">Fused Dynamic Attention \\( \\mathbf{A}^{t=\\text{dyn}}_{\\text{fuse}} \\)</span>
                        </div>
                        <div id="cluster-video-container" style="width: 100%; position: relative; aspect-ratio: 4678/660;">
                            <video id="cluster-video" autoplay muted loop playsinline disablePictureInPicture controlsList="nodownload nofullscreen" style="width: 100%; height: 100%;">
                                <source id="cluster-video-source" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="thumbnail-container" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin: 20px auto 10px;">
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

    const section = document.getElementById('cluster-vis');
    section.innerHTML = content;
    section.style.display = 'block';

    const videoElement = document.getElementById('cluster-video');
    const videoSource = document.getElementById('cluster-video-source');
    const thumbnails = document.querySelectorAll('.cluster-thumbnail');

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

    if (window.MathJax) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }
});