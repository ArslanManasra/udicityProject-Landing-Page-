
const mybutton = document.getElementById('myBtn');
const sectionsElements = document.querySelectorAll('section');
const navbarUl = document.getElementById('navbar__list');
// change title's text
const title = document.getElementById('landing-title');

let navList = '';
title.textContent = `Udactiy's Project`;


function gernerateNavbar() {
  sectionsElements.forEach((section) => {
    // add html tags for list items
    // dataset.nav returns DOMStringMap {nav: section 1}
    navList += `<li> <a class="nav__link menu__link" href="#${section.id}" id="navli">
          ${section.dataset.nav}</a></li>`;
  });
  // add the tags to the inner htmls
  navbarUl.innerHTML = navList;
}
gernerateNavbar();

// Add class 'active' to section when near top of viewport (Eye level )

function addActiveClass(section) {
  // get the id from the section
  const id = section.getAttribute('id');

  // add the active class to the section
  document.querySelector(`#${id}`).classList.add('your-active-class');
}

//Removing the active class from the section
function removeActiveClass(section) {
  const id = section.getAttribute('id');
  document.querySelector(`#${id}`).classList.remove('your-active-class');
}

function makeActiveSection() {
  sectionsElements.forEach((section) => {
    

    let elementOffset = section.getBoundingClientRect();
    if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
      addActiveClass(section);
    } else {
      removeActiveClass(section);
    }
  });
}

document.addEventListener('scroll', makeActiveSection);


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener('click', topFunction);

let navbar = document.getElementById('navbar').querySelectorAll('li');

// itrate in li items list
navbar.forEach((item) => {
  item.addEventListener('click', function (e) {
    navbar.forEach((item) => {
      // remove every navbarclick class added befoe in any list item
      item.classList.remove('navbarclick');
    });
    // add the class on the button
    item.classList.add('navbarclick');
  });
});

// lis.forEach((li) => {
//   li.addEventListener('mouseover', function (e) {
//     li.classList.add('navbarclick');
//     console.log(li.innerHTML);
//   });
// });

