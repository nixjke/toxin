import RangeSlider from '../../libs/RangeSlider'

const domElements = {
  root: 'js-range-slider',
  options: 'js-range-slider-options',
  lowValue: 'js-range-slider-lower-value',
  upperValue: 'js-range-slider-upper-value',
  handle: 'range-slider__handle',
  connect: 'range-slider__connect',
}

RangeSlider.init(domElements)
