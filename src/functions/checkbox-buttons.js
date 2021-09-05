const buttons = document.getElementsByClassName("checkbox-button")

for (let button of buttons) {
  button.onclick = function () {
    button.classList.toggle("checkbox-button__active")
  }
}
