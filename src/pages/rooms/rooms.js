import '../../style/main.scss'
import '../../components/main-menu'
import '../../components/hotel-card'
import '../../components/range-slider'
import './sections/filter'
import '../../libs/Material-icons/index'
import '../../../node_modules/air-datepicker/air-datepicker.css'
import '../../components/date-picker/date-picker.scss'
import './rooms.scss'

const dropdownInput = document.querySelector('.js-drop-down-input')
const dropdownButton = document.querySelector('.js-drop-down-input-split-btn')

let buttonToday = {
  content: 'Применить',
  className: 'js-today-button',
  onClick: () => {
    dp.hide()
  }
}