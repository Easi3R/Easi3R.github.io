document.addEventListener('DOMContentLoaded', function () {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS_HTML';
    document.head.appendChild(script);

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
                        <div id="cluster-video-container" style="width: 100%; position: relative; aspect-ratio: 4678/660; background-color: #ffffff;">
                            <video id="cluster-video" width="100%" height="100%" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain;" autoplay muted loop>
                                <source id="cluster-video-source" src="" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="thumbnail-container" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 20px; margin-bottom: 10px; max-width: 100%;">
                        <img src="static/thumbs/dogs-scale.jpg" data-video="static/videos/cluster/dogs-scale.mp4" class="thumbnail cluster-thumbnail" alt="dogs-scale" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/tennis.jpg" data-video="static/videos/cluster/tennis.mp4" class="thumbnail cluster-thumbnail" alt="tennis" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/drone.jpg" data-video="static/videos/cluster/drone.mp4" class="thumbnail cluster-thumbnail" alt="drone" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/stroller.jpg" data-video="static/videos/cluster/stroller.mp4" class="thumbnail cluster-thumbnail" alt="stroller" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/snowboard.jpg" data-video="static/videos/cluster/snowboard.mp4" class="thumbnail cluster-thumbnail" alt="snowboard" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/bike-packing.jpg" data-video="static/videos/cluster/bike-packing.mp4" class="thumbnail cluster-thumbnail" alt="bike-packing" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/lucia.jpg" data-video="static/videos/cluster/lucia.mp4" class="thumbnail cluster-thumbnail" alt="lucia" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/koala.jpg" data-video="static/videos/cluster/koala.mp4" class="thumbnail cluster-thumbnail" alt="koala" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/breakdance-flare.jpg" data-video="static/videos/cluster/breakdance-flare.mp4" class="thumbnail cluster-thumbnail" alt="breakdance-flare" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/judo.jpg" data-video="static/videos/cluster/judo.mp4" class="thumbnail cluster-thumbnail" alt="judo" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/hike.jpg" data-video="static/videos/cluster/hike.mp4" class="thumbnail cluster-thumbnail" alt="hike" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/bear.jpg" data-video="static/videos/cluster/bear.mp4" class="thumbnail cluster-thumbnail" alt="bear" style="cursor: pointer; width: 100px;">
                    </div>
                </div>
            </div>
        </div><br>
    `;

    const section = document.getElementById('cluster-vis');
    section.innerHTML = content;
    section.style.display = 'block';

    if (window.MathJax) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }

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

    const thumbnails = document.querySelectorAll('.cluster-thumbnail');
    const videoElement = document.getElementById('cluster-video');
    const videoSource = document.getElementById('cluster-video-source');

    thumbnails.forEach(thumbnail => {
        thumbnail.style.border = '2px solid #fff';
    });

    thumbnails[0].style.border = '3px solid #92A8D1';

    const defaultVideoSrc = thumbnails[0].getAttribute('data-video');
    videoSource.src = defaultVideoSrc;
    videoElement.load();
    videoElement.play();

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            thumbnails.forEach(t => {
                t.style.border = '2px solid #fff';
            });
            
            this.style.border = '3px solid #92A8D1';
            
            const videoSrc = this.getAttribute('data-video');
            
            videoElement.pause();
            
            videoSource.src = videoSrc;
            videoElement.load();
            videoElement.play();
        });
    });

    if (section) {
        section.style.display = 'block';
    }
});