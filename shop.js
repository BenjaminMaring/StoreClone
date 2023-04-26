const track = document.getElementById("image-track");
const chevron = document.getElementById("chevron");
const dropdown = document.getElementById("dropdownMenu");
let check=false;

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

    track.dataset.percentage = nextPercentage;

    nextPercentage = Math.min(nextPercentage, 0);
    nextPercentage = Math.max(nextPercentage, -90);

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`}, {duration: 1200, fill: "forwards"});

    // The below code is used to add a sliding effect to the pictures as well
    // while they are moving, however it seem to cause some loading issues
    // and is not consitently smooth. for now, I am going to leave it out, 
    // although its cool when it works
    //
    // for (const image of track.getElementsByClassName("img")){
    //     image.animate({
    //         objectPosition: `${nextPercentage+100}% center`}, {duration:2000, fill: "forwards"})
    // }

}// end onmousemove

drop = () => {
    if (check === false) {
        check=true;
        chevron.animate({rotate: "-90deg"}, { duration: 100, fill: "forwards" });
        dropdown.style.opacity=1;
    }
    else if (check===true){
        check=false;
        chevron.animate({rotate: "0deg"}, { duration: 100, fill: "forwards" });
        dropdown.style.opacity=0;
    }
}