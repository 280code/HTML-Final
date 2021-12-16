function checkeAgreement() {
    var isChecked = document.getElementsByName("isChecked")[0].checked;
    if (isChecked) {
        document.getElementById("fill").disabled = false;
    } else {
        document.getElementById("fill").disabled = true;
    }
}

// login validation
function login() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var user_error = document.getElementById("input_name_error");
    var pass_error = document.getElementById("input_pass_error");
    var pass_null_error = document.getElementById("input_pass_null_error");

    var existPassword = localStorage.getItem(`${username.value}`);

    if (username.value == "") {
        user_error.hidden = false;
        return false;
    }

    if (password.value == "") {
        pass_null_error.hidden = false;
        return false;
    }

    if (username.value != "" || password.value != "") {
        if (password.value != existPassword) {
            pass_error.hidden = false;
            return false;
        }
    }
    // 数据存储online
    localStorage.setItem("online", username.value);
    // 跳转
    window.location.href = "index.html";
}

/**
 * clear error messages on focus
 */
function claeName() {
    var user_error = document.getElementById("input_name_error");
    user_error.hidden = true;

}

function clearPass() {
    var pass_error = document.getElementById("input_pass_error");
    var pass_null_error = document.getElementById("input_pass_null_error");
    pass_error.hidden = true;
    pass_null_error.hidden = true;

    // owl hands on eyes
    var owl = document.getElementById("login_img_block");
    owl.style.visibility = "visible";
}

// owl hands off
function handsOff() {
    var owl = document.getElementById("login_img_block");
    owl.style.visibility = "hidden";
}