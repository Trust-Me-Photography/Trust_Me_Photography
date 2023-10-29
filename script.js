let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById("navbar");
    // const navbar = document.getElementsByClassName("mnc");
    
    if (prevScrollPos < 100) {
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.add("hidden");
    }
    prevScrollPos = currentScrollPos;
}