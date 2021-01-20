export const move = (imgArr) => {
  for (let i = 0; i < imgArr.length; i++) {
    setTimeout(function timer() {
      imgArr[i].classList.add('box__cell__move-active')
    }, i * 1000)
    if (i === imgArr.length - 1) {
      setTimeout(() => window.location.reload(), 1000 * (i + 2))
    }
  }
}
