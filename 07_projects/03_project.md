# Project 3

## Guessing Number Game

```javascript
let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const remaning = document.querySelector('.lastResult')
const result = document.querySelector('.resultParas')
const guessSlot = document.querySelector('.guesses')
const lowOrHi = document.querySelector('.lowOrHi')

const p = document.createElement('p')

let prevGuess = []
let guessNum = 1
let playgame = true
if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert(`Please enter a valid input`)
  }else if(guess<1){
    alert(`Please enter a number greater than 1`)
  }else if(guess>100){
    alert(`please Enter a number less than 100`)
  }else{
    prevGuess.push(guess)
    if(guessNum===11){
      displayGuess(guess);
      displayMessage(`Game Over the correct Number is ${randomNumber}`)
      endGame();
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
 
function checkGuess(guess){
  if(guess == randomNumber){
    displayMessage(`You got the right ans`)
    endGame()
  }else if(guess<randomNumber){
    displayMessage(`your guessed number is too loo`)
  }else if(guess>randomNumber){
    displayMessage(`your guessed number is too high`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess},`
  guessNum++
  remaning.innerHTML = `${11-guessNum}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
 userInput.setAttribute('disabled', '')
 p.classList.add('button')
 p.innerHTML = `<h2 id = "newGame">Start a new Game</h2>`
 result.appendChild(p)
 playgame = false
 newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100+1)
    guessNum = 1
    prevGuess = []
    guessSlot.innerHTML = ''
    remaning.innerHTML = `${11-guessNum}`
    userInput.removeAttribute('disabled')
    result.removeChild(p)
    playgame = true;
  });
}
```