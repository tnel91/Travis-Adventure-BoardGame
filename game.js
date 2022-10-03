//Dice Rolls

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

//Objects

class Player {
  constructor(name) {
    this.name = name
    this.currentSpace = 0
    this.currentRoll = 0
    this.health = 100
    this.gold = 100
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

const player1 = new Player(`Steve`)
console.log(`${player1.name}'s current roll is ${player1.currentRoll}.`)
player1.roll(d10, 3)
console.log(`${player1.name}'s current roll is ${player1.currentRoll}.`)
