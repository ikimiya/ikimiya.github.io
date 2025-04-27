
function myFunction() {
  alert("Hello from a static file!");
  console.log("hi");
}

let player; 

function myFunction() {
    alert("Hello from a static file!");
    console.log("hi");
}

function scrollTo(hash) {
    location.hash = "#" + hash;
}

function onYouTubeIframeAPIReady() {
    const videoSections = document.querySelectorAll('.video-section'); // Select all video sections

    videoSections.forEach((section, index) => {
        const videoId = section.getAttribute('data-video-id'); 

        const player = new YT.Player(`myVideo${index + 1}`, {
            videoId: videoId, 
            events: {
                'onReady': (event) => onPlayerReady(event, section, player)
            }
        });
    });
}
function onPlayerReady(event, section, player) {
    section.addEventListener('mouseenter', () => {
        player.playVideo(); // Play video on mouse hover
    });

    section.addEventListener('mouseleave', () => {
        player.pauseVideo(); // Pause video on mouse leave
    });
}
// Ensure the YouTube API is loaded
window.onload = () => {
    if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        // Wait for the API to load, then call the initialization function
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
};