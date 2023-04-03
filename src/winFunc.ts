import { time } from './time'
export function winFunc() {
    if (document.querySelector('.game_field')) {
        let allCardsArray = document.querySelectorAll('.game_field-card')
        let howMuch = allCardsArray.length
        let howNow = 0
        allCardsArray.forEach((element) => {
            if (element.classList.contains('flip')) {
                howNow++
            }
        })
        if (howMuch === howNow) {
            window.application.status = 'Win'
            window.application.lvl = []
            // let timer: any = window.clearInterval(time as any)
            console.log('go to win page')
            // clearInterval(callback)
            const result = document.querySelector('.result')
            window.application.screens.winScreen(result)
            clearInterval(window.application.timerWin.timeout)
        }
    }
}
