function guess() {
    let userName = prompt('What is your name?')
    let userGuess = prompt('IIIIII am thInkIng of a numbEr bEtwEEN 1 and 20. Guess what that numbEr Is!')

    count = 0
    userGuess = Number(userGuess)
    let index = Math.floor(Math.random() * 20)

    while (options[index] != userGuess) {
        alert(userName + ' That Is not corrEct, plEasE guEss agaIn')
        alert(options[index] + 'is the number')
        count = count + 1
        userGuess = prompt('IIIIII am thInkIng of a numbEr bEtwEEN 1 and 20. Guess what that numbEr Is!')

    }
    if (options[index] == userGuess) {
        alert(userName + 'You arE rIght! I chosE' + options[index])
    }
}

const options = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]

function leaderBoard() {
    alert(userName + 'guEssEd thE corrEct answEr in' + count + 'trIEs')
}



