// let prevScrollPos = window.pageYOffset;
// const navbar = document.getElementById("navbar");

// window.onscroll = function() {
//     const currentScrollPos = window.pageYOffset;

//     // Check if the user has reached the top of the page
//     if (currentScrollPos === 0) {
//         // At the top: Make the navbar transparent
//         navbar.classList.remove("bg-color");
//     } else if (prevScrollPos < currentScrollPos) {
//         // Scrolling down: Add the "hidden" class to hide the navbar
//         navbar.classList.add("bg-color");
//     } else {
//         // Scrolling up: Remove the "hidden" class to show the navbar with a background color
//         // navbar.classList.remove("hidden");
//         navbar.classList.add("bg-color"); // Add your desired background color class
//     }

//     prevScrollPos = currentScrollPos;
// }
// // JavaScript to handle navbar background color toggle
// const navbarToggler = document.getElementById("navbar-toggler");
// const Navbar = document.querySelector(".navbar");

// navbarToggler.addEventListener("click", function () {
//     // Toggle the background color of the navbar when the button is clicked
//     if (Navbar.classList.contains("bg-color")) {
//         Navbar.classList.remove("bg-color");
//     } else {
//         Navbar.classList.add("bg-color");
//     }
// });






// let prevScrollPos = window.pageYOffset;
// const navbar = document.getElementById("navbar");
// const navbarToggler = document.getElementById("navbar-toggler");

// // Event listener for the Bootstrap navbar toggler button
// navbarToggler.addEventListener("click", function () {
//     // Add a class to give the navbar a background color when the button is clicked
//     navbar.classList.add("bg-color"); // Add your desired background color class
// });

// window.onscroll = function() {
//     const currentScrollPos = window.pageYOffset;

//     // Check if the user has reached the top of the page
//     if (currentScrollPos === 0) {
//         // At the top: Make the navbar transparent
//         navbar.classList.remove("bg-color");
//     } else if (prevScrollPos < currentScrollPos) {
//         // Scrolling down: Add the "hidden" class to hide the navbar
//         navbar.classList.add("bg-color");
//     } else {
//         // Scrolling up: Remove the "hidden" class to show the navbar with a background color
//         // navbar.classList.remove("hidden");
//         navbar.classList.add("bg-color"); // Add your desired background color class
//     }

//     prevScrollPos = currentScrollPos;
// }





let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");
const navbarToggler = document.getElementById("navbar-toggler");
let buttonClicked = false; // Initialize a variable to track if the button is clicked

// Event listener for the Bootstrap navbar toggler button
navbarToggler.addEventListener("click", function () {
    buttonClicked = !buttonClicked; // Toggle the buttonClicked variable
    if (buttonClicked) {
        navbar.classList.add("bg-color"); // Add background color when the button is clicked
    } else {
        navbar.classList.remove("bg-color"); // Remove background color when the button is unclicked
    }
});

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos < currentScrollPos) {
        // Scrolling down: Add the "hidden" class to hide the navbar
        navbar.classList.add("hidden");
    } 
    else if ((currentScrollPos === 0)) {
        navbar.classList.remove("bg-color");
        }
    else {
        // Scrolling up: Remove the "hidden" class to show the navbar
        navbar.classList.remove("hidden");
        navbar.classList.add("bg-color");
    }

    prevScrollPos = currentScrollPos;
}
