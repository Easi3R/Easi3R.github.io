document.addEventListener('DOMContentLoaded', function () {

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
                    <div style="position: relative; width: 95%; margin: 0 auto;">
                        <div style="display: flex; justify-content: space-between; margin-top: auto; align-items: center;">
                            <span style="flex: 1; text-align: center; font-size: 16px; font-weight: bold;">Input Video</span>
                            <span style="flex: 1; text-align: center; font-size: 16px; font-weight: bold;">MonST3R</span>
                            <span style="flex: 1; text-align: center; font-size: 16px; font-weight: bold;">DAS3R</span>
                            <span style="flex: 1; text-align: center; font-size: 16px; font-weight: bold;">Ours</span>
                            <span style="flex: 1; text-align: center; font-size: 16px; font-weight: bold;">GT</span>
                        </div>
                        <div id="mask-video-container" style="width: 100%; position: relative; aspect-ratio: 4678/532; background-color: #ffffff;">
                            <video id="mask-video" width="100%" height="100%" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain;" autoplay muted loop>
                                <source id="mask-video-source" src="" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="thumbnail-container" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 20px; margin-bottom: 10px; max-width: 100%;">
                        <img src="static/thumbs/koala.jpg" data-video="static/videos/mask/koala.mp4" class="thumbnail mask-thumbnail" alt="koala" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/mbike-trick.jpg" data-video="static/videos/mask/mbike-trick.mp4" class="thumbnail mask-thumbnail" alt="mbike-trick" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/schoolgirls.jpg" data-video="static/videos/mask/schoolgirls.mp4" class="thumbnail mask-thumbnail" alt="schoolgirls" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/dog-gooses.jpg" data-video="static/videos/mask/dog-gooses.mp4" class="thumbnail mask-thumbnail" alt="dog-gooses" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/goat.jpg" data-video="static/videos/mask/goat.mp4" class="thumbnail mask-thumbnail" alt="goat" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/rhino.jpg" data-video="static/videos/mask/rhino.mp4" class="thumbnail mask-thumbnail" alt="rhino" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/crossing.jpg" data-video="static/videos/mask/crossing.mp4" class="thumbnail mask-thumbnail" alt="crossing" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/elephant.jpg" data-video="static/videos/mask/elephant.mp4" class="thumbnail mask-thumbnail" alt="elephant" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/drift-chicane.jpg" data-video="static/videos/mask/drift-chicane.mp4" class="thumbnail mask-thumbnail" alt="drift-chicane" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/bear.jpg" data-video="static/videos/mask/bear.mp4" class="thumbnail mask-thumbnail" alt="bear" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/judo.jpg" data-video="static/videos/mask/judo.mp4" class="thumbnail mask-thumbnail" alt="judo" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/bike-packing.jpg" data-video="static/videos/mask/bike-packing.mp4" class="thumbnail mask-thumbnail" alt="bike-packing" style="cursor: pointer; width: 100px;">
                    </div>
                </div>
            </div>
        </div>
    `;

    const section = document.getElementById('mask-vis');
    section.innerHTML = content;
    section.style.display = 'block';

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

    const thumbnails = document.querySelectorAll('.mask-thumbnail');
    const videoElement = document.getElementById('mask-video');
    const videoSource = document.getElementById('mask-video-source');

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