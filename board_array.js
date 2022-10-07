const boardArr = [
  {
    index: 0,
    class: `start`
  },
  {
    index: 1,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 2,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 3,
    phrase: `a shop`,
    class: `shop`,
    run: (player) => {
      shop(player)
    }
  },
  {
    index: 3,
    phrase: `a shop`,
    class: `shop`,
    run: (player) => {
      shop(player)
    }
  },
  {
    index: 5,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 6,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 7,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 8,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 9,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 10,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 11,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 12,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 13,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 14,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 15,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 16,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 17,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 18,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 19,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 20,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 21,
    phrase: `a shop`,
    class: `shop`,
    run: (player) => {
      shop(player)
    }
  },
  {
    index: 22,
    phrase: `a shop`,
    class: `shop`,
    run: (player) => {
      shop(player)
    }
  },
  {
    index: 23,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 24,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 25,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 26,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 27,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    iindex: 28,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 29,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 30,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 31,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 32,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 33,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 34,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 35,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 36,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 37,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 38,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 39,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 40,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 41,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 42,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 43,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 44,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 45,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 46,
    phrase: `a shop`,
    class: `shop`,
    run: (player) => {
      shop(player)
    }
  },
  {
    index: 47,
    phrase: `a shop`,
    class: `shop`,
    run: (player) => {
      shop(player)
    }
  },
  {
    index: 48,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 49,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 50,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 51,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 52,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 53,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 54,
    phrase: `an empty`,
    class: `empty`,
    run: (player) => {
      emptySpace(player)
    }
  },
  {
    index: 55,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 56,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 57,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 58,
    phrase: `a random fight`,
    class: `ranFight`,
    run: (player) => {
      randomFightStart(player)
    }
  },
  {
    index: 59,
    phrase: `you win`,
    class: `finish`
  }
]
