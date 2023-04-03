import { timeGo } from './time'

const gameFieldCard = document.querySelectorAll('.game_field-card')
const result = document.querySelector('.result')

export function flipForFiveSecond(callback: Function) {
    
    const gameFieldCard = document.querySelectorAll('.game_field-card')
    const result = document.querySelector('.result')
    gameFieldCard.forEach((element) => {
        element.classList.add('flip')
    })
    setTimeout(() => {
        // debugger
        gameFieldCard.forEach((element) => {
            element.classList.remove('flip')
        })
        let timeout = setInterval(callback, 1000)
        window.application.timerWin['timeout'] = timeout
        timeGo()
    }, 5000)
    // setInterval(callback(), 1000)
}
