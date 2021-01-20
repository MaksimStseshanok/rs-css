export const createField = (block) => {
  const field = document.createElement('div')
  field.classList.add('field')

  if (block === 'css') {
    const fieldContent = document.createElement('form')
    const fieldComment = document.createElement('div')
    const input = document.createElement('input')
    const button = document.createElement('button')

    fieldContent.classList.add('field__content')
    fieldComment.classList.add('field__comments')
    input.type = "text"
    input.placeholder = "Type in a CSS selector"
    input.classList.add('blink')
    button.textContent = 'Enter'
    button.classList.add('button')

    fieldComment.innerHTML = `
    <div>
            {<br>
            /* Styles would go here. */<br>
            }
            </div>
    `

    fieldContent.append(input, button)
    field.append(fieldContent, fieldComment)

    input.onfocus = function () {
      input.classList.toggle('blink')
    };
    input.onblur = function () {
      input.classList.toggle('blink')
    };


  } else if (block === 'html') {
    const fieldTextTop = document.createElement('div')
    const fieldTextBottom = document.createElement('div')
    const fieldCode = document.createElement('div')
    fieldTextTop.classList.add('field__text')
    fieldTextBottom.classList.add('field__text')
    fieldCode.classList.add('code__block')

    fieldTextTop.innerText = '<div class="garage">'
    fieldTextBottom.innerText = '</div>'

    field.append(fieldTextTop, fieldCode, fieldTextBottom)
  }

  return field
}