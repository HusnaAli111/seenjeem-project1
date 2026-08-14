console.log('test seenjeem')
/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let selectCategories=[]


/*------------------------ Cached Element References ------------------------*/
const bahrainq1Element = document.querySelectorAll('.bahrain-q1')
const bahrainq2Element = document.querySelectorAll('.bahrain-q2')
const bahrainq3Element = document.querySelectorAll('.bahrain-q3')
const bahrainq4Element = document.querySelectorAll('.bahrain-q4')

const selectedCategoryElement = document.querySelector('#selectedCategories')

// now for the board
const categorynameElement=document.querySelector('.category-name')

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
// function board(){
//     for (let i = 0; i < categorynameElement.length; i++) {
//         categoryNameElements[i] = selectCategories[i]
//     }

// }

// board()


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






