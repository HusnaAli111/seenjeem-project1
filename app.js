setTimeout(() => {
    console.log('test seenjeem')

}, 1000)
/*-------------------------------- Constants --------------------------------*/

const questions = [
    {
        "Bahrain": [

            {
                points: 200,
                questions1: 'What is the capital city of Bahrain?',
                choices: ['Manama', 'Riffa', 'Muharraq'],
                correctanswer: 'Manama'
            },

            {
                points: 200,
                questions1: 'What is the currency of Bahrain?',
                choices: ['Bahraini Dinar', 'Saudi Riyal', 'UAE Dirham'],
                correctanswer: 'Bahraini Dinar'
            },

            {
                points: 400,
                questions1: 'How many islands make up the Kingdom of Bahrain?',
                choices: ['More than 30', 'More than 100', 'More than 300'],
                correctanswer: 'More than 30'
            },

            {
                points: 400,
                questions1: 'Which sea surrounds Bahrain?',
                choices: ['Arabian Gulf', 'Red Sea', 'Mediterranean Sea'],
                correctanswer: 'Arabian Gulf'
            },

            {
                points: 600,
                questions1: 'What is the name of Bahrain’s famous ancient burial mounds?',
                choices: ['Dilmun Burial Mounds', 'Pearl Mounds', 'Bahrain Hills'],
                correctanswer: 'Dilmun Burial Mounds'
            },

            {
                points: 600,
                questions1: 'What is Bahrain’s national animal?',
                choices: ['Arabian Oryx', 'Falcon', 'Gazelle'],
                correctanswer: 'Arabian Oryx'
            }

        ]

    },
    {
        "Bahrain Malls": [

            {
                points: 200,
                questions1: 'Which mall is located in Seef District?',
                choices: ['Seef Mall', 'Dragon City', 'Moda Mall'],
                correctanswer: 'Seef Mall'
            },

            {
                points: 200,
                questions1: 'Which mall is famous for its large aquarium and indoor attractions?',
                choices: ['City Centre Bahrain', 'Seef Mall', 'Enma Mall'],
                correctanswer: 'City Centre Bahrain'
            },

            {
                points: 400,
                questions1: 'Which mall is located near Bahrain International Airport?',
                choices: ['Marassi Galleria', 'City Centre Bahrain', 'Seef Mall'],
                correctanswer: 'Marassi Galleria'
            },

            {
                points: 400,
                questions1: 'Which mall is known for its large IKEA store nearby?',
                choices: ['Bahrain Mall', 'The Avenues', 'Moda Mall'],
                correctanswer: 'Bahrain Mall'
            },

            {
                points: 600,
                questions1: 'Which Bahrain mall is located on the waterfront in Manama?',
                choices: ['The Avenues', 'Seef Mall', 'Enma Mall'],
                correctanswer: 'The Avenues'
            },

            {
                points: 600,
                questions1: 'Which mall is located in Diyar Al Muharraq?',
                choices: ['Marassi Galleria', 'Moda Mall', 'Bahrain Mall'],
                correctanswer: 'Marassi Galleria'
            }

        ]
    },
    {
        "Bahrain First": [

            {
                points: 200,
                questions1: 'What was Bahrain the first country in the Gulf to discover commercially?',
                choices: ['Oil', 'Gold', 'Coal'],
                correctanswer: 'Oil'
            },

            {
                points: 200,
                questions1: 'Bahrain was the first Gulf country to have which type of school?',
                choices: ['Modern public school', 'Military school', 'Medical school'],
                correctanswer: 'Modern public school'
            },

            {
                points: 400,
                questions1: 'What was the name of Bahrain’s first modern school for boys?',
                choices: ['Al-Hidaya Al-Khalifia School', 'Isa Town School', 'Manama School'],
                correctanswer: 'Al-Hidaya Al-Khalifia School'
            },

            {
                points: 400,
                questions1: 'Bahrain was the first Gulf country to establish a modern system of what?',
                choices: ['Education', 'Railways', 'Metro'],
                correctanswer: 'Education'
            },

            {
                points: 600,
                questions1: 'In which year was oil first discovered in Bahrain?',
                choices: ['1932', '1945', '1952'],
                correctanswer: '1932'
            },

            {
                points: 600,
                questions1: 'Bahrain was the first Gulf country where oil was discovered in which location?',
                choices: ['Jebel Al Dukhan', 'Jebel Al Noor', 'Jebel Hafeet'],
                correctanswer: 'Jebel Al Dukhan'
            }

        ]
    },
    {
        "Bahrain Slogans": [

            {
                points: 200,
                questions1: 'Which phrase is commonly associated with Bahrain as a tourism destination?',
                choices: ['Ours. Yours. Bahrain.', 'The Heart of Arabia', 'Land of the Seven Seas'],
                correctanswer: 'Ours. Yours. Bahrain.'
            },

            {
                points: 200,
                questions1: 'Which phrase describes Bahrain as an island nation?',
                choices: ['Island of Pearls', 'Island of Gold', 'Island of Palms'],
                correctanswer: 'Island of Pearls'
            },

            {
                points: 400,
                questions1: 'Which word is strongly associated with Bahrain’s history and culture?',
                choices: ['Pearls', 'Snow', 'Volcanoes'],
                correctanswer: 'Pearls'
            },

            {
                points: 400,
                questions1: 'Bahrain is often described as the heart of which region?',
                choices: ['The Gulf', 'Europe', 'North Africa'],
                correctanswer: 'The Gulf'
            },

            {
                points: 600,
                questions1: 'Which ancient civilization is strongly connected with Bahrain’s history?',
                choices: ['Dilmun', 'Roman', 'Mayan'],
                correctanswer: 'Dilmun'
            },

            {
                points: 600,
                questions1: 'Which traditional industry is Bahrain especially famous for?',
                choices: ['Pearling', 'Tea farming', 'Silk production'],
                correctanswer: 'Pearling'
            }

        ]
    }

]
/*---------------------------- Variables (state) ----------------------------*/
// This stores the categories that the player selects.
let selectCategories = []
let currentteam = 2
//for question that are availble cause then we will do the splice and remove the first thing that have been clicked
let currentBaharain = []
let currentMalls = []
let currentFirst = []
let currentSlogans = []

// to save the current question
let currentQuestion = null

//save the team score
let team1Score = 0
let team2Score = 0

//count how many question has been answered
let questionsCount = 0




/*------------------------ Cached Element References ------------------------*/
const bahrainq1Element = document.querySelectorAll('.bahrain-q1')
const bahrainq2Element = document.querySelectorAll('.bahrain-q2')
const bahrainq3Element = document.querySelectorAll('.bahrain-q3')
const bahrainq4Element = document.querySelectorAll('.bahrain-q4')

const selectedCategoryElement = document.querySelector('#selectedCategories')

//  for the board
const categorynameElement = document.querySelectorAll('.category-name')
const cardscontainerElement = document.querySelector('.cards-container')
const bottombarElement = document.querySelector('.bottom-bar')
const playbuttonElement = document.querySelector('.play-button button')
//question
const gameElement = document.querySelector('.game')
const questionElement = document.querySelector('.question')
const choicesElement = document.querySelectorAll('.choices button')
const bottombar2Element = document.querySelector('.bottom-bar2')
//to disapear everything
const backgroundElement = document.querySelector('.background')
const selectCategoryElement = document.querySelector('.select-category')
const sidebarElement = document.querySelector('.sidebar')
const bahrainElement = document.querySelectorAll('.bahrain')
const playButtonElement = document.querySelector('.play-button')
const navbarElement = document.querySelector('.navbar2')
//teams turn
const teamsElement = document.querySelectorAll('.teams')
const team1Element = document.querySelector('#team1')
const team2Element = document.querySelector('#team2')
//answer
const answer1Element = document.querySelector('#answer1')
const answer2Element = document.querySelector('#answer2')
const answer3Element = document.querySelector('#answer3')
//question to apear
const category1Element = document.querySelector('#category1')
const category2Element = document.querySelector('#category2')
const category3Element = document.querySelector('#category3')
const category4Element = document.querySelector('#category4')
//score section in the question section
const scorePopupElement = document.querySelector('#scorePopup')
const giveTeam1Element = document.querySelector('#giveTeam1')
const giveTeam2Element = document.querySelector('#giveTeam2')
const giveNoOneElement = document.querySelector('#giveNoOne')
const team1ScoreElement = document.querySelector('#team1-score2')
const team2ScoreElement = document.querySelector('#team2-score2')
//score section for the board section
const boardTeam1ScoreElement = document.querySelector('#board-team1-score')
const boardTeam2ScoreElement = document.querySelector('#board-team2-score')
//show the team turn in the board
const boardTeam1Element = document.querySelector('.team-1')
const boardTeam2Element = document.querySelector('.team-2')
//show the winner in the end of the game
const winpopupElement = document.querySelector('#winPopUp')






/*-------------------------------- Functions --------------------------------*/
//this function is for when  the player is selecting categories
function clickplay(event) {
    cardclick = event.target
    console.log(cardclick)

    if (selectCategories.length >= 4) {
        console.log('full')
        console.log(selectCategories)

        return
    }
    console.log(event.target.children[1].children[0].textContent)
    selectCategories.push(event.target.children[1].children[0].textContent)
    console.log(selectCategories)
    selectedCategoryElement.textContent = selectCategories.join('\n')
    sidebarElement.style.display = 'block'

}
//this function runs when the start palying is clicked
function board() {
    //did the player choose 4 categories
    if (selectCategories.length < 4) {
        console.log('4 only')
        return
    }
    //put the selected categories into the board
    for (let i = 0; i < categorynameElement.length; i++) {
        categorynameElement[i].textContent = selectCategories[i]
    }
    // hide the category  page
    backgroundElement.style.display = 'none'
    selectCategoryElement.style.display = 'none'
    sidebarElement.style.display = 'none'
    playButtonElement.style.display = 'none'

    // hide all the category cards
    for (let i = 0; i < bahrainElement.length; i++) {
        bahrainElement[i].style.display = 'none'
    }

    // show the board
    cardscontainerElement.style.display = 'flex'
    bottombarElement.style.display = 'flex'

}

// click the question function
function questionClick(event) {
    answer1Element.style.backgroundColor = '#e5e5e5'
    answer2Element.style.backgroundColor = '#e5e5e5'
    answer3Element.style.backgroundColor = '#e5e5e5'
    scorePopupElement.style.display = 'none'
    let qClick = Number(event.target.textContent)
    console.log('point clicked')
    //bahrain question and pushing it into the array that we created
    if (event.currentTarget.id == 'category1') {
        if (currentBaharain.length == 0) {
            for (let i = 0; i < questions[0].Bahrain.length; i++) {
                currentBaharain.push(questions[0].Bahrain[i])
            }
        }
        //bahrain click
        //find the question with same selected point
        for (let i = 0; i < currentBaharain.length; i++) {
            if (currentBaharain[i].points == qClick) {
                //display the question
                let seenjeem = currentBaharain[i]
                //this to save the question for the choices section
                currentQuestion = seenjeem
                questionElement.textContent = seenjeem.questions1

                //display the choices
                answer1Element.textContent = seenjeem.choices[0]
                answer2Element.textContent = seenjeem.choices[1]
                answer3Element.textContent = seenjeem.choices[2]

                //this for when you choose another question it goes to the white color again
                answer1Element.classList.add('choices')
                answer2Element.classList.add('choices')
                answer3Element.classList.add('choices')
                currentBaharain.splice(i, 1)
                break
            }
        }
    }
    //bahrain mall question
    if (event.currentTarget.id == "category2") {
        if (currentMalls.length == 0) {
            for (let i = 0; i < questions[1]['Bahrain Malls'].length; i++) {
                currentMalls.push(questions[1]['Bahrain Malls'][i])
            }

        }
        //bahrain malls click
        for (let i = 0; i < currentMalls.length; i++) {
            if (currentMalls[i].points == qClick) {
                let seenjeem = currentMalls[i]
                //this to save the question for the choices section
                currentQuestion = seenjeem
                questionElement.textContent = seenjeem.questions1
                //display the choices
                answer1Element.textContent = seenjeem.choices[0]
                answer2Element.textContent = seenjeem.choices[1]
                answer3Element.textContent = seenjeem.choices[2]

                //this for when you choose another question it goes to the white color again
                answer1Element.classList.add('choices')
                answer2Element.classList.add('choices')
                answer3Element.classList.add('choices')
                currentMalls.splice(i, 1)
                break

            }
        }
    }
    //bahrain first question
    if (event.currentTarget.id == "category3") {
        if (currentFirst.length == 0) {
            for (let i = 0; i < questions[2]["Bahrain First"].length; i++) {
                currentFirst.push(questions[2]["Bahrain First"][i])
            }

        }
        //bahrain first click
        for (let i = 0; i < currentFirst.length; i++) {
            if (currentFirst[i].points == qClick) {
                let seenjeem = currentFirst[i]
                //this to save the question for the choices section
                currentQuestion = seenjeem
                questionElement.textContent = seenjeem.questions1
                //display the choices
                answer1Element.textContent = seenjeem.choices[0]
                answer2Element.textContent = seenjeem.choices[1]
                answer3Element.textContent = seenjeem.choices[2]

                //this for when you choose another question it goes to the white color again
                answer1Element.classList.add('choices')
                answer2Element.classList.add('choices')
                answer3Element.classList.add('choices')
                currentFirst.splice(i, 1)
                break

            }

        }
    }
    //bahrain slogans question
    if (event.currentTarget.id == "category4") {
        if (currentSlogans.length == 0) {
            for (let i = 0; i < questions[3]["Bahrain Slogans"].length; i++) {
                currentSlogans.push(questions[3]["Bahrain Slogans"][i])
            }

        }
        //bahrain slogan questions
        for (let i = 0; i < currentSlogans.length; i++) {
            if (currentSlogans[i].points == qClick) {
                let seenjeem = currentSlogans[i]
                //this to save the question for the choices section
                currentQuestion = seenjeem
                questionElement.textContent = seenjeem.questions1
                //display the choices
                answer1Element.textContent = seenjeem.choices[0]
                answer2Element.textContent = seenjeem.choices[1]
                answer3Element.textContent = seenjeem.choices[2]

                //this for when you choose another question it goes to the white color again
                answer1Element.classList.add('choices')
                answer2Element.classList.add('choices')
                answer3Element.classList.add('choices')
                currentSlogans.splice(i, 1)
                break

            }
        }
    }

    // Hide board
    backgroundElement.style.display = 'none'
    selectCategoryElement.style.display = 'none'
    sidebarElement.style.display = 'none'
    playButtonElement.style.display = 'none'

    for (let i = 0; i < bahrainElement.length; i++) {
        bahrainElement[i].style.display = 'none'
    }

    cardscontainerElement.style.display = 'none'
    bottombarElement.style.display = 'none'

    // Show question page
    gameElement.style.display = 'flex'
    bottombar2Element.style.display = 'flex'




    //hide the whole page when we click on the question
    backgroundElement.style.display = 'none'
    selectCategoryElement.style.display = 'none'
    sidebarElement.style.display = 'none'
    playButtonElement.style.display = 'none'

    for (let i = 0; i < bahrainElement.length; i++) {
        bahrainElement[i].style.display = 'none'
    }
    //hide the whole page when we click on the question
    // cardscontainerElement.style.display = 'none'
    // bottombarElement.style.display = 'none'
    // shows the question page

    gameElement.style.display = 'flex'
    bottombar2Element.style.display = 'flex'


}


//team turn function
function teamTurn() {
    if (currentteam == 1) {
        team1Element.style.backgroundColor = '#ff8c42'
        team2Element.style.backgroundColor = '#f3f3f3'

        // this is for the board so it shows the color
        boardTeam1Element.style.backgroundColor = '#ff8c42'
        boardTeam2Element.style.backgroundColor = '#f3f3f3'
        currentteam = 2


    } else {
        team1Element.style.backgroundColor = '#f3f3f3'
        team2Element.style.backgroundColor = '#ff8c42'

        // this is for the board so it shows the color
        boardTeam1Element.style.backgroundColor = '#f3f3f3'
        boardTeam2Element.style.backgroundColor = '#ff8c42'
        currentteam = 1

    }

}
//this for the begging is makes the team1 orange and team2 white
team1Element.style.backgroundColor = '#ff8c42'
team2Element.style.backgroundColor = '#f3f3f3'

// this is for the board so it shows the color
boardTeam1Element.style.backgroundColor = '#ff8c42'
boardTeam2Element.style.backgroundColor = '#f3f3f3'


// answer function
function answerClick(event) {
    let answer = event.target.textContent
    if (answer == currentQuestion.correctanswer) {
        event.target.style.backgroundColor = '#008000 '



    } else {

        event.target.style.backgroundColor = '#FF0000  '

    }
    //this is when its wrong it display the correct answer with green
    setTimeout(() => {

        if (answer1Element.textContent == currentQuestion.correctanswer) {
            answer1Element.style.backgroundColor = 'green'
        }

        if (answer2Element.textContent == currentQuestion.correctanswer) {
            answer2Element.style.backgroundColor = 'green'
        }

        if (answer3Element.textContent == currentQuestion.correctanswer) {
            answer3Element.style.backgroundColor = 'green'
        }
        setTimeout(() => {

            scorePopupElement.style.display = 'flex'
        }, 2000)

    }, 1000)




}
//go back to the board when points are distributed
function backToBoard() {
    // hide the question page
    gameElement.style.display = 'none'
    bottombar2Element.style.display = 'none'

    // show the  board
    cardscontainerElement.style.display = 'flex'
    bottombarElement.style.display = 'flex'
}

//score team1 function
function giveToTeam1() {
    team1Score = team1Score + currentQuestion.points
    team1ScoreElement.textContent = team1Score
    //this is in the boad shows
    boardTeam1ScoreElement.textContent = team1Score
    //count the question
    questionsCount++
    scorePopupElement.style.display = 'none'

    teamTurn()
    gameEnd()
    backToBoard()

}

//score team2 function
function givetoTeam2() {
    team2Score = team2Score + currentQuestion.points
    team2ScoreElement.textContent = team2Score
    // this is in the board shows
    boardTeam2ScoreElement.textContent = team2Score
    //count the question
    questionsCount++
    scorePopupElement.style.display = 'none'

    teamTurn()
    gameEnd()
    backToBoard()


}

//score for no one
function giveNoOne() {
    //count the question
    questionsCount++
    scorePopupElement.style.display = 'none'

    teamTurn()
    gameEnd()
    backToBoard()

}

//winning check
function winnercheck() {

    if (team1Score > team2Score) {
        winpopupElement.textContent = 'The Winner is Team 1!'
        winpopupElement.style.display = 'flex'
    }
    else if (team2Score > team1Score) {
        winpopupElement.textContent = 'the winner is team 2!'
        winpopupElement.style.display = 'flex'
    }
    else {
        winpopupElement.textContent = 'its a tie!'
        winpopupElement.style.display = 'flex'
    }

}
//check how mnay question answered so the game end
function gameEnd() {
    if (questionsCount == 24) {
        winnercheck()
    }
}








/*----------------------------- Event Listeners -----------------------------*/
bahrainq1Element.forEach(function (card) {
    card.addEventListener('click', clickplay)
})
bahrainq2Element.forEach(function (card) {
    card.addEventListener('click', clickplay)
})
bahrainq3Element.forEach(function (card) {
    card.addEventListener('click', clickplay)
})
bahrainq4Element.forEach(function (card) {
    card.addEventListener('click', clickplay)
})

playbuttonElement.addEventListener('click', board)
// cardscontainerElement.addEventListener('click', questionClick)
choicesElement.forEach(function (choice) {
    choice.addEventListener('click', answerClick)
})//question to appear
category1Element.addEventListener('click', questionClick)
category2Element.addEventListener('click', questionClick)
category3Element.addEventListener('click', questionClick)
category4Element.addEventListener('click', questionClick)

//score
giveTeam1Element.addEventListener('click', giveToTeam1)
giveTeam2Element.addEventListener('click', givetoTeam2)
giveNoOneElement.addEventListener('click', giveNoOne)








