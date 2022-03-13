
import '../../../node_modules/air-datepicker/air-datepicker.css'
import '../../components/date-picker/date-picker.scss'
import AirDatepicker, { AirDatepickerInit } from '../../libs/Air-datepicker/index'

const input = document.querySelector('.js-arrival-input')
const inputSecond = document.querySelector('.js-departure-input')

// const inputAirDatepicker = new AirDatepicker(input, {
//   multipleDates: true,
//   range: true,
//   multipleDatesSeparator: '-',
//   onSelect(fd) {
//     input.value = fd.formattedDate[0] ? fd.formattedDate[0] : 'ДД.ММ.ГГГГ'
//     inputSecond.value = fd.formattedDate[1] ? fd.formattedDate[1] : ''
//   },
//   buttons: ['clear', 'today'],
//   locale: {
//     today: 'Применить',
//   },
//   navTitles: {
//     days: 'MMMM yyyy',
//   },
//   prevHtml: '<span class="material-icons-outlined">arrow_back</span>',
//   nextHtml: '<span class="material-icons-outlined">arrow_forward</span>',
//   startDate: new Date(),
// })

// inputSecond.addEventListener('click', () => {
//   inputAirDatepicker.show()
// })

new AirDatepickerInit(input,inputSecond )