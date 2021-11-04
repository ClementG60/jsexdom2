function verificationPassword() {
    let p1 = document.getElementById("password1").value
    let p2 = document.getElementById("password2").value
    if (p1 == p2) {
        document.getElementById("password1").className = "border1"
        document.getElementById("password2").className = "border1"
    } else {
        document.getElementById("password1").className = "border2"
        document.getElementById("password2").className = "border2"
    }
}
