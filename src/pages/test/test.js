import './test.scss'
import '../../libs/Material-icons/index'
import '../../../node_modules/air-datepicker/air-datepicker.css'
import '../../components/date-picker/date-picker.scss'
import AirDatepicker from '../../libs/Air-datepicker/index'

let Datepicker = new AirDatepicker('.block', {
  range: true,
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
