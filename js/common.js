var username1 = "zhang"
var commoditySpefic = { src: "src", title: "黑鲨手机", price: 12 }
class Commodity {
    constructor(src, title, price) {
        this.src = src;
        this.title = title;
        this.price = price;
    }
}
class ShoppingCarts {
    init() {
        localStorage.setItem(`${username1}-commoditySize`, 0);
        localStorage.setItem(`${username1}-commodity0`, "none");
    }
    add(commodity) {
        let size = localStorage.getItem(`${username1}-commoditySize`);
        let endCommodity = `${username1}-commodity${size}`;
        size++;
        let newCommodity = `${username1}-commodity${size}`;
        localStorage.setItem(endCommodity, newCommodity);
        localStorage.setItem(newCommodity, "none");
        localStorage.setItem(`${newCommodity}-info`,
            JSON.stringify(commodity));
        localStorage.setItem(`${username1}-commoditySize`, size);
    }
    getSize() {
        return parseInt(localStorage.getItem(`${username1}-commoditySize`));
    }
    getCommoditys() {
        let commoditys = [];
        let commodityInfo = {
            src: "src",
            title: "title",
            price: "price"
        }
        let index = 0;
        let size = this.getSize();
        do {

        } while (commodity != 'none');
    }
    getCommodity() {

    }

}

var shoppingCarts = new ShoppingCarts();

function guard() {
    if (!localStorage.online) {
        alert("您还未登录，请先登录。");
        location.href = "login.html"
    }
}