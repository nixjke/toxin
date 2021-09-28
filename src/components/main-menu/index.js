import MainMenu from './MainMenu'

const menus = document.querySelectorAll('.js-main-menu')

menus.forEach(parentDom => {
  const mainMenu = new MainMenu(parentDom)
  mainMenu.init()
})
