nav.classList.add("add_header");
nav.width = window.innerWidth;
div.style.display = "none";
let video = document.querySelector("video");
video.width = window.innerWidth;
document.addEventListener("mousewheel", (e) => {
    if (e.wheelDelta > 0) {
        console.log("鼠标滚轮向上滚动。");

    } else if (e.wheelDelta < 0) {
        console.log("鼠标滚轮向下滚动。")
    }
})