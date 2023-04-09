export function countdownGo() {
    const gameCountdown: HTMLElement | null =
        document.querySelector('.countdown')
    let seconds: number = 4

    const countdown = (): void => {
        if (seconds > 0) {
            gameCountdown!.textContent = '⏱ ' + String(seconds) + ' ⏱'
            setTimeout(countdown, 1000)
        } else {
            gameCountdown!.textContent = '🤘GO🤘'
        }
        seconds -= 1
    }

    setTimeout(countdown, 1000)
}
