function burgerMenu() {
menu = document.querySelector('.burger-menu')
button = document.querySelector('.burger-menu__button')
links = document.querySelector('.burger-menu__link')
overlay = document.querySelector('.burger-menu__overlay')
}

function toggleActive(){
  menu.classList.toggle('burger-menu__active')
}

function toggleChange(e) {
e.preventDefault();
toggleActive();
};


function burgerDo() {
  burgerMenu();
  button.addEventListener('click', toggleChange);
  links.addEventListener('click', toggleChange);
  overlay.addEventListener('click', toggleChange);
}

burgerDo();



 


