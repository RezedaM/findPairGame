const timerMin = document.querySelector('.game_timer-minnum')
const timerSek = document.querySelector('.game_timer-seknum')
const timerButton = document.querySelector('.game_lvl-btn')
let timer: number = 0 // : NodeJS.Timeout
let secs = 0
let now = 0
let min = 0
export function time() {
    secs = Math.floor((Date.now() - now) / 1000)
    if (String(min).length !== 2 && min < 10) {
        (min as unknown as string) = '0' + min
    }
    if (secs === 60) {
        now = Date.now()
        min = min + 1
        if (min < 10) {
            // console.log(min)
            ;(min as unknown as string) = '0' + min
        }
    }
    if (secs < 10) {
        (secs as unknown as string) = '0' + secs
    }
    // timerMin!.innerHTML = String(min)
    // timerSek!.innerHTML = String(secs)
    // window.application.timers = min + '.' + secs
    // if (window.application.timers === '03.00') {
    //     window.application.status = 'Loose'
    //     console.log('going to the loose screen')
    // }
}