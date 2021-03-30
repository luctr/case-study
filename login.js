function set() {
    let p = document.getElementById("name-1").value;
    if (check(p)) {
        alert("bạn cần điền họ tên")
    } else {
        localStorage.setItem("user", document.getElementById("name-1").value)
        window.location = "home.html";
    }

}

function check(input) {
    if (input == "") {
        return true
    }
    return false
}