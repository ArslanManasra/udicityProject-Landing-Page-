// Elements
const mybutton = document.getElementById('myBtn');
const sectionsElements = document.querySelectorAll('section');
const navbarUl = document.getElementById('navbar__list');
const title = document.getElementById('landing-title');
const navToggle = document.getElementById('navToggle');
const navbarMenu = document.querySelector('.navbar__menu');

let navList = '';

// Update title
title.textContent = `Udacity's Project`;

// Generate Navbar dynamically
function generateNavbar() {
  sectionsElements.forEach((section) => {
    navList += `
      <li>
        <a class="nav__link menu__link" href="#${section.id}">
          ${section.dataset.nav}
        </a>
      </li>`;
  });
  navbarUl.innerHTML = navList;
}
generateNavbar();

// Add 'active' class to the section in the viewport
function addActiveClass(section) {
  section.classList.add('your-active-class');
}

// Remove 'active' class from the section
function removeActiveClass(section) {
  section.classList.remove('your-active-class');
}

// Highlight the section currently in the viewport
function makeActiveSection() {
  sectionsElements.forEach((section) => {
    const elementOffset = section.getBoundingClientRect();
    if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
      addActiveClass(section);
    } else {
      removeActiveClass(section);
    }
  });
}
document.addEventListener('scroll', makeActiveSection);

// Show or hide the "Back to Top" button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
window.onscroll = scrollFunction;

// Scroll to the top when the button is clicked
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
mybutton.addEventListener('click', topFunction);

// Smooth scroll to section on navigation click
let navbarItems = document.querySelectorAll('#navbar__list li a');

navbarItems.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default hyperlink behavior

    // Scroll smoothly to the section
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Toggle mobile navigation menu
navToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('menu-open');
});
