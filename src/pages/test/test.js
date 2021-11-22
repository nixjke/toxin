import '../../libs/Material-icons/index.js'
import '../../style/main.scss'
import './test.scss'

import '../../libs/Material-icons/index'
import '../../../node_modules/air-datepicker/air-datepicker.css'
import '../../components/date-picker/date-picker.scss'
import AirDatepicker from '../../libs/Air-datepicker/index'
import AirDatepickerInit from '../../libs/Air-datepicker/index'

let datePickerInput = document.querySelectorAll('.block')

let test = document.querySelectorAll('.drop-down-input')

let date = new AirDatepickerInit(test[0], test[1])

console.log(date.hide)

let Datepicker = new AirDatepicker(datePickerInput[0], {
  multipleDates: true,
  range: true,
  multipleDatesSeparator: '-',
  onSelect(fd) {
    console.log(fd.formattedDate)
    datePickerInput[0].value = fd.formattedDate[0]
    datePickerInput[1].value = fd.formattedDate[1] ? fd.formattedDate[1] : ''
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

let DatepickerTwo = new AirDatepicker(datePickerInput[1], {
  multipleDates: true,
  range: true,
  multipleDatesSeparator: '-',
  onSelect(fd) {
    console.log(fd.formattedDate)
    datePickerInput[0].value = fd.formattedDate[0]
    datePickerInput[1].value = fd.formattedDate[1] ? fd.formattedDate[1] : ''
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