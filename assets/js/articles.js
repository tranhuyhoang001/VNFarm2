// "Đăng nhập" modal
const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const mobileLoginBtn = document.getElementById('mobile-menu__login-btn');
const closeLoginModalBtn = document.getElementsByClassName('login-box__close-btn')[0];

loginBtn.onclick = function () {
  loginModal.style.display = 'block';
};

mobileLoginBtn.onclick = function () {
  mobileMenuBox.classList.remove('active');
  setTimeout(() => {
    mobileMenuModal.style.display = 'none';
  }, 300);
  loginModal.style.display = 'block';
};

closeLoginModalBtn.onclick = function () {
  loginModal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }

  if (event.target == mobileMenuModal) {
    mobileMenuBox.classList.remove('active');
    setTimeout(() => {
      mobileMenuModal.style.display = 'none';
    }, 300);
  }
};

// Change tab "Đăng nhập/Đăng ký"
const listLoginTab = document.querySelectorAll('.login-box__tab');
const listLoginTabContent = document.querySelectorAll('.login-box__tab-content');

listLoginTab.forEach((loginTab, index) => {
  const loginTabContent = listLoginTabContent[index];

  loginTab.onclick = function () {
    document.querySelector('.login-box__tab.active').classList.remove('active');
    document.querySelector('.login-box__tab-content.active').classList.remove('active');

    this.classList.add('active');
    loginTabContent.classList.add('active');
  };
});

// "Mobile Menu" modal
const mobileMenuModal = document.getElementById('mobileMenuModal');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuBox = document.querySelector('.mobile-menu__box');
const closeMobileMenuModalBtn = document.getElementsByClassName('mobile-menu__close-btn')[0];

mobileMenuBtn.onclick = function () {
  mobileMenuModal.style.display = 'block';
  setTimeout(() => {
    mobileMenuBox.classList.add('active');
  }, 1);
};

closeMobileMenuModalBtn.onclick = function () {
  mobileMenuBox.classList.remove('active');
  setTimeout(() => {
    mobileMenuModal.style.display = 'none';
  }, 300);
};
