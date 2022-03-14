import '../../style/main.scss'
import '../../components/main-menu'
import '../../components/hotel-card'
import '../../components/range-slider'
import './sections/filter'
import '../../libs/Material-icons/index'
import '../../../node_modules/air-datepicker/air-datepicker.css'
import '../../components/date-picker/date-picker.scss'
import './rooms.scss'

import AirDatepickerInit from '../../libs/Air-datepicker'

let airDatepicker = document.querySelector('.js-drop-down-input')

new AirDatepickerInit(airDatepicker)