let wordEl = document.getElementById("word-el")
let guessBtn = document.getElementById("guess-btn")
let inputBtn = document.getElementById("input-el")
let StartBtn = document.getElementById("star-btn")
let attempsEl = document.getElementById("attempts")
let textEl = document.getElementById("text")
let textEl2 = document.getElementById("text2")
let content = document.getElementById("content")
let lettersUsedEl = document.getElementById("lettersUsed")
let secretWordEl = document.getElementById("secretWord")


StartBtn.addEventListener('click', function() {

    StartBtn.remove("start-btn")


    let userGuesses = []
    let userGuessList = []
    let lettesUsedList = []


    words = ['apple', 'bannana', 'rock', 'spate', 'odium', 'vapid', 'stint','augur','banal','assay','pique','berth','canon','prate','plumb','taper',
    'blase','fusty','preen','antic','beget','harry','clout', 'blind',
    'sheet',  'crush',  'relax',  'drain',   'label',  'expel',  'thump',   'quake',  'agree',   'event',  'limit',  'argue',  'sharp',  'guide',  'march',  'image',  'worry','curse', 'grain',
    'occur',   'faint',   'waste',  'empty',  'blame',  'creep',  'shift',  'abuse',  'harsh',  'quest',  'vocal', 'taunt', 'drool', 'carry',
    'unite','final',  'worth',  'scene',  'proud', 'false', 'route', 'crash','clown', 'shaky','vegan', 'power', 'trust','enjoy','brain','adopt','tower','shade','delay',
    'twist','alert','choke','split','rhyme','muddy','plant','cheer','pause','legal','plate','error','smash','trade','burst','flash','shame','float','sting','boost','alien','blend','party','store','shine','match','track','dream','guard','flood','adult','sight','alarm','force','wound','brave','cable','panic','study','faith','equal','grade','award','bully','voice','drive','title','adieu','odium','shade','resin','alert','haunt','orate','media','blind','route','audio','pause','alien','canoe','plane','rouse','fraud','atone','raise','minor']


    function randomWord(wordList) {
        return wordList[(Math.floor(Math.random() * wordList.length))]
    }

    keyWord = randomWord(words)
    let attemps = keyWord.length + 2
    console.log(keyWord)


    function printGuessedLetter() {
        wordEl.textContent = "Your secret word is: " + userGuessList
    }

    for (let i = 0; i < keyWord.length; i++) {
        userGuessList.push("_ ")
    }printGuessedLetter()

    attempsEl.textContent = "Number of guesses you have: " + attemps

    secretWordList = keyWord.split('')
    console.log(secretWordList)

    

    guessBtn.addEventListener("click", function() {
        guessedLetter = secretWordList.includes(inputBtn.value)
        userGuessesTrue = userGuesses.includes(inputBtn.value)
        if (userGuessesTrue) {
            textEl.textContent = "You already guessed this letter, try something else"
        } else {
            attemps = attemps - 1
            userGuesses.push(inputBtn.value)
            lettesUsedList.push(inputBtn.value)
            console.log(userGuesses)
            if (inputBtn.value == keyWord) {
                attempsEl.textContent = " "
                textEl2.textContent = keyWord
                textEl2.className = "keyword"
                textEl.textContent = "YAY! You won!!!"
                textEl.className = "guessed"
                attempsEl.remove("attemps-el")
                lettersUsedEl.remove("lettersUsed")

                let newGame = document.createElement('button')
                newGame.className = "NewGameBtn"
                newGame.innerHTML = "New Game"
                content.appendChild(newGame)
                newGame.addEventListener("click", function() {
                    location.reload()
                })
                
            } else if (inputBtn.value != keyWord) {
                textEl.textContent = "Try again!"
                textEl.className = "Wrong"
                
            } 
            if (guessedLetter == true) {
                textEl.textContent = "Nice GUESS!"
                textEl.className = "niceGuess"
            } if (attemps > 0) {
                attempsEl.textContent = "Guesses Left: "+ attemps
                for (let i = 0; i < secretWordList.length; i++) {
                    if (inputBtn.value == secretWordList[i]) {
                        let letterIndex = i
                        userGuessList[letterIndex] = inputBtn.value.toUpperCase()
                    }printGuessedLetter()
                    lettersUsedEl.textContent = "Letters and Words Guessed = " + lettesUsedList
                }
                
            } else {
                textEl.textContent = "Oops! Try Again!"
                if ( attemps > 0) {
                    attempsEl.textContent = "Guesses Left: "+ attemps
                }printGuessedLetter()
               
            }   

            let userGuess = userGuessList.toString()
            let fullkeyword = secretWordList.toString()
            console.log(userGuess)
            console.log(fullkeyword)
            if (userGuess.toUpperCase() == fullkeyword.toUpperCase()) {
                attempsEl.textContent = ""
                textEl.textContent = "Yay! YOU WON!"
                textEl.className = "guessed"
                textEl2.textContent = keyWord
                textEl2.className = "keyword"
                attempsEl.remove("attemps-el")
                lettersUsedEl.remove("lettersUsed")
                let newGame = document.createElement('button')
                newGame.className = "NewGameBtn"
                newGame.innerHTML = "New Game"
                content.appendChild(newGame)
                newGame.addEventListener("click", function() {
                    location.reload()
                })
                inputBtn.value = " "
            } else if (attemps == 0) {
                textEl.textContent = "Too many Guesses! Game Over"
                textEl.className = "not-guessed"
                secretWordEl.textContent = "Secret Word Was:"
                textEl2.textContent = keyWord
                textEl2.className = "keyword"
                attempsEl.remove("attemps-el")
                lettersUsedEl.remove("lettersUsed")
                let newGame = document.createElement('button')
                newGame.className = "NewGameBtn"
                newGame.innerHTML = "New Game"
                content.appendChild(newGame)
                newGame.addEventListener("click", function() {
                    location.reload()
                })
                
                inputBtn.value = " "
            }   
        }

    })
    


})
    

