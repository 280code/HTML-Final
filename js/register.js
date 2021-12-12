function checkeAgreement() {
    var isChecked = document.getElementsByName("isChecked")[0].checked;
    if (isChecked) {
        document.getElementById("fill").disabled = false;
    } else {
        document.getElementById("fill").disabled = true;
    }
}

function isEmail(e) {
    var atIndex = e.indexOf("@");
    var dotIndex = e.indexOf(".", atIndex);
    var flag = true;
    subStr = e.substring(0, dotIndex - 1);

    if (
        atIndex < 1 ||
        atIndex != e.lastIndexOf("@") ||
        dotIndex < atIndex + 2 ||
        e.length <= subStr.length
    ) {
        flag = false;
    } else {
        flag = true;
    }
    return flag;
}

function checkCommits() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var rPassword = document.getElementById("r-password");
    var email = document.getElementById("email");

    // name validation
    if (username.value == "") {
        alert("用户名不能为空！");
        return false;
    }

    // password validation
    if (password.value != "" || rPassword.value != "") {
        if (password.value.length < 6 || password.value.length > 16) {
            alert("密码长度应在6-16范围内！");
            return false;
        } else if (password.value != rPassword.value) {
            alert("两次密码输入不一致，请重新输入！");
            return false;
        }
    } else {
        alert("密码不能为空！");
        return false;
    }

    // email validation
    if (email.value != "") {
        //验证email格式
        if (!isEmail(email.value)) {
            alert("请输入正确的邮箱！");
            return false;
        }
    } else {
        alert("邮箱不能为空！");
        return false;
    }

    // stroe in localstorage
    localStorage.setItem(`${username.value}`, password.value);

    // navigate to login page
    window.location.href = "login.html";
}