import TotalCard from './TotalCard'
import { PRICE_FOR_DAY, DISCOUNT, PRICE_FOR_ADD_SERVICES, PLACEHOLDER } from './utils/constants'
import classNameMap from './utils/classNameMap'

const { arrivalInput, departureInput, priceView, amountDayView, costPerDaysView } = classNameMap

const totalCard = new TotalCard({
  arrivalInput: document.querySelector(`.${arrivalInput}`),
  departureInput: document.querySelector(`.${departureInput}`),
  priceView: document.querySelector(`.${priceView}`),
  amountDayView: document.querySelector(`.${amountDayView}`),
  costPerDaysView: document.querySelector(`.${costPerDaysView}`),
  placeholder: PLACEHOLDER,
  priceForDay: PRICE_FOR_DAY,
  discount: DISCOUNT,
  priceForAddServices: PRICE_FOR_ADD_SERVICES,
})

totalCard.init()


import '../../../node_modules/air-datepicker/air-datepicker.css'
import '../../components/date-picker/date-picker.scss'
import AirDatepicker from '../../libs/Air-datepicker/index'

const input = document.querySelector('.js-arrival-input')
const inputSecond = document.querySelector('.js-departure-input')

new AirDatepicker(input, {
  multipleDates: true,
  range: true,
  multipleDatesSeparator: '-',
  onSelect(fd) {
    input.value = fd.formattedDate[0]
    inputSecond.value = fd.formattedDate[1] ? fd.formattedDate[1] : ''
  },
  buttons: ['clear', 'today'],
  locale: {
    today: 'Применить',
  },
  navTitles: {
    days: 'MMMM yyyy',
  },
  prevHtml: '<span class="material-icons-outlined">arrow_back</span>',
  nextHtml: '<span class="material-icons-outlined">arrow_forward</span>',
  startDate: new Date(),
})
