export const moveWrong = (imgArr) => {
  const overlay = document.querySelector('.overlay')
  overlay.classList.add('overlay-active')
  setTimeout(() => overlay.classList.remove('overlay-active'), 1800)
}