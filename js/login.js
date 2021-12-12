function checkeAgreement() {
    var isChecked = document.getElementsByName("isChecked")[0].checked;
    if (isChecked) {
        document.getElementById("fill").disabled = false;
    } else {
        document.getElementById("fill").disabled = true;
    }
}

function login() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    var existPassword = localStorage.getItem(`${username.value}`);

    if (username.value != "" || password.value != "") {
        if (password.value != existPassword) {
            alert("用户名或密码错误！");
            return false;
        }
    } else {
        alert("用户名或密码不能为空！");
        return false;
    }

    window.location.href = "index.html";
}