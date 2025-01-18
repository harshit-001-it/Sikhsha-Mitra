document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup");
    const feedback = document.getElementById("feedback");

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Validation
        if (!username || !email || !password || !confirmPassword) {
            feedback.textContent = "All fields are required.";
            return;
        }
        if (password !== confirmPassword) {
            feedback.textContent = "Passwords do not match.";
            return;
        }
        if (password.length < 6) {
            feedback.textContent = "Password must be at least 6 characters.";
            return;
        }
        // Success message
        feedback.textContent = "Sign-up successful!";
        feedback.style.color = "green";

        // Redirect after success
        setTimeout(() => {
            window.location.href = "loginpage.html"; // Update as needed
        }, 2000);
    });
});

document.getElementById("signup").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const emailMobile = document.getElementById("email/mobile_no.").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const response = await fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            email_mobile: emailMobile,
            password,
            confirm_password: confirmPassword
        })
    });

    const result = await response.json();
    const feedback = document.getElementById("feedback");

    if (response.ok) {
        feedback.style.color = "green";
        feedback.textContent = result.message;
    } else {
        feedback.style.color = "red";
        feedback.textContent = result.error;
    }
});
