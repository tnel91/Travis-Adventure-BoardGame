const boardArr = [
  {
    index: 0,
    class: `start`,
    phrase: `start`
  },
  {
    index: 1,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 2,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 3,
    phrase: `a shop`,
    class: `shop`,
    run: function (player) {
      shop(player)
    }
  },
  {
    index: 4,
    phrase: `a random fight`,
    class: `ranFight`,
    run: function (player) {
      randomFightStart(player)
    }
  },
  {
    index: 5,
    phrase: `a random fight`,
    class: `ranFight`,
    run: function (player) {
      randomFightStart(player)
    }
  },
  {
    index: 6,
    phrase: `a random fight`,
    class: `ranFight`,
    run: function (player) {
      randomFightStart(player)
    }
  },
  {
    index: 7,
    phrase: `a random fight`,
    class: `ranFight`,
    run: function (player) {
      randomFightStart(player)
    }
  },
  {
    index: 8,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 9,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 10,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 11,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 12,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 13,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 14,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 15,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 16,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 17,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 18,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 19,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 20,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 21,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 22,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 23,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 24,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 25,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 26,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 27,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 28,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 29,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 30,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 31,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 32,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 33,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 34,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 35,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 36,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 37,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 38,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 39,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 40,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 41,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 42,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 43,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 44,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 45,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 46,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 47,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 48,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 49,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 50,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 51,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 52,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 53,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 54,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 55,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 56,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 57,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 58,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 59,
    phrase: `an empty`,
    class: `empty`,
    run: function (player) {
      emptySpace(player)
    }
  }
]
