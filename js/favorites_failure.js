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
                        <a href="#"  class="no nol">取消</a>
                    </div>
                </div>

            </div>

            <div class="picture">
                <div class="text">

                    <a href="#" class="delete1">
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

            <div class="baby_failed">
                <img src="resource/favorites/fail-01.png" alt="">
                <p>宝贝失效啦</p>
            </div>
        </div>`

}
//在父元素的最后面插入元素
main.insertAdjacentHTML("beforeend", html);

//选择是否删除商品页面
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
//遍历
function init() {
    let clothLoves = document.querySelectorAll(".cloth-love");
    //遍历每个收藏
    clothLoves.forEach((clothLoves) => {
        //获取垃圾桶图标
        let delete1 = clothLoves.querySelector(".delete1");
        //给每个垃圾桶绑定事件
        delete1.addEventListener("click", () => {
            clothLoves.querySelector(".delete").style.display = "block";

        })
        let nol = clothLoves.querySelector(".nol");
        //给取消按钮事件绑定点击事件
        nol.addEventListener("click", () => {
            clothLoves.querySelector(".delete").style.display = "none";
        })
    })
}
init();