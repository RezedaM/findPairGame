export function winScreen(container) {
    container.style.zIndex = '2'
    const winBlock = document.createElement('div')
    container.appendChild(winBlock)
    winBlock.classList.add('result_field')

    const resultFrame = document.createElement('div')
    winBlock.appendChild(resultFrame)
    resultFrame.classList.add('result_frame')

    const resultFrameWin = document.createElement('div')
    resultFrame.appendChild(resultFrameWin)
    resultFrameWin.classList.add('result_frame-win')

    const resultFrameWinImg = document.createElement('img')
    resultFrameWin.appendChild(resultFrameWinImg)
    resultFrameWinImg.classList.add('result_frame-img')
    resultFrameWinImg.src = './cards/paimonhappy.png'

    const resultFrameYouWin = document.createElement('h4')
    resultFrameWin.appendChild(resultFrameYouWin)
    resultFrameYouWin.classList.add('result_frame-youwin')
    resultFrameYouWin.textContent = 'Вы выиграли!'

    const resultFrameTime = document.createElement('div')
    resultFrame.appendChild(resultFrameTime)
    resultFrameTime.classList.add('result_frame-time')

    const resultFrameTimeTxt = document.createElement('h5')
    resultFrameTime.appendChild(resultFrameTimeTxt)
    resultFrameTimeTxt.classList.add('result_frame-timetxt')
    resultFrameTimeTxt.textContent = 'Затраченное время:'

    const resultFrameTimeNum = document.createElement('h3')
    resultFrameTime.appendChild(resultFrameTimeNum)
    resultFrameTimeNum.classList.add('result_frame-timenum')
    resultFrameTimeNum.textContent = window.application.timers

    const resultFrameBtn = document.createElement('button')
    resultFrame.appendChild(resultFrameBtn)
    resultFrameBtn.classList.add('result_frame-btn')
    resultFrameBtn.textContent = 'Играть снова'

    resultFrameBtn.addEventListener('click', () => {
        const result = document.querySelector('.result')
        result.innerHTML = ''
        window.application.screens.mainScreen(gameWindow)
    })
}

window.application.screens['winScreen'] = winScreen
