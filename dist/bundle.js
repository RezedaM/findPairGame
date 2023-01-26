;(() => {
    var e = {
            590: () => {
                window.application.screens.mainScreen(gameWindow)
                const e = document.querySelector('.game_lvl')
                document.querySelectorAll('.game_lvl-input'),
                    e.addEventListener('submit', (t) => {
                        t.preventDefault()
                        let n = e.elements.lvl.value
                        console.log(e.elements.lvl.value),
                            (window.application.lvl = n),
                            '' === n
                                ? console.log('choose the lvl!')
                                : window.application.screens.screenGame(
                                      gameWindow
                                  )
                    })
            },
            129: () => {
                window.application.screens.looseScreen = function (e) {
                    e.style.zIndex = '2'
                    const t = document.createElement('div')
                    e.appendChild(t), t.classList.add('result_field')
                    const n = document.createElement('div')
                    t.appendChild(n), n.classList.add('result_frame')
                    const a = document.createElement('div')
                    n.appendChild(a), a.classList.add('result_frame-loose')
                    const l = document.createElement('img')
                    a.appendChild(l),
                        l.classList.add('result_frame-img'),
                        (l.src = './cards/paimonangry.png')
                    const i = document.createElement('h4')
                    a.appendChild(i),
                        i.classList.add('result_frame-youloose'),
                        (i.textContent = 'Вы проиграли!')
                    const d = document.createElement('div')
                    n.appendChild(d), d.classList.add('result_frame-time')
                    const c = document.createElement('h5')
                    d.appendChild(c),
                        c.classList.add('result_frame-timetxt'),
                        (c.textContent = 'Затраченное время:')
                    const s = document.createElement('h3')
                    d.appendChild(s),
                        c.classList.add('result_frame-timenum'),
                        (c.textContent = window.application.timers)
                    const o = document.createElement('button')
                    n.appendChild(o),
                        o.classList.add('result_frame-btn'),
                        (o.textContent = 'Играть снова'),
                        o.addEventListener('click', () => {
                            ;(document.querySelector('.result').innerHTML = ''),
                                window.application.screens.mainScreen(
                                    gameWindow
                                )
                        })
                }
            },
            252: () => {
                let e = {
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
                                            attrs: { for: 1 },
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
                                            attrs: { for: 2 },
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
                                            attrs: { for: 3 },
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
                window.application.screens.mainScreen = function (t) {
                    ;(t.innerHTML = ''),
                        (document.querySelector('.result').style.zIndex = '-1'),
                        t.appendChild(templateEngine(e))
                }
            },
            676: () => {
                let e = { img: './cards/cardBack.jpg', data: 'back' },
                    t = [
                        { img: './cards/one.jpg', data: 'one' },
                        { img: './cards/2.jpg', data: 'two' },
                        { img: './cards/3.jpg', data: 'three' },
                    ],
                    n = [
                        { img: './cards/one.jpg', data: 'one' },
                        { img: './cards/2.jpg', data: 'two' },
                        { img: './cards/3.jpg', data: 'three' },
                        { img: './cards/4.jpg', data: 'four' },
                        { img: './cards/5.jpg', data: 'five' },
                        { img: './cards/6.jpg', data: 'six' },
                    ],
                    a = [
                        { img: './cards/one.jpg', data: 'one' },
                        { img: './cards/2.jpg', data: 'two' },
                        { img: './cards/3.jpg', data: 'three' },
                        { img: './cards/4.jpg', data: 'four' },
                        { img: './cards/5.jpg', data: 'five' },
                        { img: './cards/6.jpg', data: 'six' },
                        { img: './cards/7.jpg', data: 'seven' },
                        { img: './cards/8.jpg', data: 'eight' },
                        { img: './cards/9.jpg', data: 'nine' },
                    ]
                function l(e) {
                    return {
                        tag: 'div',
                        cls: 'game_field-card',
                        attrs: { 'data-game': e.data },
                        content: [
                            {
                                tag: 'img',
                                cls: 'game_field-cardfront',
                                attrs: { src: e.img },
                            },
                        ],
                    }
                }
                function i(e) {
                    return {
                        tag: 'img',
                        cls: 'game_field-cardback',
                        attrs: { src: e.img },
                    }
                }
                function d() {
                    if (document.querySelector('.game_field')) {
                        let e = document.querySelectorAll('.game_field-card'),
                            t = e.length,
                            n = 0
                        if (
                            (e.forEach((e) => {
                                e.classList.contains('flip') && n++
                            }),
                            t === n)
                        ) {
                            ;(window.application.status = 'Win'),
                                console.log('go to win page')
                            const e = document.querySelector('.result')
                            window.application.screens.winScreen(e),
                                clearInterval(
                                    window.application.timerWin.timeout
                                )
                        }
                    }
                }
                window.application.screens.screenGame = function (c) {
                    c.innerHTML = ''
                    const s = document.createElement('div')
                    s.classList.add('game_playscreen'), c.appendChild(s)
                    const o = document.createElement('div')
                    o.classList.add('game_header'), s.appendChild(o)
                    const r = document.createElement('div')
                    r.classList.add('game_field'), s.appendChild(r)
                    const m = document.createElement('div')
                    m.classList.add('game_timer'), o.appendChild(m)
                    const p = document.createElement('div')
                    p.classList.add('game_timer-min'), m.appendChild(p)
                    const u = document.createElement('div')
                    u.classList.add('game_timer-text'),
                        p.appendChild(u),
                        (u.textContent = 'min')
                    const g = document.createElement('div')
                    g.classList.add('game_timer-minnum'),
                        p.appendChild(g),
                        (g.textContent = '00')
                    const v = document.createElement('div')
                    v.classList.add('game_timer-comma'),
                        m.appendChild(v),
                        (v.textContent = '.')
                    const f = document.createElement('div')
                    f.classList.add('game_timer-sek'), m.appendChild(f)
                    const h = document.createElement('div')
                    h.classList.add('game_timer-text'),
                        f.appendChild(h),
                        (h.textContent = 'sek')
                    const w = document.createElement('div')
                    w.classList.add('game_timer-seknum'),
                        f.appendChild(w),
                        (w.textContent = '00')
                    const _ = document.createElement('button')
                    if (
                        (_.classList.add('game_lvl-btn'),
                        o.appendChild(_),
                        (_.textContent = 'Начать заново'),
                        '1' === window.application.lvl)
                    ) {
                        for (let e = 0; e < 2; e++)
                            r.appendChild(templateEngine(t.map(l)))
                        document
                            .querySelectorAll('.game_field-card')
                            .forEach((t) => {
                                t.appendChild(templateEngine(i(e)))
                            })
                    } else if ('2' === window.application.lvl) {
                        for (let e = 0; e < 2; e++)
                            r.appendChild(templateEngine(n.map(l)))
                        document
                            .querySelectorAll('.game_field-card')
                            .forEach((t) => {
                                t.appendChild(templateEngine(i(e)))
                            })
                    } else {
                        for (let e = 0; e < 2; e++)
                            r.appendChild(templateEngine(a.map(l)))
                        document
                            .querySelectorAll('.game_field-card')
                            .forEach((t) => {
                                t.appendChild(templateEngine(i(e)))
                            })
                    }
                    const E = document.querySelectorAll('.game_field-card')
                    var C
                    function L() {
                        if (!b && this !== y) {
                            if ((this.classList.add('flip'), !S))
                                return (S = !0), void (y = this)
                            ;(x = this),
                                y.dataset.game === x.dataset.game
                                    ? (y.removeEventListener('click', L),
                                      x.removeEventListener('click', L),
                                      ([S, b] = [!1, !1]),
                                      ([y, x] = [null, null]))
                                    : (function () {
                                          ;(b = !0),
                                              (window.application.status =
                                                  'Loose'),
                                              console.log(
                                                  'going to the loose screen'
                                              )
                                          const e =
                                              document.querySelector('.result')
                                          window.application.screens.looseScreen(
                                              e
                                          )
                                      })()
                        }
                    }
                    document.querySelector('.result'),
                        (C = d),
                        E.forEach((e) => {
                            e.classList.add('flip')
                        }),
                        setTimeout(() => {
                            E.forEach((e) => {
                                e.classList.remove('flip')
                            })
                            let e = setInterval(C, 1e3)
                            ;(window.application.timerWin.timeout = e), A()
                        }, 5e3),
                        E.forEach((e) => {
                            let t = Math.floor(18 * Math.random())
                            e.style.order = t
                        }),
                        E.forEach((e) => e.addEventListener('click', L))
                    let y,
                        x,
                        S = !1,
                        b = !1
                    const j = document.querySelector('.game_timer-minnum'),
                        q = document.querySelector('.game_timer-seknum'),
                        k = document.querySelector('.game_lvl-btn')
                    let M = 0,
                        I = 0,
                        W = 0,
                        T = 0
                    function H() {
                        ;(I = Math.floor((Date.now() - W) / 1e3)),
                            2 !== T.length && T < 10 && (T = '0' + T),
                            60 === I &&
                                ((W = Date.now()),
                                T++,
                                T < 10 && (console.log(T), (T = '0' + T))),
                            I < 10 && (I = '0' + I),
                            (j.innerHTML = T),
                            (q.innerHTML = I),
                            (window.application.timers = T + '.' + I)
                    }
                    let A = function () {
                        ;(W = Date.now()), (T = 0), (M = setInterval(H))
                    }
                    k.addEventListener('click', () => {
                        ;(window.application.timers = T + '.' + I),
                            (M = clearInterval(H)),
                            (W = Date.now()),
                            (T = 0),
                            (M = setInterval(H)),
                            clearInterval(window.application.timerWin.timeout),
                            window.application.screens.screenGame(gameWindow)
                    })
                }
            },
            241: () => {
                window.application.screens.winScreen = function (e) {
                    e.style.zIndex = '2'
                    const t = document.createElement('div')
                    e.appendChild(t), t.classList.add('result_field')
                    const n = document.createElement('div')
                    t.appendChild(n), n.classList.add('result_frame')
                    const a = document.createElement('div')
                    n.appendChild(a), a.classList.add('result_frame-win')
                    const l = document.createElement('img')
                    a.appendChild(l),
                        l.classList.add('result_frame-img'),
                        (l.src = './cards/paimonhappy.png')
                    const i = document.createElement('h4')
                    a.appendChild(i),
                        i.classList.add('result_frame-youwin'),
                        (i.textContent = 'Вы выиграли!')
                    const d = document.createElement('div')
                    n.appendChild(d), d.classList.add('result_frame-time')
                    const c = document.createElement('h5')
                    d.appendChild(c),
                        c.classList.add('result_frame-timetxt'),
                        (c.textContent = 'Затраченное время:')
                    const s = document.createElement('h3')
                    d.appendChild(s),
                        s.classList.add('result_frame-timenum'),
                        (s.textContent = window.application.timers)
                    const o = document.createElement('button')
                    n.appendChild(o),
                        o.classList.add('result_frame-btn'),
                        (o.textContent = 'Играть снова'),
                        o.addEventListener('click', () => {
                            ;(document.querySelector('.result').innerHTML = ''),
                                window.application.screens.mainScreen(
                                    gameWindow
                                )
                        })
                }
            },
        },
        t = {}
    function n(a) {
        var l = t[a]
        if (void 0 !== l) return l.exports
        var i = (t[a] = { exports: {} })
        return e[a](i, i.exports, n), i.exports
    }
    ;(n.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e
        return n.d(t, { a: t }), t
    }),
        (n.d = (e, t) => {
            for (var a in t)
                n.o(t, a) &&
                    !n.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] })
        }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            'use strict'
            n(252), n(676), n(241), n(590), n(129)
            const e = document.querySelector('.game')
            window.application = {
                status: {},
                screens: {},
                lvl: [],
                renderScreen: function (t) {
                    window.application.timers.forEach((e) => {
                        clearInterval(e)
                    }),
                        window.application.screens[t]
                            ? ((e.innerHTML = ''), this.screens[t])
                            : console.warn('Такой страницы нет')
                },
                timers: [],
                timerWin: [],
            }
        })()
})()
