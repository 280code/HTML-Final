div.style.display = "none";
nav.style.top = "-60px";
let offset = -80;
let visible = false;
document.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 41) {
        if (!visible) { //如果不可见,将导航栏拉下来
            pull();
        }
        visible = true;
    } else { //如果导航栏可见将导航栏推上去
        if (visible) {
            push()
        }
        visible = false;
    }
})


function pull() {
    //使导航栏出现
    if (offset < 0) {
        offset += 4;
        //offset为0时刚好
        offset = offset > 0 ? 0 : offset;
        nav.style.top = offset + "px";
        requestAnimationFrame(pull)
    }

}

function push() {
    if (document.documentElement.scrollTop == 0) {
        offset = -60
    }
    if (offset >= -60) {
        offset -= 8;
        nav.style.top = offset + "px";
        requestAnimationFrame(push);
    }
}