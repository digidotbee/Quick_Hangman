# Wordgame

## Description

You know the word-guessing game hangman? Well that's what this is.
Basically, it works like this:

- The app starts by choosing a random word
- The player can guess a single letter at a time
- The player has a fixed number of turns in which to guess all of the letters in the word
- The app should indicate when the player has won or lost

```bash
npm install
```

### to start the server (localhost:1234 or whatever it is...)

```bash
npm run start
```

### to stop the node server

```bash
control c
```
The game should:

- Choose a random word _of 3 letters or more_ from the `commonWords` array
- Allow the user to guess one letter at a time
- When the user runs out of turns, show a losing screen
- When the user guesses all of the letters in the word, show a winning screen
- Doesn't let the user guess the same letter more than once
- Displays all guesses on screen so the user knows what letters he/she has guessed already

