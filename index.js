const playGame = document.getElementById(`playGame`)

playGame.addEventListener(`click`, () => {
  window.location.href = `./game.html`
})

playGame.addEventListener(`mouseover`, () => {
  playGame.classList.add(`rainbow`)
})
