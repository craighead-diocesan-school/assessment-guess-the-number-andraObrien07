
const options = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]

function guess() {
    // ask the user for their name to put them on the leaderboard
    let userName = prompt('What is your name?')
    // ask the user to guess a number from 1 to 20
    userGuess = prompt('IIIIII am thInkIng of a numbEr bEtwEEN 1 and 20. Guess what that numbEr Is!')
    // let userGuess = prompt('IIIIII am thInkIng of a numbEr from 1 and 20. Guess what that numbEr Is!')

    //have the count start at 0
    count = 0

    //converts the user guess to a number
    userGuess = Number(userGuess)

    //gets the computer to randomly gernerate a number from the options array
    let index = Math.floor(Math.random() * 20)


    //loop, if the randomly generated computer number is not what the user guessed then it will say 'thats not correct'
    while (options[index] != userGuess) {
        userGuess = prompt('IIIIII am thInkIng of a numbEr bEtwEEN 1 and 20. Guess what that numbEr Is!')

        if (userGuess != options[index])
            alert(userName + ' That Is not corrEct, plEasE guEss agaIn')
        //add 1 to the count everytime they guess incorrectly/ every time the loop goes round.
        count = count + 1
        alert(options[index] + 'is the number')
        if (options[index] == userGuess) {
            alert(userName + 'You arE rIght! I chosE' + options[index])
            alert('you guess the number in ' + count + 'tries')
        }
        else if (userGuess < 1 || userGuess > 20) {
            alert(' that is an invalid input and you should try again')
            count = count + 0
        }




    }


    let info = {
        name: userName,
        amountOfTries: count,
    }
    userNameArray.push(nameArray)
}


let userNameArray = [
    { name: 'Andra', timesGuessed: 14 },
    { name: 'Emma', timesGuessed: 9 },
    { name: 'G', timesGuessed: 5 },
    { name: 'Annabelle', timesGuessed: count },


]
function leaderBoard() {
    // alert(userName + 'guEssEd thE corrEct answEr in trIEs')
    // for (let info of userNameArray) {
    //     alert(info.name + ', it took you ' + info.amountOfTries + ' to guess the random number!')
    // }

    alert(userNameArray)
}



