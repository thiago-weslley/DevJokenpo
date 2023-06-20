const playerOptionsList = document.querySelectorAll('.player-option')
const enemyOptionsList = document.querySelectorAll('.enemy-option')

playerOptionsList.forEach(option => {
    option.addEventListener('click', () => {
        clearSelectedOption(playerOptionsList)

        option.style.opacity = "1"
        option.classList.add('animate')
        setTimeout(() => {
            option.classList.remove('animate')
        }, 600)

        option.setAttribute('data-selected', true)

        enemyIa()
    })
})

const clearSelectedOption = (array) => {
    array.forEach(element => {
        element.setAttribute('data-selected', 'false')
        element.style.opacity = '0.65'
    })
}

const enemyIa = () => {
    clearSelectedOption(enemyOptionsList)

    const optionIa = Math.floor(Math.random() * enemyOptionsList.length)
    const optionIaSelected = enemyOptionsList[optionIa]

    optionIaSelected.classList.add('animate')
    setTimeout(() => {
        optionIaSelected.classList.remove('animate')
    }, 600)

    optionIaSelected.style.opacity = '1'
}