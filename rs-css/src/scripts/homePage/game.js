import { gameEditor } from '../editor/gameEditor';

const game = document.createElement('div')
const gameTable = document.createElement('div')
const gameTableSelect = document.createElement('h2')
const gameTableBox = document.createElement('div')

game.classList.add('game')
gameTable.classList.add('game__table')
gameTableSelect.classList.add('game__table__title')
gameTableBox.classList.add('game__table__box')

gameTable.append(gameTableSelect, gameTableBox)
game.append(gameTable, gameEditor)

export { game, gameTableBox }

