import {commonWords} from '/constants'

console.log(commonWords)
function makeRandomWord() {
    const filteredWordList = commonWords.filter(word => word.length >= 3) 
    const randomIndex=
        Math.floor(Math.random() * filteredWordList.length)
    const randomWord = filteredWordList[randomIndex]
    return randomWord
}

const randomWord = makeRandomWord()
console.log(randomWord)

const dashContainer = document.querySelector('#dashes')
const btnContainer = document.querySelector('#letters')

function makeDashes(word, guesses) {
    const wordArray = randomWord.split('').map(letter => {
        const showLetter = guesses.includes(letter)
        const letterOrNot = showLetter ? letter : ''
        console.log(letter, showLetter, letterOrNot, guesses)    
        return `<div class="dash">${letterOrNot}</div>`
    })

    const dashString = wordArray.join('')
    dashContainer.innerHTML = dashString    
}

makeDashes(randomWord, guesses)


// II.
// User guesses from a list of letters and those letters are compared to the string of words in the wordToGuess:

// A. first .map some letter buttons and style them in main.css

function makeBtns(){
    const keyboardBtns = 'a b c d e f g h i j k l m n o p q r s t u v w x y z' 
    const btnString = keyboardBtns.split(" ")
    .map(letter => `<button>${letter}</button>`)
    .join('')
    btnContainer.innerHTML = btnString
}

makeBtns()




// console.log(letterArray)

const keyboard =
letterArray.map (function(letter) {
    return `
    <button class= "letter-btns" id= "btn ${letter}"> ${letter} </button>`
}).join(' ')

// console.log(keyboard)

document.getElementById('letters').innerHTML = keyboard

// Why cant I inject these into the DOM without everything breaking?!?!

// add an eventlistner that logs what letter user has chosen...

function letterClickTracking(e) {
    
    const btnTarget = e.target.innerHTML
    console.log(btnTarget)
    const letterInsideWord = wordToGuess.includes(btnTarget)
   console.log(letterInsideWord === btnTarget)
    
}
let letterBtns = document.getElementById('letters')
letters.addEventListener('click', letterClickTracking)








// let wordStat = null
// let healthMeter = 7
// let mistakes = 0




