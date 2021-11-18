class MainMenu {
  constructor(parentDom) {
    this.parentDom = parentDom
  }

  init() {
    this.subMenuAddListener()
    this._setSubMenuListener()
  }

  subMenuAddListener() {
    let burgerIcon = this.parentDom
    let subMenu = this.parentDom.querySelector('.js-sub-menu')
    burgerIcon.addEventListener('click', () => {
      subMenu.classList.toggle('sub-menu-active')
    })
  }

  _setSubMenuListener() {
    const subMenuItems = this.parentDom.querySelectorAll('.js-main-menu-item-sub-menu')
    subMenuItems.forEach(this._addSubMenuItemListener)
  }

  _addSubMenuItemListener = subMenuItem => {
    const subMenuLink = subMenuItem.firstChild
    const subMenu = subMenuLink.nextSibling
    subMenuItem.addEventListener('click', () => this._toggleSubMenuClass(subMenu))
  }

  _toggleSubMenuClass(subMenu) {
    subMenu.classList.toggle('main-menu__sub-menu_opened')
  }
}

export default MainMenu
