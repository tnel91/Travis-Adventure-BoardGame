//Dice Rolls

const rollD4 = (num) => {
  let rollResult = 0
  for (i = 0; i < num; i++) {
    rollResult += Math.ceil(Math.random() * 4)
  }
  console.log(rollResult)
}

const rollD6 = (num) => {
  let rollResult = 0
  for (i = 0; i < num; i++) {
    rollResult += Math.ceil(Math.random() * 6)
  }
  console.log(rollResult)
}

const rollD8 = (num) => {
  let rollResult = 0
  for (i = 0; i < num; i++) {
    rollResult += Math.ceil(Math.random() * 8)
  }
  console.log(rollResult)
}

const rollD10 = (num) => {
  let rollResult = 0
  for (i = 0; i < num; i++) {
    rollResult += Math.ceil(Math.random() * 10)
  }
  console.log(rollResult)
}

const rollD12 = (num) => {
  let rollResult = 0
  for (i = 0; i < num; i++) {
    rollResult += Math.ceil(Math.random() * 12)
  }
  console.log(rollResult)
}

const rollD20 = (num) => {
  let rollResult = 0
  for (i = 0; i < num; i++) {
    rollResult += Math.ceil(Math.random() * 20)
  }
  console.log(rollResult)
}

rollD12(2)

//Objects

class Player {
  constructor(name) {
    this.name = name
    this.currentSpace = 0
    this.currentRoll
    this.health = 100
    this.gold = 100
  }
}

const player1 = new Player(`Steve`)
console.log(player1)
