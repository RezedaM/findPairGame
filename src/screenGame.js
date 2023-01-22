let card = {
    img: './cards/cardBack.jpg',
}
let cards = [
    {
        img: './cards/one.jpeg',
    },
    {
        img: './cards/2.jpeg',
    },
    {
        img: './cards/3.jpeg',
    },
    {
        img: './cards/4.jpeg',
    },
    {
        img: './cards/5.jpeg',
    },
    {
        img: './cards/6.jpeg',
    },
    {
        img: './cards/7.jpeg',
    },
    {
        img: './cards/8.jpeg',
    },
    {
        img: './cards/9.jpeg',
    },
]
function cardBackTemplate(bloc) {
    return {
        tag: 'div',
        cls: 'game_field-cardback',
        content: [
            {
                tag: 'img',
                cls: 'game_field-cardimg',
                attrs: {
                    src: bloc.img,
                },
            },
        ],
    }
}
function renderLvlScreen(container) {
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
    gameHeaderButton.textContent = 'Начать завново'
    for (let i = 0; i < 4; i++) {
        gameField.appendChild(templateEngine(cards.map(cardBackTemplate)))
    }
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
        // if (min < 10) {
        //     console.log(min)
        //     min = '0' + min
        // }
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
    }

    let timeGo = function () {
        now = Date.now()
        min = 0
        timer = setInterval(time)
    }
    timeGo()

    timerButton.addEventListener('click', () => {
        timer = clearInterval(time)
        now = Date.now()
        min = 0
        timer = setInterval(time)
    })
}

window.application.screens['screenGame'] = renderLvlScreen
