let nav = document.createElement("nav");
nav.innerHTML = `            <div class="left_header">
                <div class="logo">
                    <a href="index.html"><img src="./resource/logo/Y.svg " alt="YangStore "> <span>YangStore</span></a>
                </div>
                <div class="phone">
                    <a href="phone.html">手机</a>
                    <ul class="submenu">
                        <li><a href="phone_mi.html">华为</a></li>
                        <li><a href="phone_mi.html">荣耀</a></li>
                        <li><a href="phone_mi.html">小米</a></li>
                        <li><a href="phone_mi.html">Apple</a></li>
                        <li><a href="phone_mi.html">三星</a></li>
                    </ul>
                </div>
                <div class="computer">
                    <a href="computer.html">电脑</a>
                    <ul class="submenu">
                        <li><a href="computer_apple.html">华为</a></li>
                        <li><a href="computer_apple.html">荣耀</a></li>
                        <li><a href="computer_apple.html">小米</a></li>
                        <li><a href="computer_apple.html">Apple</a></li>
                        <li><a href="computer_apple.html">三星</a></li>
                    </ul>
                </div>

            </div>
            <div class="right_header ">
                <a href="about.html"><i class="iconfont icon-aboutus"></i></a>
                <a href="favorites_main.html"><i  class="iconfont icon-favorite"></i></a>
                <a href="shopping_cart.html"><i  class="iconfont icon-cart"></i></a>
                <a href="login.html"><i id="userLogo"  class="iconfont icon-user "></i>
                </a>
            </div>`
nav.className = "header_nav";
let div = document.createElement("div");
div.style.height = 60 + "px";
document.body.insertAdjacentHTML("beforebegin", '<link rel="shortcut icon" href="resource/logo/Y.svg" type="image/x-icon">');
document.body.insertAdjacentElement("beforebegin", nav);
document.body.insertAdjacentElement("afterbegin", div);
//侧边栏
let aside = document.createElement("aside");
let offsetAside = -286;
let visibleAside = false;
let username = localStorage.getItem("online");
let email = localStorage.getItem(`${username}-email`);
aside.className = "aside_nav";
aside.innerHTML = `<div class="title">等级5</div>
            <div class="main_aside">
                <div class="user_info">
                    <img src="./resource/user/avatar.jpg" alt="">
                    <div class="right_user">
                        <div class="username">${username}</div>
                        <div class="email">${email}</div>
                    </div>
                </div>
                <ul class="option">
                    <li><i class="iconfont icon-orders"></i><span>订单</span></li>
                    <li><i class="iconfont icon-subscriptions"></i><span>订阅</span></li>
                    <li><i class="iconfont icon-setting"></i> </i><span>设置</span></li>
                    <li><i class="iconfont icon-home"></i><span>主页</span></li>
                    <li id="exit"><i class="iconfont icon-tuichu"></i><span>退出</span></li>
                </ul>
            </div>`
document.body.insertAdjacentElement("afterbegin", aside);
let userLogo = document.querySelector("#userLogo");
userLogo.addEventListener("mouseover", () => {
    if (localStorage.online) {
        if (!visibleAside) {
            pullOut();
            visibleAside = true;
        }
    }


})
aside.addEventListener("mouseleave", () => {
        if (visibleAside) {
            pullGo();
            visibleAside = false;
        }

    })
    //将侧边栏推出来
function pullOut() {
    if (offsetAside < 4) {
        offsetAside += 18;
        offsetAside = offsetAside > 4 ? 4 : offsetAside;
        aside.style.right = offsetAside + "px";
        requestAnimationFrame(pullOut);
    }

}

function pullGo() {
    if (offsetAside > -290) {
        offsetAside -= 12;
        offsetAside = offsetAside < -290 ? -290 : offsetAside;
        aside.style.right = offsetAside + "px";
        requestAnimationFrame(pullGo);
    }

}

let loginout = document.querySelector("#exit");
loginout.addEventListener("click", () => {
    localStorage.online = "";
    location.href = "login.html";
})