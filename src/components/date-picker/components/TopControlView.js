import { getHtmlElement } from '../utils/'
import { monthRusTranslate } from '../utils/constants'
import calendarClassName from '../utils/calendarClassName'

class TopControlView {
  static getHtmlNode = currentDate => {
    const { control, sliderButton, sliderButtonPrev, sliderButtonNext, title } = calendarClassName

    const htmlControl = getHtmlElement('div', control)

    const htmlSliderButtonPrev = getHtmlElement(
      'button',
      `${sliderButton} ${sliderButtonPrev} js-${sliderButtonPrev}`,
      'Назад'
    )

    htmlSliderButtonPrev.type = 'button'

    const htmlSliderBtnNext = getHtmlElement(
      'button',
      `${sliderButton} ${sliderButtonNext} js-${sliderButtonNext}`,
      'Вперед'
    )

    htmlSliderBtnNext.type = 'button'

    const monthName = monthRusTranslate[currentDate.getMonth()]
    const yearName = currentDate.getFullYear()
    const htmlTitle = getHtmlElement('h2', `${title} js-${title}`, `${monthName} ${yearName}`)

    htmlControl.appendChild(htmlSliderButtonPrev)
    htmlControl.appendChild(htmlTitle)
    htmlControl.appendChild(htmlSliderBtnNext)

    return htmlControl
  }
}

export default TopControlView
