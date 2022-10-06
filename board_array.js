const boardArr = [
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
    type: `random fight`,
    run: function (player) {
      randomFightStart(player)
    }
  },
  {
    index: 5,
    type: `random fight`,
    run: function (player) {
      randomFightStart(player)
    }
  },
  {
    index: 6,
    type: `random fight`,
    run: function (player) {
      randomFightStart(player)
    }
  },
  {
    index: 7,
    type: `random fight`,
    run: function (player) {
      randomFightStart(player)
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
