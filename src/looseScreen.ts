import { debug } from 'console'
import { flipCard } from './flipCardlogic'
import { gameStart } from './gameStart'
import { time } from './time'
export function looseScreen(container: HTMLElement | null) {
    container!.style.zIndex = '2'
    const looseBlock = document.createElement('div')
    container!.appendChild(looseBlock)
    looseBlock.classList.add('result_field')

    const resultFrame = document.createElement('div')
    looseBlock.appendChild(resultFrame)
    resultFrame.classList.add('result_frame')

    const resultFrameLoose = document.createElement('div')
    resultFrame.appendChild(resultFrameLoose)
    resultFrameLoose.classList.add('result_frame-loose')

    const resultFrameLooseImg = document.createElement('img')
    resultFrameLoose.appendChild(resultFrameLooseImg)
    resultFrameLooseImg.classList.add('result_frame-img')
    resultFrameLooseImg.src = './cards/paimonangry.png'

    const resultFrameYouLoose = document.createElement('h4')
    resultFrameLoose.appendChild(resultFrameYouLoose)
    resultFrameYouLoose.classList.add('result_frame-youloose')
    resultFrameYouLoose.textContent = 'Вы проиграли!'

    const resultFrameTime = document.createElement('div')
    resultFrame.appendChild(resultFrameTime)
    resultFrameTime.classList.add('result_frame-time')

    const resultFrameTimeTxt = document.createElement('h5')
    resultFrameTime.appendChild(resultFrameTimeTxt)
    resultFrameTimeTxt.classList.add('result_frame-timetxt')
    resultFrameTimeTxt.textContent = 'Затраченное время:'

    const resultFrameTimeNum = document.createElement('h3')
    resultFrameTime.appendChild(resultFrameTimeNum)
    resultFrameTimeTxt.classList.add('result_frame-timenum')
    resultFrameTimeTxt.textContent = window.application.timers

    const resultFrameBtn = document.createElement('button')
    resultFrame.appendChild(resultFrameBtn)
    resultFrameBtn.classList.add('result_frame-btn')
    resultFrameBtn.textContent = 'Играть снова'

    resultFrameBtn.addEventListener('click', () => {
        window.application.timers = '00' + '.' + '00'
        clearInterval(window.application.timerTest.timerId)
        let gameWindow = document.querySelector('.game')
        const result = document.querySelector('.result')
        clearInterval(window.application.timerWin.timeout)
        window.application.status = ''
        window.application.lvl = []
        window.application.timers = []
        window.application.timerWin = []
        window.application.timerTest = []
        result!.innerHTML = ''
        gameWindow!.innerHTML = ''
        window.application.screens.mainScreen(gameWindow)
        gameStart()
    })
}
