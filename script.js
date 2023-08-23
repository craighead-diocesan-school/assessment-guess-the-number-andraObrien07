
const options = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]

function guess() {
    // ask the user for their name to put them on the leaderboard
    let userName = prompt('What is your name?')

    //makes the userGuess variable
    let userGuess

    //have the count start at 0
    count = 0

    //converts the user guess to a number
    userGuess = Number(userGuess)

    //gets the computer to randomly gernerate a number from the options array
    let index = Math.floor(Math.random() * 20)


    //loop, if the randomly generated computer number is not what the user guessed then it will say 'thats not correct'
    while (options[index] != userGuess) {
        userGuess = prompt('IIIIII am thInkIng of a numbEr bEtwEEN 1 and 20. Guess what that numbEr Is!')
        // if the usersGuess is not the same as the randomly generated guess then it will do whatever is in this if statement
        if (userGuess != options[index])
            //tells the user that their guess is not correct as its not the same as the randomly generated guess
            alert(userName + ' That Is not corrEct, plEasE guEss agaIn')
        //add 1 to the count everytime they guess incorrectly/ every time the loop goes round.
        count = count + 1
        alert(options[index] + 'is the number')

        //if the randomly generated guess is the same as the userguess it will do whats in the if statement
        if (options[index] == userGuess) {
            //tells the user that they are right and what the number was 
            alert(userName + ' you arE rIght! I chosE ' + options[index])
            //tells the user how many tries it took them to guess
            alert('you guess the number in ' + count + ' tries')
        }

        //if the userGuess is less than 1 and greater than 20  it will say that it is an invalid input
        else if (userGuess < 1 || userGuess > 20) {
            count = count + 0
            alert(' that is an invalid input and you should try again')

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
function scoreBoard() {
    // alert(userName + 'guEssEd thE corrEct answEr in trIEs')
    // for (let info of userNameArray) {
    //     alert(info.name + ', it took you ' + info.amountOfTries + ' to guess the random number!')
    // }


    alert('it took ' + userName + ' amount of tries')
}



