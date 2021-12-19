/*全局变量*/
let selectNum = 0; //选中商品数量
let acount = 0; //支付总金额
let arrowParent = document.querySelector(".arrow");
let arrows = arrowParent.querySelectorAll("i");
let banner = document.querySelector(".banner");
let offset = -54;

//初始化购物车店铺相关函数
class InitHtml {
    constructor(store) {
        this.store = store;
    }
    getStoreTitle() {
        return `<input class="checkbox_store" type="checkbox"> ${this.store.name}`
    }
    getCommodity(commodity) {
        return `
<div class="commodity">
    <input type="checkbox" class="select_commodity">
    <img src="${commodity.src}" alt="">
    <div class="title">${commodity.title}</div>
    <div class="price"><span class="price_num">${commodity.price}</span></div>
    <div class="option_numbers">
        <button class="sub">-</button>
        <input type="number" min=1 value="1"  onkeyup="this.value=this.value.match(/\d{1,5}/g)">
        <button class="add">+</button>
    </div>
    <div class="amount_item">
        ￥<span class="total_money">${commodity.price}</span>
    </div>
    <div class="option_item">
        <div class="go_favorite">移入收藏夹</div>
        <div class="delete_item">删除</div>
    </div>
</div>`
    }
}

function init() {
    //得到购物车
    let items = document.querySelector(".items");
    //购物车内的店铺
    let stores = getStores();
    if (stores.length != 0) {
        isEmpty(false);
        //遍历购物车内的店铺
        stores.forEach((store) => {
            let storeDiv = document.createElement("div");
            storeDiv.className = "store";
            //得到初始化html类
            let inithtml = new InitHtml(store);
            //得到店铺标题,并且装配进店铺元素中
            let storeTitle = inithtml.getStoreTitle();
            storeDiv.innerHTML = storeTitle;
            //得到店铺内的商品
            let commoditys = store.commoditys;
            //准备购物车店铺内商品的html
            let html = "";
            //遍历店铺内的商品
            commoditys.forEach((commodity) => {
                    html += inithtml.getCommodity(commodity);
                })
                //将商品加入到店铺元素中
            storeDiv.insertAdjacentHTML("beforeend", html);
            //将店铺加入到购物车
            items.insertAdjacentElement("beforeend", storeDiv);
        })
    } else {
        isEmpty(true);
    }


}
//初始化
init();


banner.addEventListener("mouseenter", () => {
    appear();
})
banner.addEventListener("mouseleave", () => {
        disappear();
    })
    //-54px

let promptd = document.querySelector(".delete_tip");
//切换空状态和有商品状态
function isEmpty(i) {

    let empty = document.querySelector(".empty");
    let table = document.querySelector(".table");
    if (i) {
        //如果为空则显示空界面
        empty.style.display = "block";
        table.style.display = "none";
        i = false;
    } else {
        //如果不为空则显示购物车内商品
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
            selectNum = getCartSize();
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
        //询问是否真的要删除
        let delTipDiv = document.querySelector(".delete_tip");
        delTipDiv.style.display = "block";
        let confirmButton = delTipDiv.querySelector(".confirm");
        confirmButton.addEventListener("click", () => {
            clearCart();
            init();
            delTipDiv.style.display = "none";
        })

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



//结算金额
document.querySelectorAll(".checkout").forEach((item) => {

    item.addEventListener("click", function() {
        if (selectNum != 0) {
            alert("支付成功，祝您生活愉快");
            selectNum = 0;
            buttonCheck();
            clearCart();
            init();
        }

    })
})


//设置店铺选项框部分
function setSelect() {
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
}
setSelect();
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
    //动态变化选取商品数量
    let aomountSelect = document.querySelectorAll(".amount_select");
    aomountSelect.forEach((item) => {
        item.innerHTML = selectNum;
    })

    /*---------------------动态变化选取商品总金额------------------
     */
    updateAmount();


}


function updateAmount() {
    //获取所有店铺元素
    let amount = 0.00;
    let stores = document.querySelectorAll(".store");
    stores.forEach((store) => {
        let commoditys = store.querySelectorAll(".commodity");
        //遍历所有商品
        commoditys.forEach((commodity) => {
            //该商品是否被选中变量
            let isSelect = commodity.querySelector(".select_commodity").checked;
            if (isSelect) {
                //如果被选中，则总金额加上该商品总金额
                let totalMoney = commodity.querySelector(".total_money").innerHTML;
                amount += parseFloat(totalMoney);

            }
        })
    })

    //得到显示总金额的元素
    let amountSpan = document.querySelectorAll(".amount_checkout");
    amountSpan.forEach((amountElement) => {
        if (parseInt(amount) == amount) {
            //如果amount没有小数，则后面补两个0
            amountElement.innerText = `${amount}.00`;
        } else {
            amountElement.innerText = `${amount}`;
        }

    })
}

/* ---------------------设置加减按钮事件---------------------
 */

//获取所有店铺元素
let storesDiv = document.querySelectorAll(".store");
storesDiv.forEach((storeDiv) => {
        let commoditys = storeDiv.querySelectorAll(".commodity");
        //遍历所有商品
        commoditys.forEach((commodity) => {
            //获取该商品的总金额元素
            let totalMoney = commodity.querySelector(".total_money");
            let price = parseFloat(commodity.querySelector(".price_num").innerText);
            //得到输入框元素
            let numInput = commodity.querySelector("input[type='number']");
            //得到加减按钮
            let subButton = commodity.querySelector(".sub");
            let addButton = commodity.querySelector(".add");
            //为加减按钮设置点击事件
            subButton.addEventListener("click", () => {
                let num = parseFloat(numInput.value);
                if (num > 1) {
                    num--;
                }
                numInput.value = num;
                totalMoney.innerText = toFloat(num * price);
                updateAmount();
            })
            addButton.addEventListener("click", () => {
                let num = parseFloat(numInput.value);
                num++;
                numInput.value = num;
                totalMoney.innerText = toFloat(num * price);
                updateAmount();
            });
            //为输入框设置改变事件
            numInput.addEventListener("change", function() {
                if (this.value == "") {
                    this.value = 1;

                } else {
                    //如果以0开头，则去掉0
                    this.value = parseFloat(this.value);
                }
                totalMoney.innerText = toFloat(this.value * price);
                updateAmount();
            })



        })
    })
    //转换为浮点型并且保留两位小数
function toFloat(num) {
    return Math.floor(parseFloat(num) * 100) / 100;
}
//清除购物车
function clearCart() {
    let username = localStorage.getItem("online");
    let name = `${username}-cart`
    let cart = JSON.parse(localStorage.getItem(`${name}`));
    cart.stores = [];
    localStorage.setItem(`${name}`, JSON.stringify(cart));
}

function initCart() {
    let cart = {
        stores: []
    }
    let username = localStorage.getItem("online");
    localStorage.setItem(`${username}-cart`, JSON.stringify(cart));
}

function addInCart() {
    let store = {
        //第一家店铺 
        name: "店铺：小米手机官方旗舰店",
        commoditys: [{
            title: "现货速发+送碎屏宝 HONOR荣耀畅玩20手机官方旗舰店千元机畅玩20pro手机新品智能学生畅想20手机全网通非华为",
            price: 884.99,
            src: "./resource/phone/荣耀畅玩20.jpg"
        }]
    }
    let cart = getCart();
    cart.stores.push(store);
    setCart(cart);
}

//获取购物车内的店铺信息
function getStores() {

    let cart = getCart();
    return cart.stores;
}
//获取购物车内的商品数
function getCartSize() {
    let num = 0;
    let stores = getStores();
    stores.forEach((store) => {
        let commoditys = store.commoditys;
        commoditys.forEach((commodity) => {
            num++;
        })
    })
    return num;
}

function getCart() {
    username = localStorage.online;
    let cart = JSON.parse(localStorage.getItem(`${username}-cart`));
    return cart;
}

function setCart(cart) {
    let username = localStorage.online;
    localStorage.setItem(`${username}-cart`,
        JSON.stringify(cart));
}
//底部推荐轮播