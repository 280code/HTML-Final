let favorites_main = document.createElement("div");
favorites_main.id = "cloth-love";
//以id为main-allBaby的元素作为插入元素的父元素
let main = document.querySelector("#main-allBaby");
let html = '';
for (let i = 0; i < 4; i++) {
    html += `        <div class="cloth-love">
            <div class="delete">
                <div class="text">
                    <div class="question">确定删除？</div>
                    <div class="select">
                        <a href="#" class="yes">确定</a>
                        <a href="#" onclick="no1();" class="no">取消</a>
                    </div>
                </div>

            </div>

            <div class="picture">
                <div class="text">

                    <a href="#" onclick="delete1();">
                        <img src="resource/favorites/delete-01.jpg" alt="">
                    </a>
                    <div class="left">
                        <a href="">
                                    进入商品
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

function delete1() {
    if (document.querySelector('.delete').style.display = 'none') {
        document.querySelector('.delete').style.display = 'block';
    }

}

function no1() {
    if (document.querySelector('.delete').style.display = 'block') {
        document.querySelector('.delete').style.display = 'none';
    }

}