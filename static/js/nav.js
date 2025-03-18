function showSection(id) {
    // Define content to be loaded dynamically for each section
    const contentMap = {
        'vs_mon': `
<div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full  panel-style">
                    <p id="compare-description" style="max-width: 90%; margin: 0 auto; text-align: center;">
                        <!-- MonST3R suffers from structure misalignment and ghosting artifacts due to under-segmentation of the dog and goose. -->
                        Our method achieves superior structure alignment and fewer artifacts, owing to the robust dynamic segmentation estimation.
                    </p>
                    <div id="wrapper" style="
                            display: flex;
                            flex-wrap: nowrap;
                            justify-content: center;
                            align-items: center;
                            gap: 1em;
                            width: 100%;
                        ">
                        <!-- Insert two iframes -->
                        <div class="iframe-container">
                            <iframe id="left-iframe"
                            src="https://Easi3R.github.io/build/?playbackPath=https://Easi3R.github.io/recordings/recording_dog-gooses-mon.viser&initDistanceScale=0.85&initHeightOffset=0.08"></iframe>
                            <p style="text-align: center; font-size: 20px; font-weight: bold; flex: 1; margin-bottom: 10px;">MonST3R</p>
                        </div>
                        <div class="iframe-container">
                            <iframe id="right-iframe"
                            src="https://Easi3R.github.io/build/?playbackPath=https://Easi3R.github.io/recordings/recording_dog-gooses-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08"></iframe>
                            <p style="text-align: center; font-size: 20px; font-weight: bold; flex: 1; margin-bottom: 10px;">Ours</p>
                        </div>
                    </div>
                    
                    <div class="thumbnail-container" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 5px; margin-bottom: 20px; max-width: 100%;">
                        <img src="static/thumbs/dog-gooses.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_dog-gooses-mon.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_dog-gooses-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="Our method achieves superior structure alignment and fewer artifacts, owing to the robust dynamic segmentation estimation."
                         class="thumbnail viser-thumbnail active" alt="dog-gooses" style="cursor: pointer; width: 100px;">
                         <img src="static/thumbs/schoolgirls.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_schoolgirls-mon.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_schoolgirls-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="MonST3R suffers from structure misalignment and ghosting artifacts due to under-segmentation of schoolgirls."
                         class="thumbnail viser-thumbnail" alt="schoolgirls" style="cursor: pointer; width: 100px;">
                         <img src="static/thumbs/sheep.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_sheep-mon.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_sheep-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="MonST3R suffers from structure misalignment and ghosting artifacts due to under-segmentation of sheep."
                         class="thumbnail viser-thumbnail" alt="sheep" style="cursor: pointer; width: 100px;">
                         <img src="static/thumbs/drift-chicane.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_drift-chicane-mon.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_drift-chicane-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="MonST3R suffers from ghosting artifacts due to under-segmentation of the drift chicane."
                         class="thumbnail viser-thumbnail" alt="drift-chicane" style="cursor: pointer; width: 100px;">
                    </div>

                    <p style="text-align: center; font-size: 1em; padding: 0em; color: #555;">
                        Results are downsampled <strong>10 times</strong> for efficient online rendering
                    </p>
                    <div class="hide-on-touchscreens" style="
                        display: flex;
                        justify-content: center;
                        gap: 1.5em;
                        padding-top: 0.5em;
                    ">
                        <div>
                            <i class="ti ti-view-360-arrow"></i> <strong>Left-click</strong> and
                            drag to rotate
                        </div>
                        <div>
                            <i class="ti ti-arrows-move"></i> <strong>Right-click</strong> and
                            drag or
                            <strong>WASD</strong>
                            to move
                        </div>
                        <div><i class="ti ti-zoom"></i> <strong>Scroll</strong> to zoom</div>
                        <div><strong>Click <i class="fas fa-pause"></i></strong> to pause</div>
                    </div>
                    <script>
                        // Get the paragraph element
                        var para = document.getElementById('click-interactive');

                        // Add event listeners for mouse enter and mouse leave
                        para.addEventListener('mouseenter', function () {
                            para.style.fontSize = '22px'; // Increase font size
                            para.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)'; // Enhance shadow
                        });

                        para.addEventListener('mouseleave', function () {
                            para.style.fontSize = '18px'; // Reset font size
                            para.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)'; // Reset shadow
                        });
                    </script>
                </div>
            </div>
        </div>
        `,
        'vs_das': `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full  panel-style">
                    <p id="compare-description-das" style="max-width: 90%; margin: 0 auto; text-align: center;">
                        Our method provides clean reconstructions, while DAS3R suffers from ghosting artifacts due to inaccuracies in dynamic segmentation estimation.
                        For example, it under-segments the sheep while over-segmenting the tree.
                    </p>
                    <div id="wrapper" style="
                            display: flex;
                            flex-wrap: nowrap;
                            justify-content: center;
                            align-items: center;
                            gap: 1em;
                            width: 100%;
                        ">
                        <!-- Insert two iframes -->
                        <div class="iframe-container">
                            <iframe id="left-iframe-das"
                            src="https://Easi3R.github.io/build/?playbackPath=https://Easi3R.github.io/recordings/recording_dog-gooses-das.viser&initDistanceScale=0.85&initHeightOffset=0.08"></iframe>
                            <p style="text-align: center; font-size: 20px; font-weight: bold; flex: 1; margin-bottom: 10px;">DAS3R</p>
                        </div>
                        <div class="iframe-container">
                            <iframe id="right-iframe-das"
                            src="https://Easi3R.github.io/build/?playbackPath=https://Easi3R.github.io/recordings/recording_dog-gooses-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08"></iframe>
                            <p style="text-align: center; font-size: 20px; font-weight: bold; flex: 1; margin-bottom: 10px;">Ours</p>
                        </div>
                    </div>
                    
                    <div class="thumbnail-container" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 5px; margin-bottom: 20px; max-width: 100%;">
                        <img src="static/thumbs/dog-gooses.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_dog-gooses-das.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_dog-gooses-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="Our method provides clean reconstructions, while DAS3R suffers from structure misalignment and ghosting artifacts due to inaccuracies in dynamic segmentation estimation. For example, it under-segments the dog and goose."
                         class="thumbnail viser-thumbnail-das" alt="dog-gooses" style="cursor: pointer; width: 100px;">
                         <img src="static/thumbs/schoolgirls.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_schoolgirls-das.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_schoolgirls-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="Our method provides clean reconstructions, while DAS3R suffers from structure misalignment with over-segmentation of walls."
                         class="thumbnail viser-thumbnail-das" alt="schoolgirls" style="cursor: pointer; width: 100px;">
                         <img src="static/thumbs/sheep.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_sheep-das.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_sheep-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="Our method provides clean reconstructions, while DAS3R suffers from ghosting artifacts due to inaccuracies in dynamic segmentation estimation. For example, it under-segments the sheep while over-segmenting the tree."
                         class="thumbnail viser-thumbnail-das" alt="sheep" style="cursor: pointer; width: 100px;">
                         <img src="static/thumbs/drift-chicane.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_drift-chicane-das.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_drift-chicane-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="Our method provides clean reconstructions, while DAS3R suffers from ghosting artifacts due to inaccuracies in dynamic segmentation estimation. For example, it under-segments the drift chicane while over-segmenting the building."
                         class="thumbnail viser-thumbnail-das" alt="drift-chicane" style="cursor: pointer; width: 100px;">
                    </div>

                    <p style="text-align: center; font-size: 1em; padding: 0em; color: #555;">
                        Results are downsampled <strong>10 times</strong> for efficient online rendering
                    </p>
                    <div class="hide-on-touchscreens" style="
                        display: flex;
                        justify-content: center;
                        gap: 1.5em;
                        padding-top: 0.5em;
                    ">
                        <div>
                            <i class="ti ti-view-360-arrow"></i> <strong>Left-click</strong> and
                            drag to rotate
                        </div>
                        <div>
                            <i class="ti ti-arrows-move"></i> <strong>Right-click</strong> and
                            drag or
                            <strong>WASD</strong>
                            to move
                        </div>
                        <div><i class="ti ti-zoom"></i> <strong>Scroll</strong> to zoom</div>
                        <div><strong>Click <i class="fas fa-pause"></i></strong> to pause</div>
                    </div>
                </div>
            </div>
        </div>
        `,
        'vs_cut': `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full  panel-style">
                    <p id="compare-description-cut" style="max-width: 90%; margin: 0 auto; text-align: center;">
                        <!-- While CUT3R achieves better per-frame depth estimation, it is susceptible to dynamic objects,
                        leading to misaligned static walls and unstable camera pose estimation.
                        Additionally, ghosting artifacts arise as CUT3R lacks dynamic segmentation capability, causing points from different frames to be mixed. -->
                        CUT3R lacks support for dynamic mask estimation, leading to the blending of points from different frames when ground truth masks are not used. Additionally, our approach demonstrates greater reliability in achieving accurate camera poses.
                    </p>
                    <div id="wrapper" style="
                            display: flex;
                            flex-wrap: nowrap;
                            justify-content: center;
                            align-items: center;
                            gap: 1em;
                            width: 100%;
                        ">
                        <!-- Insert two iframes -->
                        <div class="iframe-container">
                            <iframe id="left-iframe-cut"
                            src="https://Easi3R.github.io/build/?playbackPath=https://Easi3R.github.io/recordings/recording_dog-gooses-cut.viser&initDistanceScale=0.85&initHeightOffset=0.08"></iframe>
                            <p style="text-align: center; font-size: 20px; font-weight: bold; flex: 1; margin-bottom: 10px;">CUT3R</p>
                        </div>
                        <div class="iframe-container">
                            <iframe id="right-iframe-cut"
                            src="https://Easi3R.github.io/build/?playbackPath=https://Easi3R.github.io/recordings/recording_dog-gooses-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08"></iframe>
                            <p style="text-align: center; font-size: 20px; font-weight: bold; flex: 1; margin-bottom: 10px;">Ours</p>
                        </div>
                    </div>
                    
                    <div class="thumbnail-container" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 5px; margin-bottom: 20px; max-width: 100%;">
                        <img src="static/thumbs/dog-gooses.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_dog-gooses-cut.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_dog-gooses-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="CUT3R lacks support for dynamic mask estimation, leading to the blending of points from different frames when ground truth masks are not used. Additionally, our approach demonstrates greater reliability in achieving accurate camera poses."
                         class="thumbnail viser-thumbnail-cut" alt="dog-gooses" style="cursor: pointer; width: 100px;">
                         <img src="static/thumbs/schoolgirls.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_schoolgirls-cut.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_schoolgirls-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="CUT3R lacks support for dynamic mask estimation, leading to the blending of points from different frames when ground truth masks are not used. Additionally, our approach demonstrates greater reliability in achieving accurate camera poses."
                         class="thumbnail viser-thumbnail-cut" alt="schoolgirls" style="cursor: pointer; width: 100px;">
                         <img src="static/thumbs/sheep.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_sheep-cut.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_sheep-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="CUT3R lacks support for dynamic mask estimation, leading to the blending of points from different frames when ground truth masks are not used. Additionally, our approach demonstrates greater reliability in achieving accurate camera poses."
                         class="thumbnail viser-thumbnail-cut" alt="sheep" style="cursor: pointer; width: 100px;">
                         <img src="static/thumbs/drift-chicane.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_drift-chicane-cut.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_drift-chicane-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="CUT3R lacks support for dynamic mask estimation, leading to the blending of points from different frames when ground truth masks are not used. Additionally, our approach demonstrates greater reliability in achieving accurate camera poses."
                         class="thumbnail viser-thumbnail-cut" alt="drift-chicane" style="cursor: pointer; width: 100px;">
                    </div>

                    <p style="text-align: center; font-size: 1em; padding: 0em; color: #555;">
                        Results are downsampled <strong>10 times</strong> for efficient online rendering
                    </p>
                    <div class="hide-on-touchscreens" style="
                        display: flex;
                        justify-content: center;
                        gap: 1.5em;
                        padding-top: 0.5em;
                    ">
                        <div>
                            <i class="ti ti-view-360-arrow"></i> <strong>Left-click</strong> and
                            drag to rotate
                        </div>
                        <div>
                            <i class="ti ti-arrows-move"></i> <strong>Right-click</strong> and
                            drag or
                            <strong>WASD</strong>
                            to move
                        </div>
                        <div><i class="ti ti-zoom"></i> <strong>Scroll</strong> to zoom</div>
                        <div><strong>Click <i class="fas fa-pause"></i></strong> to pause</div>
                    </div>
                </div>
            </div>
        </div><br>
        `
    };

    // Hide all sections and remove their content to free up memory
    const sections = document.getElementsByClassName('dynamic-section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
        // sections[i].innerHTML = '';
    }

    // Load content only for the clicked (or default) section
    const selectedSection = document.getElementById(id);
    // selectedSection.innerHTML = contentMap[id] || `<p>No content for section "${id}".</p>`;
    selectedSection.style.display = 'block';

    // if (id === 'vs_das') {
    // }
}

function initCarouselResults() {
    document.querySelectorAll('#carousel-results video source[data-src]').forEach(srcTag => {
        const realSrc = srcTag.getAttribute('data-src');
        srcTag.setAttribute('src', realSrc);
        srcTag.removeAttribute('data-src');
    });

    bulmaCarousel.attach('#carousel-results', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pagination: false
    });
}

// Show default section on page load
document.addEventListener('DOMContentLoaded', function () {
    showSection('vs_mon');
});

function openInNewTab(element) {
    var url = element.getAttribute('data-link');
    window.open(url, '_blank').focus();
}

document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        
        const attentionSection = document.getElementById('attn-vis');
        if (attentionSection) {
            attentionSection.style.display = 'block';
        }

        const clusterSection = document.getElementById('cluster-vis');
        if (clusterSection) {
            clusterSection.style.display = 'block';
        }

        const maskSection = document.getElementById('mask-vis');
        if (maskSection) {
            maskSection.style.display = 'block';
        }
    });
});