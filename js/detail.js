let buyPhone = document.querySelector(".buyphone");
buyPhone.addEventListener("click", () => {
    addInCart();
})

function changeCommodity() {
    if (localStorage.page == "apple") {
        let img = document.querySelector(".rightImg");
        img.style.marginRight = " 31px";
        img.src = "resource/apple_images/MacBook.jpg"
        let chanpinmiaoshu = document.querySelector("#chanpinmiaoshu");
        html = `
                <h2>产品描述：</h2>
            <p>颜色：陶瓷黑|陶瓷白 <br>存储容量：16G+512G固态硬盘</p>
            <p>处理器: M1 Pro 10核-16核<br> 型号: 16 英寸 MacBook Pro <br>超大屏：16 英寸<br>普通厚度：8.38mm
                <br>USB-C 转 MagSafe 3 连接线 (2 米)	1 件<br>140W USB-C 电源适配器	1 件
            </p>
            <span class="price">CNY20699.0
                </span>
    `
        chanpinmiaoshu.innerHTML = html;
    }

}
changeCommodity();

function addInCart() {
    let store;
    if (localStorage.page == "apple") {
        store = {
            //第一家店铺 
            name: "店铺：苹果电脑官方旗舰店",
            commoditys: [{
                title: "【24期免息】Apple/苹果 MacBook Pro 16英寸 M1 Pro / Pro Max 芯片手提办公专设计用官方网笔记本电脑2021",
                price: 20199.00,
                src: "resource/computer/macbook.jpg"
            }]
        }

    } else {
        store = {
            //第一家店铺 
            name: "店铺：小米手机官方旗舰店",
            commoditys: [{
                title: "当天发(送碎屏保+24期免息)Xiaomi小米 MIX 3 手机官方旗舰店5G全网通直降3系列官网11红米新款ultra正品pro",
                price: 3333.00,
                src: "resource/mi_images/phoneMix3.jfif"
            }]
        }

    }

    let cart = getCart();
    cart.stores.push(store);
    setCart(cart);
    alert("添加成功！");
}

//获取购物车内的店铺信息
function getStores() {

    let cart = getCart();
    return cart.stores;
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