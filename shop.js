const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

    let percentage = (mouseDelta / maxDelta) * -100,
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    
//    nextPercentage = Math.min(nextPercentage, -100);
    nextPercentage = Math.max(nextPercentage, 0);

        track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`}, {duration: 1200, fill: "forwards"});

    for (const image of track.getElementsByClassName("img")){
        image.animate({
            objectPosition: `${nextPercentage}% center`}, {duration:1200, fill: "forwards"})
    }
}