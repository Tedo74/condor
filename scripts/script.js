const game = document.getElementById('game-menu');
game.addEventListener('click', () => {
  let el = document.querySelector('.accordion-hide');
  console.log(el);
  if (el) {
    // hidden.forEach((el) => {
    el.classList.remove('accordion-hide');
    el.classList.add('accordion-show');
    // el.style.zIndex = 1003;
    // el.style.backgroundColor = 'green';
    // hidden.style.position = 'absolute';
    //   console.log(el);
    // });
  }

  //   game.classList.remove('accordion-hide');
  //   game.classList.add('accordion-show');
  //   console.log(game.classList);
});
