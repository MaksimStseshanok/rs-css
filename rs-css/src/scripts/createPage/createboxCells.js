import { levels } from '../levels/levels'

export const createboxCells = (gameTableBox, level) => {
  const arrImg = levels[level].img
  const selector = levels[level].selector
  const overlay = document.createElement('div')
  const overlayContent = document.createElement('h2')

  overlay.classList.add('overlay')
  overlayContent.classList.add('overlay__content')

  overlayContent.textContent = 'YOU WRONG! Try again'

  arrImg.forEach((elem, index) => {
    const div = document.createElement('div')
    const divModal = document.createElement('div')
    const img = document.createElement('img')
    img.src = elem
    if (selector.includes(index)) {
      img.classList.add('active')
      div.classList.add('box__cell__move')
    }
    div.classList.add('box__cell')
    divModal.classList.add('box__cell__modal')
    img.classList.add('box__cell__img')
    div.append(divModal, img)
    gameTableBox.append(div)
  })

  gameTableBox.append(overlay, overlayContent)
}