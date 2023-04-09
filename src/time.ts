const timerMin = document.querySelector('.game_timer-minnum')
const timerSek = document.querySelector('.game_timer-seknum')
const timerButton = document.querySelector('.game_lvl-btn')
let timer: number = 0
let secs = 0
let now = 0
let min = 0
export function time() {
    secs = Math.floor((Date.now() - now) / 1000)
    min = Number(min)
    if (String(min).length !== 2 && min < 10) {
        ;(min as unknown as string) = '0' + min
    }
    if (secs === 60) {
        now = Date.now()
        min = Number(min) + 1
        if (min < 10) {
            // console.log(min)
            ;(min as unknown as string) = '0' + min
        }
    }
    if (secs < 10) {
        ;(secs as unknown as string) = '0' + secs
    }
    const timerMin = document.querySelector('.game_timer-minnum')
    const timerSek = document.querySelector('.game_timer-seknum')

    if (!timerMin) {
        return
    }

    if (
        window.application.status === 'Loose' ||
        window.application.status === 'Win'
    ) {
        return
    }

    const gameFieldCard = document.querySelectorAll('.game_field-card')
    const flipped = document.querySelectorAll('.flip')

    if (flipped.length === gameFieldCard.length) {
        timerMin!.innerHTML = '00'
        timerSek!.innerHTML = '00'
        return
    }
    timerMin!.innerHTML = String(min)
    timerSek!.innerHTML = String(secs)
    window.application.timers = min + '.' + secs
}

export function timeGo() {
    now = Date.now()
    min = 0
    let timer: number = window.setInterval(time)
    window.application.timerTest['timerId'] = timer
}
