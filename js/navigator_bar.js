let nav = document.createElement("nav");
nav.innerHTML = `            <div class="left ">
                <img src=" " alt="YangStore ">
                <a href="phone.html">手机</a>
                <a href="computer.html">电脑</a>
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
document.body.insertAdjacentElement("beforebegin", nav);
document.body.insertAdjacentElement("afterbegin", div);