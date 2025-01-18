document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login-box form");
    const usernameInput = document.querySelector(".input-box input[type='text']");
    const passwordInput = document.querySelector(".input-box input[type='password']");
    const signupLink = document.querySelector(".text a");

    // Mock user data for validation
    const mockUser = {
        username: "user123",
        password: "securepassword",
    };

    // Handle login form submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        if (!username || !password) {
            alert("Please fill in both fields.");
            return;
        }

        // Validate credentials
        if (username === mockUser.username && password === mockUser.password) {
            alert("Login successful!");
            // Redirect or navigate to the main page
            window.location.href = "mainpage.html"; // Replace with your main page URL
        } else {
            alert("Invalid username or password.");
        }
    });

    // Handle the "Sign up" link click
    signupLink.addEventListener("click", (e) => {
        e.preventDefault();
        onclick="signup.html"
        window.location.href = "signup.html"; // Change to your sign-up page URL when ready
    });
});
