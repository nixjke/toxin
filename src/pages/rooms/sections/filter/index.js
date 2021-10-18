import dropDownCounterInitial from '../../../../components/dropdown-counter'

const datePickerDomElements = {
  parentNode: document.querySelector('.js-date-picker-container'),
  datePickerInput: document.querySelector('.js-drop-down-input'),
  datePickerSplitBtn: document.querySelector('.js-drop-down-input-split-btn'),
  isCellLower: true,
}


const dropDownGuestContainer = document.querySelector('.js-drop-down-counter-container-guest')
const inputDropDownGuest = document.querySelector('.js-input-drop-down-guest')
const inputSplitBtnGuest = document.querySelector('.js-input-drop-down-guest-split-btn')

const dropDownGuestOptions = {
  container: dropDownGuestContainer,
  input: inputDropDownGuest,
  inputSplitBtn: inputSplitBtnGuest,
  countElements: [
    { name: 'Взрослые', countGroupName: 'guest', startValue: 3 },
    { name: 'Дети', countGroupName: 'guest', startValue: 0 },
    { name: 'Младенцы', countGroupName: 'child', startValue: 1 },
  ],
  countGroupView: {
    guest: { counter: 3, views: ['гость', 'гостя', 'гостей'] },
    child: { counter: 1, views: ['младенец', 'младенца', 'младенцев'] },
  },
  placeholder: 'Cколько гостей',
}

dropDownCounterInitial(dropDownGuestOptions)

const dropDownContainer = document.querySelector('.js-drop-down-counter-container')
const inputDropDown = document.querySelector('.js-input-drop-down')
const inputSplitBtn = document.querySelector('.js-input-drop-down-split-btn')

const dropDownOptions = {
  container: dropDownContainer,
  input: inputDropDown,
  inputSplitBtn,
  countElements: [
    { name: 'Спальни', countGroupName: 'bedrooms', startValue: 2 },
    { name: 'Кровати', countGroupName: 'bed', startValue: 2 },
    { name: 'Ванные комнаты', countGroupName: 'bath', startValue: 0 },
  ],
  countGroupView: {
    bedrooms: { counter: 2, views: ['спальня', 'спальни', 'спален'] },
    bed: { counter: 2, views: ['кровать', 'кровати', 'кроватей'] },
    bath: {
      counter: 0,
      views: ['ванная комната', 'ванные комнаты', 'ванных комнат'],
    },
  },
  placeholder: 'Удобства номера',
}

dropDownCounterInitial(dropDownOptions)
