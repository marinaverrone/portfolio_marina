const toggleVideoAudio = () => {
    const video = document.getElementById('highlight');
    const unmuteButton = document.getElementById('audio-toggle-button');
    
    if(video) video.muted = !video.muted;
    if(unmuteButton) unmuteButton.innerText = video.muted ? "🔊" : "🔇";
}
