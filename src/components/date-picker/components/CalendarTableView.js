import { getHtmlElement, compareDate } from '../utils/'
import calendarClassName from '../utils/calendarClassName'

class CalendarTableView {
  static getHtmlNode = (currentDate, isCellLower) => {
    const { calendar, calendarHead, calendarBody } = calendarClassName
    const calendarTable = getHtmlElement('table', `${calendar} js-${calendar}`)
    const tHead = getHtmlElement('thead')
    const tBody = getHtmlElement('tbody', `${calendarBody} js-${calendarBody}`)
    const tableTrHead = getHtmlElement('tr')
    const tableHead = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

    tableHead.forEach(item => {
      const th = getHtmlElement('th', calendarHead, item)
      tableTrHead.appendChild(th)
    })

    tHead.appendChild(tableTrHead)
    const tableDate = this.getCalendarTableDate(currentDate, isCellLower)

    tBody.appendChild(tableDate)
    calendarTable.appendChild(tHead)
    calendarTable.appendChild(tBody)
    return calendarTable
  }

  static getAriaDateByDate = date => {
    let ariaDay = date.getDate()
    const isAriaDayInDiapason = ariaDay >= 1 && ariaDay <= 9

    if (isAriaDayInDiapason) {
      ariaDay = `0${ariaDay}`
    }

    let ariaMonth = date.getMonth() + 1
    const isAriaMonthInDiapason = ariaMonth >= 1 && ariaMonth <= 9

    if (isAriaMonthInDiapason) {
      ariaMonth = `0${ariaMonth}`
    }

    const ariaYear = date.getFullYear()
    const ariaDate = `${ariaYear}-${ariaMonth}-${ariaDay}`
    return ariaDate
  }

  static getCalendarTableDate = (currentDate, isCellLower) => {
    const tableFragment = document.createDocumentFragment()
    const nowDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const lastWeekDayPrevMonth = new Date(currentYear, currentMonth, 0).getDay()
    const lastDayPrevMonth = new Date(currentYear, currentMonth, 0).getDate()
    const numberColumn = 7
    const numberRow = this._getNumberRow(currentDate)

    let viewMonth
    let numberDay

    const isLastWeekDaySunday = lastWeekDayPrevMonth === 0

    if (isLastWeekDaySunday) {
      numberDay = 0
      viewMonth = currentMonth
    } else {
      numberDay = lastDayPrevMonth - lastWeekDayPrevMonth
      viewMonth = currentMonth - 1
    }

    const { calendarDay, calendarDayLower, calendarDayCurrent, calendarDayNotCurrent } = calendarClassName

    for (let i = 0; i < numberRow; i++) {
      const tableTr = getHtmlElement('tr')

      for (let j = 0; j < numberColumn; j++) {
        const viewDate = new Date(currentYear, viewMonth, ++numberDay)
        const tableTd = getHtmlElement('td', calendarDay, viewDate.getDate())
        const isNowDate = compareDate(viewDate, nowDate) === 0
        const isDayNotCurrent = !this._hasCurrentMonth(viewDate, currentDate) && !isNowDate

        if (isCellLower) {
          tableTd.classList.add(calendarDayLower)
        }

        if (isDayNotCurrent) {
          tableTd.classList.add(calendarDayNotCurrent)
        }

        if (isNowDate) {
          tableTd.classList.add(calendarDayCurrent)
        }

        const viewDateAtr = this.getAriaDateByDate(viewDate)
        tableTd.setAttribute('aria-date', viewDateAtr)
        tableTr.appendChild(tableTd)
      }

      tableFragment.appendChild(tableTr)
    }

    return tableFragment
  }

  static _getNumberRow = currentDate => {
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const lastDayCurrentMonth = new Date(currentYear + 1, currentMonth + 1, 0).getDate()
    const lastWeekDayPrevMonth = new Date(currentYear, currentMonth, 0).getDay()
    const isLastWeekDaySaturday = lastWeekDayPrevMonth === 6
    const isLastWeekDayFriday = lastWeekDayPrevMonth === 5
    const isLastWeekDaySunday = lastWeekDayPrevMonth === 0
    const isLeapYear = lastDayCurrentMonth === 28
    const isExtraRow = isLastWeekDaySunday && isLeapYear
    const isInsufficientRow =
      (isLastWeekDaySaturday && lastDayCurrentMonth >= 30) || (isLastWeekDayFriday && lastDayCurrentMonth === 31)
    let numberRow = 5

    if (isInsufficientRow) {
      numberRow = 6
    }

    if (isExtraRow) {
      numberRow = 4
    }
    return numberRow
  }

  static _hasCurrentMonth = (date, currentDate) => {
    return date.getMonth() === currentDate.getMonth()
  }
}

export default CalendarTableView
