class MainMenu {
  constructor(parentDom) {
    this.parentDom = parentDom
  }

  init() {
    this.subMenuAddListener()
  }

  subMenuAddListener() {
    let burgerIcon = this.parentDom
    let subMenu = this.parentDom.querySelector('.js-sub-menu')
    burgerIcon.addEventListener('click', () => {
      subMenu.classList.toggle('sub-menu-active')
    })
  }
}

export default MainMenu
