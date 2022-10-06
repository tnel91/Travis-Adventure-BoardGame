// Global Variables

let currentPlayerTurn = 1
let currentPlayer
let currentOpponent
const p1Name = `Zazu`
const p2Name = `Gumby`
const enemyArr = []
const start = document.getElementById(`startButton`)
const fight = document.getElementById(`fightButton`)
// const atkBut = document.getElementById(`attackButton`)
// const defBut = document.getElementById(`defendButton`)
const weapon0 = document.getElementById(`weapon0`)
const weapon1 = document.getElementById(`weapon1`)
const weapon2 = document.getElementById(`weapon2`)
const weapon3 = document.getElementById(`weapon3`)
const turnInd = document.getElementById(`turnInd`)
const gameText = document.getElementById(`gameText`)
const healthBar = document.getElementById(`health`)

// Weapons

const unarmed = {
  name: `Unarmed`,
  diceType: 2,
  diceNum: 1
}

const ironSword = {
  name: `Iron Sword`,
  diceType: 6,
  diceNum: 1
}

const silverSword = {
  name: `Silver Sword`,
  diceType: 6,
  diceNum: 1
}

const twinDaggers = {
  name: `Pair of Daggers`,
  diceType: 4,
  diceNum: 2
}

const greatSword = {
  name: `Greatsword`,
  diceType: 12,
  diceNum: 1
}

const magicMissle = {
  name: `Magic Missle`,
  diceType: 4,
  diceNum: 3
}

const fireball = {
  name: `Fireball`,
  diceType: 10,
  diceNum: 2
}

const explosion = {
  name: `Explosion`,
  diceType: 20,
  diceNum: 2
}

// Inventory Items

// Classes

class Player {
  constructor(name, divClass) {
    this.name = name
    this.currentSpace = 0
    this.currentRoll = 0
    this.health = 100
    this.fullHealth = 100
    this.gold = 100
    this.healthPot = 1
    this.outGoingDam = 0
    this.extraRoll = false
    this.spaceDiv = document.getElementById(`sq${this.currentSpace}`)
    this.divClass = divClass
    this.inventory = []
    this.weapons = [ironSword, unarmed, unarmed, unarmed]
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
    this.outGoingDam = this.currentRoll
    opponent.health -= this.outGoingDam
  }
}

class Enemy {
  constructor(name, health, mult) {
    this.name = name
    this.health = health
    this.fullHealth = health
    this.currentRoll = 0
    this.mult = mult
    this.outGoingDam = 0
    this.chosAttack
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
    this.chosAttack = this.attacks[randomIndex]
    this.roll(this.chosAttack.diceType, this.chosAttack.diceNum)
    this.outGoingDam = Math.floor(this.currentRoll * this.mult)
    opponent.health -= this.outGoingDam
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

const player1 = new Player(p1Name, `player1`)
const player2 = new Player(p2Name, `player2`)

const zombie = new Undead(`Zombie`, 10, 1)
enemyArr.push(zombie)
const mummy = new Undead(`Mummy`, 15, 1.2)
enemyArr.push(mummy)
const ghoul = new Undead(`Ghoul`, 20, 1.5)
enemyArr.push(ghoul)

// Game Functions

const init = (player) => {
  turnInd.innerText = `${player.name}'s Turn!`
  weapon0.innerHTML = `<b>Equipped Weapon:</b> ${player.weapons[0].name} (Rolls ${player.weapons[0].diceNum} x d${player.weapons[0].diceType})`
  weapon1.innerText = player.weapons[1].name
  weapon2.innerText = player.weapons[2].name
  weapon3.innerText = player.weapons[3].name
  healthBar.innerText = `Health: ${player.health}`
  currentPlayer = player
}

const flipTurn = () => {
  turnInd.classList.add(`bounce`)
  start.disabled = false
  gameText.innerText = `Click Roll to Move!`
  currentPlayerTurn = currentPlayerTurn * -1
  if (currentPlayerTurn === 1) {
    init(player1)
  } else if (currentPlayerTurn === -1) {
    init(player2)
  }
}

const rollToMove = (player) => {
  start.disabled = true
  if (player.extraRoll === true) {
    player.roll(10, 2)
  } else {
    player.roll(4, 1)
  }
  player.spaceDiv.classList.remove(`${player.divClass}`)
  player.currentSpace += player.currentRoll
  if (player.currentSpace >= boardArr.length - 1) {
    player.spaceDiv = document.getElementById(`sq${boardArr.length - 1}`)
    player.spaceDiv.classList.add(`${player.divClass}`)
    gameWin(player)
  } else {
    player.spaceDiv = document.getElementById(`sq${player.currentSpace}`)
    player.spaceDiv.classList.add(`${player.divClass}`)
    gameText.innerText = `${player.name} landed on ${
      boardArr[player.currentSpace].type
    } space!`
    setTimeout(() => {
      boardArr[player.currentSpace].run(currentPlayer)
    }, 1000)
  }
}

const gameWin = (player) => {
  console.log(`${player.name} has won the game!`)
  gameText.innerText = `${player.name} has won the game! Congratulations! Returning to title screen in 10 seconds...`
  setTimeout(() => {
    window.location.href = `./index.html`
  }, 10000)
}

const equip = (player, i) => {
  let splice = player.weapons.splice(i, 1)
  player.weapons.splice(0, 0, splice[0])
  init(player)
}

// Space Event Logic

const emptySpace = (player) => {
  // console.log(`${player.name} is in an empty space.`)
  flipTurn()
}

const shop = (player) => {
  console.log(
    `${player.name} is going shopping! They have ${player.gold} gold.`
  )
  flipTurn()
}

const randomFightStart = (player) => {
  let randomIndex = Math.floor(Math.random() * enemyArr.length)
  currentOpponent = enemyArr[randomIndex]
  gameText.innerText = `${player.name} has encountered a ${currentOpponent.name}! Choose your weapon and prepare to fight!`
  fight.disabled = false
}

const combatLoop = (player, opponent) => {
  let turn = 1
  gameText.innerText = `*** Combat Noises ***`
  setTimeout(() => {
    while (opponent.health > 0) {
      if (turn === 1) {
        player.attack(opponent, player.weapons[0])
        turn = turn * -1
      } else if (turn === -1) {
        opponent.attack(player)
        turn = turn * -1
      }
    }
    healthBar.innerText = `Health: ${player.health}`
    healthBar.classList.add(`flash`)
    if (player.health <= 0) {
      gameText.innerText = `${player.name} has been defeated by the ${opponent.name}! Moving ${player.name} to last checkpoint.`
      // add logic for moving player back here
    }
    gameText.innerText = `${player.name} has defeated the ${opponent.name}!`
    fight.disabled = true
    player.roll(6, 1)
    if (player.currentRoll === 6) {
      player.healthPot += 1
      setTimeout(() => {
        gameText.innerText = `${player.name} found a health potion!`
      }, 2000)
    }
    setTimeout(() => {
      opponent.health = opponent.fullHealth
      flipTurn()
    }, 4000)
  }, 1500)
}

// Event Listeners

fight.disabled = true
init(player1)

start.addEventListener(`click`, () => {
  turnInd.classList.remove(`bounce`)
  healthBar.classList.remove(`flash`)
  rollToMove(currentPlayer)
})

fight.addEventListener(`click`, () => {
  combatLoop(currentPlayer, currentOpponent)
})

weapon1.addEventListener(`click`, () => {
  equip(currentPlayer, 1)
})

weapon2.addEventListener(`click`, () => {
  equip(currentPlayer, 2)
})

weapon3.addEventListener(`click`, () => {
  equip(currentPlayer, 3)
})
