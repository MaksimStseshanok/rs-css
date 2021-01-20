export const onReset = () => {
  const button = document.createElement('button')
  button.textContent = 'Reset levels and start again'
  button.classList.add('reset')

  button.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.removeItem('game')
    window.location.reload()
  })
  return button
}