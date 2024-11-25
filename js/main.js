let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
   for(tabLink of tabLinks){
       tabLink.classList.remove("active-link")
   }
   for(tabContent of tabContents){
       tabContent.classList.remove("active-tab")
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
}
var sideMenu = document.getElementById("sidemenu");
function openmenu(){
   sideMenu.style.right = "0";
}
function closemenu(){
   sideMenu.style.right = "-200px";
}
document.addEventListener('DOMContentLoaded', () => {
const cards = document.querySelectorAll('.card');

// Function to check if the card is visible in the viewport
function isInViewport(element) {
 const rect = element.getBoundingClientRect();
 return (
   rect.top >= 0 &&
   rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
 );
}

// Animate cards on scroll
function animateCards() {
 cards.forEach((card, index) => {
   if (isInViewport(card)) {
     // Slide up if in view
     card.style.transform = `translateY(${(index % 2 === 0 ? -30 : 30)}px)`;
     card.style.opacity = '1';
   } else {
     // Reset position when out of view
     card.style.transform = 'translateY(0)';
     card.style.opacity = '0';
   }
 });
}

// Event listener for scroll
window.addEventListener('scroll', animateCards);
});

const scriptURL = 'https://script.google.com/macros/s/AKfycby8PXtxYN7zt70xZhUG83y-ABmS00BCT5iBdnNsPWyM6iyCwknQFwrD91D5tIZ-ns9mHQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
   .then(response => {
       msg.innerHTML = "Message sent successfully"
       setTimeout(function(){
           msg.innerHTML = ""
       },5000)
       form.reset()
   })
   .catch(error => console.error('Error!', error.message))
})

/*-----js for sticky navbar-----*/
window.addEventListener('scroll', function () {
    let header = document.querySelector('.navbar'); 
    header.classList.toggle('sticky', window.scrollY > 100);
});

 /*-----scroll reveal-----*/
 document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });
    ScrollReveal().reveal('.home, .header-text', { origin: 'top' });
});



  /*-----typed js-----*/
  document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Backend Developer', 'Unit Tester'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,  
        loop: true         
    });
});
