function toggleMenu() {
    document.querySelector(".headerContainer__navLinks").classList.toggle("active");
}

const navBar = document.getElementById('navBar');
const navBarButton = document.getElementById('open-sidebar-button');
const overlay = document.getElementById('overlay');

function openSideBar() {
    navBar.classList.add('show');
    overlay.classList.add('show');
    navBarButton.innerHTML = "&#9747;";
}


function closeSideBar() {
    navBar.classList.remove('show');
    overlay.classList.remove('show');
    navBarButton.innerHTML = "&#9776;";
}

/*
document.addEventListener("DOMContentLoaded", function () {
const links = document.querySelectorAll(".headerContainer__navLinks a");
links.forEach((link) => {
    link.classList.remove("active");
        if (link.href === window.location.href) {
        link.classList.add("active");
    }
    });
});
*/

const sections = document.querySelectorAll('#home, #publications, #teaching, #media, #contact');
const navLinks = document.querySelectorAll('.headerContainer__navLinks a');

window.onscroll = () => {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let fullHeight = document.documentElement.scrollHeight;

    let isAtBottom = scrollPosition + windowHeight >= fullHeight - 10; // Small buffer to ensure detection

    let activeSection = null;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            activeSection = id;
        }
    });

    // Remove active class from all buttons
    navLinks.forEach(link => link.classList.remove('active'));

    // Activate the last button if at the bottom, otherwise activate the detected section
    if (isAtBottom) {
        document.querySelector(`#contact-btn`).classList.add('active');
    } else if (activeSection) {
        document.querySelector(`#${activeSection}-btn`).classList.add('active');
    }
};



// Detect scrolling attempt beyond the bottom


