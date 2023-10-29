let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function() {
    // Check if the viewport width is less than or equal to a certain value (e.g., 768px for phone screens)
    if (window.innerWidth <= 768) {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos < 100) {
            // Scrolling up: Remove the "hidden" class and set the background color
            navbar.classList.remove("hidden");
            // navbar.style.backgroundColor = "blue"; // Change this to your desired background color
        } else {
            // Scrolling down: Add the "hidden" class and reset the background color
            navbar.classList.add("hidden");
            // navbar.style.backgroundColor = "transparent"; // Reset the background color
        }

        prevScrollPos = currentScrollPos;
    }
}
// 

// JavaScript to handle navbar background color toggle
const navbarToggler = document.getElementById("navbar-toggler");
const Navbar = document.querySelector(".navbar");

navbarToggler.addEventListener("click", function () {
    // Toggle the background color of the navbar when the button is clicked
    if (Navbar.classList.contains("bg-color")) {
        Navbar.classList.remove("bg-color");
    } else {
        Navbar.classList.add("bg-color");
    }
});
