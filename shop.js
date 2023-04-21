const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mousedownat = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
    //if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * 100,
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
console.log(percentage);

        track.dataset.percentage = nextPercentage;
        console.log(track.dataset.percentage);
    track.style.transform = `translate(${nextPercentage}%, -50%)`;
}