const track = document.getElementById("image-track");

buffer.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

buffer.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = parseFloat(track.dataset.percentage);
}

buffer.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

    let percentage = (mouseDelta / maxDelta) * -100,
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

        nextPercentage = Math.min(nextPercentage, 0);
        nextPercentage = Math.max(nextPercentage, -90);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, 0%)`}, {duration: 1200, fill: "forwards"});
    
    for (const image of track.getElementsByClassName("img")){
        image.animate({
            objectPosition: `${nextPercentage+100}% center`}, {duration:2000, fill: "forwards"})
    }

}// end onmousemove