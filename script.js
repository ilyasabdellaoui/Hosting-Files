// Get the navbar element
const navbar = document.getElementById('navbar');

// Get all the nav links that are not in the left group
const navLinks = document.querySelectorAll("nav ul li a:not(.left-group a)");

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "#00bcd4";
  });
  
  link.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "";
  });
});

// Add a class to the navbar for small screens
if (window.innerWidth < 768) {
  navbar.classList.add('small-screen');
}

// Add an event listener to the navbar button to toggle the responsive menu
document.querySelector("nav button.navbar-button").addEventListener("click", function() {
  this.classList.toggle("active");
  document.querySelector("nav ul").classList.toggle("active");
});

// Get all the cards on the page
const cards = document.querySelectorAll('.card');

// Add a shadow to each card when it is clicked
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
  });
});

// Add an event listener to the About Me button in the navbar
document.querySelector("#LA BOÎTE À MERVEILLES").addEventListener("click", function() {
  // Redirect the user to the about page when the button is clicked
  window.location = "page1.html";
});

// Create a new image element
let img = new Image();

// Set the source of the image
img.src = "https://source.unsplash.com/1600x900/?nature";

// When the image is loaded, set it as the background image of the body element
img.addEventListener("load", function() {
  body.style.backgroundImage = "url('" + img.src + "')";
});



// Add an event listener to the About Me button in the navbar
document.querySelector("#LA BOÎTE À MERVEILLES").addEventListener("click", function() {
  // Redirect the user to the about page when the button is clicked
  window.location = "page1.html";
});

// Get all the cards on the page

// Add a shadow to each card when it is clicked
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
  });
});


const card = document.querySelector('.card'); // select the card element

card.addEventListener('click', () => {
  window.location.href = 'page1.html'; // redirect to about page on click
});
