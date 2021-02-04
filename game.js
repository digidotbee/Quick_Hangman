import {commonWords} from '/constants'

let wordToGuess = ''

// Filter through the array of common words for words with a length that is >= 3

const wordList = 
commonWords.filter(word => word.length >= 3) 

// console.log(wordList)

// A word is randomly chosen from the array of commonWords for which the user will guess letters:

// write a function for random math stuffs

function random () {
    wordToGuess = wordList[Math.floor(Math.random() * wordList.length)]
    // console.log(wordToGuess)
}

random ()
console.log(wordToGuess)

// II.
// User guesses from a list of letters and those letters are compared to the string of words in the wordToGuess:

// A. first .map some letter buttons and style them in main.css


const letterBtns = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'

const letterArray = letterBtns.split(" ")

// console.log(letterArray)

const keyboard =
letterArray.map (function(letter) {
    return `
    <button class= "letter-btns" id= "btn ${letter}">${letter}</button>`
}).join(' ')

console.log(keyboard)

document.getElementById('#letters').innerHTML = keyboard

// Why cant I inject these into the DOM without everything breaking?!?!

// Track what letters the user as guessed and set it into the DOM
// let lettersGuessed = []
// function letterClickTracking(btn) {
//     if 
// }




// let wordStat = null
// let healthMeter = 7
// let mistakes = 0




