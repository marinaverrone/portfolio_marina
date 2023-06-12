const showInnerCard = (job) => {
    const card = document.getElementById(job);
    card.style.display = 'flex';
    card.scrollIntoView();
}

const closeInnerCard = (job) => {
    const card = document.getElementById(job);
    const video = card.querySelector('video');
    video.pause();
    card.style.display = 'none';
}
