let arrowParent = document.querySelector(".arrow");
let arrows = arrowParent.querySelectorAll("i");
let banner = document.querySelector(".banner");
let offset = -54;
banner.addEventListener("mouseenter", () => {
    appear();
})
banner.addEventListener("mouseleave", () => {
        disappear();
    })
    //-54px
function appear() {
    if (offset < 0) {
        offset += 3;
        offset = offset > 0 ? 0 : offset;
        arrows[0].style.left = offset + "px";
        arrows[1].style.right = offset + "px";
        requestAnimationFrame(appear);
    }

}

function disappear() {
    if (offset > -54) {
        offset -= 3;
        offset = offset < -54 ? -54 : offset;
        arrows[0].style.left = offset + "px";
        arrows[1].style.right = offset + "px";
        requestAnimationFrame(disappear);
    }
}
//删除提示框
let promptDelete = document.querySelector(".delete_tip");
let buttonCancel = document.querySelector(".cancel");
buttonCancel.addEventListener("click", () => {
    promptDelete.style.display = "none";
})