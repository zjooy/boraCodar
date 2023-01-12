
const btn = document.querySelector(".btnRodar");
const image = document.querySelector("#image");
const video = document.querySelector("#video");


btn.addEventListener("click", function() {
    
    if (video.style.display === "none" && image.style.display === "block") {

        video.style.display = "block";
        image.style.display = "none";
    }
    else{
        image.style.display = "block";
        video.style.display = "none";
    }    
});