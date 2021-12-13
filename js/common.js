function init() {
    var username = localStorage.online
    console.log(username)
}

function guard() {
    if (!localStorage.online) {
        alert("您还未登录，请先登录。");
        location.href = "login.html"
    }
}