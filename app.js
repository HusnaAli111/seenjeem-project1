console.log('test seenjeem')
/*-------------------------------- Constants --------------------------------*/
const questions=[
    {points: 200,questions:'what is the ??',choices:['a','b','c'],correctanswer:'a'},
    {points: 200,questions:'what is the ??',choices:['a','b','c'],correctanswer:'a'},
    {points: 400,questions:'what is the ??',choices:['a','b','c'],correctanswer:'a'},
    {points: 400,questions:'what is the ??',choices:['a','b','c'],correctanswer:'a'},
    {points: 600,questions:'what is the ??',choices:['a','b','c'],correctanswer:'a'},
    {points: 600,questions:'what is the ??',choices:['a','b','c'],correctanswer:'a'}

]

/*---------------------------- Variables (state) ----------------------------*/
let selectCategories=[]



/*------------------------ Cached Element References ------------------------*/
const bahrainq1Element = document.querySelectorAll('.bahrain-q1')
const bahrainq2Element = document.querySelectorAll('.bahrain-q2')
const bahrainq3Element = document.querySelectorAll('.bahrain-q3')
const bahrainq4Element = document.querySelectorAll('.bahrain-q4')

const selectedCategoryElement = document.querySelector('#selectedCategories')

// now for the board
const categorynameElement=document.querySelectorAll('.category-name')
const cardscontainerElement=document.querySelector('.cards-container')
const bottombarElement=document.querySelector('.bottom-bar')
const playbuttonElement=document.querySelector('.play-button button')

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






