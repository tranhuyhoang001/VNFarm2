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

  if (event.target == registerAgentModal) {
    registerAgentModal.style.display = 'none';
  }

  if (event.target == mobileMenuModal) {
    mobileMenuBox.classList.remove('active');
    setTimeout(() => {
      mobileMenuModal.style.display = 'none';
    }, 300);
  }
};

// "Đăng ký đại lý" modal
const registerAgentModal = document.getElementById('registerAgentModal');
const registerAgentBtn = document.getElementById('registerAgentBtn');
const closeRegisterAgentModalBtn = document.getElementsByClassName('register-agent__close-btn')[0];

registerAgentBtn.onclick = function () {
  registerAgentModal.style.display = 'block';
};

closeRegisterAgentModalBtn.onclick = function () {
  registerAgentModal.style.display = 'none';
};

// window.onclick = function (event) {
//   if (event.target == registerAgentModal) {
//     registerAgentModal.style.display = 'none';
//   }
// };

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

// Change tab "Tài khoản của tôi"
const listProfileTab = document.querySelectorAll('.profile__tab');
const listProfileTabContent = document.querySelectorAll('.profile__tab-content');

listProfileTab.forEach((profileTab, index) => {
  const profileTabContent = listProfileTabContent[index];

  profileTab.onclick = function () {
    document.querySelector('.profile__tab.active').classList.remove('active');
    document.querySelector('.profile__tab-content.active').classList.remove('active');

    this.classList.add('active');
    profileTabContent.classList.add('active');
  };
});

// Change tab "Tình trạng đơn hàng"
const listOrderTab = document.querySelectorAll('.order-status__tab');
const listOrderTabContent = document.querySelectorAll('.order-status__tab-content');

listOrderTab.forEach((orderTab, index) => {
  const orderTabContent = listOrderTabContent[index];

  orderTab.onclick = function () {
    document.querySelector('.order-status__tab.active').classList.remove('active');
    document.querySelector('.order-status__tab-content.active').classList.remove('active');

    this.classList.add('active');
    orderTabContent.classList.add('active');
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

// Footer collapsible
const coll = document.getElementsByClassName('collapsible__btn');

for (let i = 0; i < coll.length; i++) {
  coll[i].onclick = function () {
    this.classList.toggle('rotate');
    const content = this.nextElementSibling;
    content.style.display === 'block' ? (content.style.display = 'none') : (content.style.display = 'block');
  };
}
