import TotalCard from './TotalCard'
import { PRICE_FOR_DAY, DISCOUNT, PRICE_FOR_ADD_SERVICES, PLACEHOLDER } from './utils/constants'
import classNameMap from './utils/classNameMap'
import AirDatepickerInit from '../../libs/Air-datepicker/index'

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

const input = document.querySelector('.js-arrival-input')
const inputSecond = document.querySelector('.js-departure-input')

new AirDatepickerInit(input, inputSecond)