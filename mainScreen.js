let template =  ({

                tag: 'form',
                cls: 'game_lvl',
                content: [
                    {
                        tag: 'h4',
                        cls: 'game_lvl-title',
                        content: 'Выберите сложность',
                    },{
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
                                    },{
                                        tag: 'input',
                                        cls: 'game_lvl-input',
                                        attrs: {
                                            type: 'radio',
                                            id: 1,
                                        },
                                    },
                                ],
                            }, {
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
                                    },{
                                        tag: 'input',
                                        cls: 'game_lvl-input',
                                        attrs: {
                                            type: 'radio',
                                            id: 2,
                                        },
                                    },
                                ],
                            }, {
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
                                    },{
                                        tag: 'input',
                                        cls: 'game_lvl-input',
                                        attrs: {
                                            type: 'radio',
                                            id: 3,
                                        },
                                    },
                                ],
                            },
                            
                        ],
                    },{
                        tag: 'button',
                        cls: 'game_lvl-btn',
                        content: 'Старт',
                    },
                ],
    });


function mainScreen(container) {
    container.innerHTML = '';
    container.appendChild(
        templateEngine(template)
      );
}

window.application.screens['mainScreen'] = mainScreen;

