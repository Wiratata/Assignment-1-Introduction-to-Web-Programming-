//This function is use to reveal the image after 10 seconds
setTimeout(function(){
    const image = document.querySelector(".myImage");
    image.classList.remove("hidden");
}, 10000);

