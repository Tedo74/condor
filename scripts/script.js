const game = document.getElementById('game-menu');
game.addEventListener('click', () => {
  let el = document.querySelector('.accordion-hide');
  console.log(el);
  if (el) {
    el.classList.remove('accordion-hide');
    el.classList.add('accordion-show');
  } else {
    let element = document.querySelector('.accordion-show');
    if (element) {
      element.classList.add('accordion-hide');
      element.classList.remove('accordion-show');
    }
  }
});
