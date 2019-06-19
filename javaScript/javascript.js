console.log('Working')


// Smooth Scroll Feature

// grabbing the specials header link
let specials = document.querySelector('#specials-scroll');

// grabbing the contact header link
let contactClick = document.querySelector('#contact-scroll');


function specialsScroll() {
  const target = document.querySelector('.food-specials');
  target.scrollIntoView();
}

function contactScroll() {
  const target = document.querySelector('.footer-section');
  target.scrollIntoView();
}

// Event Listners for smoothScroll
specials.addEventListener('click', specialsScroll);
contactClick.addEventListener('click', contactScroll);
