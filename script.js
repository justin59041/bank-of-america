function checkCredentials() {
	const allowedUsername = "Empagncy73054";
	const allowedPassword = "employagency#865";
	const usernameInput = document.getElementById("username");
	const passwordInput = document.getElementById("password");
	const errorMessage = document.getElementById("error-message");

	if (usernameInput.value === allowedUsername && passwordInput.value === allowedPassword) {
		// Login successful, redirect to a protected page
		window.location.href = "dashboard.html";
	} else {
		// Login failed, display an error message
		errorMessage.textContent = "The information you entered doesn't match our records. You have a few more tries remaining. Please try again or click Forgot ID/Password !";
	}
}

