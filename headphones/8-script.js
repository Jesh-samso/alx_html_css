// Select the hamburger icon and nav menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

// Toggle the menu when hamburger is clicked
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
  // Change icon between bars and close
  const icon = hamburger.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});
