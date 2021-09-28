import Inputmask from '../../libs/InputMask/index'
import { keyCodes, DATE_MASK } from './utils/constants'

class RegisterCard {
  constructor(domElements) {
    this.domElements = domElements
  }

  init() {
    this._setMask()
    this._setRadioListener()
    this._setToggleListener()
  }

  _setMask = () => {
    const { dateInput } = this.domElements
    Inputmask(DATE_MASK).mask(dateInput)
  }

  _setRadioListener = () => {
    const { radioManButton, radioInputMan, radioInputFemale, radioFemaleButton } = this.domElements

    radioManButton.addEventListener('keydown', ({ keyCode }) => this._handleRadioButtonKeydown(keyCode, radioInputMan))

    radioFemaleButton.addEventListener('keydown', ({ keyCode }) =>
      this._handleRadioButtonKeydown(keyCode, radioInputFemale)
    )
  }

  _setToggleListener = () => {
    const { toggleButton } = this.domElements
    toggleButton.addEventListener('keydown', this._handleToggleKeyDown)
  }

  _handleRadioButtonKeydown = (keyCode, radioInput) => {
    const { ENTER } = keyCodes
    if (keyCode === ENTER) {
      radioInput.checked = true
    }
  }

  _handleToggleKeyDown = ({ keyCode }) => {
    const { toggleInput } = this.domElements
    const { ENTER, RIGHT_ARROW, LEFT_ARROW } = keyCodes

    if (keyCode === RIGHT_ARROW) {
      toggleInput.checked = true
    }

    if (keyCode === LEFT_ARROW) {
      toggleInput.checked = false
    }

    if (keyCode === ENTER) {
      toggleInput.checked = !toggleInput.checked
    }
  }
}

export default RegisterCard
