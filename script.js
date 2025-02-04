function buttonClick() {
    alert("Button clicked!");
}

function togglePassword() {
    var passwordInput = document.getElementById("myPassword");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }