var commodityInfo = {
    src: "src",
    name: "黑鲨手机",
    title: "黑鲨手机限量购买，预购从速",
    price: 12,
    store: "小米官方旗舰店"
}


class Cart {
    constructor(username) {

    }
    add(commodityInfo) {
        //得到最后一个节点的id
        let favorite = this.getCart();
        while ((typeof(favorite) != "object"));
        let old = favorite.end;
        let newIndex = old + 1;
        let newCommodity = {
            id: newIndex,
            key: `${username}-favorite-commodity${newIndex}`,
            prev: `${username}-favorite-commodity${old}`,
            //下一个节点的键,如果是最后一个节点，则为'none'
            next: `none`,
            //商品信息
            info: commodityInfo
        }

        //得到原来的最后一个节点
        let oldCommodity =
            this.getCommodity(newCommodity.prev);
        //创建该新节点
        localStorage.setItem(newCommodity.key,
            JSON.stringify(newCommodity))

        //将原本最后一个节点的下一个节点指向该新节点
        oldCommodity.next = newCommodity.key;
        //将该更改写回本地存储
        localStorage.setItem(oldCommodity.key, JSON.stringify(oldCommodity));
        //更新购物车对象的属性
        favorite.end = newIndex;
        favorite.size = favorite.size + 1;
        localStorage.setItem(favorite.key, JSON.stringify(favorite));
    }

    remove(key) {
            //得到要删除的商品
            let commodity = this.getCommodity(key);

            //得到前一个节点
            let prev = this.getCommodity(commodity.prev);
            let next = this.getCommodity(commodity.next);
            let favorite = this.getCart();
            //判断该要删除的商品是否为最后一个商品
            if (commodity.next == 'none') {
                //如果是，则倒数第二个节点的下一个节点指向'none'
                prev.next = 'none';
                //将该更改写回本地存储
                localStorage.setItem(prev.key,
                    JSON.stringify(prev));
                //将倒数第二个节点作为购物车的最后一个节点
                favorite.end = prev.id;

            } else {
                //如果该节点不是最后一个节点
                //则前一个节点指向后一个节点
                //改节点的后一个节点指向该节点的前一个节点
                prev.next = commodity.next;
                next.prev = commodity.prev;
            }
            //移除次此商品节点
            localStorage.removeItem(key);
            //更新购物车
            favorite.size--;
            localStorage.setItem(favorite.key,
                JSON.stringify(favorite));

            //更新前一个节点和后一个节点
            localStorage.setItem(prev.key,
                JSON.stringify(prev));
            localStorage.setItem(next.key,
                JSON.stringify(next));
        }
        //得到用户购物车对象
    getCart() {
            return JSON.parse(localStorage.getItem(`${username}-favorite`));
        }
        //得到商品节点
    getCommodity(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    getAll() {
        let commoditys = [];
        let favorite = this.getCart();
        let commodity =
            JSON.parse(localStorage.getItem(`${username}-favorite-commodity0`));
        for (let i = 0; i < favorite.size; i++) {
            //执行则说明头指针指向一个具体商品，从中得到商品的值
            commodity = this.getCommodity(commodity.next);
            commoditys.push(commodity);

        }
        return commoditys;
    }


}
class Favorite {
    constructor(username) {

    }
    add(commodityInfo) {
        //得到最后一个节点的id
        let favorite = this.getCart();
        while ((typeof(favorite) != "object"));
        let old = favorite.end;
        let newIndex = old + 1;
        let newCommodity = {
            id: newIndex,
            key: `${username}-favorite-commodity${newIndex}`,
            prev: `${username}-favorite-commodity${old}`,
            //下一个节点的键,如果是最后一个节点，则为'none'
            next: `none`,
            //商品信息
            info: commodityInfo
        }

        //得到原来的最后一个节点
        let oldCommodity =
            this.getCommodity(newCommodity.prev);
        //创建该新节点
        localStorage.setItem(newCommodity.key,
            JSON.stringify(newCommodity))

        //将原本最后一个节点的下一个节点指向该新节点
        oldCommodity.next = newCommodity.key;
        //将该更改写回本地存储
        localStorage.setItem(oldCommodity.key, JSON.stringify(oldCommodity));
        //更新购物车对象的属性
        favorite.end = newIndex;
        favorite.size = favorite.size + 1;
        localStorage.setItem(favorite.key, JSON.stringify(favorite));
    }

    remove(key) {
            //得到要删除的商品
            let commodity = this.getCommodity(key);

            //得到前一个节点
            let prev = this.getCommodity(commodity.prev);
            let next = this.getCommodity(commodity.next);
            let favorite = this.getCart();
            //判断该要删除的商品是否为最后一个商品
            if (commodity.next == 'none') {
                //如果是，则倒数第二个节点的下一个节点指向'none'
                prev.next = 'none';
                //将该更改写回本地存储
                localStorage.setItem(prev.key,
                    JSON.stringify(prev));
                //将倒数第二个节点作为购物车的最后一个节点
                favorite.end = prev.id;

            } else {
                //如果该节点不是最后一个节点
                //则前一个节点指向后一个节点
                //改节点的后一个节点指向该节点的前一个节点
                prev.next = commodity.next;
                next.prev = commodity.prev;
            }
            //移除次此商品节点
            localStorage.removeItem(key);
            //更新购物车
            favorite.size--;
            localStorage.setItem(favorite.key,
                JSON.stringify(favorite));

            //更新前一个节点和后一个节点
            localStorage.setItem(prev.key,
                JSON.stringify(prev));
            localStorage.setItem(next.key,
                JSON.stringify(next));
        }
        //得到用户购物车对象
    getFavorite() {
            return JSON.parse(localStorage.getItem(`${username}-favorite`));
        }
        //得到商品节点
    getCommodity(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    getAll() {
        let commoditys = [];
        let favorite = this.getCart();
        let commodity =
            JSON.parse(localStorage.getItem(`${username}-favorite-commodity0`));
        for (let i = 0; i < favorite.size; i++) {
            //执行则说明头指针指向一个具体商品，从中得到商品的值
            commodity = this.getCommodity(commodity.next);
            commoditys.push(commodity);

        }
        return commoditys;
    }


}
class DataBase {

}
//初始化购物车商品头节点
localStorage.online = "280code";
var cart = new Cart(localStorage.online);

function init() {

    let username = localStorage.online;
    //构造购物车商品头节点对象
    let commodityInCart0 = {
            id: 0,
            key: `${username}-cart-commodity0`,
            next: `none`,
        }
        //构造购物车对象
    let cart = {
            key: `${username}-cart`,
            size: 0,
            end: 0
        }
        //存储购物车商品头节点
    localStorage.setItem(`${username}-cart-commodity0`,
        JSON.stringify(commodityInCart0));
    //存储购物车对象
    localStorage.setItem(`${username}-cart`,
        JSON.stringify(cart))

}


class ShoppingCarts {
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