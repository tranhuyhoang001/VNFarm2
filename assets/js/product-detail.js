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

  if (event.target == writeReviewModal) {
    writeReviewModal.style.display = 'none';
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

// "Viết đánh giá" modal
const writeReviewModal = document.getElementById('writeReviewModal');
const writeReviewBtn = document.getElementById('writeReviewBtn');
const closeWriteReviewModalBtn = document.getElementsByClassName('write-review__close-btn')[0];

writeReviewBtn.onclick = function () {
  writeReviewModal.style.display = 'block';
};

closeWriteReviewModalBtn.onclick = function () {
  writeReviewModal.style.display = 'none';
};

// Ẩn/Hiện password
const listShowHidePasswordBtn = document.querySelectorAll('.show-hide-password-btn');
const listInputPassword = document.querySelectorAll('.login-box__input-password');

listShowHidePasswordBtn.forEach((showHidePasswordBtn, index) => {
  showHidePasswordBtn.onclick = function () {
    listInputPassword[index].type == 'password'
      ? (listInputPassword[index].type = 'text')
      : (listInputPassword[index].type = 'password');
  };
});
