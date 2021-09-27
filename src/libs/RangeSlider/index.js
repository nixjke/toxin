import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

class RangeSlider {
  static init(domElements) {
    const {root} = domElements;
    const element = this._getElement(root);
    this._createSlider(element, domElements);
  }

  static _createSlider(item, domElements) {
    const {options, handle, connect, upperValue, lowValue} = domElements;
    const viewNodes = this._getViewNodes(upperValue, lowValue);
    noUiSlider.create(item, {
      start: this._getStartData(options),
      connect: true,
      format: wNumb({decimals: 0}),
      step: this._getStepData(options),
      range: this._getRangeData(options),
      cssClasses: {
        target: 'target',
        base: 'base',
        origin: 'origin',
        handle: `handle ${handle}`,
        handleLower: 'handle-lower',
        handleUpper: 'handle-upper',
        touchArea: 'touch-area',
        horizontal: 'horizontal',
        vertical: 'vertical',
        background: 'background',
        connect: `connect ${connect}`,
        connects: 'connects',
        ltr: 'ltr',
        rtl: 'rtl',
        textDirectionLtr: 'txt-dir-ltr',
        textDirectionRtl: 'txt-dir-rtl',
        draggable: 'draggable',
        drag: 'state-drag',
        tap: 'state-tap',
        active: 'active',
        tooltip: 'tooltip',
        pips: 'pips',
        pipsHorizontal: 'pips-horizontal',
        pipsVertical: 'pips-vertical',
        marker: 'marker',
        markerHorizontal: 'marker-horizontal',
        markerVertical: 'marker-vertical',
        markerNormal: 'marker-normal',
        markerLarge: 'marker-large',
        markerSub: 'marker-sub',
        value: 'value',
        valueHorizontal: 'value-horizontal',
        valueVertical: 'value-vertical',
        valueNormal: 'value-normal',
        valueLarge: 'value-large',
        valueSub: 'value-sub',
      },
    });

    item.noUiSlider.on('update', function(values, handle) {
      let viewPrice = values[handle].replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
      viewPrice += '₽';
      viewNodes[handle].textContent = viewPrice;
    });
  }

  static _getViewNodes(upperValue, lowValue) {
    const lowerViewPrice = document.querySelector(`.${lowValue}`);
    const upperViewPrice = document.querySelector(`.${upperValue}`);
    return [lowerViewPrice, upperViewPrice];
  }

  static _getElement(root) {
    return document.querySelector(`.${root}`);
  }

  static _getStartData(options) {
    const rangeSliderOptions = document.querySelector(`.${options}`);
    const startData = rangeSliderOptions.getAttribute('data-start');
    return startData.split(',').map(item => parseInt(item));
  }

  static _getStepData(options) {
    const rangeSliderOptions = document.querySelector(`.${options}`);
    const stepData = rangeSliderOptions.getAttribute('data-step');
    return parseInt(stepData);
  }

  static _getRangeData(options) {
    const rangeSliderOptions = document.querySelector(`.${options}`);
    const min = parseInt(rangeSliderOptions.getAttribute('data-range-min'));
    const max = parseInt(rangeSliderOptions.getAttribute('data-range-max'));
    return {min, max};
  }
}

export default RangeSlider;