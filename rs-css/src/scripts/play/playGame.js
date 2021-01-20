import { levels } from '../levels/levels'
import { createboxCells } from '../createPage/createboxCells'
import { gameTableBox } from '../homePage/game'
import { onHover } from '../onHover'
import { checkInput } from '../checkInput'
import { clear } from '../clear'

export const onPlay = (level) => {
  clear()
  createboxCells(gameTableBox, level)
  const levelTitle = document.querySelector('.game__table__title')
  const levelCodeField = document.querySelector('.code__block')
  const levelCode = levels[level].boardMarkup
  const currentLevel = document.querySelectorAll('.levels__number')

  currentLevel[level].classList.add('current-level')

  levelTitle.textContent = levels[level].doThis



  levelCode.forEach((code) => {
    const strCode = document.createElement('p')
    strCode.innerHTML = `<pre>${code}</pre>`
    strCode.classList.add('field__code')
    levelCodeField.append(strCode)
  })

  onHover()
  checkInput(level)
}

