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
    this.spaceDiv = document.getElementById(`sq${this.currentSpace}`)
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

const player1 = new Player(player1Name)
const player2 = new Player(player2Name)

// Game Functions

const flipTurn = () => {
  currentPlayerTurn = currentPlayerTurn * -1
}

const startTurn = () => {
  if (currentPlayerTurn === 1) {
    if (player1.extraRoll === true) {
      player1.roll(d10, 2)
    } else {
      player1.roll(d4, 1)
    }
    player1.spaceDiv.classList.remove(`player1`)
    player1.currentSpace += player1.currentRoll
    player1.spaceDiv = document.getElementById(`sq${player1.currentSpace}`)
    player1.spaceDiv.classList.add(`player1`)
    spaceArr[player1.currentSpace].run(player1)
  } else if (currentPlayerTurn === -1) {
    if (player2.extraRoll === true) {
      player2.roll(d10, 2)
    } else {
      player2.roll(d4, 1)
    }
    player2.spaceDiv.classList.remove(`player2`)
    player2.currentSpace += player2.currentRoll
    player2.spaceDiv = document.getElementById(`sq${player2.currentSpace}`)
    player2.spaceDiv.classList.add(`player2`)
    spaceArr[player2.currentSpace].run(player2)
  }
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

const spaceArr = [
  {
    index: 0,
    type: `start`
  },
  {
    index: 1,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 2,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 3,
    type: `shop`,
    run: function (player) {
      shop(player)
    }
  },
  {
    index: 4,
    type: `fight`,
    run: function (player) {
      fight(player)
    }
  }
]
