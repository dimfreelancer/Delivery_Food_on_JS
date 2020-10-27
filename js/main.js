'use strict';
console.log('hello day 1');

const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}



// day 1
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');


const toggleModalAuth = () => {
  console.log('modalAuth: ', modalAuth);
  modalAuth.classList.toggle('is-open');
}

buttonAuth.addEventListener('click', () => {
  // modalAuth
  toggleModalAuth();
});

closeAuth.addEventListener('click', toggleModalAuth);








