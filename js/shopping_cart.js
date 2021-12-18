/*全局变量*/
let cartSize = 3; //购物车内总商品数
let selectNum = 0; //选中商品数量
let acount = 0; //支付总金额
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
/*-------购物车操作----------------*/

//请选择商品提示框取消事件
let noselect = document.querySelector(".noselect_tip");
let cancelNoselect = document.querySelector(".x");
cancelNoselect.addEventListener("click", () => {
        noselect.style.display = "none";
    })
    //购物车底部操作全选部分
let checkAll = document.querySelectorAll(".select_all");
checkAll.forEach((item) => {
    item.addEventListener("click", function() {
        if (this.checked) {
            //当前选中的数量为购物车所有商品的数量
            selectNum = cartSize;
            //将所有选项框都改为选中状态
            document.querySelectorAll("input[type='checkbox']")
                .forEach((item) => { item.checked = true });
            buttonCheck();
        } else {
            selectNum = 0;
            //当前选中的商品数量为0
            document.querySelectorAll("input[type='checkbox']")
                .forEach((item) => { item.checked = false });
            buttonCheck();
        }
    });
})





//购物车底部删除选项
let deleteft = document.querySelector(".delete");
deleteft.addEventListener("click", () => {
    if (selectNum == 0) {
        noselect.style.display = "block";
    } else {

    }
});
//购物车底部移入收藏夹选项
let toFavorite = document.querySelector(".to_favorite");
toFavorite.addEventListener("click", () => {
    if (selectNum == 0) {
        noselect.style.display = "block";
    } else {

    }
});


//选中商品改变按钮样式
document.querySelectorAll(".select_commodity")
    .forEach((item) => {
        item.addEventListener("click", function() {
            //如果普通选项框被选中则，被选中商品数加1.
            if (item.checked == true) {
                selectNum++;
            } else {
                //如果是取消则被选中商品数减1
                selectNum--;
            }
            buttonCheck();
        })
    });



function init() {

}
document.querySelectorAll(".checkout").forEach((item) => {

    item.addEventListener("click", function() {
        if (selectNum != 0) {
            alert("支付成功，祝您生活愉快");
            selectNum = 0;
            buttonCheck();
        }

    })
})


//设置店铺选项框部分
let store = document.querySelectorAll(".store");
store.forEach((store) => {
    let checkboxStrore = store.querySelector(".checkbox_store");
    checkboxStrore.addEventListener("click", function() {
        let subCheckbox = store.querySelectorAll(".select_commodity");
        if (this.checked) {
            //如果选中则
            subCheckbox.forEach((item) => {
                item.checked = true;
                selectNum++;
            })
            buttonCheck();
        } else {
            subCheckbox.forEach((item) => {
                item.checked = false;
                selectNum--;
            });
            buttonCheck();
        }
    })


})


/*---------------结算按钮部分--------------------*/
function buttonCheck() {
    //如果商品数不为0，则结算按钮去除”unable"样式
    let checkouts = document.querySelectorAll(".checkout");
    if (selectNum == 0) {
        //如果一个选项都没有被选中，则按钮失效状态
        checkouts.forEach((item) => {
            item.classList.add("unable");
        });
    } else {
        //如果有一个被选中了，按钮则为可点击状态
        checkouts.forEach((item) => {
            item.classList.remove("unable");
        });
    }
    console.log(selectNum);
}