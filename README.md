# Adventure Land Board Game

## Date: 10/2/2022

### By: Travis Nelson

#### [GitHub](https://github.com/tnel91/Travis-Adventure-BoardGame) | [LinkedIn](https://www.linkedin.com/in/tnelson2013/) | [Trello](https://trello.com/b/41uYwWHy/travis-adventureland-boardgame) | [Surge](https://busy-thread.surge.sh/game.html)

---

### **_Description_**

The goal of this project is to create a a simple browser based fantasy-adventure board game similar to CandyLand in structure. It will be built for two players and feature a linear path through the game. Players will be able to name their characters, and the game will track basic player-stats, such as health and held items. A player wins when they reach the end of the path.

Movement will be determined by dice roll, and events will be triggered by players landing on certain spaces. These events can be beneficial or a hinderance to the player. Events will play out in a text based format.

---

### **_Technologies Used_**

- Visual Studio Code
- Git/Github
- Gimp

---

### **_Getting Started_**

1. Open index.html
2. Click "Play"
3. Click "Roll to Move" to roll the dice and move Player 1's game piece.
4. Your equipped weapon is listed near the top right corner of the page. Click the buttons below it to change your weapon.
5. If you land on a red space, you will enter combat.

   - Click "Fight" to initiate combat, which plays out automatically.

6. After the outcome of any space, the turn ends and players automatically switch.
7. First player to reach the end wins!

---

### **_Screenshots_**

### Landing Page

---

![Imgur](https://i.imgur.com/WbDxHJx.png)

### Game Page

---

![Imgur](https://i.imgur.com/suoTRCM.png)

---

### **_Potential board space ideas_**

- **Monster Encounter**
  - The player can choose which weapon they want to attack with.
  - Upon defeat, the player will receive a reward, such as a new weapon, potion, or gold.
  - If a player reaches zero health, they are defeated and must respawn.
  - Certain monsters may be weak to certain items, i.e., a holy sword may do double damage to undead, or a bundle of garlic may make a vampire flee from a fight.
- **Respawn Space**
  - If a player's health reaches zero, they will move backwards to the respawn space they most recently passed.
  - If they have not passed a respawn point, the player moves back to start.
- **Shops**
  - If a player lands on a shop space, they will have the opportunity to spend earned gold.
  - Players may purchace things such as weapons, potions, extra dice rolls, or items that can interact with certain spaces.
- **Environmental Hazards**
  - May impact player movement or stats when landing on these spaces.
    - _Poisonous Bog_: Skips players next turn.
    - _Mysterious Portal_: Randomly moves player forwards _or_ backwards on the board.
    - _Misty Woods_: Cuts player movement in half on their next turn.
    - _Bridge Troll_: Pay the troll gold or prepare to fight!

---

### **_Guidelines for Project_**

#### **HTML and CSS**

- The index.html page will introduce the game's title and contain a start button. Clicking the start button should bring up inputs for player names, then link to the main game file.

- The body will be made up of two major parent element sections...
  1. Game Board: Will need to be a large CSS grid. This will contain a div for each board space. Each space will have a unique ID and a class.
  2. Encounter Board: Will contain the text elements displayed for each encounter. Will also contain player information that is updated as the game progresses.

#### **JavaScript**

- _Player Objects_:

  - Will need a class and constructor to generate player characters.
  - Values needed include `name`, `currentSpace`, `health`, `gold`, and an array of objects containing weapons/items.

- _Monster Objects_:

  - Will use a class and constructor to generate monsters to fight.
  - May use the extends and super syntax to generate different monster classes.
  - Values needed include `name`, `health`, and an array of objects containing weapons/attacks.

- _Game Logic_:

  1.  Will need to build functions for dice rolls. I may give certain weapons different values for dice roll (2 x d8, 1 x d12, 3 x d6, etc.)
  2.  When a player rolls, the `currentSpace` value will need to be updated to the space they move to.
  3.  After a player movement, the game will need pass the `currentSpace` value as an argument into a function to use as an index to access a an array of strings, each representing a space on the board, in order. That string will trigger the appropriate set of functions for each space. That way multiple identical spaces will share the same string and functions.
  4.  The logic runing each encounter will present a series of choices to the player. This will probably work best with a series of if/else statements. Values will need to be accessed in player/enemy objects as well.
  5.  After a turn is finished, the game should know if that player has any movement imparing conditions to apply for the next turn, i.e., slower movement, turn skip, etc.
  6.  The game ends once a player reaches the end.

### Credits

##### Project Prompt: [Github](https://github.com/SEI-R-9-19/u1_project_prompt)

##### Markdown Guide: [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

##### VS Code Editing Guide [Basic Editing](https://code.visualstudio.com/docs/editor/codebasics)

##### Clip Art Images [ClipArtMax](https://www.clipartmax.com/)

##### Image Editing [Gimp](https://www.gimp.org/)

##### Image Hosting [Imgur](https://imgur.com/)
