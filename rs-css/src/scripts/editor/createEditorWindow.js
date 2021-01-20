import { createField } from '../createPage/createField'

export function createEditorWindow(block) {
  const editorWindow = document.createElement('div')
  const strings = document.createElement('div')

  for (let index = 1; index <= 10; index++) {
    const stringsNumber = document.createElement('div')
    stringsNumber.textContent = index
    stringsNumber.classList.add('strings__number')
    strings.append(stringsNumber)
  }

  editorWindow.classList.add('editor__window')
  strings.classList.add('strings')
  editorWindow.append(strings, createField(block))
  return editorWindow
}