const warpper = document.querySelector('.warpper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login_popup');
const closePopup = document.querySelector('.icon-close');

registerlink.addEventListener('click', () => {
    warpper.classList.add('active');
});
loginlink.addEventListener('click', () => {
    warpper.classList.remove('active');
});
btnPopup.addEventListener('click', () => {
    warpper.classList.add('active-popup');
});
closePopup.addEventListener('click', () => {
    warpper.classList.remove('active-popup');
});
