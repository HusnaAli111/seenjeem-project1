console.log('test seenjeem')
/*-------------------------------- Constants --------------------------------*/

const questions = [
    {
        "Bahrain":[
    {points: 200,questions1:'what is the 200??',choices:['a2','b2','c2'],correctanswer:'a2'},
    {points: 200,questions1:'what is the 200/200??',choices:['a3','b3','c3'],correctanswer:'a'},
    {points: 400,questions1:'what is the 400??',choices:['a4','b','c'],correctanswer:'a'},
    {points: 400,questions1:'what is the 400/400??',choices:['a5','b','c'],correctanswer:'a'},
    {points: 600,questions1:'what is the 600??',choices:['a6','b','c'],correctanswer:'a'},
    {points: 600,questions1:'what is the 600/600??',choices:['a7','b','c'],correctanswer:'a'}
        ]

    },
    {
        "Bahrain Malls":[
    {points: 200,questions1:'what is the 200??',choices:['a2','b2','c2'],correctanswer:'a2'},
    {points: 200,questions1:'what is the 200/200??',choices:['a3','b3','c3'],correctanswer:'a'},
    {points: 400,questions1:'what is the 400??',choices:['a4','b','c'],correctanswer:'a'},
    {points: 400,questions1:'what is the 400/400??',choices:['a5','b','c'],correctanswer:'a'},
    {points: 600,questions1:'what is the 600??',choices:['a6','b','c'],correctanswer:'a'},
    {points: 600,questions1:'what is the 600/600??',choices:['a7','b','c'],correctanswer:'a'}

        ]
    },
    {
        "Bahrain First":[
    {points: 200,questions1:'what is the 200??',choices:['a2','b2','c2'],correctanswer:'a2'},
    {points: 200,questions1:'what is the 200/200??',choices:['a3','b3','c3'],correctanswer:'a'},
    {points: 400,questions1:'what is the 400??',choices:['a4','b','c'],correctanswer:'a'},
    {points: 400,questions1:'what is the 400/400??',choices:['a5','b','c'],correctanswer:'a'},
    {points: 600,questions1:'what is the 600??',choices:['a6','b','c'],correctanswer:'a'},
    {points: 600,questions1:'what is the 600/600??',choices:['a7','b','c'],correctanswer:'a'}

        ]
    },
    {
        "Bahrain Slogans":[
    {points: 200,questions1:'what is the 200??',choices:['a2','b2','c2'],correctanswer:'a2'},
    {points: 200,questions1:'what is the 200/200??',choices:['a3','b3','c3'],correctanswer:'a'},
    {points: 400,questions1:'what is the 400??',choices:['a4','b','c'],correctanswer:'a'},
    {points: 400,questions1:'what is the 400/400??',choices:['a5','b','c'],correctanswer:'a'},
    {points: 600,questions1:'what is the 600??',choices:['a6','b','c'],correctanswer:'a'},
    {points: 600,questions1:'what is the 600/600??',choices:['a7','b','c'],correctanswer:'a'}

        ]
    }

]
/*---------------------------- Variables (state) ----------------------------*/
let selectCategories=[]
let currentteam=1



/*------------------------ Cached Element References ------------------------*/
const bahrainq1Element = document.querySelectorAll('.bahrain-q1')
const bahrainq2Element = document.querySelectorAll('.bahrain-q2')
const bahrainq3Element = document.querySelectorAll('.bahrain-q3')
const bahrainq4Element = document.querySelectorAll('.bahrain-q4')

const selectedCategoryElement = document.querySelector('#selectedCategories')

//  for the board
const categorynameElement=document.querySelectorAll('.category-name')
const cardscontainerElement=document.querySelector('.cards-container')
const bottombarElement=document.querySelector('.bottom-bar')
const playbuttonElement=document.querySelector('.play-button button')
//question
const gameElement=document.querySelector('.game')
const questionElement=document.querySelector('.question')
const choicesElement=document.querySelector('.choices button')
const bottombar2Element=document.querySelector('.bottom-bar2')
//to disapear everything
const backgroundElement = document.querySelector('.background')
const selectCategoryElement = document.querySelector('.select-category')
const sidebarElement = document.querySelector('.sidebar')
const bahrainElement = document.querySelectorAll('.bahrain')
const playButtonElement = document.querySelector('.play-button')
const navbarElement=document.querySelector('.navbar2')
//teams turn
const teamsElement=document.querySelectorAll('.teams')
const team1Element=document.querySelector('#team1')
const team2Element=document.querySelector('#team2')
//answer
const answer1Element=document.querySelector('#answer1')
const answer2Element=document.querySelector('#answer2')
const answer3Element=document.querySelector('#answer3')





/*-------------------------------- Functions --------------------------------*/
function clickplay(event){
    cardclick=event.target
    console.log(cardclick)

    if (selectCategories.length >=4) {
        console.log('full')
                    console.log(selectCategories)

        return
    }
    console.log(event.target.children[1].children[0].textContent)
        selectCategories.push(event.target.children[1].children[0].textContent)
            console.log(selectCategories)
            selectedCategoryElement.textContent = selectCategories.join('\n')


}
function board(){
    if (selectCategories.length<4){
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
    function questionClick(event){
        qClick=event.target.textContent
        let clicknumber
        if(event.target.textContent=='200'||event.target.textContent=='400'||event.target.textContent=='600'){
            clicknumber=Number(qClick.textContent)
            console.log('point clicked')


        }
        //question appears
        // const matchquestion=questions.find((onequestion) => onequestion.points==clicknumber)
        // console.log(matchquestion)
        // questionElement.textContent = matchquestion.questions1

       for (let macthquestion of questions){
        console.log(questions[0].questions1) 
        console.log('question appears')
        questionElement.textContent=macthquestion.questions1        

        }




        for (let i=0;i<choicesElement.length;i++){
            choicesElement[i].textContent=matchquestion.choices[i]
        }

//hide the whole page when we click on the question
    backgroundElement.style.display = 'none'
    selectCategoryElement.style.display = 'none'
    sidebarElement.style.display = 'none'
    playButtonElement.style.display = 'none'

    for(let i = 0; i < bahrainElement.length; i++){
        bahrainElement[i].style.display = 'none'
    }
//hide the whole page when we click on the question
    cardscontainerElement.style.display = 'none'
    bottombarElement.style.display = 'none'
    // shows the question page

    gameElement.style.display = 'flex'
    bottombar2Element.style.display = 'flex'

    teamTurn()

} 
//team turn function
function teamTurn(){
    if(currentteam==1){
        team1Element.style.backgroundColor='#ff8c42'
        team2Element.style.backgroundColor='#f3f3f3'
        currentteam=2


    }else{
        team1Element.style.backgroundColor='#f3f3f3'
        team2Element.style.backgroundColor='#ff8c42'
        currentteam=1

    }
}

// answer function
function answerClick(event){
    let answer=event.target.textContent
    if(answer==questions.correctanswer){
        event.target.style.backgroundColor='#008000 '
    }else{
                event.target.style.backgroundColor='#FF0000  '
    }


}







/*----------------------------- Event Listeners -----------------------------*/
bahrainq1Element.forEach(function(card) {
    card.addEventListener('click', clickplay)
})
bahrainq2Element.forEach(function(card) {
    card.addEventListener('click', clickplay)
})
bahrainq3Element.forEach(function(card) {
    card.addEventListener('click', clickplay)
})
bahrainq4Element.forEach(function(card) {
    card.addEventListener('click', clickplay)
})

playbuttonElement.addEventListener('click', board)
cardscontainerElement.addEventListener('click', questionClick)
choicesElement.addEventListener('click',answerClick)







