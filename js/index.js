nav.classList.add("add_header");
nav.width = window.innerWidth;
div.style.display = "none";
let video = document.querySelector("video");
document.documentElement.scrollTop = 0;
video.width = window.innerWidth;
if (window.innerHeight < 626) {
    video.height = 700;
}


document.addEventListener("mousewheel", (e) => {
    if (e.wheelDelta > 0) {
        console.log("鼠标滚轮向上滚动。");

    } else if (e.wheelDelta < 0) {
        console.log("鼠标滚轮向下滚动。")
    }
})