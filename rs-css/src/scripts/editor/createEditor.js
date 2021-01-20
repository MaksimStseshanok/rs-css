import { createEditorWindow } from "./createEditorWindow";

export function createEditor(title, subtitle, cssClass) {
  const editor = document.createElement('div')
  const editorHeader = document.createElement('div')
  const editorHeaderTitle = document.createElement('h3')
  const editorHeaderSubtitle = document.createElement('h3')

  editor.classList.add('editor')
  editorHeader.classList.add('editor__header')
  editorHeaderTitle.classList.add('editor__header__title')
  editorHeaderSubtitle.classList.add('editor__header__subtitle')

  editor.classList.add(cssClass)
  editorHeaderTitle.textContent = title
  editorHeaderSubtitle.textContent = subtitle
  editorHeader.append(editorHeaderTitle, editorHeaderSubtitle)
  editor.append(editorHeader, createEditorWindow(cssClass))

  return editor
}