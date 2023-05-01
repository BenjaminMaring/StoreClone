const chevron = document.getElementById("chevron");
const dropdown = document.getElementById("dropdownMenu");
let check=false;

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