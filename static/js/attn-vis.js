document.addEventListener('DOMContentLoaded', () => {

    const setupVideoSync = (videos) => {
        let syncHandlers = [];
        
        videos.forEach(video => {
            const oldHandler = video._syncHandler;
            if (oldHandler) {
                video.removeEventListener('ended', oldHandler);
            }
        });
        
        videos.forEach((video, index) => {
            const handler = () => {
                videos.forEach(v => {
                    v.currentTime = 0;
                    v.play().catch(e => console.warn('Sync replay error:', e));
                });
            };
            video.addEventListener('ended', handler);
            video._syncHandler = handler;
        });
    };

    const thumbnailData = [
        {src: 'w30', alt: 'w30', rgbVideo: 'w30.mp4', middleVideo: 'img_key_state_query_video.mp4', attnVideo: 'state_query_img_pose_key_video.mp4'},
        {src: 'indoor', alt: 'indoor', rgbVideo: 'indoor.mp4', middleVideo: 'img_key_state_query_video.mp4', attnVideo: 'state_query_img_pose_key_video.mp4'},
        {src: 'taylor', alt: 'taylor', rgbVideo: 'taylor.mp4', middleVideo: 'img_key_state_query_video.mp4', attnVideo: 'state_query_img_pose_key_video.mp4'},
        {src: 'citywalk1', alt: 'citywalk1', rgbVideo: 'citywalk1.mp4', middleVideo: 'img_key_state_query_video.mp4', attnVideo: 'state_query_img_pose_key_video.mp4'},
        {src: 'citywalk2', alt: 'citywalk2', rgbVideo: 'citywalk2.mp4', middleVideo: 'img_key_state_query_video.mp4', attnVideo: 'state_query_img_pose_key_video.mp4'},
        {src: 'citywalk3', alt: 'citywalk3', rgbVideo: 'citywalk3.mp4', middleVideo: 'img_key_state_query_video.mp4', attnVideo: 'state_query_img_pose_key_video.mp4'},
        {src: 'walking_daytime', alt: 'walking_daytime', rgbVideo: 'walking_daytime.mp4', middleVideo: 'img_key_state_query_video.mp4', attnVideo: 'state_query_img_pose_key_video.mp4'},
        {src: 'dance3', alt: 'dance3', rgbVideo: 'dance3.mp4', middleVideo: 'img_key_state_query_video.mp4', attnVideo: 'state_query_img_pose_key_video.mp4'},
        {src: 'go5', alt: 'go5', rgbVideo: 'go5.mp4', middleVideo: 'img_key_state_query_video.mp4', attnVideo: 'state_query_img_pose_key_video.mp4'},
        {src: 'go', alt: 'go', rgbVideo: 'go.mp4', middleVideo: 'img_key_state_query_video.mp4', attnVideo: 'state_query_img_pose_key_video.mp4'},
    ];

    const thumbnailsHtml = thumbnailData.map(({src, alt, rgbVideo, middleVideo, attnVideo}) => `
        <img src="static/thumbs/${src}.jpg" 
             data-rgb-video="static/videos/attn/${src}/${rgbVideo}"
             data-middle-video="static/videos/attn/${src}/${middleVideo}"
             data-attn-video="static/videos/attn/${src}/${attnVideo}"
             class="thumbnail cluster-thumbnail" 
             alt="${alt}" 
             style="cursor: pointer; width: 100px;"
             onerror="this.style.display='none'; console.warn('Thumbnail not found: ${src}.jpg');">
    `).join('');

    const content = `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full panel-style">
                    <div style="position: relative; width: 95%; margin: 0 auto;">
                        <div style="display: flex; gap: 15px; width: 100%; justify-content: center; align-items: flex-start;">
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <span style="text-align: center; font-size: 16px; font-weight: bold; margin-bottom: 0px;">Video</span>
                                <div id="rgb-video-container" style="position: relative; display: flex; justify-content: center; align-items: center;">
                                    <video id="rgb-video" autoplay muted playsinline disablePictureInPicture controlsList="nodownload nofullscreen" style="height: 280px; width: auto; object-fit: contain;">
                                        <source id="rgb-video-source" type="video/mp4">
                                    </video>
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <span style="text-align: center; font-size: 16px; font-weight: bold; margin-bottom: 0px;">Image attention</span>
                                <div id="middle-video-container" style="position: relative; display: flex; justify-content: center; align-items: center;">
                                    <video id="middle-video" autoplay muted playsinline disablePictureInPicture controlsList="nodownload nofullscreen" style="height: 280px; width: auto; object-fit: contain;">
                                        <source id="middle-video-source" type="video/mp4">
                                    </video>
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <span style="text-align: center; font-size: 16px; font-weight: bold; margin-bottom: 0px;">State learning rate</span>
                                <div id="attn-video-container" style="position: relative; display: flex; justify-content: center; align-items: center;">
                                    <video id="attn-video" autoplay muted playsinline disablePictureInPicture controlsList="nodownload nofullscreen" style="height: 280px; width: auto; object-fit: contain;">
                                        <source id="attn-video-source" type="video/mp4">
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="thumbnail-container" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin: 25px auto 10px;">
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
    if (!section) {
        console.error('attn-vis element not found');
        return;
    }
    
    section.innerHTML = content;
    section.style.display = 'block';

    const rgbVideoElement = document.getElementById('rgb-video');
    const rgbVideoSource = document.getElementById('rgb-video-source');
    const middleVideoElement = document.getElementById('middle-video');
    const middleVideoSource = document.getElementById('middle-video-source');
    const attnVideoElement = document.getElementById('attn-video');
    const attnVideoSource = document.getElementById('attn-video-source');
    const thumbnails = document.querySelectorAll('.cluster-thumbnail');

    if (!rgbVideoElement || !middleVideoElement || !attnVideoElement || !rgbVideoSource || !middleVideoSource || !attnVideoSource) {
        console.error('Video elements not found');
        return;
    }

    if (thumbnails.length > 0) {
        thumbnails[0].style.border = '3px solid #92A8D1';
        rgbVideoSource.src = thumbnails[0].dataset.rgbVideo;
        middleVideoSource.src = thumbnails[0].dataset.middleVideo;
        attnVideoSource.src = thumbnails[0].dataset.attnVideo;
        
        rgbVideoElement.load();
        middleVideoElement.load();
        attnVideoElement.load();
        
        let initialLoadedCount = 0;
        const totalInitialVideos = 3;
        
        const onInitialVideoReady = () => {
            initialLoadedCount++;
            if (initialLoadedCount === totalInitialVideos) {
                rgbVideoElement.currentTime = 0;
                middleVideoElement.currentTime = 0;
                attnVideoElement.currentTime = 0;
                
                const initialPlayPromises = [
                    rgbVideoElement.play(),
                    middleVideoElement.play(),
                    attnVideoElement.play()
                ];
                
                Promise.all(initialPlayPromises).then(() => {
                    setupVideoSync([rgbVideoElement, middleVideoElement, attnVideoElement]);
                }).catch(e => console.warn('Initial video play error:', e));
            }
        };
        
        const setupInitialVideoLoader = (video) => {
            const onLoad = () => {
                video.removeEventListener('canplay', onLoad);
                video.removeEventListener('loadeddata', onLoad);
                onInitialVideoReady();
            };
            video.addEventListener('canplay', onLoad, { once: true });
            video.addEventListener('loadeddata', onLoad, { once: true });
        };
        
        setupInitialVideoLoader(rgbVideoElement);
        setupInitialVideoLoader(middleVideoElement);
        setupInitialVideoLoader(attnVideoElement);
    }

    let isLoading = false;
    
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            
            if (isLoading) {
                console.warn('Videos are still loading, please wait...');
                return;
            }
            isLoading = true;
            
            thumbnails.forEach(t => t.style.border = '2px solid #fff');
            thumbnail.style.border = '3px solid #92A8D1';
            
            rgbVideoSource.src = thumbnail.dataset.rgbVideo;
            middleVideoSource.src = thumbnail.dataset.middleVideo;
            attnVideoSource.src = thumbnail.dataset.attnVideo;
            
            rgbVideoElement.pause();
            middleVideoElement.pause();
            attnVideoElement.pause();
            
            rgbVideoElement.currentTime = 0;
            middleVideoElement.currentTime = 0;
            attnVideoElement.currentTime = 0;
            
            rgbVideoElement.load();
            middleVideoElement.load();
            attnVideoElement.load();
            
            let loadedCount = 0;
            const totalVideos = 3;
            
            const onVideoReady = () => {
                loadedCount++;
                if (loadedCount === totalVideos) {
                    rgbVideoElement.currentTime = 0;
                    middleVideoElement.currentTime = 0;
                    attnVideoElement.currentTime = 0;
                    
                    const playPromises = [
                        rgbVideoElement.play(),
                        middleVideoElement.play(),
                        attnVideoElement.play()
                    ];
                    
                    Promise.all(playPromises).then(() => {
                        setupVideoSync([rgbVideoElement, middleVideoElement, attnVideoElement]);
                    }).catch(e => console.warn('Video play error:', e)).finally(() => {
                        isLoading = false;
                    });
                }
            };
            
            const setupVideoLoader = (video) => {
                const onLoad = () => {
                    video.removeEventListener('canplay', onLoad);
                    video.removeEventListener('loadeddata', onLoad);
                    onVideoReady();
                };
                video.addEventListener('canplay', onLoad, { once: true });
                video.addEventListener('loadeddata', onLoad, { once: true });
            };
            
            setupVideoLoader(rgbVideoElement);
            setupVideoLoader(middleVideoElement);
            setupVideoLoader(attnVideoElement);
        });
    });

    rgbVideoElement.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
    });

    middleVideoElement.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
    });

    attnVideoElement.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
    });

    const renderMathJax = () => {
        if (window.MathJax && window.MathJax.Hub) {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, section]);
        } else if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([section]).catch((err) => console.log(err.message));
        } else {
            setTimeout(renderMathJax, 200);
        }
    };
    
    setTimeout(renderMathJax, 100);
});