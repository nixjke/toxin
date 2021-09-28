import '../../style/main.scss'
import './form-elements.scss'
import '../../components/range-slider'
import dropDownCounterInitial from '../../components/dropdown-counter'
import Inputmask from 'inputmask'

Inputmask({ mask: '99.99.9999', placeholder: 'ДД.ММ.ГГГГ' }).mask('.js-masked-input')

const dropDownContainer = document.querySelector('.js-drop-down-counter-container')
const inputDropDown = document.querySelector('.js-default-input-drop-down')
const inputSplitBtn = document.querySelector('.js-default-input-drop-down-split-btn')

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
  isHideControl: true,
  isPinShow: true,
}

dropDownCounterInitial(dropDownOptions)

const dropDownGuestContainer = document.querySelector('.js-drop-down-counter-container-clear')
const inputDropDownGuest = document.querySelector('.js-input-drop-down-clear')
const inputSplitBtnGuest = document.querySelector('.js-input-drop-down-clear-split-btn')

const dropDownGuestOptions = {
  container: dropDownGuestContainer,
  input: inputDropDownGuest,
  inputSplitBtn: inputSplitBtnGuest,
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
  isPinShow: true,
}

dropDownCounterInitial(dropDownGuestOptions)

const dropDownQuestContainer = document.querySelector('.js-drop-down-counter-container-filled')
const inputDropDownQuest = document.querySelector('.js-input-drop-down-filled')
const splitBtnQuest = document.querySelector('.js-input-drop-down-filled')

const dropDownQuestOptions = {
  container: dropDownQuestContainer,
  input: inputDropDownQuest,
  inputSplitBtn: splitBtnQuest,
  countElements: [
    { name: 'Взрослые', countGroupName: 'guest', startValue: 2 },
    { name: 'Дети', countGroupName: 'guest', startValue: 1 },
    { name: 'Младенцы', countGroupName: 'child' },
  ],
  countGroupView: {
    guest: { counter: 3, views: ['гость', 'гостя', 'гостей'] },
    child: { counter: 0, views: ['младенец', 'младенца', 'младенцев'] },
  },
  placeholder: 'Сколько гостей',
  isPinShow: true,
}

dropDownCounterInitial(dropDownQuestOptions)
