$(document).ready(function() {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.side-img', {
        duration: 3000,
        origin: "left",
        distance: "500px",
        easing: "ease-in-out",
        reset: false // Animation happens once when element comes into view
    });

    ScrollReveal().reveal('.home-content', {
        duration: 3000,
        origin: "right",
        distance: "500px",
        easing: "ease-in-out",
        reset: false // Animation happens once when element comes into view
    });

    document.getElementById("resumeButton").onclick = function() {
        alert('Redirecting to resume...');
        window.location.href = 'https://drive.google.com/file/d/19qjGmEPl5w7metoZc4atOWTOrHqUT4mu/view?usp=drive_link'; // Replace with your actual Google Drive link
      };

    // Navbar click event
   
    // Add similar click event handlers for other sections if needed
    //modal js

   
});
document.addEventListener('DOMContentLoaded', function () {
    const portfolioModal = document.getElementById('portfolioModal');
    portfolioModal.addEventListener('show.bs.modal', function (event) {
      const button = event.relatedTarget; // Button that triggered the modal
      const imageUrl = button.getAttribute('data-bs-image'); // Extract image url from data-bs-* attribute
      const modalImage = portfolioModal.querySelector('#modalImage');
      modalImage.src = imageUrl; // Update the modal's image src
    });
  });