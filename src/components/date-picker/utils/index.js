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

function getTwoDigitNumberString(number) {
  if (number < 10) {
    return `0${number}`
  }

  return number
}

function compareDate(firstDate, secondDate) {
  const firstDay = firstDate.getDate()
  const firstMonth = firstDate.getMonth()
  const firstYear = firstDate.getFullYear()

  const secondDay = secondDate.getDate()
  const secondMonth = secondDate.getMonth()
  const secondYear = secondDate.getFullYear()

  if (firstYear > secondYear) {
    return 1
  }

  if (firstYear < secondYear) {
    return -1
  }

  if (firstMonth > secondMonth) {
    return 1
  }

  if (firstMonth < secondMonth) {
    return -1
  }

  if (firstDay > secondDay) {
    return 1
  }

  if (firstDay < secondDay) {
    return -1
  }

  return 0
}

export { getHtmlElement, getTwoDigitNumberString, compareDate }
