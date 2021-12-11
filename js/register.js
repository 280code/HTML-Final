function isChecked() {
    var isChecked = document.getElementsByName("isChecked")[0].checked;
    if (isChecked) {
        document.getElementById("fill").disabled = false;
    } else {
        document.getElementById("fill").disabled = true;
    }

}

// if (isChecked == 1) {
//     var button = document.getElementById('fill');
//     button.disabled = false;
// } else {
//     var button = document.getElementById('fill');
//     button.disabled = true;
// }