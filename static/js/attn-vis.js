document.addEventListener('DOMContentLoaded', function () {
    const content = `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full panel-style">
                    <h2 class="title is-4">Spatial and Temporal Attention Mechanism</h2>
                    <p style="max-width: 90%; margin: 0 auto; text-align: justify;">
                        To this end, we identify attention activations attributed to object motion. We infer the dynamic attention map for frame \\(a\\) by computing the joint attention using the element-wise product:
                    </p>
                    <p style="max-width: 90%; margin: 0 auto; text-align: center;">
                       
                        <br>
                       \\( \\mathbf{A}^{a=\\text{dyn}} = (1-\\mathbf{A}^{a=\\text{src}}_{\\mu}) \\cdot \\mathbf{A}^{a=\\text{src}}_{\\sigma} \\cdot \\mathbf{A}^{a=\\text{ref}}_{\\mu} \\cdot (1-\\mathbf{A}^{a=\\text{ref}}_{\\sigma}) \\)
                        <br>

                    </p>
                    <br>
                    <div style="position: relative; width: 95%; margin: 0 auto;">
                        <video id="attn-video" width="100%" height="auto" preload="none" style="display: none; position: absolute; z-index: 10; top: 0; left: 0; transform: translateY(45%);" autoplay muted loop>
                            <source id="attn-video-source" src="" type="video/mp4">
                        </video>
                        <img src="static/images/attn_label.png" alt="Attention Labels" style="width: 100%; position: relative; z-index: 1; transform: translateY(0%);">
                    </div>
                    <div class="thumbnail-container" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: auto; margin-bottom: 10px; max-width: 100%;">
                        <img src="static/thumbs/boxing-fisheye.jpg" data-video="static/videos/attn/boxing-fisheye.mp4" class="thumbnail attn-thumbnail" alt="boxing-fisheye" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/dance-jump.jpg" data-video="static/videos/attn/dance-jump.mp4" class="thumbnail attn-thumbnail" alt="dance-jump" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/koala.jpg" data-video="static/videos/attn/koala.mp4" class="thumbnail attn-thumbnail" alt="koala" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/car-shadow.jpg" data-video="static/videos/attn/car-shadow.mp4" class="thumbnail attn-thumbnail" alt="car-shadow" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/swing.jpg" data-video="static/videos/attn/swing.mp4" class="thumbnail attn-thumbnail" alt="swing" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/bear.jpg" data-video="static/videos/attn/bear.mp4" class="thumbnail attn-thumbnail" alt="bear" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/hike.jpg" data-video="static/videos/attn/hike.mp4" class="thumbnail attn-thumbnail" alt="hike" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/dog-gooses.jpg" data-video="static/videos/attn/dog-gooses.mp4" class="thumbnail attn-thumbnail" alt="dog-gooses" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/stunt.jpg" data-video="static/videos/attn/stunt.mp4" class="thumbnail attn-thumbnail" alt="stunt" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/horsejump-high.jpg" data-video="static/videos/attn/horsejump-high.mp4" class="thumbnail attn-thumbnail" alt="horsejump-high" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/car-turn.jpg" data-video="static/videos/attn/car-turn.mp4" class="thumbnail attn-thumbnail" alt="car-turn" style="cursor: pointer; width: 100px;">
                        <img src="static/thumbs/soapbox.jpg" data-video="static/videos/attn/soapbox.mp4" class="thumbnail attn-thumbnail" alt="soapbox" style="cursor: pointer; width: 100px;">
                    </div>
                </div>
            </div>
        </div><br>
    `;

    const section = document.getElementById('attn-vis');
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

    const thumbnails = document.querySelectorAll('.attn-thumbnail');
    const videoElement = document.getElementById('attn-video');
    const videoSource = document.getElementById('attn-video-source');

    thumbnails.forEach(thumbnail => {
        thumbnail.style.border = '2px solid #fff';
    });
    
    thumbnails[0].style.border = '3px solid #92A8D1';

    const defaultVideoSrc = thumbnails[0].getAttribute('data-video');
    videoSource.src = defaultVideoSrc;
    videoElement.style.display = 'block';
    videoElement.load();
    videoElement.play();

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            thumbnails.forEach(t => {
                t.style.border = '2px solid #fff';
            });
            
            this.style.border = '3px solid #92A8D1';
            
            const videoSrc = this.getAttribute('data-video');
            videoSource.src = videoSrc;
            videoElement.style.display = 'block';
            videoElement.load();
            videoElement.play();
        });
    });

    if (section) {
        section.style.display = 'block';
    }
});

