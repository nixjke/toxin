import '../../libs/Material-icons/index.js'
import '../../style/main.scss'
import './test.scss'

import '../../libs/Material-icons/index'
import '../../../node_modules/air-datepicker/air-datepicker.css'
import '../../components/date-picker/date-picker.scss'
import AirDatepicker from '../../libs/Air-datepicker/index'

let datePickerInput = document.querySelectorAll('.block')

let Datepicker = new AirDatepicker(datePickerInput[0], {
  multipleDates: true,
  range: true,
  multipleDatesSeparator: '-',
  onSelect(fd) {
    let a = 0
    datePickerInput[0].value = fd.formattedDate
    datePickerInput[1].value = fd[1].formattedDate
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
