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

    var name_error = document.getElementById("input_name_error");
    var pass_error = document.getElementById("input_pass_error");
    var pass_format_error = document.getElementById("input_pass_format_error");
    var r_pass_error = document.getElementById("input_r_pass_error");
    var email_null_error = document.getElementById("input_email_null_error");
    var email_error = document.getElementById("input_email_error")

    // name validation
    if (username.value == "") {
        name_error.hidden = false;
        return false;
    }

    // password validation
    if (password.value != "" || rPassword.value != "") {
        if (password.value.length < 6 || password.value.length > 16) {
            pass_format_error.hidden = false;
            return false;
        } else if (password.value != rPassword.value) {
            r_pass_error.hidden = false;
            return false;
        }
    } else {
        pass_error.hidden = false;
        return false;
    }

    // email validation
    if (email.value != "") {
        // vaildate email format
        if (!isEmail(email.value)) {
            email_error.hidden = false;
            return false;
        }
    } else {
        email_null_error.hidden = false;
        return false;
    }

    // store in localstorage
    // the key is the username, value is the password
    localStorage.setItem(`${username.value}`, password.value);
    localStorage.setItem(`${username.value}-email`, email.value);

    // navigate to login page
    window.location.href = "login.html";
}

/**
 * clear error messages on focus
 */

function clearName() {
    var name_error = document.getElementById("input_name_error");
    name_error.hidden = true;
}

function clearPass() {
    var pass_error = document.getElementById("input_pass_error");
    var pass_format_error = document.getElementById("input_pass_format_error");
    pass_error.hidden = true;
    pass_format_error.hidden = true;
}

function clearRPass() {
    var r_pass_error = document.getElementById("input_r_pass_error");
    r_pass_error.hidden = true;
}

function clearEmail() {
    var email_null_error = document.getElementById("input_email_null_error");
    var email_error = document.getElementById("input_email_error")
    email_null_error.hidden = true;
    email_error.hidden = true;
}