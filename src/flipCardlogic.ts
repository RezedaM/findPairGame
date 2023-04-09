import { time } from './time'
let hasFlippedCard = false
let lockBoard = false
let firstCard: HTMLElement | null, secondCard: HTMLElement | null
const gameFieldCard = document.querySelectorAll('.game_field-card')

export function flipCard(this: HTMLElement) {
    if (lockBoard) return
    if (this === firstCard) return
    this.classList.add('flip')

    if (!hasFlippedCard) {
        hasFlippedCard = true
        firstCard = this
        return
    }
    secondCard = this
    checkForMatch()
}

export function checkForMatch() {
    let isMatch = firstCard!.dataset.game === secondCard!.dataset.game
    isMatch ? disableCards() : unflipCards()
}

export function disableCards() {
    firstCard!.removeEventListener('click', flipCard)
    secondCard!.removeEventListener('click', flipCard)
    resetBoard()
}

export function unflipCards() {
    lockBoard = true
    window.application.status = 'Loose'
    window.application.lvl = []
    window.application.timerTest.timerId = 0
    const gameFieldCard = document.querySelectorAll('.game_field-card')
    gameFieldCard.forEach((card) => card.removeEventListener('click', flipCard))
    console.log('going to the loose screen')
    const result = document.querySelector('.result')
    window.application.screens.looseScreen(result)
}

export function resetBoard() {
    ;[hasFlippedCard, lockBoard] = [false, false]
    ;[firstCard, secondCard] = [null, null]
}

export function shuffle() {
    const gameFieldCard = document.querySelectorAll('.game_field-card')

    gameFieldCard.forEach((card: any) => {
        let ramdomPos: number = Math.floor(Math.random() * 18)
        card.style.order = ramdomPos
    })
}
