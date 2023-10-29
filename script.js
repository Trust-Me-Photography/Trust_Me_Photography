let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    // Check if the user has reached the top of the page
    if (currentScrollPos === 0) {
        // At the top: Make the navbar transparent
        navbar.classList.remove("bg-color");
    } else if (prevScrollPos < currentScrollPos) {
        // Scrolling down: Add the "hidden" class to hide the navbar
        navbar.classList.add("hidden");
    } else {
        // Scrolling up: Remove the "hidden" class to show the navbar with a background color
        navbar.classList.remove("hidden");
        navbar.classList.add("bg-color"); // Add your desired background color class
    }

    prevScrollPos = currentScrollPos;
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
