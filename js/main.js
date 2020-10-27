'use strict';
console.log('hello day 1');

const cartButton = document.querySelector("#cart-button"); //TODO ПОКАЗАТЬ ПРИ АВТОРИЗАЦИИ

const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}






// day 1
const buttonAuth = document.querySelector('.button-auth'); //TODO СКРЫТЬ ПРИ АВТОРИЗАЦИИ

const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const inputLogin = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out'); //TODO ПОКАЗАТЬ ПРИ АВТОРИЗАЦИИ


let login = '';

const toggleModalAuth = () => {
  console.log('toggleModalAuth');
  modalAuth.classList.toggle('is-open');
};

function authorized() {
  console.log('Вы авторизованы');

  buttonAuth.classList.add('hide');
  // buttonAuth.style.backgroundColor = 'green'; 
  buttonAuth.style.display = 'none'; 
  buttonOut.style.display = 'block'; 
  cartButton.style.display = 'flex'; 
  userName.style.display = 'inline';
  userName.textContent = 'Our user is ' + login;

  function logOut(event) {
      // event.preventDefault(); //отключение действия по умолчанию кнопки сабмит формы
    console.log('Давайте выйдем разлогинимся');
    //сохраняем в переменную пустой логин т.е. разлогинимся
    login = '';
    // toggleModalAuth();
    checkAuth();
  }

  buttonOut.addEventListener('click', logOut); //отработка клика по кнопке сабмит формы
}

function notAuthorized() {
  console.log('Вы НЕ Аторизованы');
  
  function logIn(event) {
    event.preventDefault(); //отключение действия по умолчанию кнопки сабмит формы
    console.log('Давайте залогинимся');

    //логин берем из значений формы
    //сохраняем в переменную логин
    login = inputLogin.value;
    
    toggleModalAuth();
    checkAuth();
  }

  buttonAuth.style.display = 'flex';
  buttonOut.style.display = 'none';
  cartButton.style.display = 'none';
  
  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);

  logInForm.addEventListener('submit', logIn); //отработка клика по кнопке сабмит формы
}


const checkAuth = () => {
  
  //проверка на пустой или не пустой логин
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
};

checkAuth();


