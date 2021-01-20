import { onPlay } from './play/playGame'
import { saveCurrentLevel } from './saveCurrentLevel'

export const changeLevel = (index) => {
  const levels = document.querySelectorAll('.levels__number')
  saveCurrentLevel(index - 1)
  levels.forEach(element => {
    element.classList.remove('current-level')
  });
  // onPlay(index)
  window.location.reload()
}