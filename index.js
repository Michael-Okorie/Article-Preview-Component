const shareIcon = document.querySelector("#shareIcon");
const socialIcons = document.querySelector("#icons");

document.addEventListener("click", (event) => {
    if(shareIcon.contains(event.target)){
        socialIcons.classList.toggle("displayBlock");
        shareIcon.classList.toggle("shareActive")
    } else{
        socialIcons.classList.remove("displayBlock");
        shareIcon.classList.remove("shareActive")
    }
})