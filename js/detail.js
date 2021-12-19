// function window_onload() {
//     var canvas1 = document.getElementById("canvas1");
//     if (canvas1 == null) return false;
//     var ctx = canvas1.getContext("2d");
//     var img = new Image();
//     img.src = "resource\phone\xiaoaomi11ultra_black.jpg.jpg";
//     img.onload = function() {
//         ctx.drawImage(img, 0, 0);
//     };
//     canvas1.onmousemove = canvas1_onmouse_move;
//     canvas1.onmouseout = canvas1_onmouse_out;
// }

// function canvas1_onmouse_move(ev) {
//     ev = ev || window.event;
//     var x,
//         y,
//         r = 100,
//         scal = 2;
//     var canvas1 = document.getElementById("canvas1");
//     canvas1.style.display = "inline";
//     var ctx1 = canvas1.getContext("2d");
//     ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
//     ctx1.drawImage(image2, 0, 0, gwidth, gheight);
//     canvas1.style.left = ev.pageX + 20 + "px";
//     canvas1.style.top = ev.pageY + 20 + "px";
//     var x = ev.pageX - canvas1.offsetLeft;
//     var y = ev.pageY - canvas1.offsetTop;
//     var sx = x - r;
//     var sy = y - r;
//     ctx1.save();
//     ctx1.strokeStyle = "#9eddf1";
//     ctx1.lineWidth = 5;
//     ctx1.beginPath();
//     ctx1.arc(x, y, 100, 0, Math.PI * 2);
//     ctx1.stroke();
//     ctx1.clip();
//     ctx1.drawImage(
//         image2,
//         sx,
//         sy,
//         2 * r,
//         2 * r,
//         0,
//         0,
//         scal * 2 * r,
//         scal * 2 * r
//     );
//     ctx1.restore();
// }

// function canvas1_onmouse_out() {
//     var canvas1 = document.getElementById("canvas1");
//     var temp = canvas1.style.display;
//     temp = "none";
// }

let buyPhone = document.querySelector(".buyphone");
buyPhone.addEventListener("click", () => {
    addInCart();
})

function setImg() {
    let img = document.querySelector(".")
}

function addInCart() {
    let store = {
        //第一家店铺 
        name: "店铺：苹果电脑官方旗舰店",
        commoditys: [{
            title: "当天发(送碎屏保+24期免息)Xiaomi小米 MIX 3 手机官方旗舰店5G全网通直降3系列官网11红米新款ultra正品pro",
            price: 1884.99,
            src: "resource/mi_images/sj1.webp"
        }]
    }
    let store = {
        //第一家店铺 
        name: "店铺：小米手机官方旗舰店",
        commoditys: [{
            title: "当天发(送碎屏保+24期免息)Xiaomi小米 MIX 3 手机官方旗舰店5G全网通直降3系列官网11红米新款ultra正品pro",
            price: 1884.99,
            src: "resource/mi_images/sj1.webp"
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