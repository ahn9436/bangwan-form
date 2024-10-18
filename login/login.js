// Get the modal elements
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

// Get the buttons that open the modals
var loginBtn = document.getElementById("logInBtn");
var registerBtn = document.getElementById("signUpBtn");

// Get the cancel buttons inside the modals
var loginCancelBtn = document.getElementById("loginCancelBtn");
var registerCancelBtn = document.getElementById("registerCancelBtn");

// Get the confirm buttons inside the modals
var loginConfirmBtn = document.getElementById("loginConfirmBtn");
var registerConfirmBtn = document.getElementById("registerConfirmBtn");

// Get the login and register message elements
var loginMessage = document.getElementById("loginMessage");
var registerMessage = document.getElementById("registerMessage");

// When the user clicks the login button, open the login modal
loginBtn.onclick = function() {
    loginModal.classList.add("show"); // Show the login modal
}

// When the user clicks the register button, open the register modal
registerBtn.onclick = function() {
    registerModal.classList.add("show"); // Show the register modal
}

// When the user clicks the cancel button in the login modal, close the login modal
loginCancelBtn.onclick = function() {
    loginModal.classList.remove("show"); // Hide the login modal
}

// When the user clicks the cancel button in the register modal, close the register modal
registerCancelBtn.onclick = function() {
    registerModal.classList.remove("show"); // Hide the register modal
}

// When the user clicks the confirm button in the login modal, simulate login and close the modal
loginConfirmBtn.onclick = function() {
    loginMessage.style.display = "block";
    setTimeout(function() {
        loginMessage.style.display = "none";
        loginModal.classList.remove("show"); // Hide the login modal after 4 seconds
    }, 4000);
}

// When the user clicks the confirm button in the register modal, simulate registration and close the modal
registerConfirmBtn.onclick = function() {
    registerMessage.style.display = "block";
    setTimeout(function() {
        registerMessage.style.display = "none";
        registerModal.classList.remove("show"); // Hide the register modal after 4 seconds
    }, 4000);
}

// Optionally, you can close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.classList.remove("show");
    } else if (event.target == registerModal) {
        registerModal.classList.remove("show");
    }
}
