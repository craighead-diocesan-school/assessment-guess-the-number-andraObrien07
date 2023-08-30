//things used in multiple functions
let randomNumber
// Defining min and max values 
const min = 1
const max = 20
//information stored on player like how many tries it took and their name
let info
//makes the userGuess a variable availbale to all functions
let userGuess
//count available for all functions =0
let count
//makes the userGuess a variable availbale to all functions
let userName

function playerGuess() {
    // ask the user for their name to put them on the leaderboard
    userName = prompt('What is your name?')
    //converts the user guess to a number
    userGuess = Number(userGuess)

    if (/\d/.test(userName)) {
        alert("User name should not have any digits in it.");
        return false; // gives the computer a false value for the userName which is invalid
    }
    userGuess = Number(userGuess);
    return true; // Gives the computer a true value for the userName which is valid
}

function programChoice() {
    //gets the computer to randomly gernerate a number between 1 and 20
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
}

function guess() {
    //reset count at 1 at the start of each game
    count = 0

    // checks the playerGuess functions value if it has digits or not, and asks the user for their name
    const isValidName = playerGuess();

    // If the name has digits it means its not valid and the game will stop 'retrun'
    if (!isValidName) {
        return;
    }

    //tells the computer to randomly generate a number between 1-20 so it is ready for the next part of the code
    programChoice()

    //compares the majic number and ther users guess
    compareGuess()

}

function compareGuess() {
    //loop, if the randomly generated computer number is not what the user guessed then it will say 'thats not correct'
    while (randomNumber != userGuess) {
        userGuess = prompt('IIIIII am thInkIng of a numbEr bEtwEEN 1 and 20. Guess what that numbEr Is!')

        //if the userGuess is less than 1 and greater than 20  it will say that it is an invalid input
        if (userGuess < min || userGuess > max) {
            alert(' that is an invalid input and you should try again')
        }
        //if the userGuess is above the min and below the max, 1 will  be added to the count
        else {
            count = count + 1
        }

        // if the usersGuess is not the same as the randomly generated guess then it will do whatever is in this if statement
        if (userGuess != randomNumber) {
            //tells the user that their guess is not correct as its not the same as the randomly generated guess
            alert(userName + ' That Is not corrEct, plEasE guEss agaIn')

            // GET RID OF tell me what number it is so i dont have to gues for ever
            alert(randomNumber + ' is the number')
        }

        //if the randomly generated guess is the same as the userguess it will do whats in the if statement
        if (randomNumber == userGuess) {
            //tells the user that they are right and what the number was 
            alert(userName + ' you arE rIght! I chosE ' + randomNumber)
            //tells the user how many tries it took them to guess
            alert('you guess the number in ' + count + ' tries')
        }
    }

    // stores the userName in name and count in timesGuessed
    info = {
        name: userName,
        timesGuessed: count,
    }
    //pushes the name and times guessed that the most recent player did to scoreboard
    userNameArray.push(info)
}
//players who have played previously, to make to game more realistic 
userNameArray = [
    { name: 'Charlotte', timesGuessed: 14 },
    { name: 'Isabel', timesGuessed: 9 },
    { name: 'G', timesGuessed: 5 },
]

function scoreBoard() {
    for (info of userNameArray) {
        //alerts the user their name and times guessed when they press the score board button
        alert('it took ' + info.name + ' ' + info.timesGuessed + ' amount of tries')
    }
}



