import TotalCard from './TotalCard'
import { 
  PRICE_FOR_DAY, 
  DISCOUNT, 
  PRICE_FOR_ADD_SERVICES, 
  PLACEHOLDER } from './utils/constants'
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
