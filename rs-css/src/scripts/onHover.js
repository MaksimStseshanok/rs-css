export const onHover = () => {
  const imgArr = document.querySelectorAll('.box__cell__img')
  const codeArr = document.querySelectorAll('pre')
  const imgModal = document.querySelectorAll('.box__cell__modal')

  imgArr.forEach((img, index) => {
    img.onmouseenter = function () {
      codeArr[index].classList.add('code')
      imgModal[index].textContent = codeArr[index].textContent
      imgModal[index].classList.add('box__cell__modal-active')
    }
  })

  imgArr.forEach((img, index) => {
    img.onmouseout = function () {
      codeArr[index].classList.remove('code')
      imgModal[index].classList.remove('box__cell__modal-active')
    }
  })

  codeArr.forEach((text, index) => {
    text.onmouseenter = function () {
      codeArr[index].classList.add('code')
      imgModal[index].textContent = codeArr[index].textContent
      imgModal[index].classList.add('box__cell__modal-active')
    }
  })

  codeArr.forEach((text, index) => {
    text.onmouseout = function () {
      codeArr[index].classList.remove('code')
      imgModal[index].classList.remove('box__cell__modal-active')
    }
  })
}