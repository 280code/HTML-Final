function init280code() {
    //初始化购物车内容
    let stores = [{
            //第一家店铺 
            name: "店铺：华为荣耀手机官方旗舰店",
            commoditys: [{
                    title: "现货速发+送碎屏宝 HONOR荣耀畅玩20手机官方旗舰店千元机畅玩20pro手机新品智能学生畅想20手机全网通非华为",
                    price: 884.99,
                    src: "./resource/phone/荣耀畅玩20.jpg"
                },
                {
                    title: "现货速发+送碎屏宝 HONOR荣耀畅玩20手机官方旗舰店千元机畅玩20pro手机新品智能学生畅想20手机全网通非华为",
                    price: 884.99,
                    src: "./resource/phone/荣耀畅玩20.jpg"
                }
            ]
        },

        {
            //第二店铺 
            name: "店铺：小米手机官方旗舰店",
            commoditys: [{
                    title: "送碎屏保(24期分期)Xiaomi/小米 Redmi 红米Note9 5G手机官方旗舰店官网11pro+正品k40新款4g直降系列10s",
                    price: 1224.99,
                    src: "./resource/phone/红米手机.jpg"
                },
                {
                    title: "送碎屏保(24期分期)Xiaomi/小米 Redmi 红米Note9 5G手机官方旗舰店官网11pro+正品k40新款4g直降系列10s",
                    price: 1224.99,
                    src: "./resource/phone/红米手机.jpg"
                }
            ]
        }
    ]

    let cart = { stores }
    let username = "280code";
    localStorage.setItem(`${username}-cart`,
        JSON.stringify(cart));
    localStorage.setItem("280code", "111111");
    localStorage.setItem("280code-email", "5201314@love.com")
}

function initUser(username) {
    let cart = {
        stores: []
    }
    localStorage.setItem(`${username}-cart`, JSON.stringify(cart));
}