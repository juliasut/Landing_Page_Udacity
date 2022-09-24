/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * Dependencies: None
 * JS Version: ES2015/ES6
 * JS Standard: ESlint
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 */
const navContainer = document.querySelector('#navbar__list');
const sections = [...document.querySelectorAll('section')];
const panels = [...document.querySelectorAll('.panel')];
/**
 * End Global Variables
 * Start Helper Functions
 */

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}

/**
 * End Helper Functions
 * Begin Main Functions
 */

 panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

// build the nav
function buildNav() {
  for (let section of sections) {
    if (section.id !== 'section1') {
      const navItem = document.createElement('li');
      const navItemLink = document.createElement('a');
      navItemLink.setAttribute('href', `#${section.id}`);
      navItemLink.setAttribute('class', 'menu__link');
      navItemLink.innerHTML = `${section.dataset.nav}`;
      navItem.append(navItemLink);
      navContainer.appendChild(navItem);
    }
  }
}
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener('DOMContentLoaded', buildNav);

// Scroll to section on link click

// Set sections as active
