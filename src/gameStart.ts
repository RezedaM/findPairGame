// const gameWindow = document.querySelector('.game')
export function gameStart() {
    const gameWindow = document.querySelector('.game')
    window.application.screens.mainScreen(gameWindow)

    const form: HTMLFormElement | null = document.querySelector('.game_lvl')
    const inputs = document.querySelectorAll('.game_lvl-input')

    form!.addEventListener('submit', (event) => {
        event.preventDefault()

        let goToLvl = form!.elements['lvl'].value
        console.log(form!.elements['lvl'].value)
        window.application.lvl = goToLvl
        goToLvl === ''
            ? console.log('choose the lvl!')
            : window.application.screens.screenGame(gameWindow)
    })
}

// window.application.screens['gameStart'] = gameStart
