document.addEventListener("DOMContentLoaded", () => {
    const joinNowButton = document.getElementById("joinBtn");
    const contactForm = document.getElementById("contactForm");

    // Join Now button functionality
    joinNowButton.addEventListener("click", () => {
        window.location.href = "loginpage.html";
    });

    // Contact Form submission
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form refresh
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});

function handleJoinNow() {
    window.location.href = "loginpage.html";
}
document.addEventListener("DOMContentLoaded", () => {
    const joinNowButton = document.querySelector(".cta-join-now");
    if (joinNowButton) {
        joinNowButton.addEventListener("click", handleJoinNow);
    }
})