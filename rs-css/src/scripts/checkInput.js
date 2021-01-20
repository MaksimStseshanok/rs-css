import { levels } from "./levels/levels"
import { move } from "./move"
import { moveWrong } from "./moveWrong"
import { saveCurrentLevel } from './saveCurrentLevel'

export const checkInput = (level) => {
  const form = document.querySelector('form')
  const input = document.querySelector('input')
  const imgArr = document.querySelectorAll('.box__cell__move')


  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (input.value === levels[level].input) {
      move(imgArr);
      saveCurrentLevel(level)
    } else {
      input.value = ''
      moveWrong()
    }
  });
}






