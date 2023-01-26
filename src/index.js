import './style.css'
import './template-engine'
import './mainScreen'
import './screenGame'
import './winScreen'
import './gameStart'
import './looseScreen'

const gameWindow = document.querySelector('.game')
window.application = {
    status: {},
    screens: {},
    lvl: [],
    renderScreen: function (screenName) {
        window.application.timers.forEach((element) => {
            clearInterval(element)
        })

        if (!window.application.screens[screenName]) {
            console.warn('Такой страницы нет')
        } else {
            gameWindow.innerHTML = ''
            this.screens[screenName]
        }
    },
    timers: [],
    timerWin: [],
}
