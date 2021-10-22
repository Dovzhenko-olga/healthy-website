const buttonScrollUp = document.querySelector('.scroll');
const searchingBlock = document.querySelector('.hero');

buttonScrollUp.addEventListener('click', onButtonScrollUpClick);
function onButtonScrollUpClick() {
  window.scrollTo({
    top: 1,
    behavior: 'smooth',
  });
}

window.onscroll = function () {
  const scrolled = window.pageYOffset || searchingBlock.scrollTop;
  if (scrolled > 400) {
    buttonScrollUp.style.display = 'block';
  } else {
    buttonScrollUp.style.display = 'none';
  }
};