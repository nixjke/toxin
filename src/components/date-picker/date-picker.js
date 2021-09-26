import 'air-datepicker'
import {
  TYPE_SINLGE,
  TYPE_DOUBLE,
  SELECTOR_DROPDOWN,
  SELECTOR_TOGGLE_BUTTON,
  SELECTOR_DROPDOWN_INPUT,
  SELECTOR_CLEAR_BUTTON,
  SELECTOR_APPLY_BUTTON,
  SELECTOR_CONTAINER,
  CLASS_THEME_INLINE,
} from './const'

const Calendar = function Calendar($element, options) {
  this.init($element, options)
}

Calendar.prototype.typeSingle = TYPE_SINLGE
Calendar.prototype.typeDouble = TYPE_DOUBLE
Calendar.prototype.init = function init($element, { type }) {
  this.type = type

  this.$dropdownFrom = $element.find(SELECTOR_DROPDOWN).eq(0)
  this.$dropdownTo = $element.find(SELECTOR_DROPDOWN).eq(1)

  this.$inputFrom = this.$dropdownFrom.find('input')
  this.$inputTo = this.$dropdownTo.find('input')

  this.$datepickerContainer = $element.find(SELECTOR_CONTAINER)

  this.currentInputValues = []
  this.isInline = $element.hasClass(CLASS_THEME_INLINE)

  this.initDatepicker($element)

  this.setDates()
  this.addEventListeners()

  if (this.isInline) {
    this.$datepickerApi.show()
  }
}

Calendar.prototype.initDatepicker = function initDatepicker() {
  const that = this
  this.$datepickerApi = this.$datepickerContainer
    .datepicker({
      range: true,
      minDate: new Date(),
      navTitles: {
        days: 'MM <i>yyyy</i>',
      },
      prevHtml:
        '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg>',
      nextHtml:
        '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>',
      onShow(inst) {
        that.addButtons(inst.$datepicker)
      },
      onSelect() {
        if (that.type === Calendar.prototype.typeDouble) {
          that.setDropdownValueTypeDouble(that.currentInputValues)
        }
        if (that.type === Calendar.prototype.typeSingle) {
          that.setDropdownValueTypeSingle(that.currentInputValues)
        }
        that.toggleClearButton()
      },
    })
    .data('datepicker')
}

Calendar.prototype.addEventListeners = function addEventListeners() {
  this.$dropdownFrom.find(SELECTOR_TOGGLE_BUTTON).on('click', this.handleToggleButtonClick.bind(this))
  this.$dropdownTo.find(SELECTOR_TOGGLE_BUTTON).on('click', this.handleToggleButtonClick.bind(this))
}

Calendar.prototype.handleToggleButtonClick = function handleToggleButtonClick() {
  const isVisible = this.$datepickerApi.$el.find('.datepicker').is(':visible')
  if (isVisible) {
    this.$datepickerApi.hide()
  } else {
    this.$datepickerApi.show()
  }
}

Calendar.prototype.setDates = function setDates() {
  const dates = this.type === Calendar.prototype.typeDouble ? this.parseDatesTypeDouble() : this.parseDatesTypeSingle()

  const arrIsoFrom = dates[0].split('.')
  const arrIsoTo = dates[1].split('.')

  const dateFrom = new Date(`${arrIsoFrom[2]}-${arrIsoFrom[1]}-${arrIsoFrom[0]}`)
  const dateTo = new Date(`${arrIsoTo[2]}-${arrIsoTo[1]}-${arrIsoTo[0]}`)

  const initDates = []

  if (dateFrom instanceof Date && !Number.isNaN(dateFrom.getTime())) {
    initDates.push(dateFrom)
  }
  if (dateTo instanceof Date && !Number.isNaN(dateTo.getTime())) {
    initDates.push(dateTo)
  }
  this.currentInputValues = [...initDates]

  if (initDates.length > 0) {
    this.$datepickerApi.selectDate(initDates)
  }
}

Calendar.prototype.clear = function clear() {
  this.$dropdownFrom.find(SELECTOR_DROPDOWN_INPUT).val('')
  this.$dropdownTo.find(SELECTOR_DROPDOWN_INPUT).val('')
  this.currentInputValues = []
}

Calendar.prototype.update = function update() {
  const dates = this.$datepickerApi.selectedDates

  if (dates.length === 0) return

  if (this.type === Calendar.prototype.typeDouble) {
    this.setDropdownValueTypeDouble(dates)
  }
  if (this.type === Calendar.prototype.typeSingle) {
    this.setDropdownValueTypeSingle(dates)
  }
}

Calendar.prototype.addButtons = function addButtons($dpElement) {
  const $clearBtn = this.createButton('clear', 'Очистить')
  const $applyBtn = this.createButton('apply', 'Применить')
  if ($dpElement.find(SELECTOR_CLEAR_BUTTON).length === 0) {
    $clearBtn.on('click', this.handleClearButtonClick.bind(this))
  }
  if ($dpElement.find(SELECTOR_APPLY_BUTTON).length === 0) {
    $applyBtn.on('click', this.handleApplyButtonClick.bind(this))
  }
  if ($dpElement.find('.js-datepicker__footer').length === 0) {
    const $footer = $('<div class="datepicker__footer js-datepicker__footer"></div>')
    $footer.append($clearBtn).append($applyBtn)
    $dpElement.append($footer)
  }
  this.toggleClearButton()
}

Calendar.prototype.toggleClearButton = function toggleClearButton() {
  const isClearButtonDisabled = this.$datepickerApi.selectedDates.length < 2
  this.$datepickerContainer.find(SELECTOR_CLEAR_BUTTON).toggleClass('button_hidden', isClearButtonDisabled)
}

Calendar.prototype.createButton = function createButton(action, caption) {
  const clearClass = action === 'clear' ? 'button_hovered' : ''
  const template = `<button class="button button_with-variant-text button__date-picker ${clearClass}" type="button" data-action="${action}">
                        <span class="button__caption">${caption}</span>
                    </button>`
  return $(template)
}

Calendar.prototype.handleClearButtonClick = function handleClearButtonClick() {
  if (this.isInline) return

  this.$datepickerApi.clear()
  this.clear()
}

Calendar.prototype.handleApplyButtonClick = function handleApplyButtonClick() {
  if (this.isInline) return

  this.$datepickerApi.hide()
  this.update()
}

Calendar.prototype.parseDatesTypeSingle = function parseDatesTypeSingle() {
  return this.$inputFrom.val().split('-')
}

Calendar.prototype.parseDatesTypeDouble = function parseDatesTypeDouble() {
  return [this.$inputFrom.val(), this.$inputTo.val()]
}

Calendar.prototype.setDropdownValueTypeSingle = function setDropdownValueTypeSingle(dates) {
  if ((dates[0] && dates[1]) instanceof Date) {
    const options = {
      month: 'short',
      day: 'numeric',
    }
    const dateFromString = Intl.DateTimeFormat('ru-RU', options).format(dates[0])
    const dateToString = Intl.DateTimeFormat('ru-RU', options).format(dates[1])
    const dateRangeString = `${dateFromString} - ${dateToString}`
    this.$inputFrom.val(dateRangeString)
  } else {
    this.$inputFrom.val('')
  }
}

Calendar.prototype.setDropdownValueTypeDouble = function setDropdownValueTypeDouble(dates) {
  if ((dates[0] && dates[1]) instanceof Date) {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }
    const dateStringFrom = Intl.DateTimeFormat('ru-RU', options).format(dates[0])
    this.$dropdownFrom.find(SELECTOR_DROPDOWN_INPUT).val(dateStringFrom)

    const dateStringTo = Intl.DateTimeFormat('ru-RU', options).format(dates[1])
    this.$dropdownTo.find(SELECTOR_DROPDOWN_INPUT).val(dateStringTo)

    this.currentInputValues = dates
  } else {
    this.$inputFrom.val('')
    this.$inputTo.val('')
  }
}

export default Calendar
