// Global Variables

let currentPlayerTurn = 1
const player1Name = `Zazu`
const player2Name = `Gumby`
const enemyArr = []
const turnStart = document.getElementById(`startButton`)
const weapon0 = document.getElementById(`weapon0`)
const weapon1 = document.getElementById(`weapon1`)
const weapon2 = document.getElementById(`weapon2`)
const weapon3 = document.getElementById(`weapon3`)

// Weapons

const ironSword = {
  name: `Iron Sword`,
  diceType: 4,
  diceNum: 1
}

// Inventory Items

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
    this.inventory = []
    this.weapons = [ironSword, `Empty1`, `Empty2`, `Empty3`]
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
  pickupWeapon(weapon) {
    this.weapons.push(weapon)
  }
  attack(opponent, weapon) {
    this.roll(weapon.diceType, weapon.diceNum)
    opponent.health -= this.currentRoll
    console.log(
      `${this.name} has attacked ${opponent.name} with ${weapon.name} for ${this.currentRoll} damage!`
    )
    console.log(`${opponent.name} now has ${opponent.health} health.`)
  }
}

class Enemy {
  constructor(name, health, mult) {
    this.name = name
    this.health = health
    this.fullHealth = health
    this.currentRoll = 0
    this.mult = mult
  }
  roll(dice, num) {
    this.currentRoll = 0
    for (let i = 0; i < num; i++) {
      this.currentRoll += Math.ceil(Math.random() * dice)
    }
    console.log(`${this.name} rolled a ${this.currentRoll}`)
  }
  attack(opponent) {
    let randomIndex = Math.floor(Math.random() * this.attacks.length)
    let chosAttack = this.attacks[randomIndex]
    this.roll(chosAttack.diceType, chosAttack.diceNum)
    let damage = Math.floor(this.currentRoll * this.mult)
    opponent.health -= damage
    console.log(
      `${this.name} has attacked ${opponent.name} with ${chosAttack.name} for ${damage} damage!`
    )
  }
  announceHealth() {
    console.log(`${this.name} has ${this.health} health.`)
  }
}

class Undead extends Enemy {
  constructor(name, health, mult) {
    super(name, health, mult)
    this.attacks = [
      { name: `scratch`, diceType: 4, diceNum: 1 },
      { name: `bite`, diceType: 6, diceNum: 1 }
    ]
  }
}

// Constructors

const player1 = new Player(player1Name, `player1`)
const player2 = new Player(player2Name, `player2`)

const zombie = new Undead(`Zombie`, 10, 1)
enemyArr.push(zombie)
const mummy = new Undead(`Mummy`, 15, 1.2)
enemyArr.push(mummy)
const ghoul = new Undead(`Ghoul`, 20, 1.5)
enemyArr.push(ghoul)

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
    player.roll(4, 1)
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

const equipWeap = (player) => {
  let splice = player.weapons.splice(1, 1)
  player.weapons.splice(0, 0, splice[0])
}

equipWeap(player1)

// Event Listeners

turnStart.addEventListener(`click`, startTurn)

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

const randomFight = (player) => {
  console.log(
    `${player.name} is looking for a fight! They have ${player.health} health.`
  )
  let randomIndex = Math.floor(Math.random() * enemyArr.length)
  let opponent = enemyArr[randomIndex]
  console.log(`${player.name} will be fighting ${opponent.name}`)
  player.attack(opponent, player.weapons[0])
  opponent.attack(player)
  opponent.health = opponent.fullHealth
  flipTurn()
}
