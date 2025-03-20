function showSection(id) {
    const sections = document.getElementsByClassName('dynamic-section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    const selectedSection = document.getElementById(id);
    selectedSection.style.display = 'block';

    const iframes = selectedSection.getElementsByTagName('iframe');
    for (let iframe of iframes) {
        if (!iframe.hasAttribute('data-loaded')) {
            if (iframe.hasAttribute('data-src')) {
                iframe.src = iframe.getAttribute('data-src');
                iframe.removeAttribute('data-src');
            }
            iframe.setAttribute('data-loaded', 'true');
        }
    }
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

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dynamic-section iframe').forEach(function(iframe) {
        if (!iframe.hasAttribute('data-src')) {
            iframe.setAttribute('data-src', iframe.src);
            iframe.removeAttribute('src');
        }
    });

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