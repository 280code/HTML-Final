let nav = document.createElement("nav");
nav.innerHTML = `            <div class="left">
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
            <div class="right ">
                <a href="about.html"><i class="iconfont icon-aboutus"></i></a>
                <a href="favorites.html"><i  class="iconfont icon-favorite"></i></a>
                <a href="shopping_cart.html"><i  class="iconfont icon-cart"></i></a>
                <a href="login.html"><i  class="iconfont icon-user "></i>
                </a>
            </div>`
nav.className = "header_nav";
let div = document.createElement("div");
div.style.height = 60 + "px";
nav.style.f
document.body.insertAdjacentElement("beforebegin", nav);
document.body.insertAdjacentElement("afterbegin", div);