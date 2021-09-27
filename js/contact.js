var options = document.getElementById("contactOptions");
var email = document.getElementById("chooseEmail");
var phone = document.getElementById("choosePhone");

options.addEventListener("change", function () {
    if (this.value == "email"){
        email.style.display = "block";
        phone.style.display = "none";
    }
    else if (this.value == "phone"){
        email.style.display = "none";
        phone.style.display = "block";
    } else {
        email.style.display = "none";
        phone.style.display = "none";
    }
});