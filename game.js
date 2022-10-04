// Global Variables

let currentPlayerTurn = 1
const player1Name = `Zazu`
const player2Name = `Gumby`
const button = document.querySelector(`button`)

// Classes

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
    this.inventory = [ironSword]
  }
  roll(dice, num) {
    this.currentRoll = 0
    for (let i = 0; i < num; i++) {
      this.currentRoll += Math.ceil(Math.random() * dice)
    }
    console.log(`${this.name} rolled a ${this.currentRoll}`)
  }
  pickupItem(item) {
    this.inventory.push(item)
  }
  attack(weapon) {
    this.weapon.attack()
  }
}

class Enemy {
  constructor(name) {
    this.name = name
    this.health = 100
  }
  announceHealth() {
    console.log(`${this.name} has ${this.health} health.`)
  }
}

class Zombie extends Enemy {
  constructor(name) {
    super(name)
    this.attacks = [{}, {}]
  }
}

const player1 = new Player(player1Name, `player1`)
const player2 = new Player(player2Name, `player2`)

// Items

const ironSword = {
  name: `Iron Sword`,
  attack: function () {
    this.currentRoll
  }
}

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
    player.roll(10, 2)
  } else {
    player.roll(10, 1)
  }
  player.spaceDiv.classList.remove(`${player.divClass}`)
  player.currentSpace += player.currentRoll
  console.log(`${player.name} is on ${player.currentSpace}.`)
  if (player.currentSpace >= boardArr.length - 1) {
    player.spaceDiv = document.getElementById(`sq${boardArr.length - 1}`)
    player.spaceDiv.classList.add(`${player.divClass}`)
    gameWin(player)
  } else {
    player.spaceDiv = document.getElementById(`sq${player.currentSpace}`)
    player.spaceDiv.classList.add(`${player.divClass}`)
    boardArr[player.currentSpace].run(player)
  }
}

const gameWin = (player) => {
  console.log(`${player.name} has won the game!`)
  flipTurn()
}

// Event Listeners

button.addEventListener(`click`, startTurn)

// Space Event Logic

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
