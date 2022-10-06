const boardArr = [
  {
    index: 0,
    type: `start`
  },
  {
    index: 1,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 2,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 3,
    type: `a shop`,
    run: function (player) {
      shop(player)
    }
  },
  {
    index: 4,
    type: `a random fight`,
    run: function (player) {
      randomFightStart(player)
    }
  },
  {
    index: 5,
    type: `a random fight`,
    run: function (player) {
      randomFightStart(player)
    }
  },
  {
    index: 6,
    type: `a random fight`,
    run: function (player) {
      randomFightStart(player)
    }
  },
  {
    index: 7,
    type: `a random fight`,
    run: function (player) {
      randomFightStart(player)
    }
  },
  {
    index: 8,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 9,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 10,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 11,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 12,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 13,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 14,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 15,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 16,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 17,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 18,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 19,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 20,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 21,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 22,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 23,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 24,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 25,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 26,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 27,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 28,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 29,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 30,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 31,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 32,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 33,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 34,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 35,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 36,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 37,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 38,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 39,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 40,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 41,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 42,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 43,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 44,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 45,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 46,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 47,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 48,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 49,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 50,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 51,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 52,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 53,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 54,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 55,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 56,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 57,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 58,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  },
  {
    index: 59,
    type: `an empty`,
    run: function (player) {
      emptySpace(player)
    }
  }
]
