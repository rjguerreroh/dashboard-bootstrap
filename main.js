let header = document.getElementById("header");
window.addEventListener("resize", function(event) {
    if (window.matchMedia("(max-width: 700px)").matches) {
        header.className += " navbar-dark bg-dark";
    } else {
        header.classList.remove("navbar-dark");
        header.classList.remove("bg-dark");
    }
})
