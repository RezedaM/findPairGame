require('dotenv').config()
import type { Config } from 'jest'
import { defaults } from 'jest-config'

// const config: Config = {
//     moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
// }

// export default config
const {
    beforeEach,
    afterEach,
    describe,
    it,
    expect,
    jest,
    test,
} = require('@jest/globals')

const { winScreen } = require('./winScreen')

// function getExampleDom() {
//     const div = document.createElement('div')
//     div.innerHTML = `
//         <div class="game_sections">
//             <section class="game"></section>
//             <section class="result"></section>
//         </div>
//     `
// }

describe('winScreen', () => {
    let container: HTMLElement | null
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="game"></div>
    `

    beforeEach(() => {
        container = document.createElement('div')
        div.appendChild(container)
    })

    afterEach(() => {
        div.removeChild(container!)
        container = null
    })

    test('displays the correct content', () => {
        winScreen(container)

        expect(container).toContainHTML('<div class="result_field">')
        expect(container).toContainHTML('<div class="result_frame">')
        expect(container).toContainHTML('<div class="result_frame-win">')
        expect(container).toContainHTML(
            '<img class="result_frame-img" src="./cards/paimonhappy.png">'
        )
        expect(container).toContainHTML(
            '<h4 class="result_frame-youwin">Вы выиграли!</h4>'
        )
        expect(container).toContainHTML('<div class="result_frame-time">')
        expect(container).toContainHTML(
            '<h5 class="result_frame-timetxt">Затраченное время:</h5>'
        )
        expect(container).toContainHTML('<h3 class="result_frame-timenum">')
        expect(container).toContainHTML(
            '<button class="result_frame-btn">Играть снова</button>'
        )
    })
})
