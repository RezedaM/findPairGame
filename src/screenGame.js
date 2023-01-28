import { templateEngine } from './template-engine'
let card = {
    img: './cards/cardBack.jpg',
    data: 'back',
}

let cardsLight = [
    {
        img: './cards/one.jpg',
        data: 'one',
    },
    {
        img: './cards/2.jpg',
        data: 'two',
    },
    {
        img: './cards/3.jpg',
        data: 'three',
    },
]
let cardsMedium = [
    {
        img: './cards/one.jpg',
        data: 'one',
    },
    {
        img: './cards/2.jpg',
        data: 'two',
    },
    {
        img: './cards/3.jpg',
        data: 'three',
    },
    {
        img: './cards/4.jpg',
        data: 'four',
    },
    {
        img: './cards/5.jpg',
        data: 'five',
    },
    {
        img: './cards/6.jpg',
        data: 'six',
    },
]
let cardsHard = [
    {
        img: './cards/one.jpg',
        data: 'one',
    },
    {
        img: './cards/2.jpg',
        data: 'two',
    },
    {
        img: './cards/3.jpg',
        data: 'three',
    },
    {
        img: './cards/4.jpg',
        data: 'four',
    },
    {
        img: './cards/5.jpg',
        data: 'five',
    },
    {
        img: './cards/6.jpg',
        data: 'six',
    },
    {
        img: './cards/7.jpg',
        data: 'seven',
    },
    {
        img: './cards/8.jpg',
        data: 'eight',
    },
    {
        img: './cards/9.jpg',
        data: 'nine',
    },
]
export function cardFrontTemplate(bloc) {
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
export function cardBackTemplate(bloc) {
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
export function renderLvlScreen(container) {
    container.innerHTML = ''
    const gameScreen = document.createElement('div')
    gameScreen.classList.add('game_playscreen')
    container.appendChild(gameScreen)
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
    const gameFieldCard = document.querySelectorAll('.game_field-card')
    const result = document.querySelector('.result')

    function flipForFiveSecond(callback) {
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

    flipForFiveSecond(winFunc)

    function flipCard() {
        if (lockBoard) return
        if (this === firstCard) return
        this.classList.add('flip')

        if (!hasFlippedCard) {
            hasFlippedCard = true
            firstCard = this
            return
        }
        secondCard = this
        // hasFlippedCard = false

        checkForMatch()
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.game === secondCard.dataset.game
        isMatch ? disableCards() : unflipCards()
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
        resetBoard()
    }

    function unflipCards() {
        lockBoard = true
        window.application.status = 'Loose'
        console.log('going to the loose screen')
        const result = document.querySelector('.result')
        window.application.screens.looseScreen(result)
        // setTimeout(() => {
        //     firstCard.classList.remove('flip')
        //     secondCard.classList.remove('flip')
        //     resetBoard()
        // }, 1500)
    }

    function resetBoard() {
        ;[hasFlippedCard, lockBoard] = [false, false]
        ;[firstCard, secondCard] = [null, null]
    }

    ;(function shuffle() {
        gameFieldCard.forEach((card) => {
            let ramdomPos = Math.floor(Math.random() * 18)
            card.style.order = ramdomPos
        })
    })()

    // flipForFiveSecond()

    gameFieldCard.forEach((card) => card.addEventListener('click', flipCard))

    let hasFlippedCard = false
    let lockBoard = false
    let firstCard, secondCard

    const timerMin = document.querySelector('.game_timer-minnum')
    const timerSek = document.querySelector('.game_timer-seknum')
    const timerButton = document.querySelector('.game_lvl-btn')
    let timer = 0
    let secs = 0
    let now = 0
    let min = 0
    function time() {
        secs = Math.floor((Date.now() - now) / 1000)
        if (min.length !== 2 && min < 10) {
            min = '0' + min
        }
        if (secs === 60) {
            now = Date.now()
            min++
            if (min < 10) {
                console.log(min)
                min = '0' + min
            }
        }
        if (secs < 10) {
            secs = '0' + secs
        }
        timerMin.innerHTML = min
        timerSek.innerHTML = secs
        window.application.timers = min + '.' + secs
        // if (window.application.timers === '03.00') {
        //     window.application.status = 'Loose'
        //     console.log('going to the loose screen')
        // }
    }

    let timeGo = function () {
        now = Date.now()
        min = 0
        timer = setInterval(time)
    }
    // timeGo()

    timerButton.addEventListener('click', () => {
        let gameWindow = document.querySelector('.game')
        window.application.timers = min + '.' + secs
        timer = clearInterval(time)
        now = Date.now()
        min = 0
        timer = setInterval(time)
        clearInterval(window.application.timerWin.timeout)
        window.application.screens.screenGame(gameWindow)
    })
}

// window.application.screens['screenGame'] = renderLvlScreen

// const allCardsArray = document.querySelectorAll('.game_field-card')
// const checkForWin = setInterval(winFunc(), 1000)
// const checkForWin = () => {
//     setInterval(() => {
//         // debugger
//         // if (document.querySelector('.game_field')) {
//         //     let allCardsArray = document.querySelectorAll('.game_field-card')
//         //     let howMuch = allCardsArray.length
//         //     let howNow = 0
//         //     allCardsArray.forEach((element) => {
//         //         if (element.classList.contains('flip')) {
//         //             howNow++
//         //         }
//         //     })
//         //     if (howMuch === howNow) {
//         //         window.application.status = 'Win'
//         //         console.log('go to win page')
//         //     }
//         // }
//     }, 1000)
// }

function winFunc() {
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
            console.log('go to win page')
            // clearInterval(callback)
            const result = document.querySelector('.result')
            window.application.screens.winScreen(result)
            clearInterval(window.application.timerWin.timeout)
        }
    }
}

// setInterval(() => {
//     // debugger
//     if (document.querySelector('.game_field')) {
//         let allCardsArray = document.querySelectorAll('.game_field-card')
//         let howMuch = allCardsArray.length
//         let howNow = 0
//         allCardsArray.forEach((element) => {
//             if (element.classList.contains('flip')) {
//                 howNow++
//             }
//         })
//         if (howMuch === howNow) {
//             window.application.status = 'Win'
//             console.log('go to win page')
//         }
//     }
// }, 1000)

// function flipCardsForFiveSec() {
//     return new Promise(() => {
//         // function flipForFiveSecond() {
//         gameFieldCard.forEach((element) => {
//             element.classList.add('flip')
//         })
//         setTimeout(() => {
//             gameFieldCard.forEach((element) => {
//                 element.classList.remove('flip')
//             })
//         }, 5000)
//         console.log('Пользователи отрендерены')
//         // }
//         // setTimeout( ()=> {
//         //     console.log( 'Пользователи отрендерены' );
//         // resolve('рузультирующее значение, которое передано дальше')
//         // }, 3000 );
//     })
// }

// if (document.querySelector('.game_field')) {
//     flipCardsForFiveSec().then(
//         setInterval(() => {
//             // debugger
//             if (document.querySelector('.game_field')) {
//                 let allCardsArray =
//                     document.querySelectorAll('.game_field-card')
//                 let howMuch = allCardsArray.length
//                 let howNow = 0
//                 allCardsArray.forEach((element) => {
//                     if (element.classList.contains('flip')) {
//                         howNow++
//                     }
//                 })
//                 if (howMuch === howNow) {
//                     window.application.status = 'Win'
//                     console.log('go to win page')
//                 }
//             }
//         }, 1000)
//     )
// }
