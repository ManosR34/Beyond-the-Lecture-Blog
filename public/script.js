
const navBar = document.getElementById('navBar');
const menuButton = document.getElementById('sidebar-toggle');
// The following is set in case that we want to use the sidemenu in bigger screens in the future, so clicking ourside of the menu will close the menu
const overlay = document.getElementById('overlay');

function openSideBar() {
    navBar.classList.add('show');
    overlay.classList.add('show');
    menuButton.setAttribute('onclick', 'closeSideBar()');
    menuButton.innerHTML = "&#9747;";
    document.body.style.overflow = 'hidden'; //Prevent scroll function
}

function closeSideBar() {
    navBar.classList.remove('show');
    overlay.classList.remove('show');
    menuButton.setAttribute('onclick', 'openSideBar()');
    menuButton.innerHTML = "&#9776;";
    document.body.style.overflow = '';
}


// Detect and underline the link of the current viewport section
const sections = document.querySelectorAll('.container[id]');
const navLinks = document.querySelectorAll('.headerContainer__navLinks a');

// Close the menu when a link is selected in it
navLinks.forEach(button => {
    button.addEventListener("click", closeSideBar);
});

window.onscroll = () => {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let fullHeight = document.documentElement.scrollHeight;
    let isAtBottom = ((scrollPosition + windowHeight) >= (fullHeight - 90)); // Small buffer to remove the footer
    let activeSection = null;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 210;
        let height = sec.offsetHeight+20;
        
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

// Add some space to the linked sections, so the sections are always below the header
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // stop default anchor jump
  
      const targetId = this.getAttribute('href').substring(1); // remove #
      const target = document.getElementById(targetId);
  
      const offset = 55; // change to your desired offset (e.g., height of fixed header)
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
  
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    });
  });
