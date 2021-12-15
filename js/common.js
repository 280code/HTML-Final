var username1 = "zhang"
var commoditySpefic = {
    src: "src",
    name: "黑鲨手机",
    title: "黑鲨手机限量购买，预购从速",
    price: 12,
    store: "小米官方旗舰店"
}
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
        commodity.id = size;
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
        let index = 0;
        let size = this.getSize();
        //得到头指针指向的值，如果不为空，则为商品，为空，则为'none'值
        let commodity = this.getCommodity(index);
        //如果商品数量为0，则一次也不会执行
        for (let i = 0; i < size; i++) {
            //执行则说明头指针指向一个具体商品，从中得到商品的值
            commoditys.push(this.getCommodity(commodity));
            console.log(commodity);
            commodity = this.getCommodity(commodity);
        }
        return commoditys;
    }
    getCommodityInfo(commodity) {
        return JSON.parse(localStorage.getItem(`${commodity}-info`));
    }
    getCommodity(index) {
        //得到商品链
        return localStorage.getItem(`${username1}-commodity${index}`)
    }
    removeCommodity(index) {
        //移除购物车商品链和商品信息
        //
        localStorage.removeItem(`${username1}-commodity${index}`);
        localStorage.removeItem(`${username1}-commodity${index}-info`);
        let size = localStorage.getItem(`${username1}-commoditySize`);
        localStorage.setItem(`${username1}-commoditySize`, --size);
    }

}

var shoppingCarts = new ShoppingCarts();

function guard() {
    if (!localStorage.online) {
        alert("您还未登录，请先登录。");
        location.href = "login.html"
    }
}