import './style.css'
import { templateEngine } from './template-engine'
import { mainScreen } from './mainScreen'
import { cardFrontTemplate } from './screenGame'
import { cardBackTemplate } from './screenGame'
import { renderLvlScreen } from './screenGame'
import { winScreen } from './winScreen'
import { gameStart } from './gameStart'
import { looseScreen } from './looseScreen'

const gameWindow: HTMLElement | null = document.querySelector('.game')
window.application = {
    status: {},
    screens: {},
    lvl: [],
    renderScreen: function (screenName: string) {
        window.application.timers.forEach((element: number) => {
            clearInterval(element)
        })

        if (!window.application.screens[screenName]) {
            console.warn('Такой страницы нет')
        } else {
            gameWindow!.innerHTML = ''
            this.screens[screenName]
        }
    },
    timers: [],
    timerWin: [],
}

window.application.screens['mainScreen'] = mainScreen
// window.application.screens.mainScreen(gameWindow)
window.application.screens['gameStart'] = gameStart
gameStart()

window.application.screens['screenGame'] = renderLvlScreen
window.application.screens['looseScreen'] = looseScreen
window.application.screens['winScreen'] = winScreen
