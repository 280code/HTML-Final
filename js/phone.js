let offset = -990;
let time = 4; //以秒为单位

function move() {
    let item = document.querySelector(".item");
    if (offset > -1980) {
        offset -= 26;
        offset = offset < -1980 ? -1980 : offset;
        item.style.left = offset + 'px';
        setTimeout(move, 10);
    } else {
        //当切换结束，更改图片
        change();
    }
}

function change() {
    let item = document.querySelector(".item");
    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");
    let img3 = document.querySelector(".img3");
    let src2 = img2.src;
    //中间的图片为下一张的图片
    img2.src = img3.src;
    //第一张的图片给放到最后
    img3.src = img1.src;
    //第二张图片放到第一
    img1.src = src2;
    //还原
    item.style.left = "-990px";
    offset = -990;
}

function controller() {
    //轮播由第二张移动到第三张
    move();
    if (noClick) {
        setTimeout(controller, time * 1000);
    }


}
setTimeout(controller, time * 1000);
let rightArrow = document.querySelector("i.icon-right_arrow");
console.log(rightArrow);
rightArrow.addEventListener("click", () => {
    move();

})