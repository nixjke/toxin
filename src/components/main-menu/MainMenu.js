class MainMenu {
  constructor(parentDom) {
    this.parentDom = parentDom
  }

  init() {
    this._setSubMenuListener()
    this._setBurgerListener()
    this.isAuthorized = !this.parentDom.parentNode.querySelector('.js-profile-btn')
    if (!this.isAuthorized) {
      this._setAuthListener()
    }
  }

  _setSubMenuListener() {
    const subMenuItems = this.parentDom.querySelectorAll('.js-main-menu-item-sub-menu')
    subMenuItems.forEach(this._addSubMenuItemListener)
  }

  _setBurgerListener() {
    const burgerBtn = this.parentDom.querySelector('.js-main-menu-burger-btn')
    burgerBtn.addEventListener('click', this._handleBurgerBtnClick)
  }

  _handleBurgerBtnClick = () => {
    this._toggleBurgerBtnClass()

    if (this.isAuthorized) {
      this._toggleMainMenuClass()
      return
    }

    this._toggleAuthBtnClass()
    const authList = this.parentDom.parentNode.querySelector('.js-auth-list')
    const isAuthListActive = authList.classList.contains('page-header__auth-list_active')

    if (isAuthListActive) {
      this._toggleAuthListClass()
    } else {
      this._toggleMainMenuClass()
    }
  }

  _setAuthListener() {
    const authBtn = this.parentDom.parentNode.querySelector('.js-profile-btn')
    authBtn.addEventListener('click', this._handleAuthBtnClick)
  }

  _handleAuthBtnClick = () => {
    this._toggleBurgerBtnClass()
    this._toggleAuthBtnClass()
    this._toggleAuthListClass()
  }

  _addSubMenuItemListener = subMenuItem => {
    const subMenuLink = subMenuItem.firstChild
    const subMenu = subMenuLink.nextSibling
    subMenuItem.addEventListener('click', () => this._toggleSubMenuClass(subMenu))
  }

  _toggleSubMenuClass(subMenu) {
    subMenu.classList.toggle('main-menu__sub-menu_opened')

  }

  _removeSubMenuClass(subMenu) {
    if (subMenu.classList.contains('main-menu__sub-menu_opened')) {
      subMenu.classList.remove('main-menu__sub-menu_opened')
    }
  }

  _toggleBurgerBtnClass() {
    const burgerBtn = this.parentDom.querySelector('.js-main-menu-burger-btn')
    burgerBtn.classList.toggle('main-menu__burger-icon_active')
  }

  _toggleMainMenuClass() {
    this.parentDom.classList.toggle('main-menu_active')
  }

  _toggleAuthBtnClass() {
    const authBtn = this.parentDom.parentNode.querySelector('.js-profile-btn')
    authBtn.classList.toggle('page-header__auth-profile_hidden')
  }

  _toggleAuthListClass() {
    const authList = this.parentDom.parentNode.querySelector('.js-auth-list')
    authList.classList.toggle('page-header__auth-list_active')
  }
}

export default MainMenu
