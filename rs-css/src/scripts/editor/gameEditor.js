import { createEditor } from "./createEditor";

const gameEditor = document.createElement('div')
gameEditor.classList.add('game__editor')
gameEditor.append(createEditor('CSS editor', 'style.css', 'css'), createEditor('HTML viewer', 'table.html', 'html'))

export { gameEditor }