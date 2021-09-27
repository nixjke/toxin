import Glide from '@glidejs/glide'

class Carousel {
  static init({ hotelCard, activeBullet }) {
    const elements = this._getElements(hotelCard)
    elements.forEach(item => this._createSlider(item, activeBullet))
  }

  static _createSlider(item, activeBullet) {
    new Glide(item, {
      type: 'carousel',
      classes: { activeNav: activeBullet },
    }).mount()
  }

  static _getElements(hotelCard) {
    return document.querySelectorAll(`.${hotelCard}`)
  }
}

export default Carousel
