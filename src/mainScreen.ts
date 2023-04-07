import { templateEngine } from './template-engine'
interface Template {
    tag: String
    cls: String
    attrs: {
        type: String
        id: Number
        value: Number
        name: String
        for: Number
    }
    content: []
}
let template = {
    tag: 'form',
    cls: 'game_lvl',
    content: [
        {
            tag: 'h4',
            cls: 'game_lvl-title',
            content: 'Выберите сложность',
        },
        {
            tag: 'div',
            cls: 'game_lvl-dif',
            content: [
                {
                    tag: 'div',
                    cls: 'game_lvl-inputs',
                    content: [
                        {
                            tag: 'label',
                            cls: 'game_lvl-label',
                            attrs: {
                                for: 1,
                            },
                            content: 1,
                        },
                        {
                            tag: 'input',
                            cls: 'game_lvl-input',
                            attrs: {
                                type: 'radio',
                                id: 1,
                                value: 1,
                                name: 'lvl',
                            },
                        },
                    ],
                },
                {
                    tag: 'div',
                    cls: 'game_lvl-inputs',
                    content: [
                        {
                            tag: 'label',
                            cls: 'game_lvl-label',
                            attrs: {
                                for: 2,
                            },
                            content: 2,
                        },
                        {
                            tag: 'input',
                            cls: 'game_lvl-input',
                            attrs: {
                                type: 'radio',
                                id: 2,
                                value: 2,
                                name: 'lvl',
                            },
                        },
                    ],
                },
                {
                    tag: 'div',
                    cls: 'game_lvl-inputs',
                    content: [
                        {
                            tag: 'label',
                            cls: 'game_lvl-label',
                            attrs: {
                                for: 3,
                            },
                            content: 3,
                        },
                        {
                            tag: 'input',
                            cls: 'game_lvl-input',
                            attrs: {
                                type: 'radio',
                                id: 3,
                                value: 3,
                                name: 'lvl',
                            },
                        },
                    ],
                },
            ],
        },
        {
            tag: 'button',
            cls: 'game_lvl-btn',
            content: 'Старт',
        },
    ],
}

export function mainScreen(container: HTMLElement) {
    container.innerHTML = ''
    const result: HTMLElement | null = document.querySelector('.result')
    result!.style.zIndex = '-1'
    container.appendChild(templateEngine(template))
}
