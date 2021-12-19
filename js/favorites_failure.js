let favorites_main = document.createElement("div");
favorites_main.id = "cloth-love";
//以id为main-allBaby的元素作为插入元素的父元素
let main = document.querySelector("#main-allBaby");
let html = '';
for (let i = 0; i < 4; i++) {
    html += `        <div class="cloth-love">
            <div class="picture">

                <div class="text">
                    <a href="">
                        <img src="resource/favorites/delete-01.jpg" alt="">
                    </a>
                    <div class="left">
                        <a href="">
                                    进入店铺
                                    </a>
                    </div>
                    <div class="right">
                        <a href="">
                                找相似
                            </a>
                    </div>

                </div>
                <img src="resource/phone/fail-03.png">
            </div>

            <div class="baby_failed">
                <img src="resource/favorites/fail-01.png" alt="">
                <p>宝贝失效啦</p>
            </div>
        </div>
        </div>`

}
//在父元素的最后面插入元素
main.insertAdjacentHTML("beforeend", html);
//切换空状态和有商品状态
let i = true;
let empty = document.querySelector(".empty");
let allBaby = document.querySelector("#main-allBaby");
//let promptd = document.querySelector(".delete_tip");
//切换空状态和有商品状态
function toSwitch() {
    if (i) {
        empty.style.display = "block";
        allBaby.style.display = "none";
        i = false;
    } else {
        empty.style.display = "none";
        allBaby.style.display = "block";
        i = true;
    }
}