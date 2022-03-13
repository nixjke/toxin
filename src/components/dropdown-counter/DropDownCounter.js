import { getHtmlElement, getRandomNumber, declensionWordEnding } from './utils'
import classNameMap from './utils/classNameMap'
import keyCodes from './utils/constants'

class DropDownCounter {
  constructor({
    container,
    input,
    inputSplitBtn,
    countElements,
    countGroupView,
    placeholder = 'Выберите элемент',
    maxLengthInput = 20,
    isPinShow = false,
    isHideControl = false,
  }) {
    const { dropDownCounter } = classNameMap
    this.domElements = {
      dropDownParent: getHtmlElement('section', dropDownCounter),
      container,
      input,
      inputSplitBtn,
    }

    this.countElementsGroup = {
      countElements,
      countGroupView,
    }

    this.settings = {
      placeholder,
      isPinShow,
      isHideControl,
      maxLengthInput,
    }
    this.init()
  }

  init() {
    const { input, inputSplitBtn, dropDownParent, container } = this.domElements
    const { isPinShow, placeholder, isHideControl } = this.settings
    const { wrap, countList: countListClass, control, button, buttonAccent } = classNameMap

    if (isPinShow) {
      this._show()
    } else {
      input.addEventListener('click', this._handleInputClick)
    }

    if (this._hasHaveStartValue()) {
      this._renderStartCount()
    } else {
      input.textContent = placeholder
    }

    inputSplitBtn.addEventListener('click', this._handleInputClick)
    this.countElementsGroup.countElements = this._getModifiedCountElements()
    const dropDownParentWrap = getHtmlElement('div', wrap)
    const countList = getHtmlElement('ul', countListClass)
    const dropDownControl = getHtmlElement('div', control)
    const clearBtn = getHtmlElement('button', button, 'Очистить')
    this.domElements.clearBtn = clearBtn
    clearBtn.type = 'button'
    clearBtn.addEventListener('click', this._handleClearBtnClick)
    const acceptBtn = getHtmlElement('button', `${button} ${buttonAccent}`, 'Применить')
    acceptBtn.type = 'button'
    acceptBtn.addEventListener('click', this._handleAcceptBtnClick)
    const countListFragment = document.createDocumentFragment()
    const { countElements } = this.countElementsGroup

    countElements.forEach(element => {
      const countItem = this._getCountItem(element)
      countListFragment.appendChild(countItem)
    })

    countList.appendChild(countListFragment)

    if (!isHideControl) {
      dropDownControl.appendChild(clearBtn)
      dropDownControl.appendChild(acceptBtn)
    }

    dropDownParentWrap.appendChild(countList)

    if (!isHideControl) {
      dropDownParentWrap.appendChild(dropDownControl)
    }

    dropDownParent.appendChild(dropDownParentWrap)
    container.appendChild(dropDownParent)

    const isAllCounterZero = countElements.every(item => item.counter === 0)

    if (isAllCounterZero) this._hideClearBtn()
  }

  _hasHaveStartValue = () => {
    const { countElements } = this.countElementsGroup
    return countElements.some(item => {
      if (item.startValue) {
        return item.startValue > 0
      }
    })
  }

  _getModifiedCountElements = () => {
    const { countElements } = this.countElementsGroup

    const modifiedCountElements = countElements.map((item, index) => {
      const minValue = item.minValue ? item.minValue : 0
      const counter = item.startValue ? item.startValue : minValue
      item.id = `${index}${getRandomNumber(1, 10000)}`
      item.counter = counter
      item.minValue = minValue
      return item
    })

    return modifiedCountElements
  }

  _show = () => {
    const { dropDownParent, input } = this.domElements
    const { dropDownCounterOpened, inputActive } = classNameMap

    const isHaveClass = dropDownParent.classList.contains(dropDownCounterOpened)

    if (!isHaveClass) {
      dropDownParent.classList.add(dropDownCounterOpened)
      input.classList.add(inputActive)
      window.addEventListener('mouseup', this._handleWindowClick)
      window.addEventListener('keyup', this._handleWindowKeyup)
    }
  }

  _hide = () => {
    const { dropDownParent, input } = this.domElements
    const { isPinShow } = this.settings
    const { dropDownCounterOpened, inputActive } = classNameMap

    if (isPinShow) {
      return
    }

    const isHaveClass = dropDownParent.classList.contains(dropDownCounterOpened)

    if (isHaveClass) {
      dropDownParent.classList.remove(dropDownCounterOpened)
      input.classList.remove(inputActive)
      window.removeEventListener('mouseup', this._handleWindowClick)
      window.removeEventListener('keyup', this._handleWindowKeyup)
    }
  }

  _hideClearBtn = () => {
    const { clearBtn } = this.domElements
    const { counterButtonHidden } = classNameMap
    clearBtn.classList.add(counterButtonHidden)
  }

  _handleInputClick = () => {
    this._show()
  }

  _handleWindowClick = evt => {
    const { dropDownParent, input } = this.domElements
    const isInputClick = evt.target === input
    const isCalendarClick = dropDownParent.contains(evt.target)
    const isOutsideClick = !isInputClick && !isCalendarClick
    if (isOutsideClick) {
      this._hide()
    }
  }

  _handleWindowKeyup = evt => {
    const { ESC } = keyCodes
    const isEscPress = evt.keyCode === ESC
    if (isEscPress) {
      this._hide()
    }
  }

  _handleClearBtnClick = evt => {
    evt.preventDefault()
    this._discardCounter()
    this._discardViewCounter()
    this._hideClearBtn()
    const { input } = this.domElements
    const { placeholder } = this.settings
    input.textContent = placeholder
  }

  _handleAcceptBtnClick = evt => {
    evt.preventDefault()
    this._hide()
  }

  _handleCountItemPlusClick = elements => {
    const { element, countItemView, countItemMinus } = elements
    const { counterButtonHidden, counterButtonDisabled } = classNameMap
    const { countGroupView } = this.countElementsGroup
    const { clearBtn } = this.domElements

    const groupView = countGroupView[element.countGroupName]
    element.counter++
    groupView.counter++
    countItemView.textContent = element.counter
    this._renderViewCount()
    const isMinusDisabled = countItemMinus.classList.contains(counterButtonDisabled)

    if (isMinusDisabled) {
      countItemMinus.classList.remove(counterButtonDisabled)
      countItemMinus.removeAttribute('disabled')
    }

    const isClearBtnDisabled = clearBtn.classList.contains(counterButtonHidden)

    if (isClearBtnDisabled) {
      clearBtn.classList.remove(counterButtonHidden)
    }
  }

  _handleCountItemMinusClick = elements => {
    const { element, countItemView, countItemMinus } = elements
    const { counterButtonDisabled } = classNameMap
    const { countGroupView } = this.countElementsGroup
    const { placeholder } = this.settings
    const { input } = this.domElements

    const groupView = countGroupView[element.countGroupName]
    element.counter--
    groupView.counter--
    countItemView.textContent = element.counter
    const nextDecrementCounter = element.counter - 1

    if (nextDecrementCounter < element.minValue) {
      countItemMinus.classList.add(counterButtonDisabled)
      countItemMinus.setAttribute('disabled', 'true')
    }

    this._renderViewCount()
    if (groupView.counter !== 0) return

    const isCounterGroupClear = Object.keys(countGroupView).every(item => {
      return countGroupView[item].counter === 0
    })

    if (isCounterGroupClear) {
      input.textContent = placeholder
      this._hideClearBtn()
    }
  }

  _discardCounter = () => {
    const { dropDownParent } = this.domElements
    const { countElements } = this.countElementsGroup
    const { counterButtonMinus } = classNameMap

    countElements.forEach(item => {
      const viewCounter = dropDownParent.querySelector(`#view-${item.id}`)
      viewCounter.textContent = item.minValue
      item.counter = item.minValue
    })

    const minusButtons = dropDownParent.querySelectorAll(`.${counterButtonMinus}`)
    const { counterButtonDisabled } = classNameMap

    minusButtons.forEach(item => {
      item.classList.add(counterButtonDisabled)
      item.setAttribute('disabled', 'true')
    })
  }

  _discardViewCounter = () => {
    const { countGroupView } = this.countElementsGroup

    Object.keys(countGroupView).forEach(item => {
      countGroupView[item].counter = 0
    })
  }

  _renderViewCount = () => {
    const { input } = this.domElements
    const { countGroupView } = this.countElementsGroup
    const { maxLengthInput } = this.settings

    let wordOfNum = ''
    Object.keys(countGroupView).forEach((item, index) => {
      if (countGroupView[item].counter < 1) return

      const currentCounterGroup = countGroupView[item]
      const currentCounter = currentCounterGroup.counter
      const currentWord = declensionWordEnding(currentCounter, currentCounterGroup.views)
      const isWordsMoreThenTwo = index > 0 && wordOfNum.length > 1
      if (isWordsMoreThenTwo) {
        wordOfNum += ', '
      }
      wordOfNum += `${currentCounter} ${currentWord}`
    })

    const isLengthOutRange = wordOfNum.length >= maxLengthInput && Object.keys(countGroupView).length > 2

    if (isLengthOutRange) {
      wordOfNum = wordOfNum.slice(0, maxLengthInput) + '...'
    }

    input.textContent = wordOfNum
  }

  _renderStartCount = () => {
    const { input } = this.domElements
    const { countElements, countGroupView } = this.countElementsGroup
    const { maxLengthInput } = this.settings

    let wordOfNum = ''
    countElements.forEach((item, index) => {
      if (item.startValue < 1) return

      const currentCounterGroup = countGroupView[item.countGroupName]
      const currentCounter = currentCounterGroup.counter
      const currentWord = declensionWordEnding(currentCounter, currentCounterGroup.views)
      const isWordsMoreThenTwo = index > 0 && wordOfNum.length > 1
      if (isWordsMoreThenTwo) {
        wordOfNum += ', '
      }
      wordOfNum += `${currentCounter} ${currentWord}`
    })
    const isLengthOutRange = wordOfNum.length >= maxLengthInput && countElements.length > 2

    if (isLengthOutRange) {
      wordOfNum = wordOfNum.slice(0, maxLengthInput) + '...'
    }

    input.textContent = wordOfNum
  }

  _getCountItem = element => {
    const {
      countItem: countItemClass,
      countItemName: countItemNameClass,
      counterMenu: counterMenuClass,
      counterButton: counterButtonClass,
      counterButtonMinus,
      counterButtonPlus,
      counterButtonDisabled,
      selectView,
    } = classNameMap

    const countItem = getHtmlElement('li', countItemClass)
    const countItemName = getHtmlElement('p', countItemNameClass, element.name)
    const counterMenu = getHtmlElement('div', counterMenuClass)
    const countItemMinus = getHtmlElement('button', `${counterButtonClass} ${counterButtonMinus}`)

    const isHaveDisabledStartValue = element.startValue && element.startValue === element.minValue

    if (isHaveDisabledStartValue) {
      countItemMinus.classList.add(counterButtonDisabled)
      countItemMinus.setAttribute('disabled', 'true')
    } else if (!element.startValue) {
      countItemMinus.classList.add(counterButtonDisabled)
      countItemMinus.setAttribute('disabled', 'true')
    }
    countItemMinus.type = 'button'
    const countItemView = getHtmlElement('p', selectView)
    countItemView.textContent = element.counter
    countItemView.id = `view-${element.id}`
    const countItemPlus = getHtmlElement('button', `${counterButtonClass} ${counterButtonPlus}`)
    countItemPlus.type = 'button'

    countItemPlus.addEventListener('click', () => {
      this._handleCountItemPlusClick({
        element,
        countItemView,
        countItemMinus,
      })
    })

    countItemMinus.addEventListener('click', () => {
      this._handleCountItemMinusClick({
        element,
        countItemView,
        countItemMinus,
      })
    })

    counterMenu.appendChild(countItemMinus)
    counterMenu.appendChild(countItemView)
    counterMenu.appendChild(countItemPlus)
    countItem.appendChild(countItemName)
    countItem.appendChild(counterMenu)
    return countItem
  }
}

export default DropDownCounter
