localStorage.page = "mi";
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
//商品数据
class commodity {
    constructor(src, title, price) {
        this.src = src;
        this.title = title;
        this.price = price;
    }

}
var miPhone = [];
for (let i = 0; i < 7; i++) {
    miPhone[i] =
        new commodity(`./resource/mi_images/px2-${i+1}.webp`, "小米", 12)
}

/*DOM部分*/
let picGroup = document.querySelector("#picgroup");
let html = "";
for (let i = 0; i < 11; i++) {
    html += `
    <div class="product">
        <a id="demo1" href="./details.html">
            <img src="resource/mi_images/phoneMix3.jfif"><br><span id="title">小米MIX3</span> <br><span id="price">￥3333.00</span>
        </a>
    </div>`
}
picGroup.insertAdjacentHTML("beforeend", html);