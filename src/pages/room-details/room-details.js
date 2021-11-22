import '../../style/main.scss'
import './room-details.scss'
import '../../components/main-menu'
import '../../components/total-card'
import '../../components/pie-chart'
import '../../libs/Material-icons/index'
import dropDownCounterInitial from '../../components/dropdown-counter'
import AirDatepicker from '../../libs/Air-datepicker/index'
import { AirDatepickerInit } from '../../libs/Air-datepicker/index'

const dropDownContainer = document.querySelector('.js-drop-down-counter-container')
const inputDropDown = document.querySelector('.js-input-drop-down')
const inputSplitBtn = document.querySelector('.js-input-drop-down-split-btn')

const datepickerInput = document.querySelector('.js-arrival-input')
const datepickerInputSecond = document.querySelector('.js-departure-input')
const datepickerSplitBtn = document.querySelectorAll('.drop-down-input__wrap')


// console.log(new AirDatepickerInit(datepickerInput, datepickerInputSecond, datepickerSplitBtn))
// new AirDatepickerInit(datepickerInput, datepickerInputSecond, datepickerSplitBtn)
const dropDownOptions = {
  container: dropDownContainer,
  input: inputDropDown,
  inputSplitBtn,
  countElements: [
    { name: 'Взрослые', countGroupName: 'guest' },
    { name: 'Дети', countGroupName: 'guest' },
    { name: 'Младенцы', countGroupName: 'child' },
  ],
  countGroupView: {
    guest: { counter: 0, views: ['гость', 'гостя', 'гостей'] },
    child: { counter: 0, views: ['младенец', 'младенца', 'младенцев'] },
  },
  placeholder: 'Cколько гостей',
}

dropDownCounterInitial(dropDownOptions)

let datePickerInput = document.querySelector('.js-arrival-input')
let datePickerInputTwo = document.querySelector('.js-departure-input')

// let Datepicker = new AirDatepicker(datePickerInput, {
//   multipleDates: true,
//   range: true,
//   multipleDatesSeparator: '-',
//   onSelect(fd) {
//     console.log(fd.formattedDate)
//     datePickerInput.value = fd.formattedDate[0]
//     datePickerInputTwo.value = fd.formattedDate[1] ? fd.formattedDate[1] : ''
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
