import { stringify } from 'postcss'
import { templateEngine } from './template-engine'
import { flipForFiveSecond } from './flipforFiveSecond'
import { time, timeGo } from './time'
import {
    flipCard,
    checkForMatch,
    disableCards,
    unflipCards,
    resetBoard,
    shuffle,
} from './flipCardlogic'
import { winFunc } from './winFunc'

interface Card {
    img: String
    data: String
}
let card: Card = {
    img: './cards/cardBack.jpg',
    data: 'back',
}
let cardsLight: Card[] = []
cardsLight.push({
    img: './cards/1.jpg',
    data: 'one',
})
cardsLight.push({
    img: './cards/2.jpg',
    data: 'two',
})
cardsLight.push({
    img: './cards/3.jpg',
    data: 'three',
})

let cardsMedium: Card[] = []
cardsMedium.push({
    img: './cards/1.jpg',
    data: 'one',
})
cardsMedium.push({
    img: './cards/2.jpg',
    data: 'two',
})
cardsMedium.push({
    img: './cards/3.jpg',
    data: 'three',
})
cardsMedium.push({
    img: './cards/4.jpg',
    data: 'four',
})
cardsMedium.push({
    img: './cards/5.jpg',
    data: 'five',
})
cardsMedium.push({
    img: './cards/6.jpg',
    data: 'six',
})

let cardsHard: Card[] = []
cardsHard.push({
    img: './cards/1.jpg',
    data: 'one',
})
cardsHard.push({
    img: './cards/2.jpg',
    data: 'two',
})
cardsHard.push({
    img: './cards/3.jpg',
    data: 'three',
})
cardsHard.push({
    img: './cards/4.jpg',
    data: 'four',
})
cardsHard.push({
    img: './cards/5.jpg',
    data: 'five',
})
cardsHard.push({
    img: './cards/6.jpg',
    data: 'six',
})
cardsHard.push({
    img: './cards/7.jpg',
    data: 'seven',
})
cardsHard.push({
    img: './cards/8.jpg',
    data: 'eight',
})
cardsHard.push({
    img: './cards/9.jpg',
    data: 'nine',
})
export function cardFrontTemplate(bloc: Card) {
    return {
        tag: 'div',
        cls: 'game_field-card',
        attrs: {
            'data-game': bloc.data,
        },
        content: [
            {
                // tag: 'div',
                // cls: 'game_field-cardfront',
                // content: [
                //     {
                tag: 'img',
                cls: 'game_field-cardfront',
                attrs: {
                    src: bloc.img,
                },
            },
            //     ],
            // },
        ],
    }
}
export function cardBackTemplate(bloc: Card) {
    return {
        // tag: 'div',
        // cls: 'game_field-cardback',
        // content: [
        // {
        tag: 'img',
        cls: 'game_field-cardback',
        attrs: {
            src: bloc.img,
        },
        // },
        // ],
    }
}
export function renderLvlScreen(container: HTMLElement | null) {
    container!.innerHTML = ''
    const gameScreen = document.createElement('div')
    gameScreen.classList.add('game_playscreen')
    container!.appendChild(gameScreen)
    const header = document.createElement('div')
    header.classList.add('game_header')
    gameScreen.appendChild(header)
    const gameField = document.createElement('div')
    gameField.classList.add('game_field')
    gameScreen.appendChild(gameField)
    const gameTimer = document.createElement('div')
    gameTimer.classList.add('game_timer')
    header.appendChild(gameTimer)
    const gameTimerMin = document.createElement('div')
    gameTimerMin.classList.add('game_timer-min')
    gameTimer.appendChild(gameTimerMin)
    const gameTimerText = document.createElement('div')
    gameTimerText.classList.add('game_timer-text')
    gameTimerMin.appendChild(gameTimerText)
    gameTimerText.textContent = 'min'
    const gameTimerMinNum = document.createElement('div')
    gameTimerMinNum.classList.add('game_timer-minnum')
    gameTimerMin.appendChild(gameTimerMinNum)
    gameTimerMinNum.textContent = '00'
    const gameTimerComma = document.createElement('div')
    gameTimerComma.classList.add('game_timer-comma')
    gameTimer.appendChild(gameTimerComma)
    gameTimerComma.textContent = '.'
    const gameTimerSek = document.createElement('div')
    gameTimerSek.classList.add('game_timer-sek')
    gameTimer.appendChild(gameTimerSek)
    const gameTimerSekTxt = document.createElement('div')
    gameTimerSekTxt.classList.add('game_timer-text')
    gameTimerSek.appendChild(gameTimerSekTxt)
    gameTimerSekTxt.textContent = 'sek'
    const gameTimerSekNum = document.createElement('div')
    gameTimerSekNum.classList.add('game_timer-seknum')
    gameTimerSek.appendChild(gameTimerSekNum)
    gameTimerSekNum.textContent = '00'

    const gameCountdown = document.createElement('span')
    gameCountdown.classList.add('countdown')
    header.appendChild(gameCountdown)

    const gameHeaderButton = document.createElement('button')
    gameHeaderButton.classList.add('game_lvl-btn')
    header.appendChild(gameHeaderButton)
    gameHeaderButton.textContent = 'Начать заново'
    if (window.application.lvl === '1') {
        for (let i = 0; i < 2; i++) {
            gameField.appendChild(
                templateEngine(cardsLight.map(cardFrontTemplate))
            )
        }
        const gameFieldCard = document.querySelectorAll('.game_field-card')

        gameFieldCard.forEach((element) => {
            element.appendChild(templateEngine(cardBackTemplate(card)))
        })
    } else if (window.application.lvl === '2') {
        for (let i = 0; i < 2; i++) {
            gameField.appendChild(
                templateEngine(cardsMedium.map(cardFrontTemplate))
            )
        }
        const gameFieldCard = document.querySelectorAll('.game_field-card')

        gameFieldCard.forEach((element) => {
            element.appendChild(templateEngine(cardBackTemplate(card)))
        })
    } else {
        for (let i = 0; i < 2; i++) {
            gameField.appendChild(
                templateEngine(cardsHard.map(cardFrontTemplate))
            )
        }
        const gameFieldCard = document.querySelectorAll('.game_field-card')

        gameFieldCard.forEach((element) => {
            element.appendChild(templateEngine(cardBackTemplate(card)))
        })
    }
    shuffle()
    lvlScreenLogicStart()
}

export function lvlScreenLogicStart() {
    const gameFieldCard = document.querySelectorAll('.game_field-card')
    const result = document.querySelector('.result')

    flipForFiveSecond(winFunc)
    resetBoard()

    const timerMin = document.querySelector('.game_timer-minnum')
    const timerSek = document.querySelector('.game_timer-seknum')
    const timerButton = document.querySelector('.game_lvl-btn')
    gameFieldCard!.forEach((card) => card.addEventListener('click', flipCard))

    timerButton!.addEventListener('click', () => {
        let timer: any = 0
        let secs = 0
        let now = 0
        let min = 0
        let gameWindow = document.querySelector('.game')
        window.application.timers = min + '.' + secs

        window.application.timerTest.forEach(function (element: any) {
            clearInterval(element)
        })
        now = Date.now()
        min = 0
        timer = setInterval(time)
        clearInterval(window.application.timerWin.timeout)
        window.application.screens.screenGame(gameWindow)
    })
}
