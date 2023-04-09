import { timeGo } from './time'
import { flipCard } from './flipCardlogic'
import { countdownGo } from './countdown'

const gameFieldCard = document.querySelectorAll('.game_field-card')
const result = document.querySelector('.result')

export function flipForFiveSecond(callback: Function) {
    countdownGo()
    const result: HTMLElement | null = document.querySelector('.result')
    result!.style.zIndex = '2'
    const gameFieldCard = document.querySelectorAll('.game_field-card')
    clearInterval(window.application.timerWin.timeout)
    gameFieldCard.forEach((element) => {
        element.classList.add('flip')
    })
    setTimeout(() => {
        gameFieldCard.forEach((element) => {
            element.classList.remove('flip')
        })
        let timeout = setInterval(callback, 1000)
        window.application.timerWin['timeout'] = timeout
        timeGo()
        result!.style.zIndex = '-1'
        const gameCountdown: HTMLElement | null =
            document.querySelector('.countdown')
        setTimeout(() => {
            gameCountdown!.style.display = 'none'
        }, 1000)
    }, 5000)
}
