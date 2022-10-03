// Global Variables

let currentPlayerTurn = 1
const player1Name = `Zazu`
const player2Name = `Gumby`
const button = document.querySelector(`button`)

// Dice Rolls

const d4 = (num) => {
  let rollResult = 0
  for (i = 0; i < num; i++) {
    rollResult += Math.ceil(Math.random() * 4)
  }
  return rollResult
}

const d6 = (num) => {
  let rollResult = 0
  for (i = 0; i < num; i++) {
    rollResult += Math.ceil(Math.random() * 6)
  }
  return rollResult
}

const d8 = (num) => {
  let rollResult = 0
  for (i = 0; i < num; i++) {
    rollResult += Math.ceil(Math.random() * 8)
  }
  return rollResult
}

const d10 = (num) => {
  let rollResult = 0
  for (i = 0; i < num; i++) {
    rollResult += Math.ceil(Math.random() * 10)
  }
  return rollResult
}

const d12 = (num) => {
  let rollResult = 0
  for (i = 0; i < num; i++) {
    rollResult += Math.ceil(Math.random() * 12)
  }
  return rollResult
}

const d20 = (num) => {
  let rollResult = 0
  for (i = 0; i < num; i++) {
    rollResult += Math.ceil(Math.random() * 20)
  }
  return rollResult
}

// Objects/Classes

class Player {
  constructor(name) {
    this.name = name
    this.currentSpace = 0
    this.currentRoll = 0
    this.health = 100
    this.gold = 100
    this.extraRoll = false
  }
  roll(dice, num) {
    if (dice === d4) {
      this.currentRoll = d4(num)
    } else if (dice === d6) {
      this.currentRoll = d6(num)
    } else if (dice === d8) {
      this.currentRoll = d8(num)
    } else if (dice === d10) {
      this.currentRoll = d10(num)
    } else if (dice === d12) {
      this.currentRoll = d12(num)
    } else if (dice === d20) {
      this.currentRoll = d20(num)
    }
    console.log(`${this.name} rolled a ${this.currentRoll}`)
  }
}

const player1 = new Player(player1Name)
const player2 = new Player(player2Name)

// Game Functions

const startTurn = () => {
  if (currentPlayerTurn === 1) {
    if (player1.extraRoll === true) {
      player1.roll(d10, 2)
    } else {
      player1.roll(d10, 1)
    }
    player1.currentSpace += player1.currentRoll
    checkSpace(player1.currentSpace)
  } else if (currentPlayerTurn === -1) {
    if (player2.extraRoll === true) {
      player2.roll(d10, 2)
    } else {
      player2.roll(d10, 1)
    }
    player2.currentSpace += player2.currentRoll
    checkSpace(player2.currentSpace)
  }
}

const checkSpace = (space) => {
  console.log(`the player is on space ${space}`)
  currentPlayerTurn = currentPlayerTurn * -1
}

// Event Listeners

button.addEventListener(`click`, startTurn)
