function toggleMenu() {
    document.querySelector(".headerContainer__navLinks").classList.toggle("active");
}

const navBar = document.getElementById('navBar');
const overlay = document.getElementById('overlay');

function openSideBar() {
    navBar.classList.add('show');
    overlay.classList.add('show');
}

function closeSideBar() {
    navBar.classList.remove('show');
    overlay.classList.remove('show');
}