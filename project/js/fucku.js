document.addEventListener("DOMContentLoaded", () => {
    const aboutBtn = document.getElementById("aboutBtn");
    const workBtn = document.getElementById("workBtn");
    const contactBtn = document.getElementById("contactBtn"); 
    const aboutSection = document.getElementById("aboutSection");
    const workSection = document.getElementById("workSection");
    const buttonContainer = document.querySelector(".button-container");

    const imageWrapper = document.getElementById("imageWrapper");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.getElementById("closeBtn");

    const contactModal = document.getElementById("contactModal"); 
    const closeContactBtn = document.getElementById("closeContactBtn");
    const contactForm = document.getElementById("contactForm");
    
    buttonContainer.style.opacity = "0";
    imageWrapper.style.display = "none";

    setTimeout(() => {
        buttonContainer.style.opacity = "1";
        buttonContainer.style.transition = "opacity 0.5s ease-in";
    }, 2000);

    function showSection(sectionToShow) {
        const allSections = document.querySelectorAll(".box");
        allSections.forEach((section) => section.classList.remove("active"));
        sectionToShow.classList.add("active");
    }

    aboutBtn.addEventListener("click", () => showSection(aboutSection));
    workBtn.addEventListener("click", () => {
        showSection(workSection);
        imageWrapper.style.display = "flex";
    });
    
    imageWrapper.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
            modal.style.display = "flex";
            modalImg.src = e.target.src;
        }
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    contactBtn.addEventListener("click", () => {
        contactModal.style.display = "flex";
    });

    closeContactBtn.addEventListener("click", () => {
        contactModal.style.display = "none";
    });

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const mailtoLink = `mailto:katsukii.works@gmail.com?subject=Message from ${name}&body=Email: ${email}%0A%0AMessage:%0A${message}`;

        window.location.href = mailtoLink;
        contactModal.style.display = "none";
    });
});

// Example functionality for modal display
const images = document.querySelectorAll(".thumbnail");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

images.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "flex";  // Show the modal
        modalImg.src = img.src;  // Set the source of the expanded image to the clicked image
    });
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";  // Hide the modal when the close button is clicked
});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";  // Close the modal if the area outside the image is clicked
    }
});
