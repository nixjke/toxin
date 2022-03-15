import '../../../node_modules/air-datepicker/air-datepicker.css'
import '../../components/date-picker/date-picker.scss'
import AirDatepickerInit from '../../libs/Air-datepicker/index'

const input = document.querySelector('.js-arrival-input')
const inputSecond = document.querySelector('.js-departure-input')

new AirDatepickerInit(input, inputSecond)
