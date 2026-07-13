// ======================================
// ADMIN LOGIN
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    const loginButton = document.getElementById("loginBtn");

    loginButton.addEventListener("click", login);

});


// ======================================
// LOGIN FUNCTION
// ======================================

function login() {

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value.trim();

    const message = document.getElementById("message");


    if (username === "admin" && password === "123456") {

        message.style.color = "green";

        message.innerHTML = "Login successful...";

        setTimeout(function () {

            window.location.href = "dashboard.html";

        }, 800);

    }

    else {

        message.style.color = "red";

        message.innerHTML = "Incorrect username or password.";

    }

}
