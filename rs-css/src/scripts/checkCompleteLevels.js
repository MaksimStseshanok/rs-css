// import { createLevels } from '../createPage/createLevels'
export const checkCompleteLevels = (completeLevel) => {
  const levelNumbers = document.querySelectorAll('.levels__number')
  if (completeLevel) {
    levelNumbers.forEach((level, number) => {
      if (completeLevel.includes(number))
        level.style.textDecoration = "line-through"
    })
  }
}