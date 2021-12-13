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



let mainRight = document.createElement("div");
mainRight.id = "main-right";
let html = '';
let lenght = miPhone.length;
for (let i = 0; i < 4; i++) {
    let item = miPhone[1];
    html += `<div id="picgroup">
            <a href="./details.html">
                <div class="cloth3"><img src="resource/mi_images/px2-1.webp"><br><span id="title">Redmi 10x 4G</span> <br><span id="price">￥3333.00</span></div>
            </a>
            <a href="./details.html">
                <div class="cloth3"><img src="resource/mi_images/px2-1.webp"><br><span id="title">Redmi 10x 4G</span> <br><span id="price">￥3333.00</span></div>
            </a>
            <a href="./details.html">
                <div class="cloth3"><img src="resource/mi_images/px2-1.webp"><br><span id="title">Redmi 10x 4G</span> <br><span id="price">￥3333.00</span></div>
            </a>
        </div>`
}

mainRight.innerHTML = html;
document.body.insertAdjacentElement("beforeend", mainRight);

let demo2 = document.querySelector("#demo1");
console.log(demo2)
demo2.addEventListener("click", () => {
    alert("hello");
    localStorage.del = "hello";
})

function demo(i) {
    localStorage.demo = i;
    return false;
}