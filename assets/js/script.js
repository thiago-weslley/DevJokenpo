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

        const optionPlayer = option.getAttribute('data-value')
        const optionIa = enemyIa()

        result(optionPlayer, optionIa)
    })
})

const enemyIa = () => {
    clearSelectedOption(enemyOptionsList)

    const optionIa = Math.floor(Math.random() * enemyOptionsList.length)
    const optionIaSelected = enemyOptionsList[optionIa]

    optionIaSelected.style.opacity = '1'
    optionIaSelected.setAttribute('data-selected', 'true')

    optionIaSelected.classList.add('animate')
    setTimeout(() => {
        optionIaSelected.classList.remove('animate')
    }, 600)

    return optionIaSelected.getAttribute('data-value')
}

const clearSelectedOption = (array) => {
    array.forEach(element => {
        element.setAttribute('data-selected', 'false')
        element.style.opacity = '0.65'
    })
}

const result = (optionPlayer, optionIa) => {
    const playerScoreText = document.querySelector('.your-score')
    const computerScoreText = document.querySelector('.computer-score')
    let playerScore = parseInt(playerScoreText.innerHTML)
    let computerScore = parseInt(computerScoreText.innerHTML)

    if ((optionPlayer === 'stone' && optionIa === 'paper') ||
        (optionPlayer === 'paper' && optionIa === 'scissor') ||
        (optionPlayer === 'scissor' && optionIa === 'stone')
    ) {
        computerScore++
        computerScoreText.innerHTML = computerScore
    } else if (
        (optionPlayer === 'stone' && optionIa === 'scissor') ||
        (optionPlayer === 'paper' && optionIa === 'stone') ||
        (optionPlayer === 'scissor' && optionIa === 'paper')
    ) {
        playerScore++
        playerScoreText.innerHTML = playerScore
    }
}