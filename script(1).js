// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Show modal on successful form submission
    if (name && email && message) {
        showModal();
    }
});

// Show the modal with success message
function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';

    // Close modal when the close button is clicked
    document.getElementById('closeModal').addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust the scroll position for header
            behavior: 'smooth'
        });
    });
});

// Modal functionality for image gallery
document.querySelectorAll('.image-grid img').forEach(img => {
    img.addEventListener('click', function () {
        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        const imgModal = document.createElement('div');
        imgModal.classList.add('img-modal');
        imgModal.appendChild(modalImg);

        // Append to body and create close button
        document.body.appendChild(imgModal);

        const closeImgModal = document.createElement('span');
        closeImgModal.textContent = 'X';
        closeImgModal.classList.add('close-img-modal');
        imgModal.appendChild(closeImgModal);

        closeImgModal.addEventListener('click', function () {
            imgModal.remove();
        });
    });
});

function adjustHeight(element) {
    element.style.height = "auto"; // Reset height to calculate the new height
    element.style.height = element.scrollHeight + "px"; // Set height based on scrollHeight
}
