function getHtmlElement(tagName, className, text) {
  const element = document.createElement(tagName)

  if (className) {
    className.split(' ').forEach(classItem => {
      element.classList.add(classItem)
    })
  }

  if (text) {
    element.textContent = text
  }

  return element
}

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (+max - +min)) + +min
  return randomNumber
}

// from https://v3c.ru/javascript/sklonenie-okonchanij
function declensionWordEnding(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]
}

export { getHtmlElement, getRandomNumber, declensionWordEnding }
