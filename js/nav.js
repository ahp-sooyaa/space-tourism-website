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