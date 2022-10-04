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
const startTurn2 = (currentPlayerTurn) => {
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
  spaceArr[player.currentSpace].run(player)
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
    console.log(`${player1.name} is on ${player1.currentSpace}.`)
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
    console.log(`${player2.name} is on ${player2.currentSpace}.`)
    // if (player2.currentSpace >= spaceArr.length - 1)
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
  },
  {
    index: 5,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 6,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 7,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 8,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 9,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 10,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 11,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 12,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 13,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 14,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 15,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 16,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 17,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 18,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 19,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 20,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 21,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 22,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 23,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 24,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 25,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 26,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 27,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 28,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 29,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 30,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 31,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 32,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 33,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 34,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 35,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 36,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 37,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 38,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 39,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 40,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 41,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 42,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 43,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 44,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 45,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 46,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 47,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 48,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 49,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 50,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 51,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 52,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 53,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 54,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 55,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 56,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 57,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 58,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 59,
    type: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  }
]
