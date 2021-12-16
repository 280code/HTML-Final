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
let i = true;
let empty = document.querySelector(".empty");
let table = document.querySelector(".table");
let promptd = document.querySelector(".delete_tip");
//切换空状态和有商品状态
function toSwitch() {
    if (i) {
        empty.style.display = "block";
        table.style.display = "none";
        i = false;
    } else {
        empty.style.display = "none";
        table.style.display = "block";
        i = true;
    }
}
//显示删除提示框
function toDelete() {
    promptd.style.display = "block";
}

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


//生成推荐图片
let items = document.querySelector(".items_banner");
let html_items = `                    <a class="item" href="./details.html">
                        <img src="./resource/phone/荣耀畅玩20.jpg" alt="">
                        <div class="price">
                            <div class="current_price">￥889.50</div>
                            <div class="original_price">￥1889.50</div>
                        </div>
                        <div class="title">现货速发+送碎屏宝 HONOR荣耀畅玩20手机官方旗舰店千元机畅玩20pro手机新品智能学生畅想20手机全网通非华为</div>
                        <div class="sales">月销500笔</div>
                        <div class="reason">根据您的偏好“手机”推荐</div>
                    </a>`
for (let i = 0; i < 4; i++) {
    items.insertAdjacentHTML("beforeend", html_items);
}