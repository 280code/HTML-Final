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
            <p>vivo<br>
                <p><span>¥</span>5500.00</p>
            </p>
        </div>`

}
//在父元素的最后面插入元素
main.insertAdjacentHTML("beforeend", html);