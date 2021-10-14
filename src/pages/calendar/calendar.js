import '../../style/main.scss'
import '../../../node_modules/air-datepicker/air-datepicker.css'
import '../../libs/Material-icons/index'
import './calendar.scss'

import AirDatepicker from '../../libs/Air-datepicker/index'

let Datepicker = new AirDatepicker('.d', {
  inline: true,
  buttons: ['clear', 'today'],
  range: true,
  locale: {
    today: 'Применить'
  },
  navTitles: {
    days: 'MMMM yyyy',
  },
  prevHtml: '<span class="material-icons-outlined">arrow_back</span>',
  nextHtml: '<span class="material-icons-outlined">arrow_forward</span>',
  startDate: new Date()
})
