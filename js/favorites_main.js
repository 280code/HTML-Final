// let favorites_main = document.createElement("div");
// favorites_main.id = "cloth-love";
// let html = '';
// let lenght = main.length;
// for (let i = 0; i < 4; i++) {
//     let item = main[1];
//     html += `<div class="picture">

//                 <div class="text">
//                     <a href="">
//                         <img src="resource\favorites\delete-01.jpg" alt="">
//                     </a>
//                     <div class="left">
//                         <a href="">
//                                     进入店铺
//                                     </a>
//                     </div>
//                     <div class="right">
//                         <a href="">
//                                 找相似
//                             </a>
//                     </div>

//                 </div>
//                 <img src="resource\phone\fail-03.png">
//             </div>

//             <p>vivo<br>
//                 <p><span>¥</span>5500.00</p>
//             </p>`
// }
let items = document.querySelector(".cloth-love");
let html_items = `<div class="picture">

                 <div class="text">
                     <a href="">
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
             </p>`
for (let i = 0; i < 4; i++) {
    items.insertAdjacentHTML("beforeend", html_items);
}