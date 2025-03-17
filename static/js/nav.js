function showSection(id) {
    // Define content to be loaded dynamically for each section
    const contentMap = {
        'vs_mon': `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full  panel-style">
                    <p id="compare-description" style="max-width: 100%; margin: 0 auto; text-align: center;">
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
                    
                    <div class="thumbnail-container" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 10px; margin-bottom: 10px; max-width: 100%;">
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
                         data-description="Our method achieves superior structure alignment and fewer artifacts, owing to the robust dynamic segmentation estimation."
                         class="thumbnail viser-thumbnail" alt="sheep" style="cursor: pointer; width: 100px;">
                         <img src="static/thumbs/drift-chicane.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_drift-chicane-mon.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_drift-chicane-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="Our method achieves superior structure alignment and fewer artifacts, owing to the robust dynamic segmentation estimation."
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
                    <button onclick="window.location.href='./interactive.html';" target="_blank"
                        style="font-size: 20px; font-family: 'Arial', sans-serif; background-color: #92A8D1; color: white; margin: 20px auto; display: block; padding: 15px 15px; border: none; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); text-align: center; transition: all 0.3s ease; cursor: pointer;">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
                                style="fill: #ffffff">
                                <path
                                    d="M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64V261.5l-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L106.5 437c48 48 113.1 75 181 75H296h8c1.5 0 3-.1 4.5-.4c91.7-6.2 165-79.4 171.1-171.1c.3-1.5 .4-3 .4-4.5V160c0-35.3-28.7-64-64-64c-5.5 0-10.9 .7-16 2V96c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0zM240 96.1c0 0 0-.1 0-.1V64c0-8.8 7.2-16 16-16s16 7.2 16 16V95.9c0 0 0 .1 0 .1V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0 0 0 0 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16v55.9c0 0 0 .1 0 .1v80c0 13.3 10.7 24 24 24s24-10.7 24-24V160.1c0 0 0-.1 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16V332.9c-.1 .6-.1 1.3-.2 1.9c-3.4 69.7-59.3 125.6-129 129c-.6 0-1.3 .1-1.9 .2H296h-8.5c-55.2 0-108.1-21.9-147.1-60.9L52.7 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L119 336.4c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V96c0-8.8 7.2-16 16-16c8.8 0 16 7.1 16 15.9V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96.1z">
                                </path>
                            </svg>
                        </span>
                            Explore more interactive results for dynamic scene reconstruction!
                    </button>
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
                    <!-- <p> See more dynamic reconstruction results on DAVIS dataset in our <a href="./gallery.html">gallery</a>.</p> -->

                </div>
            </div>
        </div>
        `,
        'vs_das': `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full  panel-style">
                    <p id="compare-description-das" style="max-width: 100%; margin: 0 auto; text-align: center;">
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
                    
                    <div class="thumbnail-container" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 10px; margin-bottom: 10px; max-width: 100%;">
                        <img src="static/thumbs/dog-gooses.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_dog-gooses-das.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_dog-gooses-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="DAS3R suffers from structure misalignment and ghosting artifacts due to inaccuracies in dynamic segmentation estimation. For example, it under-segments the dog and goose."
                         class="thumbnail viser-thumbnail-das" alt="dog-gooses" style="cursor: pointer; width: 100px;">
                         <img src="static/thumbs/schoolgirls.jpg" 
                         data-left-viser="https://Easi3R.github.io/recordings/recording_schoolgirls-das.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-right-viser="https://Easi3R.github.io/recordings/recording_schoolgirls-ours.viser&initDistanceScale=0.85&initHeightOffset=0.08" 
                         data-description="DAS3R suffers from structure misalignment with over-segmentation of walls."
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
                    <button onclick="window.location.href='./interactive.html';" target="_blank"
                        style="font-size: 20px; font-family: 'Arial', sans-serif; background-color: #92A8D1; color: white; margin: 20px auto; display: block; padding: 15px 15px; border: none; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); text-align: center; transition: all 0.3s ease; cursor: pointer;">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
                                style="fill: #ffffff">
                                <path
                                    d="M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64V261.5l-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L106.5 437c48 48 113.1 75 181 75H296h8c1.5 0 3-.1 4.5-.4c91.7-6.2 165-79.4 171.1-171.1c.3-1.5 .4-3 .4-4.5V160c0-35.3-28.7-64-64-64c-5.5 0-10.9 .7-16 2V96c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0zM240 96.1c0 0 0-.1 0-.1V64c0-8.8 7.2-16 16-16s16 7.2 16 16V95.9c0 0 0 .1 0 .1V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0 0 0 0 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16v55.9c0 0 0 .1 0 .1v80c0 13.3 10.7 24 24 24s24-10.7 24-24V160.1c0 0 0-.1 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16V332.9c-.1 .6-.1 1.3-.2 1.9c-3.4 69.7-59.3 125.6-129 129c-.6 0-1.3 .1-1.9 .2H296h-8.5c-55.2 0-108.1-21.9-147.1-60.9L52.7 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L119 336.4c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V96c0-8.8 7.2-16 16-16c8.8 0 16 7.1 16 15.9V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96.1z">
                                </path>
                            </svg>
                        </span>
                            Explore more interactive results for dynamic scene reconstruction!
                    </button>
                </div>
            </div>
        </div>
        `,
        'vs_cut': `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full  panel-style">
                    <p id="compare-description-cut" style="max-width: 100%; margin: 0 auto; text-align: center;">
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
                    
                    <div class="thumbnail-container" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 10px; margin-bottom: 10px; max-width: 100%;">
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
                    <button onclick="window.location.href='./interactive.html';" target="_blank"
                        style="font-size: 20px; font-family: 'Arial', sans-serif; background-color: #92A8D1; color: white; margin: 20px auto; display: block; padding: 15px 15px; border: none; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); text-align: center; transition: all 0.3s ease; cursor: pointer;">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
                                style="fill: #ffffff">
                                <path
                                    d="M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64V261.5l-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L106.5 437c48 48 113.1 75 181 75H296h8c1.5 0 3-.1 4.5-.4c91.7-6.2 165-79.4 171.1-171.1c.3-1.5 .4-3 .4-4.5V160c0-35.3-28.7-64-64-64c-5.5 0-10.9 .7-16 2V96c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0zM240 96.1c0 0 0-.1 0-.1V64c0-8.8 7.2-16 16-16s16 7.2 16 16V95.9c0 0 0 .1 0 .1V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0 0 0 0 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16v55.9c0 0 0 .1 0 .1v80c0 13.3 10.7 24 24 24s24-10.7 24-24V160.1c0 0 0-.1 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16V332.9c-.1 .6-.1 1.3-.2 1.9c-3.4 69.7-59.3 125.6-129 129c-.6 0-1.3 .1-1.9 .2H296h-8.5c-55.2 0-108.1-21.9-147.1-60.9L52.7 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L119 336.4c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V96c0-8.8 7.2-16 16-16c8.8 0 16 7.1 16 15.9V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96.1z">
                                </path>
                            </svg>
                        </span>
                            Explore more interactive results for dynamic scene reconstruction!
                    </button>
                </div>
            </div>
        </div>
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