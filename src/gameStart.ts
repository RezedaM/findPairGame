export function gameStart() {
    const gameWindow = document.querySelector('.game')
    window.application.screens.mainScreen(gameWindow)

    const form: HTMLFormElement | null = document.querySelector('.game_lvl')
    const inputs = document.querySelectorAll('.game_lvl-input')

    document.getElementById('1')?.addEventListener('change', function () {
        document.querySelector('label[for="1"]')?.classList.remove('changeLvl')
        document.querySelector('label[for="2"]')?.classList.remove('changeLvl')
        document.querySelector('label[for="3"]')?.classList.remove('changeLvl')

        document.querySelector('label[for="1"]')?.classList.add('changeLvl')
    })

    document.getElementById('2')?.addEventListener('change', function () {
        document.querySelector('label[for="1"]')?.classList.remove('changeLvl')
        document.querySelector('label[for="2"]')?.classList.remove('changeLvl')
        document.querySelector('label[for="3"]')?.classList.remove('changeLvl')

        document.querySelector('label[for="2"]')?.classList.add('changeLvl')
    })

    document.getElementById('3')?.addEventListener('change', function () {
        document.querySelector('label[for="1"]')?.classList.remove('changeLvl')
        document.querySelector('label[for="2"]')?.classList.remove('changeLvl')
        document.querySelector('label[for="3"]')?.classList.remove('changeLvl')

        document.querySelector('label[for="3"]')?.classList.add('changeLvl')
    })

    form!.addEventListener('submit', (event) => {
        event.preventDefault()

        let goToLvl = form!.elements['lvl'].value

        window.application.lvl = goToLvl
        goToLvl === ''
            ? console.log('choose the lvl!')
            : window.application.screens.screenGame(gameWindow)
    })
}
