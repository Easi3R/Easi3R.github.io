document.addEventListener('DOMContentLoaded', () => {
    const thumbnailData = [
        'dance3', 'citywalk1', 'go', 'w30', 'citywalk2', 'citywalk3', 'walking_daytime', 'indoor', 'taylor', 'go5'
    ];

    const thumbnailsHtml = thumbnailData.map(name => `
        <img src="static/thumbs/${name}.jpg" 
             data-cut3r-video="static/videos/vis_pts/${name}_cut3r.mp4"
             data-ours-video="static/videos/vis_pts/${name}.mp4"
             class="thumbnail pts-thumbnail" 
             alt="${name}" 
             style="cursor: pointer; width: 100px;">
    `).join('');

    const content = `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full panel-style">
                    <div class="video-container">
                        <div class="video-comparison-container" style="display: flex; width: 100%; gap: 10px;">
                            <div id="cut3r-video-container" style="flex: 1; position: relative;">
                                <video id="cut3r-video" controls autoplay muted loop playsinline disablePictureInPicture style="width: 100%; height: auto;">
                                    <source id="cut3r-video-source" type="video/mp4">
                                </video>
                            </div>
                            <div id="ours-video-container" style="flex: 1; position: relative;">
                                <video id="ours-video" controls autoplay muted loop playsinline disablePictureInPicture style="width: 100%; height: auto;">
                                    <source id="ours-video-source" type="video/mp4">
                                </video>
                            </div>
                        </div>
                        <div class="video-labels">
                            <span class="video-label">CUT3R</span>
                            <span class="video-label">Ours</span>
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
        .video-label {
            font-size: 1.3rem;
            font-weight: bold;
            margin: 0 20px;
        }
    `;
    document.head.appendChild(style);

    const section = document.getElementById('pts-vis');
    section.innerHTML = content;
    section.style.display = 'block';

    const cut3rVideoElement = document.getElementById('cut3r-video');
    const cut3rVideoSource = document.getElementById('cut3r-video-source');
    const oursVideoElement = document.getElementById('ours-video');
    const oursVideoSource = document.getElementById('ours-video-source');
    const thumbnails = document.querySelectorAll('.pts-thumbnail');

    cut3rVideoElement.loop = true;
    oursVideoElement.loop = true;

    thumbnails[0].style.border = '3px solid #92A8D1';
    cut3rVideoSource.src = thumbnails[0].dataset.cut3rVideo;
    oursVideoSource.src = thumbnails[0].dataset.oursVideo;
    cut3rVideoElement.load();
    oursVideoElement.load();

    let syncInProgress = false;
    
    function syncPlay() {
        if (syncInProgress) return;
        syncInProgress = true;
        Promise.all([
            cut3rVideoElement.play().catch(() => {}),
            oursVideoElement.play().catch(() => {})
        ]).finally(() => {
            syncInProgress = false;
        });
    }
    
    function syncPause() {
        if (syncInProgress) return;
        syncInProgress = true;
        cut3rVideoElement.pause();
        oursVideoElement.pause();
        syncInProgress = false;
    }
    
    cut3rVideoElement.addEventListener('play', () => {
        if (!syncInProgress && oursVideoElement.paused) {
            syncPlay();
        }
    });
    
    oursVideoElement.addEventListener('play', () => {
        if (!syncInProgress && cut3rVideoElement.paused) {
            syncPlay();
        }
    });
    
    cut3rVideoElement.addEventListener('pause', () => {
        if (!syncInProgress && !oursVideoElement.paused) {
            syncPause();
        }
    });
    
    oursVideoElement.addEventListener('pause', () => {
        if (!syncInProgress && !cut3rVideoElement.paused) {
            syncPause();
        }
    });
    
    let seekSyncInProgress = false;
    
    cut3rVideoElement.addEventListener('seeking', () => {
        if (!seekSyncInProgress) {
            seekSyncInProgress = true;
            oursVideoElement.currentTime = cut3rVideoElement.currentTime;
            setTimeout(() => {
                seekSyncInProgress = false;
            }, 50);
        }
    });
    
    oursVideoElement.addEventListener('seeking', () => {
        if (!seekSyncInProgress) {
            seekSyncInProgress = true;
            cut3rVideoElement.currentTime = oursVideoElement.currentTime;
            setTimeout(() => {
                seekSyncInProgress = false;
            }, 50);
        }
    });
    
    cut3rVideoElement.addEventListener('seeked', () => {
        if (!seekSyncInProgress) {
            seekSyncInProgress = true;
            oursVideoElement.currentTime = cut3rVideoElement.currentTime;
            setTimeout(() => {
                seekSyncInProgress = false;
            }, 100);
        }
    });
    
    oursVideoElement.addEventListener('seeked', () => {
        if (!seekSyncInProgress) {
            seekSyncInProgress = true;
            cut3rVideoElement.currentTime = oursVideoElement.currentTime;
            setTimeout(() => {
                seekSyncInProgress = false;
            }, 100);
        }
    });
    
    let syncInterval = setInterval(() => {
        if (syncInProgress || seekSyncInProgress) return;
        
        const timeDiff = Math.abs(cut3rVideoElement.currentTime - oursVideoElement.currentTime);
        if (timeDiff > 0.5) {
            syncInProgress = true;
            oursVideoElement.currentTime = cut3rVideoElement.currentTime;
            setTimeout(() => {
                syncInProgress = false;
            }, 100);
        }
    }, 1000);

    const customSpeedMap = {
        'dance3': 1.5,
        'go': 1.5,
        'go5': 1.5,
        'taylor': 3.0,
        'citywalk1': 4.0,
        'citywalk2': 4.0,
        'citywalk3': 4.0,
        'w30': 10.0,
        'indoor': 2.5,
    };
    
    const targetDuration = 10;
    
    
    function setVideoPlaybackRate(videoElement1, videoElement2, videoName, callback) {
        if (customSpeedMap[videoName]) {
            const customSpeed = customSpeedMap[videoName];
            videoElement1.playbackRate = customSpeed;
            videoElement2.playbackRate = customSpeed;
            
            console.log(`${videoName} Using custom playback speed: ${customSpeed}x`);
            
            if (callback) callback();
            return;
        }
        
        
        Promise.all([
            new Promise(resolve => {
                if (videoElement1.readyState >= 1) {
                    resolve();
                } else {
                    videoElement1.addEventListener('loadedmetadata', resolve, { once: true });
                }
            }),
            new Promise(resolve => {
                if (videoElement2.readyState >= 1) {
                    resolve();
                } else {
                    videoElement2.addEventListener('loadedmetadata', resolve, { once: true });
                }
            })
        ]).then(() => {
            const duration1 = videoElement1.duration;
            const duration2 = videoElement2.duration;
            const maxDuration = Math.max(duration1, duration2);
            
            if (maxDuration && maxDuration > 0) {
                const adaptiveSpeed = Math.max(0.5, Math.min(10, maxDuration / targetDuration));
                
                videoElement1.playbackRate = adaptiveSpeed;
                videoElement2.playbackRate = adaptiveSpeed;
                
                setTimeout(() => {
                    if (Math.abs(videoElement1.playbackRate - adaptiveSpeed) > 0.01) {
                        videoElement1.playbackRate = adaptiveSpeed;
                    }
                    if (Math.abs(videoElement2.playbackRate - adaptiveSpeed) > 0.01) {
                        videoElement2.playbackRate = adaptiveSpeed;
                    }
                }, 50);
                
                console.log(`${videoName} Adaptive playback speed - video duration: ${maxDuration.toFixed(2)}s, playback speed: ${adaptiveSpeed.toFixed(2)}x, estimated playback duration: ${(maxDuration / adaptiveSpeed).toFixed(2)}s`);
            } else {
                videoElement1.playbackRate = 1.0;
                videoElement2.playbackRate = 1.0;
            }
            
            if (callback) callback();
        }).catch(error => {
            console.warn('Error setting playback speed:', error);
            videoElement1.playbackRate = 1.0;
            videoElement2.playbackRate = 1.0;
            if (callback) callback();
        });
    }

    const firstVideoName = thumbnailData[0];
    setVideoPlaybackRate(cut3rVideoElement, oursVideoElement, firstVideoName);

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            
            thumbnails.forEach(t => t.style.border = '2px solid #fff');
            thumbnail.style.border = '3px solid #92A8D1';
            
            cut3rVideoSource.src = thumbnail.dataset.cut3rVideo;
            oursVideoSource.src = thumbnail.dataset.oursVideo;
            cut3rVideoElement.load();
            oursVideoElement.load();
            
            
            Promise.all([
                new Promise(resolve => cut3rVideoElement.addEventListener('loadeddata', resolve, { once: true })),
                new Promise(resolve => oursVideoElement.addEventListener('loadeddata', resolve, { once: true }))
            ]).then(() => {
                cut3rVideoElement.loop = true;
                oursVideoElement.loop = true;
                
                const videoName = thumbnail.alt;
                setVideoPlaybackRate(cut3rVideoElement, oursVideoElement, videoName, () => {
                    syncPlay();
                });
            });
        });
    });

    
    window.addEventListener('beforeunload', () => {
        if (syncInterval) {
            clearInterval(syncInterval);
        }
    });
});