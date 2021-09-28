import RegisterCard from './RegisterCard'
import classNameMap from './utils/classNameMap'

const {
  dateInput,
  radioManButton,
  radioInputMan,
  radioFemaleButton,
  radioInputFemale,
  toggleButton,
  toggleInput,
} = classNameMap

const domElements = {
  dateInput: document.querySelector(`.${dateInput}`),
  radioManButton: document.querySelector(`.${radioManButton}`),
  radioInputMan: document.querySelector(`.${radioInputMan}`),
  radioFemaleButton: document.querySelector(`.${radioFemaleButton}`),
  radioInputFemale: document.querySelector(`.${radioInputFemale}`),
  toggleButton: document.querySelector(`.${toggleButton}`),
  toggleInput: document.querySelector(`.${toggleInput}`),
}

const registerCard = new RegisterCard(domElements)

registerCard.init()
