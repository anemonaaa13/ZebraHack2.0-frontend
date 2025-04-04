const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

const formType = getQueryParam('form');
if (formType === 'register') {
  wrapper.classList.add('active');
} else if (formType === 'login') {
  wrapper.classList.remove('active');
}
registerLink.addEventListener('click', (e) => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', (e) => {
  wrapper.classList.remove('active');
});
