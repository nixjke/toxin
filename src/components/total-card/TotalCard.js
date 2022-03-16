import getNumStringWithSpaces from './utils'

class TotalCard {
  constructor({
    arrivalInput,
    departureInput,
    priceView,
    priceForDay,
    costPerDaysView,
    amountDayView,
    placeholder = 'ДД.ММ.ГГГГ',
    priceForAddServices = 0,
    discount = 0,
  }) {
    this.arrivalInput = arrivalInput
    this.departureInput = departureInput
    this.priceView = priceView
    this.costPerDaysView = costPerDaysView
    this.amountDayView = amountDayView
    this.priceForDay = priceForDay
    this.placeholder = placeholder
    this.priceForAddServices = priceForAddServices
    this.discount = discount
  }

  init() {
    this._initObservers()
  }

  _initObservers() {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver

    const observerConfig = {
      childList: true,
    }

    const DepartureMutationObserver = new MutationObserver(mutations => {
      mutations.forEach(({ type, target }) => {
        if (type !== 'childList') return

        this.arrivalDate = this.arrivalInput.textContent
        this.departureDate = target.textContent

        if (this._hasDatesEmpty()) {
          this._clearView()
        } else {
          this._renderResult()
        }
      })
    })

    DepartureMutationObserver.observe(this.departureInput, observerConfig)
  }

  _hasDatesEmpty() {
    return this.arrivalDate === this.placeholder && this.departureDate === this.placeholder
  }

  _clearView() {
    this.priceView.textContent = '0₽'
    this.amountDayView.textContent = '0'
    this.costPerDaysView.textContent = '0₽'
  }

  _renderResult() {
    this.priceView.textContent = `${getNumStringWithSpaces(this._getTotalPrice())}₽`

    this.costPerDaysView.textContent = `${getNumStringWithSpaces(this._getCostPerDays())}₽`

    this.amountDayView.textContent = this._getAmountDays()
  }

  _getTotalPrice() {
    if (this._getAmountDays() === 0) {
      return 0
    } else {
      return this._getCostPerDays() - this.discount + this.priceForAddServices
    }
  }

  _getCostPerDays() {
    return this._getAmountDays() * this.priceForDay
  }

  _getAmountDays() {
    const arrivalDateDirty = this.arrivalDate.split('.')
    const arrivalDay = arrivalDateDirty[0]
    const arrivalMonth = arrivalDateDirty[1]
    const arrivalYear = arrivalDateDirty[2]

    const departureDateDirty = this.departureDate.split('.')
    const departureDay = departureDateDirty[0]
    const departureMonth = departureDateDirty[1]
    const departureYear = departureDateDirty[2]

    const arrivalDate = new Date(`${arrivalMonth}-${arrivalDay}-${arrivalYear}`)
    const departureDate = new Date(`${departureMonth}-${departureDay}-${departureYear}`)

    const millisecondsToSeconds = 1000
    const secondsToMinutes = 60
    const minutesToHours = 60
    const hoursToDays = 24
    const amountDaysInMonth = 30

    return Math.floor(
      ((departureDate - arrivalDate) / (millisecondsToSeconds * secondsToMinutes * minutesToHours * hoursToDays)) %
        amountDaysInMonth
    )
  }
}

export default TotalCard
