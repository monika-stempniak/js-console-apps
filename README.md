# js-console-apps

Go to the proper folder

```node
cd dr_name
```

And run in a console:

### poker

The program is showing random poker hand

```node
node deal.js
```

# weighing scale

There are 8 basketballs and 1 scale. 7 of them weigh the same. 1 of them has a different weight, (it's heavier or lighter). How do you find the odd ball with 2 weighs?

Enter in console:

```node
node scale.js
```

### hunter game

Do you like treasure hunts? There is an array in board.js. The values in the array are clues. Each cell contains an integer between 11 and 55; for each value the ten's digit represents the row number and the unit's digit represents the column number of the cell containing the next clue. Starting in the upper left corner (at 1,1), use the clues to guide your search of the array. (The first three clues are 11, 34, 42). The treasure is a cell whose value is the same as its coordinates. Your program should output the cells it visits during its search, and a message indicating where you found the treasure.

```node
node app.js
```

### bouncy simulator

There is an array in board.js. X – border, 0 – boards object can travel, 1 – bouncing object. The program is to show how the object would travel and bounce against the walls. The program is to end when object comes back to original position.

```node
node app.js
```

### bouncy simulator extended version

There is an array in board.js. Y – when bouncing objects enters it move it to random direction other that it came and Y turns into 0, X – border, 0 – boards object can travel, 1 – bouncing object. The program is to show how the object would travel and bounce against the walls. Bouncing objects starts in any corner. 1 and Y position may vary.

```node
node app.js
```
