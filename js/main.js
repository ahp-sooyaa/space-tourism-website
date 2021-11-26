// nav
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navbar = document.querySelector(".mobile-nav");

hamburger.addEventListener('click', () => {
  navbar.classList.remove('translate-x-full')
  close.classList.remove('hidden')
  close.classList.add('block')
})

close.addEventListener('click', () => {
  navbar.classList.add('translate-x-full')
  close.classList.remove('block')
  close.classList.add('hidden')
})

// explore
const explore = document.querySelector('.explore');
const exploreBorder = document.querySelector('.explore-border');

if(explore != null) {
  explore.addEventListener('mouseenter', () => {
    exploreBorder.classList.add('block')
    exploreBorder.classList.remove('hidden')
    // exploreBorder.Style.display = "block"
  })
  
  explore.addEventListener('mouseleave', () => {
    exploreBorder.classList.add('hidden')
    exploreBorder.classList.remove('block')
  })
}