import '../../style/main.scss'
import './index.scss'
import '../../libs/Material-icons/index'
import '../../favicons/favicons.js'
import '../../components/main-menu/index'
import '../../components/date-wishes/index'
import dropDownCounterInitial from '../../components/dropdown-counter'

const dropDownContainer = document.querySelector('.js-drop-down-counter-container')
const inputDropDown = document.querySelector('.js-input-drop-down')
const inputSplitBtn = document.querySelector('.js-input-drop-down-split-btn')

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
  placeholder: 'Сколько гостей',
}

dropDownCounterInitial(dropDownOptions)
