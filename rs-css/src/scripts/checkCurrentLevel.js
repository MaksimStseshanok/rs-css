import { onPlay } from './play/playGame'
import { levels } from './levels/levels'
import { checkCompleteLevels } from './checkCompleteLevels'

export const checkCurrentLevel = () => {
  const game = JSON.parse(localStorage.getItem("game"))
  let currentLevel
  let completeLevel
  if (!game) {
    currentLevel = 0
  } else {
    currentLevel = game.level
    completeLevel = game.complete
  }

  levels.length === currentLevel ? alert('Game complete!') :
    onPlay(currentLevel, completeLevel), checkCompleteLevels(completeLevel)
}