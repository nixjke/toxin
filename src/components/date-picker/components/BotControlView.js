import { getHtmlElement } from '../utils/'
import calendarClassName from '../utils/calendarClassName'

class BotControlView {
  static getHtmlNode = () => {
    const { control, button, buttonAccent, jsButtonClear, jsButtonAccept } = calendarClassName
    const datePickerHtmlControl = getHtmlElement('div', control)
    const datePickerButtons = [
      { text: 'Очистить', classForJs: jsButtonClear },
      { text: 'Применить', isAccent: true, classForJs: jsButtonAccept },
    ]

    datePickerButtons.forEach(item => {
      const { text, isAccent, classForJs } = item
      const btn = getHtmlElement('button', button, text)
      btn.type = 'button'

      if (isAccent) {
        btn.classList.add(buttonAccent)
      }

      if (classForJs) {
        btn.classList.add(classForJs)
      }

      datePickerHtmlControl.appendChild(btn)
    })

    return datePickerHtmlControl
  }
}

export default BotControlView
