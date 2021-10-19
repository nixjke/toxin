import '../../style/main.scss'
import '../../components/main-menu'
import '../../components/hotel-card'
import '../../components/range-slider'
import './sections/filter'
import '../../libs/Material-icons/index'
import '../../../node_modules/air-datepicker/air-datepicker.css'
import '../../components/date-picker/date-picker.scss'
import './rooms.scss'
import AirDatepicker from '../../libs/Air-datepicker/index'

const dropdownInput = document.querySelector('.js-drop-down-input')
const dropdownButton = document.querySelector('.js-drop-down-input-split-btn')

let buttonToday = {
  content: 'Применить',
  className: 'js-today-button',
  onClick: () => {
    dp.hide()
  }
}

let dp = new AirDatepicker(dropdownInput, {
  range: true,
  buttons: ['clear', buttonToday],
  navTitles: {
    days: 'MMMM yyyy',
  },
  prevHtml: '<span class="material-icons-outlined">arrow_back</span>',
  nextHtml: '<span class="material-icons-outlined">arrow_forward</span>',
  dateFormat: 'd MMM',
  multipleDatesSeparator: ' - '
})

dropdownButton.addEventListener('click', () => {
  dp.show()
})