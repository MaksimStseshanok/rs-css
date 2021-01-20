import { levels } from '../levels/levels'
import { changeLevel } from '../changeLevel'
import { onReset } from '../resetLevel'

export const createLevels = () => {
  const level = document.createElement('div')
  const levelWrapper = document.createElement('div')
  const levelsTitle = document.createElement('h2')
  const levelNumbers = []

  for (let i = 0; i < levels.length; i++) {
    const div = document.createElement('div')
    const number = document.createElement('p')
    const levelText = document.createElement('span')
    number.innerHTML = `<b>${i + 1}:</b> `
    levelText.textContent = levels[i].doThis
    div.append(number, levelText)
    div.classList.add('levels__number')
    levelNumbers.push(div)

    levelNumbers[i].addEventListener('click', () => {
      changeLevel(i)
    })
  }

  level.classList.add('levels')
  levelsTitle.classList.add('levels__title')

  levelsTitle.textContent = 'Levels'

  levelWrapper.append(levelsTitle, ...levelNumbers,)
  level.append(levelWrapper, onReset())

  return level
}