// Global Variables

let currentPlayerTurn = 1
const player1Name = `Zazu`
const player2Name = `Gumby`
const button = document.querySelector(`button`)
// let spaceArr = []

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
  constructor(name, divClass) {
    this.name = name
    this.currentSpace = 0
    this.currentRoll = 0
    this.health = 100
    this.gold = 100
    this.extraRoll = false
    this.spaceDiv = document.getElementById(`sq${this.currentSpace}`)
    this.divClass = divClass
    this.inventory = []
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
  pickupItem(item) {
    this.inventory.push(item)
  }
}

const player1 = new Player(player1Name, `player1`)
const player2 = new Player(player2Name, `player2`)

// Game Functions

const flipTurn = () => {
  currentPlayerTurn = currentPlayerTurn * -1
}
const startTurn = () => {
  if (currentPlayerTurn === 1) {
    rollToMove(player1)
  } else if (currentPlayerTurn === -1) {
    rollToMove(player2)
  }
}

const rollToMove = (player) => {
  if (player.extraRoll === true) {
    player.roll(d10, 2)
  } else {
    player.roll(d4, 1)
  }
  player.spaceDiv.classList.remove(`${player.divClass}`)
  player.currentSpace += player.currentRoll
  console.log(`${player.name} is on ${player.currentSpace}.`)
  player.spaceDiv = document.getElementById(`sq${player.currentSpace}`)
  player.spaceDiv.classList.add(`${player.divClass}`)
  boardArr[player.currentSpace].run(player)
}

// Event Listeners

button.addEventListener(`click`, startTurn)

// Space event logic

const emptySpace = (player) => {
  console.log(`${player.name} is in an empty space.`)
  flipTurn()
}

const shop = (player) => {
  console.log(
    `${player.name} is going shopping! They have ${player.gold} gold.`
  )
  flipTurn()
}

const fight = (player) => {
  console.log(
    `${player.name} is looking for a fight! They have ${player.health} health.`
  )
  flipTurn()
}

// Board Space Array
