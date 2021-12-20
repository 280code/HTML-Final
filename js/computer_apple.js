localStorage.page = "apple";

let picGroup = document.querySelector("#picgroup");
let html = "";
for (let i = 0; i < 32; i++) {
    html += `            <div class="cloth3">
                <a id="demo1" href="./details.html">
                    <img src="resource/apple_images/MacBook.jpg"><br>
                    <span id="title">MacBook pro</span> <br>
                    <span id="price">￥20199.00</span>
                </a>
            </div>`
}
picGroup.insertAdjacentHTML("beforeend", html);