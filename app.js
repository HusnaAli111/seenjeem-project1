console.log('test seenjeem')
/*-------------------------------- Constants --------------------------------*/

const questions = [
    {
        "Bahrain": [

            { points: 200, questions1: 'what is the 200??', choices: ['a2', 'b2', 'c2'], correctanswer: 'a2' },
            { points: 400, questions1: 'what is the 400??', choices: ['a4', 'b', 'c'], correctanswer: 'a' },
            { points: 600, questions1: 'what is the 600??', choices: ['a6', 'b', 'c'], correctanswer: 'a' },
            { points: 200, questions1: 'what is the 200/200??', choices: ['a3', 'b3', 'c3'], correctanswer: 'a' },
            { points: 400, questions1: 'what is the 400/400??', choices: ['a5', 'b', 'c'], correctanswer: 'a' },
            { points: 600, questions1: 'what is the 600/600??', choices: ['a7', 'b', 'c'], correctanswer: 'a' }

        ]

    },
    {
        "Bahrain Malls": [
            { points: 200, questions1: 'what is the bahrain??', choices: ['a2', 'b2', 'c2'], correctanswer: 'a2' },
            { points: 200, questions1: 'what is the bharain20222??', choices: ['a3', 'b3', 'c3'], correctanswer: 'a' },
            { points: 400, questions1: 'what is the 400??', choices: ['a4', 'b', 'c'], correctanswer: 'a' },
            { points: 400, questions1: 'what is the 400/400??', choices: ['a5', 'b', 'c'], correctanswer: 'a' },
            { points: 600, questions1: 'what is the 600??', choices: ['a6', 'b', 'c'], correctanswer: 'a' },
            { points: 600, questions1: 'what is the 600/600??', choices: ['a7', 'b', 'c'], correctanswer: 'a' }

        ]
    },
    {
        "Bahrain First": [
            { points: 200, questions1: 'what is the 200??', choices: ['a2', 'b2', 'c2'], correctanswer: 'a2' },
            { points: 200, questions1: 'what is the 200/200??', choices: ['a3', 'b3', 'c3'], correctanswer: 'a' },
            { points: 400, questions1: 'what is the 400??', choices: ['a4', 'b', 'c'], correctanswer: 'a' },
            { points: 400, questions1: 'what is the 400/400??', choices: ['a5', 'b', 'c'], correctanswer: 'a' },
            { points: 600, questions1: 'what is the 600??', choices: ['a6', 'b', 'c'], correctanswer: 'a' },
            { points: 600, questions1: 'what is the 600/600??', choices: ['a7', 'b', 'c'], correctanswer: 'a' }

        ]
    },
    {
        "Bahrain Slogans": [
            { points: 200, questions1: 'what is the 200??', choices: ['a2', 'b2', 'c2'], correctanswer: 'a2' },
            { points: 200, questions1: 'what is the 200/200??', choices: ['a3', 'b3', 'c3'], correctanswer: 'a' },
            { points: 400, questions1: 'what is the 400??', choices: ['a4', 'b', 'c'], correctanswer: 'a' },
            { points: 400, questions1: 'what is the 400/400??', choices: ['a5', 'b', 'c'], correctanswer: 'a' },
            { points: 600, questions1: 'what is the 600??', choices: ['a6', 'b', 'c'], correctanswer: 'a' },
            { points: 600, questions1: 'what is the 600/600??', choices: ['a7', 'b', 'c'], correctanswer: 'a' }

        ]
    }

]
/*---------------------------- Variables (state) ----------------------------*/
let selectCategories = []
let currentteam = 1
//for question
let currentBaharain = []
let currentMalls = []
let currentFirst = []
let currentSlogans = []

// to save the current question



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
const choicesElement = document.querySelector('.choices button')
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






/*-------------------------------- Functions --------------------------------*/
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


}
function board() {
    if (selectCategories.length < 4) {
        console.log('4 only')
        return
    }
    for (let i = 0; i < categorynameElement.length; i++) {
        categorynameElement[i].textContent = selectCategories[i]
    }
    cardscontainerElement.style.display = 'flex'
    bottombarElement.style.display = 'flex'

}

// click the question function
function questionClick(event) {
    let qClick = Number(event.target.textContent)
    console.log('point clicked')
    //bahrain question
    if (event.currentTarget.id == 'category1') {
        if (currentBaharain.length == 0) {
            for (let i = 0; i < questions[0].Bahrain.length; i++) {
                currentBaharain.push(questions[0].Bahrain[i])
            }
        }
        //bahrain click
        //find thequestion with same selected point
        for (let i = 0; i < currentBaharain.length; i++) {
            if (currentBaharain[i].points == qClick) {
                //display the question
                let seenjeem = currentBaharain[i]
                questionElement.textContent = seenjeem.questions1
                //display the choices
                answer1Element.textContent = seenjeem.choices[0]
                answer2Element.textContent = seenjeem.choices[1]
                answer3Element.textContent = seenjeem.choices[2]
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
                questionElement.textContent = seenjeem.questions1
                //display the choices
                answer1Element.textContent = seenjeem.choices[0]
                answer2Element.textContent = seenjeem.choices[1]
                answer3Element.textContent = seenjeem.choices[2]
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
                questionElement.textContent = seenjeem.questions1
                //display the choices
                answer1Element.textContent = seenjeem.choices[0]
                answer2Element.textContent = seenjeem.choices[1]
                answer3Element.textContent = seenjeem.choices[2]
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
                questionElement.textContent = seenjeem.questions1
                //display the choices
                answer1Element.textContent = seenjeem.choices[0]
                answer2Element.textContent = seenjeem.choices[1]
                answer3Element.textContent = seenjeem.choices[2]
                currentSlogans.splice(i, 1)
                break

            }
        }
    }










    // Hide board
    // backgroundElement.style.display = 'none'
    // selectCategoryElement.style.display = 'none'
    // sidebarElement.style.display = 'none'
    // playButtonElement.style.display = 'none'

    // for (let i = 0; i < bahrainElement.length; i++) {
    //     bahrainElement[i].style.display = 'none'
    // }

    // cardscontainerElement.style.display = 'none'
    // bottombarElement.style.display = 'none'

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

    teamTurn()

}
//team turn function
function teamTurn() {
    if (currentteam == 1) {
        team1Element.style.backgroundColor = '#ff8c42'
        team2Element.style.backgroundColor = '#f3f3f3'
        currentteam = 2


    } else {
        team1Element.style.backgroundColor = '#f3f3f3'
        team2Element.style.backgroundColor = '#ff8c42'
        currentteam = 1

    }
}

// answer function
function answerClick(event) {
    let answer = event.target.textContent
    if (answer == cu.correctanswer) {
        event.target.style.backgroundColor = '#008000 '
    } else {
        event.target.style.backgroundColor = '#FF0000  '
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
choicesElement.addEventListener('click', answerClick)
//question to appear
category1Element.addEventListener('click', questionClick)
category2Element.addEventListener('click', questionClick)
category3Element.addEventListener('click', questionClick)
category4Element.addEventListener('click', questionClick)







