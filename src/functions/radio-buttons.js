const radioButtons = document.getElementsByClassName("form__radio-button")

radioButtons[0].onclick = function () {
  radioButtons[0].classList.add("form__radio-button-active")
  radioButtons[1].classList.remove("form__radio-button-active")

}
radioButtons[1].onclick = function () {
  radioButtons[1].classList.add("form__radio-button-active")
  radioButtons[0].classList.remove("form__radio-button-active")
}