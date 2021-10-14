import '../../style/main.scss'
import './calendar.scss'
import AirDatepicker from '../../libs/Air-datepicker/index'
import '../../../node_modules/air-datepicker/air-datepicker.css'

new AirDatepicker('.d', {
  inline: true,
  buttons: ['clear', 'today' ]
})